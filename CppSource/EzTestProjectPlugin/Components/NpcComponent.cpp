#include <EzTestProjectPlugin/EzTestProjectPluginPCH.h>

#include <Core/GameState/GameStateBase.h>
#include <Core/Messages/CommonMessages.h>
#include <EzTestProjectPlugin/Components/NpcComponent.h>
#include <EzTestProjectPlugin/GameState/EzTestProjectGameState.h>
#include <GameComponentsPlugin/Gameplay/HeadBoneComponent.h>
#include <GameEngine/GameApplication/GameApplication.h>
#include <GameEngine/Gameplay/BlackboardComponent.h>
#include <GameEngine/Gameplay/GrabbableItemComponent.h>
#include <GameEngine/Gameplay/InputComponent.h>
#include <GameEngine/Gameplay/SpawnComponent.h>
#include <GameEngine/Messages/DamageMessage.h>
#include <GameEngine/Physics/CharacterControllerComponent.h>
#include <JoltPlugin/Components/JoltRagdollComponent.h>
#include <JoltPlugin/Constraints/JoltGrabObjectComponent.h>
#include <RendererCore/Lights/SpotLightComponent.h>

// clang-format off
EZ_BEGIN_COMPONENT_TYPE(ezNpcComponent, 1, ezComponentMode::Static)
{
  //EZ_BEGIN_PROPERTIES
  //{
  //}
  //EZ_END_PROPERTIES;
  EZ_BEGIN_MESSAGEHANDLERS
  {
    EZ_MESSAGE_HANDLER(ezMsgDamage, ezNpcComponent::OnMsgDamage),
    EZ_MESSAGE_HANDLER(ezMsgComponentInternalTrigger, ezNpcComponent::OnMsgComponentInternalTrigger),
    EZ_MESSAGE_HANDLER(ezMsgGenericEvent, ezNpcComponent::OnMsgGenericEvent),
  }
  EZ_END_MESSAGEHANDLERS;
  EZ_BEGIN_ATTRIBUTES
  {
    new ezCategoryAttribute("EzTestProject"),
  }
  EZ_END_ATTRIBUTES;
}
EZ_END_COMPONENT_TYPE;
// clang-format on

void ezNpcComponent::SerializeComponent(ezWorldWriter& stream) const
{
  SUPER::SerializeComponent(stream);

  auto& s = stream.GetStream();
}

void ezNpcComponent::DeserializeComponent(ezWorldReader& stream)
{
  SUPER::DeserializeComponent(stream);

  auto& s = stream.GetStream();
}

void ezNpcComponent::OnDeactivated()
{
  SUPER::OnDeactivated();
}

void ezNpcComponent::OnSimulationStarted()
{
  SUPER::OnSimulationStarted();
}

void ezNpcComponent::OnMsgDamage(ezMsgDamage& msg)
{
  ezSharedPtr<ezBlackboard> pBlackboard = ezBlackboardComponent::FindBlackboard(GetOwner());
  if (pBlackboard == nullptr)
    return;

  if (m_iHealth > 0 && msg.m_fDamage >= m_iHealth)
  {
    m_iHealth = 0;
    pBlackboard->SetEntryValue("MoveState", 2);
  }
  else
  {
    m_iHealth -= (ezInt32)msg.m_fDamage;
    ezUInt32 uiHitState = pBlackboard->GetEntryValue(ezTempHashedString("HitState")).ConvertTo<ezUInt32>();
    pBlackboard->SetEntryValue("HitState", uiHitState + 1);
  }
}

void ezNpcComponent::OnMsgComponentInternalTrigger(ezMsgComponentInternalTrigger& msg)
{
}

void ezNpcComponent::OnMsgGenericEvent(ezMsgGenericEvent& msg)
{
  if (msg.m_sMessage == ezTempHashedString("ActivateRagdoll"))
  {
    ezJoltRagdollComponent* pRagdoll;
    if (GetOwner()->TryGetComponentOfBaseType(pRagdoll))
    {
      pRagdoll->SetActiveFlag(true);
    }
  }
}

void ezNpcComponent::Update()
{
}
