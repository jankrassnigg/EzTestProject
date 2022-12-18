#include <EzTestProjectPlugin/EzTestProjectPluginPCH.h>

#include <Core/Input/InputManager.h>
#include <Core/Messages/TriggerMessage.h>
#include <EzTestProjectPlugin/GameState/EzTestProjectGameState.h>
#include <Foundation/Configuration/CVar.h>
#include <Foundation/Logging/Log.h>
#include <GameEngine/Animation/SliderComponent.h>
#include <GameEngine/Gameplay/PlayerStartPointComponent.h>
#include <RendererCore/Debug/DebugRenderer.h>

EZ_BEGIN_DYNAMIC_REFLECTED_TYPE(EzTestProjectGameState, 1, ezRTTIDefaultAllocator<EzTestProjectGameState>)
  {
    EZ_BEGIN_MESSAGEHANDLERS
    {
      EZ_MESSAGE_HANDLER(ezMsgTriggerTriggered, OnMsgTriggerTriggered),
    } EZ_END_MESSAGEHANDLERS;
  }
EZ_END_DYNAMIC_REFLECTED_TYPE;

EzTestProjectGameState::EzTestProjectGameState()
{
  // TODO: put this into default code
  // EnableSceneSelectionMenu(false);
}

EzTestProjectGameState::~EzTestProjectGameState() = default;

void EzTestProjectGameState::ProcessInput()
{
  SUPER::ProcessInput();

  if (m_bSwitchLevelImmediate)
  {
    SwitchToLoadingScreen();
    m_bSwitchLevelImmediate = false;
  }

  if (!m_sSwitchLevelTo.IsEmpty())
  {
    StartSceneLoading(m_sSwitchLevelTo, m_sSwitchLevelToCollection).AssertSuccess();

    m_sSwitchLevelTo.Clear();
    m_sSwitchLevelToCollection.Clear();
  }

  if (IsLoadingScene())
  {
    const ezInt32 iPerc = (ezInt32)(m_pSceneToLoad->GetLoadingProgress() * 100.0f);
    ezDebugRenderer::DrawInfoText(m_pMainWorld, ezDebugRenderer::ScreenPlacement::TopCenter, "Loading", ezFmt("Loading Level: {}%%", iPerc));

    if (m_pSceneToLoad->GetLoadingState() == ezSceneLoadUtility::LoadingState::FinishedSuccessfully && IsInLoadingScreen())
    {
      SwitchToLoadedScene();
    }
  }
}

void EzTestProjectGameState::OnMsgTriggerTriggered(ezMsgTriggerTriggered& msg)
{
  ezStringBuilder triggerMsg = msg.m_sMessage.GetString();

  if (triggerMsg.StartsWith("ChangeLevel_") || triggerMsg.StartsWith("PreloadLevel_"))
  {
    if (msg.m_TriggerState != ezTriggerState::Activated)
      return;

    ezLog::Info(triggerMsg);

    triggerMsg.TrimWordStart("PreloadLevel_");

    m_bSwitchLevelImmediate = triggerMsg.TrimWordStart("ChangeLevel_");
    m_sSwitchLevelToSpawnPoint = triggerMsg;

    if (triggerMsg.StartsWith("Room1"))
    {
      m_sSwitchLevelTo = "{ 4413ae89-ce73-92dc-358c-ba3152a1427c }";
      m_sSwitchLevelToCollection = "{ f0261110-f1f9-4730-a36c-1b9470c9020e }";
    }
    else if (triggerMsg.StartsWith("Room2"))
    {
      m_sSwitchLevelTo = "{ 54297160-efe8-4a95-88cb-4d23130a6121 }";
      m_sSwitchLevelToCollection = "{ 3d949c7e-c45f-478b-ade2-c99a261a6a48 }";
    }
    else if (triggerMsg.StartsWith("Room3"))
    {
      m_sSwitchLevelTo = "{ 0c279c89-a42c-4fa5-935f-bd579495e60f }";
      m_sSwitchLevelToCollection = "{ cc9c120c-5d42-442e-9aa2-00f97d313031 }";
    }
    else if (triggerMsg.StartsWith("Hub"))
    {
      m_sSwitchLevelTo = "{ 1ff66ef3-fc6d-99f6-4c0f-887e399f20b6 }";
      m_sSwitchLevelToCollection = "{ 2e3c8c40-ef0c-4b13-a0b7-4ca55119f86e }";
    }

    if (m_sSwitchLevelTo == GetActiveSceneName())
    {
      ezLog::Info("Active scene: {}", GetActiveSceneName());
      ezLog::Info("Loading scene: {}", GetLoadingSceneName());
      ezLog::Info("Ignoring scene load request '{}' (already there).", m_sSwitchLevelTo);

      m_bSwitchLevelImmediate = false;
      m_sSwitchLevelToSpawnPoint.Clear();
      m_sSwitchLevelTo.Clear();
      m_sSwitchLevelToCollection.Clear();
    }

    ezGameObject* pPlayerNode;
    ezGameObject* pReferenceNode;
    if (m_pMainWorld->TryGetObject(m_hSpawnedPlayer, pPlayerNode) && m_pMainWorld->TryGetObjectWithGlobalKey(ezTempHashedString(m_sSwitchLevelToSpawnPoint), pReferenceNode))
    {
      m_RelativeSpawnPosition.SetLocalTransform(pReferenceNode->GetGlobalTransform(), pPlayerNode->GetGlobalTransform());
    }
    else
    {
      m_RelativeSpawnPosition.SetIdentity();
    }

    return;
  }

  if (msg.m_sMessage.GetString() == "Pickup_Item1")
  {
    m_bHasItem[0] = true;
    return;
  }
  if (msg.m_sMessage.GetString() == "Pickup_Item2")
  {
    m_bHasItem[1] = true;
    return;
  }
  if (msg.m_sMessage.GetString() == "Pickup_Item3")
  {
    m_bHasItem[2] = true;
    return;
  }

  if (msg.m_sMessage.GetString() == "Hub_Door1")
  {
    ezGameObject* pObj;
    if (m_pMainWorld->TryGetObjectWithGlobalKey("Hub_Door1", pObj))
    {
      ezSliderComponent* pSlider;
      if (pObj->TryGetComponentOfBaseType(pSlider))
      {
        if (msg.m_TriggerState == ezTriggerState::Activated)
        {
          pSlider->SetDirectionForwards(true);
          pSlider->SetRunning(true);
        }
        else if (msg.m_TriggerState == ezTriggerState::Deactivated)
        {
          pSlider->SetDirectionForwards(false);
          pSlider->SetRunning(true);
        }
      }
    }

    return;
  }
}

ezResult EzTestProjectGameState::SpawnPlayer(const ezTransform* pStartPosition)
{
  if (m_pMainWorld == nullptr)
    return EZ_FAILURE;

  EZ_LOCK(m_pMainWorld->GetWriteMarker());

  ezGameObject* pStartNode = nullptr;
  ezTransform customTransform;
  if (m_pMainWorld->TryGetObjectWithGlobalKey(ezTempHashedString(m_sSwitchLevelToSpawnPoint), pStartNode))
  {
    customTransform = pStartNode->GetGlobalTransform() * m_RelativeSpawnPosition;
    pStartPosition = &customTransform;

    ezLog::Info("Found target spawn position '{}'", m_sSwitchLevelToSpawnPoint);
  }
  else
  {
    ezLog::Warning("Did not find target spawn position '{}'", m_sSwitchLevelToSpawnPoint);
  }

  ezPlayerStartPointComponentManager* pMan = m_pMainWorld->GetComponentManager<ezPlayerStartPointComponentManager>();
  if (pMan == nullptr)
    return EZ_FAILURE;

  for (auto it = pMan->GetComponents(); it.IsValid(); ++it)
  {
    if (it->IsActive() && it->GetPlayerPrefab().IsValid())
    {
      ezResourceLock<ezPrefabResource> pPrefab(it->GetPlayerPrefab(), ezResourceAcquireMode::BlockTillLoaded);

      if (pPrefab.GetAcquireResult() == ezResourceAcquireResult::Final)
      {
        const ezUInt16 uiTeamID = it->GetOwner()->GetTeamID();
        ezTransform startPos = it->GetOwner()->GetGlobalTransform();

        if (pStartPosition)
        {
          startPos = *pStartPosition;
          startPos.m_vScale.Set(1.0f);
          // startPos.m_vPosition.z += 1.0f; // do not spawn player prefabs on the ground, they may not have their origin there
        }

        ezDynamicArray<ezGameObject*> spawnedRoots;

        ezPrefabInstantiationOptions options;
        options.m_pOverrideTeamID = &uiTeamID;
        options.m_pCreatedRootObjectsOut = &spawnedRoots;

        pPrefab->InstantiatePrefab(*m_pMainWorld, startPos, options, &(it->m_Parameters));

        if (!spawnedRoots.IsEmpty())
          m_hSpawnedPlayer = spawnedRoots[0]->GetHandle();
        else
          m_hSpawnedPlayer.Invalidate();

        return EZ_SUCCESS;
      }
    }
  }

  return EZ_FAILURE;
}
