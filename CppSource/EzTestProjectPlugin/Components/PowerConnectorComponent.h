#include <Core/World/Component.h>
#include <GameEngine/AI/SensorComponent.h>
#include <JoltPlugin/Constraints/JoltGrabObjectComponent.h>

class ezMsgSetPowerInput : public ezEventMessage
{
  EZ_DECLARE_MESSAGE_TYPE(ezMsgSetPowerInput, ezEventMessage);

  ezUInt16 m_uiPower = 0;
};

using ezPowerConnectorComponentManager = ezComponentManagerSimple<class ezPowerConnectorComponent, ezComponentUpdateType::WhenSimulating>;

class ezPowerConnectorComponent : public ezComponent
{
  EZ_DECLARE_COMPONENT_TYPE(ezPowerConnectorComponent, ezComponent, ezPowerConnectorComponentManager);

public:
  virtual void SerializeComponent(ezWorldWriter& stream) const override;
  virtual void DeserializeComponent(ezWorldReader& stream) override;

  void Update();

  void SetInput(ezUInt16 value);
  ezUInt16 GetInput() const { return m_uiInput; }

  void SetOutput(ezUInt16 value);                   // [ property ]
  ezUInt16 GetOutput() const { return m_uiOutput; } // [ property ]

  void SetBuddyReference(const char* szReference); // [ property ]
  void SetBuddy(ezGameObjectHandle hObject);

  void SetConnectedToReference(const char* szReference); // [ property ]
  void SetConnectedTo(ezGameObjectHandle hObject);

  bool IsConnected() const;

protected:
  virtual void OnDeactivated() override;
  virtual void OnSimulationStarted() override;

  void OnMsgSensorDetectedObjectsChanged(ezMsgSensorDetectedObjectsChanged& msg); // [ message handler ]
  void OnMsgObjectGrabbed(ezMsgObjectGrabbed& msg);                               // [ message handler ]

  void Detach();
  void Attach(ezGameObjectHandle hSocket);

  ezGameObjectHandle m_hClosestSocket;

  ezTime m_Attached;
  ezGameObjectHandle m_hAttachPoint;
  ezGameObjectHandle m_hGrabbedBy;

  ezUInt16 m_uiOutput = 0;
  ezUInt16 m_uiInput = 0;

  ezGameObjectHandle m_hBuddy;
  ezGameObjectHandle m_hConnectedTo;

  void InputChanged(ezUInt16 uiInput);
  void OutputChanged(ezUInt16 uiOutput);

private:
  const char* DummyGetter() const { return nullptr; }
};
