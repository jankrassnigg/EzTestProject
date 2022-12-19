#include <Core/World/Component.h>
#include <GameEngine/AI/SensorComponent.h>
#include <JoltPlugin/Constraints/JoltGrabObjectComponent.h>

using SocketAttachComponentManager = ezComponentManagerSimple<class SocketAttachComponent, ezComponentUpdateType::WhenSimulating>;

class SocketAttachComponent : public ezComponent
{
  EZ_DECLARE_COMPONENT_TYPE(SocketAttachComponent, ezComponent, SocketAttachComponentManager);

public:
  virtual void SerializeComponent(ezWorldWriter& stream) const override;
  virtual void DeserializeComponent(ezWorldReader& stream) override;

  void Update();

protected:
  virtual void OnDeactivated() override;
  virtual void OnSimulationStarted() override;

  void OnMsgSensorDetectedObjectsChanged(ezMsgSensorDetectedObjectsChanged& msg);
  void OnMsgObjectGrabbed(ezMsgObjectGrabbed& msg);

  bool Detach();

  ezDynamicArray<ezGameObjectHandle> m_Sockets;

  ezTime m_Attached;
  ezGameObjectHandle m_hAttachPoint;
  ezInt32 m_iGrabs = 0;
};
