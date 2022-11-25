#pragma once

#include <Core/World/Component.h>
#include <Core/World/ComponentManager.h>
#include <Core/World/EventMessageHandlerComponent.h>
#include <Core/World/World.h>

using GameStateTriggerComponentManager = ezComponentManager<class GameStateTriggerComponent, ezBlockStorageType::Compact>;

class GameStateTriggerComponent : public ezEventMessageHandlerComponent
{
  EZ_DECLARE_COMPONENT_TYPE(GameStateTriggerComponent, ezEventMessageHandlerComponent, GameStateTriggerComponentManager);

  //////////////////////////////////////////////////////////////////////////
  // ezComponent

public:
  // virtual void SerializeComponent(ezWorldWriter& stream) const override;
  // virtual void DeserializeComponent(ezWorldReader& stream) override;


  virtual bool HandlesEventMessage(const ezEventMessage& msg) const override;

  //////////////////////////////////////////////////////////////////////////
  // SampleRenderComponent

public:
  GameStateTriggerComponent();
  ~GameStateTriggerComponent();

protected:
  virtual bool OnUnhandledMessage(ezMessage& msg, bool bWasPostedMsg) override;
  virtual bool OnUnhandledMessage(ezMessage& msg, bool bWasPostedMsg) const override;

  virtual void Initialize() override;

};
