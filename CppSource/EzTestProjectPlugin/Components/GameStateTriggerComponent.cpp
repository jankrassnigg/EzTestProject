#include <Core/GameApplication/GameApplicationBase.h>
#include <Core/GameState/GameStateBase.h>
#include <Core/Messages/TriggerMessage.h>
#include <Core/World/GameObject.h>
#include <Core/World/World.h>
#include <EzTestProjectPlugin/Components/GameStateTriggerComponent.h>

// clang-format off
EZ_BEGIN_COMPONENT_TYPE(GameStateTriggerComponent, 1 /* version */, ezComponentMode::Static)
{
  //EZ_BEGIN_PROPERTIES
  //{
  //}
  //EZ_END_PROPERTIES;

  EZ_BEGIN_ATTRIBUTES
  {
    new ezCategoryAttribute("EzTestProject"), // Component menu group
  }
  EZ_END_ATTRIBUTES;
}
EZ_END_COMPONENT_TYPE
// clang-format on

GameStateTriggerComponent::GameStateTriggerComponent() = default;
GameStateTriggerComponent::~GameStateTriggerComponent() = default;

bool GameStateTriggerComponent::HandlesEventMessage(const ezEventMessage& msg) const
{
  if (const ezMsgTriggerTriggered* pMsg = ezDynamicCast<const ezMsgTriggerTriggered*>(&msg))
  {
    return true;
  }

  return false;
}
bool GameStateTriggerComponent::OnUnhandledMessage(ezMessage& msg, bool bWasPostedMsg)
{
  if (const ezMsgTriggerTriggered* pMsg = ezDynamicCast<const ezMsgTriggerTriggered*>(&msg))
  {
    ezGameStateBase* pGameState = ezGameApplicationBase::GetGameApplicationBaseInstance()->GetActiveGameStateLinkedToWorld(GetOwner()->GetWorld());

    pGameState->HandleForwardedMessage(msg);
    return true;
  }

  return false;
}

bool GameStateTriggerComponent::OnUnhandledMessage(ezMessage& msg, bool bWasPostedMsg) const
{
  if (const ezMsgTriggerTriggered* pMsg = ezDynamicCast<const ezMsgTriggerTriggered*>(&msg))
  {
    ezGameStateBase* pGameState = ezGameApplicationBase::GetGameApplicationBaseInstance()->GetActiveGameStateLinkedToWorld(GetOwner()->GetWorld());

    pGameState->HandleForwardedMessage(msg);
    return true;
  }

  return false;
}

void GameStateTriggerComponent::Initialize()
{
  SUPER::Initialize();

  EnableUnhandledMessageHandler(true);
}
