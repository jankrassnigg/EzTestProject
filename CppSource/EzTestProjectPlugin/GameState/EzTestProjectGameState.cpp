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
#include <RendererCore/Debug/DebugRenderer.h>

EZ_BEGIN_DYNAMIC_REFLECTED_TYPE(EzTestProjectGameState, 1, ezRTTIDefaultAllocator<EzTestProjectGameState>)
EZ_END_DYNAMIC_REFLECTED_TYPE;

EzTestProjectGameState::EzTestProjectGameState() = default;
EzTestProjectGameState::~EzTestProjectGameState() = default;

void EzTestProjectGameState::OnActivation(ezWorld* pWorld, const ezTransform* pStartPosition)
{
  EZ_LOG_BLOCK("GameState::Activate");

  SUPER::OnActivation(pWorld, pStartPosition);
}

void EzTestProjectGameState::OnDeactivation()
{
  EZ_LOG_BLOCK("GameState::Deactivate");

  SUPER::OnDeactivation();
}

void EzTestProjectGameState::AfterWorldUpdate()
{
  SUPER::AfterWorldUpdate();
}

void EzTestProjectGameState::BeforeWorldUpdate()
{
  if (!m_sSwitchLevelTo.IsEmpty())
  {
    if (LoadObjectGraph(m_sSwitchLevelTo, *m_pMainWorld).Succeeded())
    {
      SpawnPlayer(nullptr).IgnoreResult();
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

void EzTestProjectGameState::HandleForwardedMessage(const ezMessage& msg)
{
  if (const ezMsgTriggerTriggered* pMsg = ezDynamicCast<const ezMsgTriggerTriggered*>(&msg))
  {
    ezLog::Info("GameState received: {}", pMsg->m_sMessage);

    if (ezTime::Now() - m_LevelSwitched < ezTime::Seconds(3))
    {
      ezLog::Info("Too soon");
      return;
    }

    if (pMsg->m_sMessage.GetString() == "ChangeLevel_Room1")
    {
      m_sSwitchLevelTo = "{ 4413ae89-ce73-92dc-358c-ba3152a1427c }";
    }
    if (pMsg->m_sMessage.GetString() == "ChangeLevel_Room2")
    {
      m_sSwitchLevelTo = "{ 54297160-efe8-4a95-88cb-4d23130a6121 }";
    }
    if (pMsg->m_sMessage.GetString() == "ChangeLevel_Room3")
    {
      m_sSwitchLevelTo = "{ 0c279c89-a42c-4fa5-935f-bd579495e60f }";
    }
    if (pMsg->m_sMessage.GetString() == "ChangeLevel_Hub")
    {
      m_sSwitchLevelTo = "{ 1ff66ef3-fc6d-99f6-4c0f-887e399f20b6 }";
    }
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
