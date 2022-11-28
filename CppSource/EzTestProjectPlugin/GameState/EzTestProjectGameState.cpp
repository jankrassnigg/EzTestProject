#include <EzTestProjectPlugin/EzTestProjectPluginPCH.h>

#include <Core/Assets/AssetFileHeader.h>
#include <Core/Input/InputManager.h>
#include <Core/Messages/TriggerMessage.h>
#include <Core/System/Window.h>
#include <Core/World/World.h>
#include <Core/World/WorldDesc.h>
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

void EzTestProjectGameState::OnActivation(ezWorld* pWorld, const ezTransform* pStartPosition)
{
  EZ_LOG_BLOCK("GameState::Activate");

  SUPER::OnActivation(pWorld, pStartPosition);

  ezWorldDesc desc("Elevator");
  m_pElevatorWorld = EZ_DEFAULT_NEW(ezWorld, desc);
}

void EzTestProjectGameState::OnDeactivation()
{
  EZ_LOG_BLOCK("GameState::Deactivate");

  SUPER::OnDeactivation();
}

void EzTestProjectGameState::AfterWorldUpdate()
{
  SUPER::AfterWorldUpdate();

  m_pPreviousWorld.Clear();
}

void EzTestProjectGameState::BeforeWorldUpdate()
{
  if (m_LevelState == LevelState::None)
  {
    m_LevelState = LevelState::Active;
  }

  if (m_LevelState == LevelState::LoadingScreen)
  {
    const ezTime tRem = ezTime::Now() - m_LevelSwitched;
    ezInt32 iPerc = (ezInt32)(ezMath::Min(1.0f, (tRem.AsFloatInSeconds() / 1.0f)) * 100.0f);

    if (m_hLoadingCollection.IsValid())
    {
      ezResourceLock<ezCollectionResource> pCollection(m_hLoadingCollection, ezResourceAcquireMode::BlockTillLoaded_NeverFail);
      if (pCollection.GetAcquireResult() == ezResourceAcquireResult::Final)
      {
        pCollection->PreloadResources();

        float progress = 0.0f;
        pCollection->IsLoadingFinished(&progress);

        iPerc = (ezInt32)(progress * 100.0f);
      }
    }

    ezDebugRenderer::DrawInfoText(m_pMainWorld, ezDebugRenderer::ScreenPlacement::TopCenter, "Loading", ezFmt("Loading Level: {}%%", iPerc));

    if (iPerc == 100)
    {
      m_LevelState = LevelState::Active;
      m_pActiveWorld = std::move(m_pLoadingWorld);

      ChangeMainWorld(m_pActiveWorld.Borrow());

      SpawnPlayer(nullptr).IgnoreResult();
    }
  }

  if (m_LevelState == LevelState::Active && !m_sSwitchLevelTo.IsEmpty())
  {
    ezLog::Info("Switching to level {}", m_sSwitchLevelTo);

    ChangeMainWorld(m_pElevatorWorld.Borrow());
    m_LevelState = LevelState::LoadingScreen;

    m_pPreviousWorld = std::move(m_pActiveWorld);

    ezWorldDesc desc(m_sSwitchLevelTo);
    m_pLoadingWorld = EZ_DEFAULT_NEW(ezWorld, desc);

    if (LoadObjectGraph(m_sSwitchLevelTo, *m_pLoadingWorld).Succeeded())
    {
      ezLog::Success("Loading scene succeeded.");
    }
    else
    {
      m_LevelState = LevelState::Error;
      ezLog::Error("Loading scene failed.");
      m_pLoadingWorld.Clear();
    }

    m_sSwitchLevelTo.Clear();
    m_LevelSwitched = ezTime::Now();
  }

  EZ_LOCK(m_pMainWorld->GetWriteMarker());
}

ezGameStatePriority EzTestProjectGameState::DeterminePriority(ezWorld* pWorld) const
{
  return ezGameStatePriority::Default;
}

void EzTestProjectGameState::ConfigureMainWindowInputDevices(ezWindow* pWindow)
{
  SUPER::ConfigureMainWindowInputDevices(pWindow);

  // setup devices here
}

static void RegisterInputAction(const char* szInputSet, const char* szInputAction, const char* szKey1, const char* szKey2 = nullptr, const char* szKey3 = nullptr)
{
  ezInputActionConfig cfg;
  cfg.m_bApplyTimeScaling = true;
  cfg.m_sInputSlotTrigger[0] = szKey1;
  cfg.m_sInputSlotTrigger[1] = szKey2;
  cfg.m_sInputSlotTrigger[2] = szKey3;

  ezInputManager::SetInputActionConfig(szInputSet, szInputAction, cfg, true);
}

void EzTestProjectGameState::ConfigureInputActions()
{
  SUPER::ConfigureInputActions();
}

void EzTestProjectGameState::ProcessInput()
{
  SUPER::ProcessInput();

  ezWorld* pWorld = m_pMainWorld;
}

void EzTestProjectGameState::OnMsgTriggerTriggered(ezMsgTriggerTriggered& msg)
{
  if (msg.m_sMessage.GetString().StartsWith("ChangeLevel_"))
  {
    if (msg.m_TriggerState != ezTriggerState::Activated)
      return;

    if (ezTime::Now() - m_LevelSwitched < ezTime::Seconds(1))
    {
      // prevent a crash bug :(
      ezLog::Info("Too soon");
      return;
    }

    if (msg.m_sMessage.GetString() == "ChangeLevel_Room1")
    {
      m_sSwitchLevelTo = "{ 4413ae89-ce73-92dc-358c-ba3152a1427c }";
      m_hLoadingCollection.Invalidate();
      return;
    }
    if (msg.m_sMessage.GetString() == "ChangeLevel_Room2")
    {
      m_sSwitchLevelTo = "{ 54297160-efe8-4a95-88cb-4d23130a6121 }";
      m_hLoadingCollection.Invalidate();
      return;
    }
    if (msg.m_sMessage.GetString() == "ChangeLevel_Room3")
    {
      m_sSwitchLevelTo = "{ 0c279c89-a42c-4fa5-935f-bd579495e60f }";
      m_hLoadingCollection.Invalidate();
      return;
    }
    if (msg.m_sMessage.GetString() == "ChangeLevel_Hub")
    {
      m_sSwitchLevelTo = "{ 1ff66ef3-fc6d-99f6-4c0f-887e399f20b6 }";
      m_hLoadingCollection = ezResourceManager::LoadResource<ezCollectionResource>("{ 2e3c8c40-ef0c-4b13-a0b7-4ca55119f86e }");
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

void EzTestProjectGameState::ConfigureMainCamera()
{
  SUPER::ConfigureMainCamera();

  // do custom camera setup here
}

ezResult EzTestProjectGameState::LoadObjectGraph(const char* szFile, ezWorld& world)
{
  EZ_LOG_BLOCK("LoadObjectGraph", szFile);

  EZ_LOCK(world.GetWriteMarker());

  // make sure the world is empty
  world.Clear();

  ezFileReader file;

  if (file.Open(szFile).Failed())
  {
    ezLog::Error("Failed to open the file.");
    return EZ_FAILURE;
  }

  // Read and skip the asset file header
  {
    ezAssetFileHeader header;
    header.Read(file).AssertSuccess();

    char szSceneTag[16];
    file.ReadBytes(szSceneTag, sizeof(char) * 16);

    if (!ezStringUtils::IsEqualN(szSceneTag, "[ezBinaryScene]", 16))
    {
      ezLog::Error("The given file isn't an object-graph file.");
      return EZ_FAILURE;
    }
  }

  ezWorldReader reader;
  if (reader.ReadWorldDescription(file).Failed())
  {
    ezLog::Error("Error reading world description.");
    return EZ_FAILURE;
  }

  reader.InstantiateWorld(world, nullptr);
  return EZ_SUCCESS;
}
