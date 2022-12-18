import ez = require("TypeScript/ez")

export class Player extends ez.TickedTypescriptComponent {

    /* BEGIN AUTO-GENERATED: VARIABLES */
    GiveAllWeapons: boolean = false;
    Invincible: boolean = false;
    /* END AUTO-GENERATED: VARIABLES */

    constructor() {
        super()
    }

    characterController: ez.JoltDefaultCharacterComponent = null;
    camera: ez.GameObject = null;
    input: ez.InputComponent = null;
    headBone: ez.HeadBoneComponent = null;
    flashlightObj: ez.GameObject = null;
    flashlight: ez.SpotLightComponent = null;
    grabObject: ez.JoltGrabObjectComponent = null;

    OnSimulationStarted(): void {
        let owner = this.GetOwner();
        this.characterController = owner.TryGetComponentOfBaseType(ez.JoltDefaultCharacterComponent);
        this.camera = owner.FindChildByName("Camera", true);
        this.input = owner.TryGetComponentOfBaseType(ez.InputComponent);
        this.headBone = this.camera.TryGetComponentOfBaseType(ez.HeadBoneComponent);
        this.flashlightObj = owner.FindChildByName("Flashlight", true);
        this.flashlight = this.flashlightObj.TryGetComponentOfBaseType(ez.SpotLightComponent);

        this.grabObject = owner.FindChildByName("GrabObject", true).TryGetComponentOfBaseType(ez.JoltGrabObjectComponent);
        this.SetTickInterval(ez.Time.Milliseconds(0));
    }

    Tick(): void {

            // character controller update
            {
                let msg = new ez.MsgMoveCharacterController();

                msg.Jump = this.input.GetCurrentInputState("Jump", true) > 0.5;
                msg.MoveForwards = this.input.GetCurrentInputState("MoveForwards", false);
                msg.MoveBackwards = this.input.GetCurrentInputState("MoveBackwards", false);
                msg.StrafeLeft = this.input.GetCurrentInputState("StrafeLeft", false);
                msg.StrafeRight = this.input.GetCurrentInputState("StrafeRight", false);
                msg.RotateLeft = this.input.GetCurrentInputState("RotateLeft", false);
                msg.RotateRight = this.input.GetCurrentInputState("RotateRight", false);
                msg.Run = this.input.GetCurrentInputState("Run", false) > 0.5;
                msg.Crouch = this.input.GetCurrentInputState("Crouch", false) > 0.5;

                this.characterController.SendMessage(msg);
            }

            // look up / down
            {
                let up = this.input.GetCurrentInputState("LookUp", false);
                let down = this.input.GetCurrentInputState("LookDown", false);

                this.headBone.ChangeVerticalRotation(down - up);
            }
    }

    static RegisterMessageHandlers() {

        ez.TypescriptComponent.RegisterMessageHandler(ez.MsgInputActionTriggered, "OnMsgInputActionTriggered");
        ez.TypescriptComponent.RegisterMessageHandler(ez.MsgPhysicsJointBroke, "OnMsgPhysicsJointBroke");
    }

    OnMsgPhysicsJointBroke(msg: ez.MsgPhysicsJointBroke): void {
        // must be the 'object grabber' joint

    }

    OnMsgInputActionTriggered(msg: ez.MsgInputActionTriggered): void {

        if (msg.TriggerState == ez.TriggerState.Activated) {

            if (msg.InputAction == "Flashlight") {
                this.flashlight.SetActiveFlag(!this.flashlight.GetActiveFlag());
            }

            if (msg.InputAction == "Use") {

                if (this.grabObject.HasObjectGrabbed()) {
                    this.grabObject.DropGrabbedObject();
                    
                }
                else if (this.grabObject.GrabNearbyObject()) {

                }
                else {
                    let hit = ez.Physics.Raycast(this.camera.GetGlobalPosition(), this.camera.GetGlobalDirForwards(), 1.0, 8);

                    if (hit != null && hit.actorObject) {

                        let msg = new ez.MsgGenericEvent;
                        msg.Message = "Use";

                        hit.actorObject.SendEventMessage(msg, this);
                    }
                }
            }

            if (msg.InputAction == "Teleport") {
                let owner = this.characterController.GetOwner();
                let pos = owner.GetGlobalPosition();
                let dir = owner.GetGlobalDirForwards();
                dir.z = 0;
                dir.Normalize();
                dir.MulNumber(5.0);
                pos.AddVec3(dir);

                // TODO:
                // if (this.characterController.IsDestinationUnobstructed(pos, 0)) {
                     this.characterController.TeleportCharacter(pos);
                // }
            }
        }
    }

}