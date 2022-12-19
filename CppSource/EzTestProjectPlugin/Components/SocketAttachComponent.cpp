#include <EzTestProjectPlugin/EzTestProjectPluginPCH.h>

#include <EzTestProjectPlugin/Components/SocketAttachComponent.h>
#include <JoltPlugin/Constraints/JoltPointConstraintComponent.h>

// clang-format off
EZ_BEGIN_COMPONENT_TYPE(SocketAttachComponent, 1, ezComponentMode::Static)
{
//  EZ_BEGIN_PROPERTIES
//  {
//  }
//  EZ_END_PROPERTIES
  EZ_BEGIN_MESSAGEHANDLERS
  {
    EZ_MESSAGE_HANDLER(ezMsgSensorDetectedObjectsChanged, OnMsgSensorDetectedObjectsChanged),
  }
  EZ_END_MESSAGEHANDLERS;
}
EZ_END_COMPONENT_TYPE;
// clang-format on

void SocketAttachComponent::SerializeComponent(ezWorldWriter& stream) const
{
  SUPER::SerializeComponent(stream);
}

void SocketAttachComponent::DeserializeComponent(ezWorldReader& stream)
{
  SUPER::DeserializeComponent(stream);
}

void SocketAttachComponent::Update()
{
  ezWorld* pWorld = GetOwner()->GetWorld();

  if (!m_hAttachPoint.IsInvalidated())
  {
    if (ezTime::Now() - m_Attached > ezTime::Seconds(2))
    {
      ezLog::Warning("Removing AttachPoint");
      pWorld->DeleteObjectDelayed(m_hAttachPoint, false);
      m_hAttachPoint.Invalidate();
    }

    return;
  }

  if (ezTime::Now() - m_Attached < ezTime::Seconds(4))
    return;

  const ezTransform tOwn = GetOwner()->GetGlobalTransform();

  ezHybridArray<ezDebugRenderer::Line, 16> lines;

  for (ezGameObjectHandle hObj : m_Sockets)
  {
    ezGameObject* pObj;
    if (!pWorld->TryGetObject(hObj, pObj))
      continue;

    ezTransform tOther = pObj->GetGlobalTransform();

    auto& line = lines.ExpandAndGetRef();
    line.m_start = tOwn.m_vPosition;
    line.m_end = tOther.m_vPosition;
    line.m_startColor = ezColor::White;
    line.m_endColor = ezColor::White;

    // if ((line.m_start - line.m_end).GetLengthSquared() < ezMath::Square(0.5f))
    {
      m_Attached = ezTime::Now();

      ezGameObjectDesc go;
      go.m_hParent = hObj;
      go.m_sName.Assign("AttachPoint");

      ezGameObject* pAttach;
      m_hAttachPoint = pWorld->CreateObject(go, pAttach);

      ezJoltPointConstraintComponent* pConstraint;
      pWorld->GetOrCreateComponentManager<ezJoltPointConstraintComponentManager>()->CreateComponent(pAttach, pConstraint);

      pConstraint->SetActors({}, tOther, GetOwner()->GetHandle(), ezTransform::IdentityTransform());

      ezLog::Warning("Adding AttachPoint");
      return;
    }
  }

  ezDebugRenderer::DrawLines(pWorld, lines, ezColor::White);
}

void SocketAttachComponent::OnDeactivated()
{
  SUPER::OnDeactivated();
}

void SocketAttachComponent::OnSimulationStarted()
{
  SUPER::OnSimulationStarted();
}

void SocketAttachComponent::OnMsgSensorDetectedObjectsChanged(ezMsgSensorDetectedObjectsChanged& msg)
{
  m_Sockets = msg.m_DetectedObjects;
}
