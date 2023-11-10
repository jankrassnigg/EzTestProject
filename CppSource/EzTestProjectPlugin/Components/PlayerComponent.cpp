#include <EzTestProjectPlugin/EzTestProjectPluginPCH.h>

#include <Core/GameState/GameStateBase.h>
#include <Core/Messages/CommonMessages.h>
#include <EzTestProjectPlugin/Components/PlayerComponent.h>
#include <EzTestProjectPlugin/GameState/EzTestProjectGameState.h>
#include <GameComponentsPlugin/Gameplay/HeadBoneComponent.h>
#include <GameEngine/GameApplication/GameApplication.h>
#include <GameEngine/Gameplay/BlackboardComponent.h>
#include <GameEngine/Gameplay/GrabbableItemComponent.h>
#include <GameEngine/Gameplay/InputComponent.h>
#include <GameEngine/Gameplay/SpawnComponent.h>
#include <GameEngine/Physics/CharacterControllerComponent.h>
#include <JoltPlugin/Constraints/JoltGrabObjectComponent.h>
#include <RendererCore/Lights/SpotLightComponent.h>

// clang-format off
EZ_BEGIN_COMPONENT_TYPE(ezPlayerComponent, 1, ezComponentMode::Static)
{
  //EZ_BEGIN_PROPERTIES
  //{
  //}
  //EZ_END_PROPERTIES;
  EZ_BEGIN_MESSAGEHANDLERS
  {
    EZ_MESSAGE_HANDLER(ezMsgInputActionTriggered, OnMsgInputActionTriggered),
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

void ezPlayerComponent::SerializeComponent(ezWorldWriter& stream) const
{
  SUPER::SerializeComponent(stream);

  auto& s = stream.GetStream();
}

void ezPlayerComponent::DeserializeComponent(ezWorldReader& stream)
{
  SUPER::DeserializeComponent(stream);

  auto& s = stream.GetStream();
}

void ezPlayerComponent::OnDeactivated()
{
  //

  SUPER::OnDeactivated();
}

void ezPlayerComponent::OnSimulationStarted()
{
  SUPER::OnSimulationStarted();
}

void ezPlayerComponent::OnMsgInputActionTriggered(ezMsgInputActionTriggered& msg)
{
  if (msg.m_TriggerState == ezTriggerState::Continuing)
    return;

  if (msg.m_sInputAction == ezTempHashedString("Flashlight"))
  {
    if (msg.m_TriggerState == ezTriggerState::Activated)
    {
      if (ezGameObject* pFlashlightObject = GetOwner()->FindChildByName("Flashlight", true))
      {
        ezSpotLightComponent* pFlashlightComponent = nullptr;
        if (pFlashlightObject->TryGetComponentOfBaseType(pFlashlightComponent))
        {
          pFlashlightComponent->SetActiveFlag(!pFlashlightComponent->GetActiveFlag());
          return;
        }
      }
    }
  }

  ezGameObject* pWeaponsObject = GetOwner()->FindChildByName("Weapons", true);
  ezGameObject* pGrabObject = GetOwner()->FindChildByName("GrabObject", true);
  ezGameObject* pCameraObject = GetOwner()->FindChildByName("Camera", true);
  ezGameObject* pSpawnBulletObject = GetOwner()->FindChildByName("Spawn_Bullet", true);
  ezSharedPtr<ezBlackboard> pWeaponsBlackboard = ezBlackboardComponent::FindBlackboard(pWeaponsObject);

  ezJoltGrabObjectComponent* pGrabComponent = nullptr;
  if (pGrabObject)
  {
    pGrabObject->TryGetComponentOfBaseType(pGrabComponent);
  }

  ezSpawnComponent* pSpawnBullet = nullptr;
  if (pSpawnBulletObject)
  {
    pSpawnBulletObject->TryGetComponentOfBaseType(pSpawnBullet);
  }

  if (msg.m_sInputAction == ezTempHashedString("Shoot"))
  {
    if (msg.m_TriggerState == ezTriggerState::Activated)
    {
      if (pGrabComponent && pGrabComponent->HasObjectGrabbed())
      {
        ezVec3 dir = ezVec3::MakeAxisX() * 4.0f;
        pGrabComponent->ThrowGrabbedObject(dir);
      }
      else if (pWeaponsBlackboard)
      {
        if (pSpawnBullet && pSpawnBullet->CanTriggerManualSpawn())
        {
          const ezUInt32 uiWeaponState = pWeaponsBlackboard->GetEntryValue(ezTempHashedString("Weapon-State")).ConvertTo<ezUInt32>();

          if (uiWeaponState == 0)
          {
            pSpawnBullet->TriggerManualSpawn();
            pWeaponsBlackboard->SetEntryValue("Weapon-State", 1);
          }
        }
      }
    }
  }

  if (msg.m_sInputAction == ezTempHashedString("Reload"))
  {
    if (msg.m_TriggerState == ezTriggerState::Activated)
    {
      if (pWeaponsBlackboard)
      {
        const ezUInt32 uiWeaponState = pWeaponsBlackboard->GetEntryValue(ezTempHashedString("Weapon-State")).ConvertTo<ezUInt32>();

        if (uiWeaponState == 0)
        {
          pWeaponsBlackboard->SetEntryValue("Weapon-State", 2);
        }
      }
    }
  }

  if (msg.m_sInputAction == ezTempHashedString("Use") && msg.m_TriggerState == ezTriggerState::Activated)
  {
    if (pGrabComponent && pGrabComponent->HasObjectGrabbed())
    {
      pGrabComponent->DropGrabbedObject();
    }
    else if (pGrabComponent && pGrabComponent->GrabNearbyObject())
    {
    }
    else
    {
      if (ezPhysicsWorldModuleInterface* pPhysics = GetOwner()->GetWorld()->GetModule<ezPhysicsWorldModuleInterface>())
      {
        ezPhysicsQueryParameters params;
        params.m_uiCollisionLayer = 8;
        params.m_ShapeTypes = ezPhysicsShapeType::Static | ezPhysicsShapeType::Dynamic | ezPhysicsShapeType::Query;

        ezPhysicsCastResult result;
        if (pPhysics->Raycast(result, pCameraObject->GetGlobalPosition(), pCameraObject->GetGlobalDirForwards(), 2.0f, params))
        {
          ezGameObject* pActor = nullptr;
          if (GetOwner()->GetWorld()->TryGetObject(result.m_hActorObject, pActor))
          {
            ezMsgGenericEvent msg;
            msg.m_sMessage.Assign("Use");
            pActor->SendEventMessage(msg, this);
          }
        }
      }
    }
  }
}

void ezPlayerComponent::Update()
{
  ezInputComponent* pInput = nullptr;
  if (!GetOwner()->TryGetComponentOfBaseType(pInput))
    return;

  const ezRTTI* pCharType = ezRTTI::FindTypeByName("ezJoltCharacterControllerComponent");

  ezComponent* pCC = nullptr;
  if (!GetOwner()->TryGetComponentOfBaseType(pCharType, pCC))
    return;

  ezGameObject* pCameraObject = GetOwner()->FindChildByName("Camera", true);

  if (!pCameraObject)
    return;

  ezHeadBoneComponent* pHeadBone = nullptr;
  if (!pCameraObject->TryGetComponentOfBaseType(pHeadBone))
    return;

  // character controller update
  {
    ezMsgMoveCharacterController msg;

    msg.m_bJump = pInput->GetCurrentInputState("Jump", true) > 0.5;
    msg.m_fMoveForwards = pInput->GetCurrentInputState("MoveForwards", false);
    msg.m_fMoveBackwards = pInput->GetCurrentInputState("MoveBackwards", false);
    msg.m_fStrafeLeft = pInput->GetCurrentInputState("StrafeLeft", false);
    msg.m_fStrafeRight = pInput->GetCurrentInputState("StrafeRight", false);
    msg.m_fRotateLeft = pInput->GetCurrentInputState("RotateLeft", false);
    msg.m_fRotateRight = pInput->GetCurrentInputState("RotateRight", false);
    msg.m_bRun = pInput->GetCurrentInputState("Run", false) > 0.5;
    msg.m_bCrouch = pInput->GetCurrentInputState("Crouch", false) > 0.5;

    pCC->SendMessage(msg);
  }

  // look up / down
  {
    float up = pInput->GetCurrentInputState("LookUp", false);
    float down = pInput->GetCurrentInputState("LookDown", false);

    pHeadBone->ChangeVerticalRotation(down - up);
  }

  bool bFoundGrabbable = false;

  if (ezGameObject* pGrabObject = GetOwner()->FindChildByName("GrabObject", true))
  {
    ezJoltGrabObjectComponent* pGrabComponent = nullptr;
    if (pGrabObject->TryGetComponentOfBaseType(pGrabComponent))
    {
      if (!pGrabComponent->HasObjectGrabbed())
      {
        ezGameObject* pActorToGrab = nullptr;
        ezTransform localGrabPoint;

        if (pGrabComponent->FindNearbyObject(pActorToGrab, localGrabPoint))
        {
          ezGrabbableItemComponent* pGrabbable = nullptr;
          if (pActorToGrab->TryGetComponentOfBaseType(pGrabbable))
          {
            bFoundGrabbable = true;

            if (ezGameStateBase* pGameState = ezGameApplication::GetGameApplicationInstance()->GetActiveGameState())
            {
              EzTestProjectGameState* pTestGameState = ezDynamicCast<EzTestProjectGameState*>(pGameState);
              pTestGameState->m_ObjectsToHighlight.AddObjectAndChildren(*GetWorld(), pActorToGrab);
            }
          }
        }
      }
    }
  }

  if (!bFoundGrabbable)
  {
    ezGameObject* pCameraObject = GetOwner()->FindChildByName("Camera", true);

    if (ezPhysicsWorldModuleInterface* pPhysics = GetOwner()->GetWorld()->GetModule<ezPhysicsWorldModuleInterface>())
    {
      ezPhysicsQueryParameters params;
      params.m_uiCollisionLayer = 8;
      params.m_ShapeTypes = ezPhysicsShapeType::Static | ezPhysicsShapeType::Dynamic | ezPhysicsShapeType::Query;

      ezPhysicsCastResult result;
      if (pPhysics->Raycast(result, pCameraObject->GetGlobalPosition(), pCameraObject->GetGlobalDirForwards(), 2.0f, params))
      {
        ezGameObject* pActor = nullptr;
        if (GetOwner()->GetWorld()->TryGetObject(result.m_hActorObject, pActor))
        {
          ezGrabbableItemComponent* pGrabbable = nullptr;
          if (pActor->TryGetComponentOfBaseType(pGrabbable))
          {
            if (ezGameStateBase* pGameState = ezGameApplication::GetGameApplicationInstance()->GetActiveGameState())
            {
              EzTestProjectGameState* pTestGameState = ezDynamicCast<EzTestProjectGameState*>(pGameState);
              pTestGameState->m_ObjectsToHighlight.AddObjectAndChildren(*GetWorld(), pActor);
            }
          }
        }
      }
    }
  }
}
