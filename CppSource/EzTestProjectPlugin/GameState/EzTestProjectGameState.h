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

  virtual ezGameStatePriority DeterminePriority(ezWorld* pWorld) const override { return ezGameStatePriority::Default; }

  virtual void ProcessInput() override;

  void OnMsgTriggerTriggered(ezMsgTriggerTriggered& msg);

private:
  ezString m_sSwitchLevelTo;
  ezString m_sSwitchLevelToCollection;

  bool m_bHasItem[3] = {false, false, false};
};
