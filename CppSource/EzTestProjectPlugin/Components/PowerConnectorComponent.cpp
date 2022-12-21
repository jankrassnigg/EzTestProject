#include <EzTestProjectPlugin/EzTestProjectPluginPCH.h>

#include <Core/Messages/SetColorMessage.h>
#include <EzTestProjectPlugin/Components/PowerConnectorComponent.h>
#include <JoltPlugin/Constraints/JoltFixedConstraintComponent.h>

// clang-format off
EZ_BEGIN_COMPONENT_TYPE(ezPowerConnectorComponent, 1, ezComponentMode::Static)
{
  EZ_BEGIN_PROPERTIES
  {
    //EZ_ACCESSOR_PROPERTY("Input", GetInput, SetInput),
    EZ_ACCESSOR_PROPERTY("Output", GetOutput, SetOutput),
    EZ_ACCESSOR_PROPERTY("Buddy", DummyGetter, SetBuddyReference)->AddAttributes(new ezGameObjectReferenceAttribute()),
  }
  EZ_END_PROPERTIES;
  EZ_BEGIN_MESSAGEHANDLERS
  {
    EZ_MESSAGE_HANDLER(ezMsgSensorDetectedObjectsChanged, OnMsgSensorDetectedObjectsChanged),
    EZ_MESSAGE_HANDLER(ezMsgObjectGrabbed, OnMsgObjectGrabbed),
  }
  EZ_END_MESSAGEHANDLERS;
  EZ_BEGIN_ATTRIBUTES
  {
    new ezCategoryAttribute("Gameplay"),
  }
  EZ_END_ATTRIBUTES;
}
EZ_END_COMPONENT_TYPE;
// clang-format on

void ezPowerConnectorComponent::SerializeComponent(ezWorldWriter& stream) const
{
  SUPER::SerializeComponent(stream);

  auto& s = stream.GetStream();

  stream.WriteGameObjectHandle(m_hBuddy);

  s << m_iOutput;
}

void ezPowerConnectorComponent::DeserializeComponent(ezWorldReader& stream)
{
  SUPER::DeserializeComponent(stream);

  auto& s = stream.GetStream();

  m_hBuddy = stream.ReadGameObjectHandle();

  s >> m_iOutput;
}

void ezPowerConnectorComponent::Update()
{
  if (!m_hAttachPoint.IsInvalidated())
    return;

  ezWorld* pWorld = GetOwner()->GetWorld();
  const ezTime tNow = pWorld->GetClock().GetAccumulatedTime();

  if (tNow - m_Attached < ezTime::Seconds(1))
    return;

  if (m_hClosestSocket.IsInvalidated())
    return;

  ezGameObject* pClosestSocket;
  if (pWorld->TryGetObject(m_hClosestSocket, pClosestSocket))
  {
    ezPowerConnectorComponent* pConnector;
    if (pClosestSocket->TryGetComponentOfBaseType(pConnector))
    {
      // don't connect to an already connected object
      if (pConnector->IsConnected())
        return;
    }

    m_Attached = tNow;
    const ezTransform tSocket = pClosestSocket->GetGlobalTransform();

    ezGameObjectDesc go;
    go.m_hParent = m_hClosestSocket;

    ezGameObject* pAttach;
    m_hAttachPoint = pWorld->CreateObject(go, pAttach);

    ezJoltFixedConstraintComponent* pConstraint;
    pWorld->GetOrCreateComponentManager<ezJoltFixedConstraintComponentManager>()->CreateComponent(pAttach, pConstraint);

    pConstraint->SetActors({}, tSocket, GetOwner()->GetHandle(), ezTransform::IdentityTransform());

    SetConnectedTo(m_hClosestSocket);

    if (!m_hGrabbedBy.IsInvalidated())
    {
      ezGameObject* pGrab;
      if (pWorld->TryGetObject(m_hGrabbedBy, pGrab))
      {
        ezMsgReleaseObjectGrab msg;
        msg.m_hGrabbedObjectToRelease = GetOwner()->GetHandle();
        pGrab->SendMessage(msg);
      }
    }
  }
}

void ezPowerConnectorComponent::SetOutput(ezInt32 value)
{
  if (m_iOutput == value)
    return;

  m_iOutput = value;

  OutputChanged(m_iOutput);
}

void ezPowerConnectorComponent::SetInput(ezInt32 value)
{
  if (m_iInput == value)
    return;

  m_iInput = value;

  InputChanged(m_iInput);

  ezMsgSetColor msg;
  msg.m_Color = (m_iInput > 0) ? ezColor::Red : ezColor::White;

  GetOwner()->SendMessageRecursive(msg);
}

void ezPowerConnectorComponent::SetBuddyReference(const char* szReference)
{
  auto resolver = GetWorld()->GetGameObjectReferenceResolver();

  if (!resolver.IsValid())
    return;

  SetBuddy(resolver(szReference, GetHandle(), "Buddy"));
}

void ezPowerConnectorComponent::SetBuddy(ezGameObjectHandle hNewBuddy)
{
  if (m_hBuddy == hNewBuddy)
    return;

  if (!IsActiveAndInitialized())
  {
    m_hBuddy = hNewBuddy;
    return;
  }

  ezGameObjectHandle hPrevBuddy = m_hBuddy;
  m_hBuddy = {};

  ezGameObject* pBuddy;
  if (GetOwner()->GetWorld()->TryGetObject(hPrevBuddy, pBuddy))
  {
    ezPowerConnectorComponent* pConnector;
    if (pBuddy->TryGetComponentOfBaseType(pConnector))
    {
      pConnector->SetOutput(0);
      pConnector->SetBuddy({});
    }
  }

  m_hBuddy = hNewBuddy;

  if (GetOwner()->GetWorld()->TryGetObject(hNewBuddy, pBuddy))
  {
    ezPowerConnectorComponent* pConnector;
    if (pBuddy->TryGetComponentOfBaseType(pConnector))
    {
      pConnector->SetBuddy(GetOwner()->GetHandle());
      pConnector->SetOutput(m_iInput);
    }
  }
}

void ezPowerConnectorComponent::SetConnectedTo(ezGameObjectHandle hNewConnectedTo)
{
  if (m_hConnectedTo == hNewConnectedTo)
    return;

  if (!IsActiveAndInitialized())
  {
    m_hConnectedTo = hNewConnectedTo;
    return;
  }

  ezGameObjectHandle hPrevConnectedTo = m_hConnectedTo;
  m_hConnectedTo = {};

  ezGameObject* pConnectedTo;
  if (GetOwner()->GetWorld()->TryGetObject(hPrevConnectedTo, pConnectedTo))
  {
    ezPowerConnectorComponent* pConnector;
    if (pConnectedTo->TryGetComponentOfBaseType(pConnector))
    {
      pConnector->SetInput(0);
      pConnector->SetConnectedTo({});
    }
  }

  m_hConnectedTo = hNewConnectedTo;

  if (GetOwner()->GetWorld()->TryGetObject(hNewConnectedTo, pConnectedTo))
  {
    ezPowerConnectorComponent* pConnector;
    if (pConnectedTo->TryGetComponentOfBaseType(pConnector))
    {
      pConnector->SetConnectedTo(GetOwner()->GetHandle());
      pConnector->SetInput(m_iOutput);
    }
  }
}

bool ezPowerConnectorComponent::IsConnected() const
{
  // since connectors automatically disconnect themselves from their peers upon destruction, this should be sufficient (no need to check object for existence)
  return !m_hConnectedTo.IsInvalidated();
}

void ezPowerConnectorComponent::OnDeactivated()
{
  Detach();
  SetBuddy({});

  SUPER::OnDeactivated();
}

void ezPowerConnectorComponent::OnSimulationStarted()
{
  SUPER::OnSimulationStarted();

  if (m_iInput != 0)
  {
    InputChanged(m_iInput);
  }

  if (m_iOutput != 0)
  {
    OutputChanged(m_iOutput);
  }
}

void ezPowerConnectorComponent::OnMsgSensorDetectedObjectsChanged(ezMsgSensorDetectedObjectsChanged& msg)
{
  if (msg.m_DetectedObjects.IsEmpty())
    m_hClosestSocket.Invalidate();
  else
    m_hClosestSocket = msg.m_DetectedObjects[0];
}

void ezPowerConnectorComponent::OnMsgObjectGrabbed(ezMsgObjectGrabbed& msg)
{
  if (msg.m_bGotGrabbed)
  {
    Detach();
    m_Attached = GetOwner()->GetWorld()->GetClock().GetAccumulatedTime();
    m_hGrabbedBy = msg.m_hGrabbedBy;

    if (ezGameObject* pSensor = GetOwner()->FindChildByName("SensorOnGrab"))
    {
      pSensor->SetActiveFlag(true);
    }
  }
  else
  {
    m_hGrabbedBy.Invalidate();

    if (ezGameObject* pSensor = GetOwner()->FindChildByName("SensorOnGrab"))
    {
      pSensor->SetActiveFlag(false);
    }
  }
}

void ezPowerConnectorComponent::Detach()
{
  SetConnectedTo({});

  if (!m_hAttachPoint.IsInvalidated())
  {
    GetOwner()->GetWorld()->DeleteObjectDelayed(m_hAttachPoint, false);
    m_hAttachPoint.Invalidate();
  }
}

void ezPowerConnectorComponent::InputChanged(ezInt32 iInput)
{
  if (!IsActiveAndSimulating())
    return;

  if (m_hBuddy.IsInvalidated())
    return;

  ezGameObject* pBuddy;
  if (GetOwner()->GetWorld()->TryGetObject(m_hBuddy, pBuddy))
  {
    ezPowerConnectorComponent* pConnector;
    if (pBuddy->TryGetComponentOfBaseType(pConnector))
    {
      pConnector->SetOutput(iInput);
    }
  }
}

void ezPowerConnectorComponent::OutputChanged(ezInt32 iOutput)
{
  if (!IsActiveAndSimulating())
    return;

  if (m_hConnectedTo.IsInvalidated())
    return;

  ezGameObject* pConnectedTo;
  if (GetOwner()->GetWorld()->TryGetObject(m_hConnectedTo, pConnectedTo))
  {
    ezPowerConnectorComponent* pConnector;
    if (pConnectedTo->TryGetComponentOfBaseType(pConnector))
    {
      pConnector->SetInput(iOutput);
    }
  }
}
