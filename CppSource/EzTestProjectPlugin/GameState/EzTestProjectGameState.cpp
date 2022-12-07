#include <EzTestProjectPlugin/EzTestProjectPluginPCH.h>

#include <Core/Input/InputManager.h>
#include <Core/Messages/TriggerMessage.h>
#include <EzTestProjectPlugin/GameState/EzTestProjectGameState.h>
#include <Foundation/Configuration/CVar.h>
#include <Foundation/Logging/Log.h>
#include <GameEngine/Animation/SliderComponent.h>
#include <RendererCore/Debug/DebugRenderer.h>

EZ_BEGIN_DYNAMIC_REFLECTED_TYPE(EzTestProjectGameState, 1, ezRTTIDefaultAllocator<EzTestProjectGameState>)
  {
    EZ_BEGIN_MESSAGEHANDLERS
    {
      EZ_MESSAGE_HANDLER(ezMsgTriggerTriggered, OnMsgTriggerTriggered),
    } EZ_END_MESSAGEHANDLERS;
  }
EZ_END_DYNAMIC_REFLECTED_TYPE;

EzTestProjectGameState::EzTestProjectGameState() = default;
EzTestProjectGameState::~EzTestProjectGameState() = default;

void EzTestProjectGameState::ProcessInput()
{
  SUPER::ProcessInput();

  if (IsLoadingScene())
  {
    const ezInt32 iPerc = (ezInt32)(m_pSceneToLoad->GetLoadingProgress() * 100.0f);
    ezDebugRenderer::DrawInfoText(m_pMainWorld, ezDebugRenderer::ScreenPlacement::TopCenter, "Loading", ezFmt("Loading Level: {}%%", iPerc));
  }
  else if (!m_sSwitchLevelTo.IsEmpty())
  {
    StartSceneLoading(m_sSwitchLevelTo, m_sSwitchLevelToCollection).AssertSuccess();

    m_sSwitchLevelTo.Clear();
    m_sSwitchLevelToCollection.Clear();
  }
}

void EzTestProjectGameState::OnMsgTriggerTriggered(ezMsgTriggerTriggered& msg)
{
  if (msg.m_sMessage.GetString().StartsWith("ChangeLevel_"))
  {
    if (msg.m_TriggerState != ezTriggerState::Activated)
      return;

    if (msg.m_sMessage.GetString() == "ChangeLevel_Room1")
    {
      m_sSwitchLevelTo = "{ 4413ae89-ce73-92dc-358c-ba3152a1427c }";
      m_sSwitchLevelToCollection = "{ f0261110-f1f9-4730-a36c-1b9470c9020e }";
      return;
    }
    if (msg.m_sMessage.GetString() == "ChangeLevel_Room2")
    {
      m_sSwitchLevelTo = "{ 54297160-efe8-4a95-88cb-4d23130a6121 }";
      m_sSwitchLevelToCollection = "{ 3d949c7e-c45f-478b-ade2-c99a261a6a48 }";
      return;
    }
    if (msg.m_sMessage.GetString() == "ChangeLevel_Room3")
    {
      m_sSwitchLevelTo = "{ 0c279c89-a42c-4fa5-935f-bd579495e60f }";
      m_sSwitchLevelToCollection = "{ cc9c120c-5d42-442e-9aa2-00f97d313031 }";
      return;
    }
    if (msg.m_sMessage.GetString() == "ChangeLevel_Hub")
    {
      m_sSwitchLevelTo = "{ 1ff66ef3-fc6d-99f6-4c0f-887e399f20b6 }";
      m_sSwitchLevelToCollection = "{ 2e3c8c40-ef0c-4b13-a0b7-4ca55119f86e }";
      return;
    }
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
