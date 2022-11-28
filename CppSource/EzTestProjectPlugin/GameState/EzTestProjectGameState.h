#pragma once

#include <Core/Input/Declarations.h>
#include <Core/World/Declarations.h>
#include <Core/World/World.h>
#include <EzTestProjectPlugin/EzTestProjectPluginDLL.h>
#include <Foundation/Types/UniquePtr.h>
#include <GameEngine/GameApplication/GameApplication.h>
#include <GameEngine/GameState/FallbackGameState.h>
#include <GameEngine/GameState/GameState.h>

class EzTestProjectGameState : public ezFallbackGameState
{
  EZ_ADD_DYNAMIC_REFLECTION(EzTestProjectGameState, ezFallbackGameState);

public:
  EzTestProjectGameState();
  ~EzTestProjectGameState();

  virtual ezGameStatePriority DeterminePriority(ezWorld* pWorld) const override;

  virtual void ProcessInput() override;

  void OnMsgTriggerTriggered(ezMsgTriggerTriggered& msg);

protected:
  virtual void ConfigureMainWindowInputDevices(ezWindow* pWindow) override;
  virtual void ConfigureInputActions() override;
  virtual void ConfigureMainCamera() override;

private:
  virtual void OnActivation(ezWorld* pWorld, const ezTransform* pStartPosition) override;
  virtual void OnDeactivation() override;
  virtual void BeforeWorldUpdate() override;
  virtual void AfterWorldUpdate() override;

  ezResult LoadObjectGraph(const char* szFile, ezWorld& world);

  ezString m_sSwitchLevelTo;
  ezTime m_LevelSwitched;

  bool m_bHasItem[3] = {false, false, false};

  ezUniquePtr<ezWorld> m_pElevatorWorld;
  ezUniquePtr<ezWorld> m_pLoadingWorld;
  ezUniquePtr<ezWorld> m_pActiveWorld;
  ezUniquePtr<ezWorld> m_pPreviousWorld;
  ezCollectionResourceHandle m_hLoadingCollection;

  enum class LevelState
  {
    None,
    LoadingScreen,
    Active,
    Error,
  };

  LevelState m_LevelState = LevelState::None;
};
