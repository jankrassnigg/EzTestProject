#pragma once

#include <Core/World/Component.h>
#include <Core/World/ComponentManager.h>
#include <Core/World/EventMessageHandlerComponent.h>
#include <Core/World/World.h>

using TriggerModifierComponentManager = ezComponentManager<class TriggerModifierComponent, ezBlockStorageType::Compact>;

class TriggerModifierComponent : public ezEventMessageHandlerComponent
{
  EZ_DECLARE_COMPONENT_TYPE(TriggerModifierComponent, ezEventMessageHandlerComponent, TriggerModifierComponentManager);

  //////////////////////////////////////////////////////////////////////////
  // ezComponent

public:
  virtual void SerializeComponent(ezWorldWriter& stream) const override;
  virtual void DeserializeComponent(ezWorldReader& stream) override;

  virtual bool HandlesEventMessage(const ezEventMessage& msg) const override;

  //////////////////////////////////////////////////////////////////////////
  // TriggerModifierComponent

public:
  TriggerModifierComponent();
  ~TriggerModifierComponent();

protected:
  virtual void Initialize() override;

  virtual bool OnUnhandledMessage(ezMessage& msg, bool bWasPostedMsg) override;
  virtual bool OnUnhandledMessage(ezMessage& msg, bool bWasPostedMsg) const override;

  void OnMsgTriggerTriggered(const ezMsgTriggerTriggered& msg) const;
  void OnMsgComponentInternalTrigger(ezMsgComponentInternalTrigger& msg);

  mutable ezAtomicInteger32 m_iElementsInside = 0;
  mutable ezAtomicBool m_bIsActivated = false;

  ezTime m_ActivationDelay;
  ezTime m_DeactivationDelay;
  mutable ezHashedString m_sMessage;

  ezEventMessageSender<ezMsgTriggerTriggered> m_TriggerEventSender; // [ event ]
};
