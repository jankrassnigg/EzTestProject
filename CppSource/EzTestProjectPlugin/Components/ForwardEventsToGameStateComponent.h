#pragma once

#include <Core/World/Component.h>
#include <Core/World/ComponentManager.h>
#include <Core/World/EventMessageHandlerComponent.h>
#include <Core/World/World.h>

using GameStateTriggerComponentManager = ezComponentManager<class ezForwardEventsToGameStateComponent, ezBlockStorageType::Compact>;

class ezForwardEventsToGameStateComponent : public ezEventMessageHandlerComponent
{
  EZ_DECLARE_COMPONENT_TYPE(ezForwardEventsToGameStateComponent, ezEventMessageHandlerComponent, GameStateTriggerComponentManager);

  //////////////////////////////////////////////////////////////////////////
  // ezComponent

public:
  //////////////////////////////////////////////////////////////////////////
  // ezForwardEventsToGameStateComponent

public:
  ezForwardEventsToGameStateComponent();
  ~ezForwardEventsToGameStateComponent();

protected:
  virtual bool HandlesEventMessage(const ezEventMessage& msg) const override;
  virtual bool OnUnhandledMessage(ezMessage& msg, bool bWasPostedMsg) override;
  virtual bool OnUnhandledMessage(ezMessage& msg, bool bWasPostedMsg) const override;

  virtual void Initialize() override;
};
