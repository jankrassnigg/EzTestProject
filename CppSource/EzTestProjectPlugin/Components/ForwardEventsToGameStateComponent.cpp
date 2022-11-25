#include <Core/GameApplication/GameApplicationBase.h>
#include <Core/GameState/GameStateBase.h>
#include <EzTestProjectPlugin/Components/ForwardEventsToGameStateComponent.h>

// clang-format off
EZ_BEGIN_COMPONENT_TYPE(ezForwardEventsToGameStateComponent, 1 /* version */, ezComponentMode::Static)
{
  EZ_BEGIN_ATTRIBUTES
  {
    new ezCategoryAttribute("EzTestProject"),
  }
  EZ_END_ATTRIBUTES;
}
EZ_END_COMPONENT_TYPE
// clang-format on

ezForwardEventsToGameStateComponent::ezForwardEventsToGameStateComponent() = default;
ezForwardEventsToGameStateComponent::~ezForwardEventsToGameStateComponent() = default;

bool ezForwardEventsToGameStateComponent::HandlesEventMessage(const ezEventMessage& msg) const
{
  if (ezGameStateBase* pGameState = ezGameApplicationBase::GetGameApplicationBaseInstance()->GetActiveGameStateLinkedToWorld(GetOwner()->GetWorld()))
  {
    return pGameState->GetDynamicRTTI()->CanHandleMessage(msg.GetId());
  }

  return false;
}

bool ezForwardEventsToGameStateComponent::OnUnhandledMessage(ezMessage& msg, bool bWasPostedMsg)
{
  if (ezGameStateBase* pGameState = ezGameApplicationBase::GetGameApplicationBaseInstance()->GetActiveGameStateLinkedToWorld(GetOwner()->GetWorld()))
  {
    return pGameState->GetDynamicRTTI()->DispatchMessage(pGameState, msg);
  }

  return false;
}

bool ezForwardEventsToGameStateComponent::OnUnhandledMessage(ezMessage& msg, bool bWasPostedMsg) const
{
  if (const ezGameStateBase* pGameState = ezGameApplicationBase::GetGameApplicationBaseInstance()->GetActiveGameStateLinkedToWorld(GetOwner()->GetWorld()))
  {
    return pGameState->GetDynamicRTTI()->DispatchMessage(pGameState, msg);
  }

  return false;
}

void ezForwardEventsToGameStateComponent::Initialize()
{
  SUPER::Initialize();

  EnableUnhandledMessageHandler(true);
}
