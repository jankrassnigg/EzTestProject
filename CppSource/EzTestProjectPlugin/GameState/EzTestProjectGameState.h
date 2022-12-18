#pragma once

#include <Core/Input/Declarations.h>
#include <Core/Messages/CommonMessages.h>
#include <Core/Utils/Blackboard.h>
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

  virtual ezGameStatePriority DeterminePriority(ezWorld* pWorld) const override { return ezGameStatePriority::Default; }

  virtual void ProcessInput() override;

  void OnMsgTriggerTriggered(ezMsgTriggerTriggered& msg);
  void OnMsgGenericEvent(ezMsgGenericEvent& msg);

private:
  virtual ezResult SpawnPlayer(const ezTransform* pStartPosition) override;

  ezString m_sSwitchLevelTo;
  ezString m_sSwitchLevelToCollection;
  ezString m_sSwitchLevelToSpawnPoint;
  ezTransform m_RelativeSpawnPosition;
  ezGameObjectHandle m_hSpawnedPlayer;
  ezSharedPtr<ezBlackboard> m_pGlobalStateBlackboard;

  bool m_bSwitchLevelImmediate = false;
  bool m_bHasItem[3] = {false, false, false};
};
