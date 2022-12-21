#include <Core/World/Component.h>
#include <GameEngine/AI/SensorComponent.h>
#include <JoltPlugin/Constraints/JoltGrabObjectComponent.h>

using ezPowerConnectorComponentManager = ezComponentManagerSimple<class ezPowerConnectorComponent, ezComponentUpdateType::WhenSimulating>;

class ezPowerConnectorComponent : public ezComponent
{
  EZ_DECLARE_COMPONENT_TYPE(ezPowerConnectorComponent, ezComponent, ezPowerConnectorComponentManager);

public:
  virtual void SerializeComponent(ezWorldWriter& stream) const override;
  virtual void DeserializeComponent(ezWorldReader& stream) override;

  void Update();

  void SetOutput(ezInt32 value);                  // [ property ]
  ezInt32 GetOutput() const { return m_iOutput; } // [ property ]

  void SetInput(ezInt32 value);                 // [ property ]
  ezInt32 GetInput() const { return m_iInput; } // [ property ]

  void SetBuddyReference(const char* szReference); // [ property ]
  void SetBuddy(ezGameObjectHandle hObject);

  void SetConnectedTo(ezGameObjectHandle hObject);

protected:
  virtual void OnDeactivated() override;
  virtual void OnSimulationStarted() override;

  void OnMsgSensorDetectedObjectsChanged(ezMsgSensorDetectedObjectsChanged& msg);
  void OnMsgObjectGrabbed(ezMsgObjectGrabbed& msg);

  void Detach();

  ezGameObjectHandle m_hClosestSocket;

  ezTime m_Attached;
  ezGameObjectHandle m_hAttachPoint;
  ezInt32 m_iGrabs = 0;

  ezInt32 m_iOutput = 0;
  ezInt32 m_iInput = 0;

  ezGameObjectHandle m_hBuddy;
  ezGameObjectHandle m_hConnectedTo;

  void InputChanged(ezInt32 iInput);
  void OutputChanged(ezInt32 iOutput);

private:
  const char* DummyGetter() const { return nullptr; }
};
