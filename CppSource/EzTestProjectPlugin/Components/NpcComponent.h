#include <Core/World/Component.h>
#include <Core/World/ComponentManager.h>
#include <GameEngine/Gameplay/InputComponent.h>

struct ezMsgDamage;
struct ezMsgComponentInternalTrigger;

using ezNpcComponentManager = ezComponentManagerSimple<class ezNpcComponent, ezComponentUpdateType::WhenSimulating>;

class ezNpcComponent : public ezComponent
{
  EZ_DECLARE_COMPONENT_TYPE(ezNpcComponent, ezComponent, ezNpcComponentManager);

  //////////////////////////////////////////////////////////////////////////
  // ezComponent

public:
  virtual void SerializeComponent(ezWorldWriter& stream) const override;
  virtual void DeserializeComponent(ezWorldReader& stream) override;

protected:
  virtual void OnDeactivated() override;
  virtual void OnSimulationStarted() override;

  //////////////////////////////////////////////////////////////////////////
  // ezNpcComponent

public:
  void OnMsgDamage(ezMsgDamage& msg);
  void OnMsgComponentInternalTrigger(ezMsgComponentInternalTrigger& msg);
  void OnMsgGenericEvent(ezMsgGenericEvent& msg);

  ezInt32 m_iHealth = 50;

private:
  void Update();
};
