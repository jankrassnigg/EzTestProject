#include <EzTestProjectPlugin/EzTestProjectPluginPCH.h>

#include <Core/Input/InputManager.h>
#include <Core/Messages/TriggerMessage.h>
#include <Core/System/Window.h>
#include <Core/World/World.h>
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
  }
}

void EzTestProjectGameState::ConfigureMainCamera()
{
  SUPER::ConfigureMainCamera();

  // do custom camera setup here
}
