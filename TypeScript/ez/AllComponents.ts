
import __GameObject = require("TypeScript/ez/GameObject")
export import GameObject = __GameObject.GameObject;

import __Component = require("TypeScript/ez/Component")
export import Component = __Component.Component;

import __Vec2 = require("TypeScript/ez/Vec2")
export import Vec2 = __Vec2.Vec2;

import __Vec3 = require("TypeScript/ez/Vec3")
export import Vec3 = __Vec3.Vec3;

import __Mat3 = require("TypeScript/ez/Mat3")
export import Mat3 = __Mat3.Mat3;

import __Mat4 = require("TypeScript/ez/Mat4")
export import Mat4 = __Mat4.Mat4;

import __Quat = require("TypeScript/ez/Quat")
export import Quat = __Quat.Quat;

import __Transform = require("TypeScript/ez/Transform")
export import Transform = __Transform.Transform;

import __Color = require("TypeScript/ez/Color")
export import Color = __Color.Color;

import __Time = require("TypeScript/ez/Time")
export import Time = __Time.Time;

import __Angle = require("TypeScript/ez/Angle")
export import Angle = __Angle.Angle;

import Enum = require("./AllEnums")
import Flags = require("./AllFlags")

declare function __CPP_ComponentProperty_get(component: Component, id: number);
declare function __CPP_ComponentProperty_set(component: Component, id: number, value);
declare function __CPP_ComponentFunction_Call(component: Component, id: number, ...args);

export class AgentSteeringComponent extends Component
{
  public static GetTypeNameHash(): number { return 2433025557; }
  SetTargetPosition(position: Vec3): void { __CPP_ComponentFunction_Call(this, 4016534758, position); }
  GetTargetPosition(): Vec3 { return __CPP_ComponentFunction_Call(this, 629215995); }
  ClearTargetPosition(): void { __CPP_ComponentFunction_Call(this, 4223648572); }
}

export class RenderComponent extends Component
{
  public static GetTypeNameHash(): number { return 1331355654; }
}

export class AlwaysVisibleComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 3808449846; }
}

export class SettingsComponent extends Component
{
  public static GetTypeNameHash(): number { return 1750614835; }
}

export class AmbientLightComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 1655272966; }
  get TopColor(): Color { return __CPP_ComponentProperty_get(this, 4055584569); }
  set TopColor(value: Color) { __CPP_ComponentProperty_set(this, 4055584569, value); }
  get BottomColor(): Color { return __CPP_ComponentProperty_get(this, 3763477789); }
  set BottomColor(value: Color) { __CPP_ComponentProperty_set(this, 3763477789, value); }
  get Intensity(): number { return __CPP_ComponentProperty_get(this, 1142599221); }
  set Intensity(value: number) { __CPP_ComponentProperty_set(this, 1142599221, value); }
}

export class MeshComponentBase extends RenderComponent
{
  public static GetTypeNameHash(): number { return 3838468365; }
}

export class AnimatedMeshComponent extends MeshComponentBase
{
  public static GetTypeNameHash(): number { return 1356608274; }
  get Mesh(): string { return __CPP_ComponentProperty_get(this, 946325768); }
  set Mesh(value: string) { __CPP_ComponentProperty_set(this, 946325768, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1787449362); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1787449362, value); }
}

export class AnimationControllerComponent extends Component
{
  public static GetTypeNameHash(): number { return 1449604100; }
  get AnimController(): string { return __CPP_ComponentProperty_get(this, 1763743819); }
  set AnimController(value: string) { __CPP_ComponentProperty_set(this, 1763743819, value); }
  get RootMotionMode(): Enum.RootMotionMode { return __CPP_ComponentProperty_get(this, 1675822524); }
  set RootMotionMode(value: Enum.RootMotionMode) { __CPP_ComponentProperty_set(this, 1675822524, value); }
}

export class AreaDamageComponent extends Component
{
  public static GetTypeNameHash(): number { return 1814801746; }
  ApplyAreaDamage(): void { __CPP_ComponentFunction_Call(this, 1626975724); }
  get OnCreation(): boolean { return __CPP_ComponentProperty_get(this, 1094944095); }
  set OnCreation(value: boolean) { __CPP_ComponentProperty_set(this, 1094944095, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 3181924921); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 3181924921, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 425141614); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 425141614, value); }
  get Damage(): number { return __CPP_ComponentProperty_get(this, 3549017466); }
  set Damage(value: number) { __CPP_ComponentProperty_set(this, 3549017466, value); }
  get Impulse(): number { return __CPP_ComponentProperty_get(this, 2310987997); }
  set Impulse(value: number) { __CPP_ComponentProperty_set(this, 2310987997, value); }
}

export class BakedProbesComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 1952482886; }
  get ShowDebugOverlay(): boolean { return __CPP_ComponentProperty_get(this, 3724333294); }
  set ShowDebugOverlay(value: boolean) { __CPP_ComponentProperty_set(this, 3724333294, value); }
  get ShowDebugProbes(): boolean { return __CPP_ComponentProperty_get(this, 1955017905); }
  set ShowDebugProbes(value: boolean) { __CPP_ComponentProperty_set(this, 1955017905, value); }
  get UseTestPosition(): boolean { return __CPP_ComponentProperty_get(this, 1061481306); }
  set UseTestPosition(value: boolean) { __CPP_ComponentProperty_set(this, 1061481306, value); }
  get TestPosition(): Vec3 { return __CPP_ComponentProperty_get(this, 3969573931); }
  set TestPosition(value: Vec3) { __CPP_ComponentProperty_set(this, 3969573931, value); }
}

export class BakedProbesVolumeComponent extends Component
{
  public static GetTypeNameHash(): number { return 1354454587; }
  get Extents(): Vec3 { return __CPP_ComponentProperty_get(this, 4040384027); }
  set Extents(value: Vec3) { __CPP_ComponentProperty_set(this, 4040384027, value); }
}

export class BeamComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 3054475186; }
  get TargetObject(): string { return __CPP_ComponentProperty_get(this, 4047713065); }
  set TargetObject(value: string) { __CPP_ComponentProperty_set(this, 4047713065, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 742360141); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 742360141, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1592367954); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1592367954, value); }
  get Width(): number { return __CPP_ComponentProperty_get(this, 3161639904); }
  set Width(value: number) { __CPP_ComponentProperty_set(this, 3161639904, value); }
  get UVUnitsPerWorldUnit(): number { return __CPP_ComponentProperty_get(this, 676201184); }
  set UVUnitsPerWorldUnit(value: number) { __CPP_ComponentProperty_set(this, 676201184, value); }
}

export class BlackboardComponent extends Component
{
  public static GetTypeNameHash(): number { return 4004595404; }
  SetEntryValue(Name: string, Value: any): void { __CPP_ComponentFunction_Call(this, 1770691434, Name, Value); }
  GetEntryValue(Name: string): any { return __CPP_ComponentFunction_Call(this, 3444662205, Name); }
  get BlackboardName(): string { return __CPP_ComponentProperty_get(this, 1957444071); }
  set BlackboardName(value: string) { __CPP_ComponentProperty_set(this, 1957444071, value); }
  get ShowDebugInfo(): boolean { return __CPP_ComponentProperty_get(this, 3507638090); }
  set ShowDebugInfo(value: boolean) { __CPP_ComponentProperty_set(this, 3507638090, value); }
  get SendEntryChangedMessage(): boolean { return __CPP_ComponentProperty_get(this, 251987862); }
  set SendEntryChangedMessage(value: boolean) { __CPP_ComponentProperty_set(this, 251987862, value); }
}

export class ReflectionProbeComponentBase extends Component
{
  public static GetTypeNameHash(): number { return 1328595402; }
  get ReflectionProbeMode(): Enum.ReflectionProbeMode { return __CPP_ComponentProperty_get(this, 2861186312); }
  set ReflectionProbeMode(value: Enum.ReflectionProbeMode) { __CPP_ComponentProperty_set(this, 2861186312, value); }
  get NearPlane(): number { return __CPP_ComponentProperty_get(this, 3728348077); }
  set NearPlane(value: number) { __CPP_ComponentProperty_set(this, 3728348077, value); }
  get FarPlane(): number { return __CPP_ComponentProperty_get(this, 3749202860); }
  set FarPlane(value: number) { __CPP_ComponentProperty_set(this, 3749202860, value); }
  get CaptureOffset(): Vec3 { return __CPP_ComponentProperty_get(this, 995831503); }
  set CaptureOffset(value: Vec3) { __CPP_ComponentProperty_set(this, 995831503, value); }
  get ShowDebugInfo(): boolean { return __CPP_ComponentProperty_get(this, 2987052367); }
  set ShowDebugInfo(value: boolean) { __CPP_ComponentProperty_set(this, 2987052367, value); }
  get ShowMipMaps(): boolean { return __CPP_ComponentProperty_get(this, 2694283106); }
  set ShowMipMaps(value: boolean) { __CPP_ComponentProperty_set(this, 2694283106, value); }
}

export class BoxReflectionProbeComponent extends ReflectionProbeComponentBase
{
  public static GetTypeNameHash(): number { return 2868354512; }
  get Extents(): Vec3 { return __CPP_ComponentProperty_get(this, 1973454234); }
  set Extents(value: Vec3) { __CPP_ComponentProperty_set(this, 1973454234, value); }
  get InfluenceScale(): Vec3 { return __CPP_ComponentProperty_get(this, 3397494603); }
  set InfluenceScale(value: Vec3) { __CPP_ComponentProperty_set(this, 3397494603, value); }
  get InfluenceShift(): Vec3 { return __CPP_ComponentProperty_get(this, 3413820279); }
  set InfluenceShift(value: Vec3) { __CPP_ComponentProperty_set(this, 3413820279, value); }
  get PositiveFalloff(): Vec3 { return __CPP_ComponentProperty_get(this, 4154728610); }
  set PositiveFalloff(value: Vec3) { __CPP_ComponentProperty_set(this, 4154728610, value); }
  get NegativeFalloff(): Vec3 { return __CPP_ComponentProperty_get(this, 639334809); }
  set NegativeFalloff(value: Vec3) { __CPP_ComponentProperty_set(this, 639334809, value); }
  get BoxProjection(): boolean { return __CPP_ComponentProperty_get(this, 2435504746); }
  set BoxProjection(value: boolean) { __CPP_ComponentProperty_set(this, 2435504746, value); }
}

export class CameraComponent extends Component
{
  public static GetTypeNameHash(): number { return 399384073; }
  get EditorShortcut(): number { return __CPP_ComponentProperty_get(this, 3983516621); }
  set EditorShortcut(value: number) { __CPP_ComponentProperty_set(this, 3983516621, value); }
  get UsageHint(): Enum.CameraUsageHint { return __CPP_ComponentProperty_get(this, 377758853); }
  set UsageHint(value: Enum.CameraUsageHint) { __CPP_ComponentProperty_set(this, 377758853, value); }
  get Mode(): Enum.CameraMode { return __CPP_ComponentProperty_get(this, 2647822527); }
  set Mode(value: Enum.CameraMode) { __CPP_ComponentProperty_set(this, 2647822527, value); }
  get RenderTarget(): string { return __CPP_ComponentProperty_get(this, 2058514322); }
  set RenderTarget(value: string) { __CPP_ComponentProperty_set(this, 2058514322, value); }
  get RenderTargetOffset(): Vec2 { return __CPP_ComponentProperty_get(this, 217065525); }
  set RenderTargetOffset(value: Vec2) { __CPP_ComponentProperty_set(this, 217065525, value); }
  get RenderTargetSize(): Vec2 { return __CPP_ComponentProperty_get(this, 3840538309); }
  set RenderTargetSize(value: Vec2) { __CPP_ComponentProperty_set(this, 3840538309, value); }
  get NearPlane(): number { return __CPP_ComponentProperty_get(this, 2333990868); }
  set NearPlane(value: number) { __CPP_ComponentProperty_set(this, 2333990868, value); }
  get FarPlane(): number { return __CPP_ComponentProperty_get(this, 380471032); }
  set FarPlane(value: number) { __CPP_ComponentProperty_set(this, 380471032, value); }
  get FOV(): number { return __CPP_ComponentProperty_get(this, 159882140); }
  set FOV(value: number) { __CPP_ComponentProperty_set(this, 159882140, value); }
  get Dimensions(): number { return __CPP_ComponentProperty_get(this, 3619040875); }
  set Dimensions(value: number) { __CPP_ComponentProperty_set(this, 3619040875, value); }
  get CameraRenderPipeline(): string { return __CPP_ComponentProperty_get(this, 1461435618); }
  set CameraRenderPipeline(value: string) { __CPP_ComponentProperty_set(this, 1461435618, value); }
  get Aperture(): number { return __CPP_ComponentProperty_get(this, 2434424955); }
  set Aperture(value: number) { __CPP_ComponentProperty_set(this, 2434424955, value); }
  get ShutterTime(): number { return __CPP_ComponentProperty_get(this, 1229310217); }
  set ShutterTime(value: number) { __CPP_ComponentProperty_set(this, 1229310217, value); }
  get ISO(): number { return __CPP_ComponentProperty_get(this, 2015108855); }
  set ISO(value: number) { __CPP_ComponentProperty_set(this, 2015108855, value); }
  get ExposureCompensation(): number { return __CPP_ComponentProperty_get(this, 2490173364); }
  set ExposureCompensation(value: number) { __CPP_ComponentProperty_set(this, 2490173364, value); }
  get ShowStats(): boolean { return __CPP_ComponentProperty_get(this, 602803161); }
  set ShowStats(value: boolean) { __CPP_ComponentProperty_set(this, 602803161, value); }
}

export class CharacterControllerComponent extends Component
{
  public static GetTypeNameHash(): number { return 3855358184; }
  RawMove(moveDeltaGlobal: Vec3): void { __CPP_ComponentFunction_Call(this, 2989659834, moveDeltaGlobal); }
  TeleportCharacter(globalFootPosition: Vec3): void { __CPP_ComponentFunction_Call(this, 3942687383, globalFootPosition); }
  IsDestinationUnobstructed(globalFootPosition: Vec3, characterHeight: number): boolean { return __CPP_ComponentFunction_Call(this, 1759721276, globalFootPosition, characterHeight); }
  IsTouchingGround(): boolean { return __CPP_ComponentFunction_Call(this, 199969770); }
  IsCrouching(): boolean { return __CPP_ComponentFunction_Call(this, 2211445420); }
}

export class ClothSheetComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2715116214; }
  get Size(): Vec2 { return __CPP_ComponentProperty_get(this, 3552389090); }
  set Size(value: Vec2) { __CPP_ComponentProperty_set(this, 3552389090, value); }
  get Slack(): Vec2 { return __CPP_ComponentProperty_get(this, 4208818915); }
  set Slack(value: Vec2) { __CPP_ComponentProperty_set(this, 4208818915, value); }
  get Segments(): Vec2 { return __CPP_ComponentProperty_get(this, 433763768); }
  set Segments(value: Vec2) { __CPP_ComponentProperty_set(this, 433763768, value); }
  get Damping(): number { return __CPP_ComponentProperty_get(this, 1519962356); }
  set Damping(value: number) { __CPP_ComponentProperty_set(this, 1519962356, value); }
  get WindInfluence(): number { return __CPP_ComponentProperty_get(this, 3301939740); }
  set WindInfluence(value: number) { __CPP_ComponentProperty_set(this, 3301939740, value); }
  get Flags(): Flags.ClothSheetFlags { return __CPP_ComponentProperty_get(this, 3295769940); }
  set Flags(value: Flags.ClothSheetFlags) { __CPP_ComponentProperty_set(this, 3295769940, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 4261975796); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 4261975796, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 2524184734); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 2524184734, value); }
}

export class CollectionComponent extends Component
{
  public static GetTypeNameHash(): number { return 1842091837; }
  get Collection(): string { return __CPP_ComponentProperty_get(this, 1385393910); }
  set Collection(value: string) { __CPP_ComponentProperty_set(this, 1385393910, value); }
}

export class ColorAnimationComponent extends Component
{
  public static GetTypeNameHash(): number { return 3982813566; }
  get Gradient(): string { return __CPP_ComponentProperty_get(this, 1405509525); }
  set Gradient(value: string) { __CPP_ComponentProperty_set(this, 1405509525, value); }
  get Duration(): number { return __CPP_ComponentProperty_get(this, 329619611); }
  set Duration(value: number) { __CPP_ComponentProperty_set(this, 329619611, value); }
  get SetColorMode(): Enum.SetColorMode { return __CPP_ComponentProperty_get(this, 3365169082); }
  set SetColorMode(value: Enum.SetColorMode) { __CPP_ComponentProperty_set(this, 3365169082, value); }
  get AnimationMode(): Enum.PropertyAnimMode { return __CPP_ComponentProperty_get(this, 850528577); }
  set AnimationMode(value: Enum.PropertyAnimMode) { __CPP_ComponentProperty_set(this, 850528577, value); }
  get RandomStartOffset(): boolean { return __CPP_ComponentProperty_get(this, 282178386); }
  set RandomStartOffset(value: boolean) { __CPP_ComponentProperty_set(this, 282178386, value); }
  get ApplyToChildren(): boolean { return __CPP_ComponentProperty_get(this, 1543662045); }
  set ApplyToChildren(value: boolean) { __CPP_ComponentProperty_set(this, 1543662045, value); }
}

export class CommentComponent extends Component
{
  public static GetTypeNameHash(): number { return 3498221260; }
  get Comment(): string { return __CPP_ComponentProperty_get(this, 3941988709); }
  set Comment(value: string) { __CPP_ComponentProperty_set(this, 3941988709, value); }
}

export class CustomMeshComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1082120609; }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3679749726); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3679749726, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 3774417817); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 3774417817, value); }
}

export class DebugTextComponent extends Component
{
  public static GetTypeNameHash(): number { return 752500620; }
  get Text(): string { return __CPP_ComponentProperty_get(this, 676134654); }
  set Text(value: string) { __CPP_ComponentProperty_set(this, 676134654, value); }
  get Value0(): number { return __CPP_ComponentProperty_get(this, 869502225); }
  set Value0(value: number) { __CPP_ComponentProperty_set(this, 869502225, value); }
  get Value1(): number { return __CPP_ComponentProperty_get(this, 775705132); }
  set Value1(value: number) { __CPP_ComponentProperty_set(this, 775705132, value); }
  get Value2(): number { return __CPP_ComponentProperty_get(this, 1768733809); }
  set Value2(value: number) { __CPP_ComponentProperty_set(this, 1768733809, value); }
  get Value3(): number { return __CPP_ComponentProperty_get(this, 1816166542); }
  set Value3(value: number) { __CPP_ComponentProperty_set(this, 1816166542, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1881354469); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1881354469, value); }
}

export class DecalComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2317758174; }
  get ProjectionAxis(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 2835729844); }
  set ProjectionAxis(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 2835729844, value); }
  get Extents(): Vec3 { return __CPP_ComponentProperty_get(this, 1588442994); }
  set Extents(value: Vec3) { __CPP_ComponentProperty_set(this, 1588442994, value); }
  get SizeVariance(): number { return __CPP_ComponentProperty_get(this, 2095302921); }
  set SizeVariance(value: number) { __CPP_ComponentProperty_set(this, 2095302921, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 2286083006); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 2286083006, value); }
  get EmissiveColor(): Color { return __CPP_ComponentProperty_get(this, 2763898085); }
  set EmissiveColor(value: Color) { __CPP_ComponentProperty_set(this, 2763898085, value); }
  get SortOrder(): number { return __CPP_ComponentProperty_get(this, 2393756233); }
  set SortOrder(value: number) { __CPP_ComponentProperty_set(this, 2393756233, value); }
  get WrapAround(): boolean { return __CPP_ComponentProperty_get(this, 3404680148); }
  set WrapAround(value: boolean) { __CPP_ComponentProperty_set(this, 3404680148, value); }
  get MapNormalToGeometry(): boolean { return __CPP_ComponentProperty_get(this, 2511527943); }
  set MapNormalToGeometry(value: boolean) { __CPP_ComponentProperty_set(this, 2511527943, value); }
  get InnerFadeAngle(): number { return __CPP_ComponentProperty_get(this, 4277744763); }
  set InnerFadeAngle(value: number) { __CPP_ComponentProperty_set(this, 4277744763, value); }
  get OuterFadeAngle(): number { return __CPP_ComponentProperty_get(this, 2290285157); }
  set OuterFadeAngle(value: number) { __CPP_ComponentProperty_set(this, 2290285157, value); }
  get FadeOutDuration(): number { return __CPP_ComponentProperty_get(this, 4012256443); }
  set FadeOutDuration(value: number) { __CPP_ComponentProperty_set(this, 4012256443, value); }
  get OnFinishedAction(): Enum.OnComponentFinishedAction { return __CPP_ComponentProperty_get(this, 428775208); }
  set OnFinishedAction(value: Enum.OnComponentFinishedAction) { __CPP_ComponentProperty_set(this, 428775208, value); }
  get ApplyToDynamic(): string { return __CPP_ComponentProperty_get(this, 2082908993); }
  set ApplyToDynamic(value: string) { __CPP_ComponentProperty_set(this, 2082908993, value); }
}

export class DeviceTrackingComponent extends Component
{
  public static GetTypeNameHash(): number { return 3500774039; }
  get DeviceType(): Enum.XRDeviceType { return __CPP_ComponentProperty_get(this, 1370408087); }
  set DeviceType(value: Enum.XRDeviceType) { __CPP_ComponentProperty_set(this, 1370408087, value); }
  get PoseLocation(): Enum.XRPoseLocation { return __CPP_ComponentProperty_get(this, 90502617); }
  set PoseLocation(value: Enum.XRPoseLocation) { __CPP_ComponentProperty_set(this, 90502617, value); }
  get TransformSpace(): Enum.XRTransformSpace { return __CPP_ComponentProperty_get(this, 123171866); }
  set TransformSpace(value: Enum.XRTransformSpace) { __CPP_ComponentProperty_set(this, 123171866, value); }
  get Rotation(): boolean { return __CPP_ComponentProperty_get(this, 731647032); }
  set Rotation(value: boolean) { __CPP_ComponentProperty_set(this, 731647032, value); }
  get Scale(): boolean { return __CPP_ComponentProperty_get(this, 1034704341); }
  set Scale(value: boolean) { __CPP_ComponentProperty_set(this, 1034704341, value); }
}

export class LightComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 3732905662; }
  get LightColor(): Color { return __CPP_ComponentProperty_get(this, 1934568030); }
  set LightColor(value: Color) { __CPP_ComponentProperty_set(this, 1934568030, value); }
  get Intensity(): number { return __CPP_ComponentProperty_get(this, 2874814740); }
  set Intensity(value: number) { __CPP_ComponentProperty_set(this, 2874814740, value); }
  get CastShadows(): boolean { return __CPP_ComponentProperty_get(this, 250551917); }
  set CastShadows(value: boolean) { __CPP_ComponentProperty_set(this, 250551917, value); }
  get PenumbraSize(): number { return __CPP_ComponentProperty_get(this, 3718860233); }
  set PenumbraSize(value: number) { __CPP_ComponentProperty_set(this, 3718860233, value); }
  get SlopeBias(): number { return __CPP_ComponentProperty_get(this, 3444063500); }
  set SlopeBias(value: number) { __CPP_ComponentProperty_set(this, 3444063500, value); }
  get ConstantBias(): number { return __CPP_ComponentProperty_get(this, 3565918648); }
  set ConstantBias(value: number) { __CPP_ComponentProperty_set(this, 3565918648, value); }
}

export class DirectionalLightComponent extends LightComponent
{
  public static GetTypeNameHash(): number { return 3687235078; }
  get NumCascades(): number { return __CPP_ComponentProperty_get(this, 4241707254); }
  set NumCascades(value: number) { __CPP_ComponentProperty_set(this, 4241707254, value); }
  get MinShadowRange(): number { return __CPP_ComponentProperty_get(this, 4063057648); }
  set MinShadowRange(value: number) { __CPP_ComponentProperty_set(this, 4063057648, value); }
  get FadeOutStart(): number { return __CPP_ComponentProperty_get(this, 1106469026); }
  set FadeOutStart(value: number) { __CPP_ComponentProperty_set(this, 1106469026, value); }
  get SplitModeWeight(): number { return __CPP_ComponentProperty_get(this, 2604859805); }
  set SplitModeWeight(value: number) { __CPP_ComponentProperty_set(this, 2604859805, value); }
  get NearPlaneOffset(): number { return __CPP_ComponentProperty_get(this, 1922790091); }
  set NearPlaneOffset(value: number) { __CPP_ComponentProperty_set(this, 1922790091, value); }
}

export class EventMessageHandlerBaseComponent extends Component
{
  public static GetTypeNameHash(): number { return 1303556842; }
}

export class EventMessageHandlerComponent extends EventMessageHandlerBaseComponent
{
  public static GetTypeNameHash(): number { return 2410982864; }
  get HandleGlobalEvents(): boolean { return __CPP_ComponentProperty_get(this, 363574155); }
  set HandleGlobalEvents(value: boolean) { __CPP_ComponentProperty_set(this, 363574155, value); }
  get PassThroughUnhandledEvents(): boolean { return __CPP_ComponentProperty_get(this, 527316798); }
  set PassThroughUnhandledEvents(value: boolean) { __CPP_ComponentProperty_set(this, 527316798, value); }
}

export class FakeRopeComponent extends Component
{
  public static GetTypeNameHash(): number { return 823810230; }
  get Anchor(): string { return __CPP_ComponentProperty_get(this, 2019703115); }
  set Anchor(value: string) { __CPP_ComponentProperty_set(this, 2019703115, value); }
  get AttachToOrigin(): boolean { return __CPP_ComponentProperty_get(this, 3630414179); }
  set AttachToOrigin(value: boolean) { __CPP_ComponentProperty_set(this, 3630414179, value); }
  get AttachToAnchor(): boolean { return __CPP_ComponentProperty_get(this, 572418253); }
  set AttachToAnchor(value: boolean) { __CPP_ComponentProperty_set(this, 572418253, value); }
  get Pieces(): number { return __CPP_ComponentProperty_get(this, 1912535346); }
  set Pieces(value: number) { __CPP_ComponentProperty_set(this, 1912535346, value); }
  get Slack(): number { return __CPP_ComponentProperty_get(this, 676118123); }
  set Slack(value: number) { __CPP_ComponentProperty_set(this, 676118123, value); }
  get Damping(): number { return __CPP_ComponentProperty_get(this, 151083567); }
  set Damping(value: number) { __CPP_ComponentProperty_set(this, 151083567, value); }
  get WindInfluence(): number { return __CPP_ComponentProperty_get(this, 47944905); }
  set WindInfluence(value: number) { __CPP_ComponentProperty_set(this, 47944905, value); }
}

export class FmodComponent extends Component
{
  public static GetTypeNameHash(): number { return 3900472244; }
}

export class FmodEventComponent extends FmodComponent
{
  public static GetTypeNameHash(): number { return 2814833380; }
  Restart(): void { __CPP_ComponentFunction_Call(this, 958670764); }
  StartOneShot(): void { __CPP_ComponentFunction_Call(this, 1161139504); }
  StopSound(Immediate: boolean): void { __CPP_ComponentFunction_Call(this, 502299734, Immediate); }
  SoundCue(): void { __CPP_ComponentFunction_Call(this, 366471496); }
  SetEventParameter(ParamName: string, Value: number): void { __CPP_ComponentFunction_Call(this, 2121876374, ParamName, Value); }
  get Paused(): boolean { return __CPP_ComponentProperty_get(this, 3424531128); }
  set Paused(value: boolean) { __CPP_ComponentProperty_set(this, 3424531128, value); }
  get Volume(): number { return __CPP_ComponentProperty_get(this, 4162464906); }
  set Volume(value: number) { __CPP_ComponentProperty_set(this, 4162464906, value); }
  get Pitch(): number { return __CPP_ComponentProperty_get(this, 3779070326); }
  set Pitch(value: number) { __CPP_ComponentProperty_set(this, 3779070326, value); }
  get SoundEvent(): string { return __CPP_ComponentProperty_get(this, 2550082732); }
  set SoundEvent(value: string) { __CPP_ComponentProperty_set(this, 2550082732, value); }
  get UseOcclusion(): boolean { return __CPP_ComponentProperty_get(this, 1709596494); }
  set UseOcclusion(value: boolean) { __CPP_ComponentProperty_set(this, 1709596494, value); }
  get OcclusionThreshold(): number { return __CPP_ComponentProperty_get(this, 1819793160); }
  set OcclusionThreshold(value: number) { __CPP_ComponentProperty_set(this, 1819793160, value); }
  get OcclusionCollisionLayer(): number { return __CPP_ComponentProperty_get(this, 372633314); }
  set OcclusionCollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 372633314, value); }
  get OnFinishedAction(): Enum.OnComponentFinishedAction { return __CPP_ComponentProperty_get(this, 2674070426); }
  set OnFinishedAction(value: Enum.OnComponentFinishedAction) { __CPP_ComponentProperty_set(this, 2674070426, value); }
  get ShowDebugInfo(): boolean { return __CPP_ComponentProperty_get(this, 2784458228); }
  set ShowDebugInfo(value: boolean) { __CPP_ComponentProperty_set(this, 2784458228, value); }
}

export class FmodListenerComponent extends FmodComponent
{
  public static GetTypeNameHash(): number { return 98225585; }
  get ListenerIndex(): number { return __CPP_ComponentProperty_get(this, 826440037); }
  set ListenerIndex(value: number) { __CPP_ComponentProperty_set(this, 826440037, value); }
}

export class FogComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 3095518117; }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3730513872); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3730513872, value); }
  get Density(): number { return __CPP_ComponentProperty_get(this, 3233698728); }
  set Density(value: number) { __CPP_ComponentProperty_set(this, 3233698728, value); }
  get HeightFalloff(): number { return __CPP_ComponentProperty_get(this, 1854481097); }
  set HeightFalloff(value: number) { __CPP_ComponentProperty_set(this, 1854481097, value); }
  get ModulateWithSkyColor(): boolean { return __CPP_ComponentProperty_get(this, 992867426); }
  set ModulateWithSkyColor(value: boolean) { __CPP_ComponentProperty_set(this, 992867426, value); }
  get SkyDistance(): number { return __CPP_ComponentProperty_get(this, 645510939); }
  set SkyDistance(value: number) { __CPP_ComponentProperty_set(this, 645510939, value); }
}

export class ForwardEventsToGameStateComponent extends EventMessageHandlerComponent
{
  public static GetTypeNameHash(): number { return 1132316266; }
}

export class MeshComponent extends MeshComponentBase
{
  public static GetTypeNameHash(): number { return 481758555; }
  get Mesh(): string { return __CPP_ComponentProperty_get(this, 1864394775); }
  set Mesh(value: string) { __CPP_ComponentProperty_set(this, 1864394775, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1079163548); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1079163548, value); }
}

export class GizmoComponent extends MeshComponent
{
  public static GetTypeNameHash(): number { return 1286849521; }
}

export class GrabbableItemComponent extends Component
{
  public static GetTypeNameHash(): number { return 3683886134; }
}

export class GreyBoxComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1977995121; }
  get Shape(): Enum.GreyBoxShape { return __CPP_ComponentProperty_get(this, 861097748); }
  set Shape(value: Enum.GreyBoxShape) { __CPP_ComponentProperty_set(this, 861097748, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 3493112051); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 3493112051, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 457155504); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 457155504, value); }
  get SizeNegX(): number { return __CPP_ComponentProperty_get(this, 1628214514); }
  set SizeNegX(value: number) { __CPP_ComponentProperty_set(this, 1628214514, value); }
  get SizePosX(): number { return __CPP_ComponentProperty_get(this, 608676239); }
  set SizePosX(value: number) { __CPP_ComponentProperty_set(this, 608676239, value); }
  get SizeNegY(): number { return __CPP_ComponentProperty_get(this, 1931762144); }
  set SizeNegY(value: number) { __CPP_ComponentProperty_set(this, 1931762144, value); }
  get SizePosY(): number { return __CPP_ComponentProperty_get(this, 3393461640); }
  set SizePosY(value: number) { __CPP_ComponentProperty_set(this, 3393461640, value); }
  get SizeNegZ(): number { return __CPP_ComponentProperty_get(this, 2278470836); }
  set SizeNegZ(value: number) { __CPP_ComponentProperty_set(this, 2278470836, value); }
  get SizePosZ(): number { return __CPP_ComponentProperty_get(this, 3664653916); }
  set SizePosZ(value: number) { __CPP_ComponentProperty_set(this, 3664653916, value); }
  get Detail(): number { return __CPP_ComponentProperty_get(this, 509925246); }
  set Detail(value: number) { __CPP_ComponentProperty_set(this, 509925246, value); }
  get Curvature(): number { return __CPP_ComponentProperty_get(this, 3496336964); }
  set Curvature(value: number) { __CPP_ComponentProperty_set(this, 3496336964, value); }
  get Thickness(): number { return __CPP_ComponentProperty_get(this, 2680750755); }
  set Thickness(value: number) { __CPP_ComponentProperty_set(this, 2680750755, value); }
  get SlopedTop(): boolean { return __CPP_ComponentProperty_get(this, 321690466); }
  set SlopedTop(value: boolean) { __CPP_ComponentProperty_set(this, 321690466, value); }
  get SlopedBottom(): boolean { return __CPP_ComponentProperty_get(this, 1032913302); }
  set SlopedBottom(value: boolean) { __CPP_ComponentProperty_set(this, 1032913302, value); }
  get GenerateCollision(): boolean { return __CPP_ComponentProperty_get(this, 3417576651); }
  set GenerateCollision(value: boolean) { __CPP_ComponentProperty_set(this, 3417576651, value); }
  get IncludeInNavmesh(): boolean { return __CPP_ComponentProperty_get(this, 850252985); }
  set IncludeInNavmesh(value: boolean) { __CPP_ComponentProperty_set(this, 850252985, value); }
  get UseAsOccluder(): boolean { return __CPP_ComponentProperty_get(this, 1048772127); }
  set UseAsOccluder(value: boolean) { __CPP_ComponentProperty_set(this, 1048772127, value); }
}

export class HeadBoneComponent extends Component
{
  public static GetTypeNameHash(): number { return 922575998; }
  SetVerticalRotation(Radians: number): void { __CPP_ComponentFunction_Call(this, 1988528221, Radians); }
  ChangeVerticalRotation(Radians: number): void { __CPP_ComponentFunction_Call(this, 2824752632, Radians); }
  get VerticalRotation(): number { return __CPP_ComponentProperty_get(this, 3837909370); }
  set VerticalRotation(value: number) { __CPP_ComponentProperty_set(this, 3837909370, value); }
}

export class HeightfieldComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 3986520107; }
  get HeightfieldImage(): string { return __CPP_ComponentProperty_get(this, 1169546898); }
  set HeightfieldImage(value: string) { __CPP_ComponentProperty_set(this, 1169546898, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 230112871); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 230112871, value); }
  get HalfExtents(): Vec2 { return __CPP_ComponentProperty_get(this, 1611289218); }
  set HalfExtents(value: Vec2) { __CPP_ComponentProperty_set(this, 1611289218, value); }
  get Height(): number { return __CPP_ComponentProperty_get(this, 999591926); }
  set Height(value: number) { __CPP_ComponentProperty_set(this, 999591926, value); }
  get Tesselation(): Vec2 { return __CPP_ComponentProperty_get(this, 1937881886); }
  set Tesselation(value: Vec2) { __CPP_ComponentProperty_set(this, 1937881886, value); }
  get TexCoordOffset(): Vec2 { return __CPP_ComponentProperty_get(this, 38715340); }
  set TexCoordOffset(value: Vec2) { __CPP_ComponentProperty_set(this, 38715340, value); }
  get TexCoordScale(): Vec2 { return __CPP_ComponentProperty_get(this, 331654594); }
  set TexCoordScale(value: Vec2) { __CPP_ComponentProperty_set(this, 331654594, value); }
  get GenerateCollision(): boolean { return __CPP_ComponentProperty_get(this, 2406820273); }
  set GenerateCollision(value: boolean) { __CPP_ComponentProperty_set(this, 2406820273, value); }
  get ColMeshTesselation(): Vec2 { return __CPP_ComponentProperty_get(this, 2760201197); }
  set ColMeshTesselation(value: Vec2) { __CPP_ComponentProperty_set(this, 2760201197, value); }
  get IncludeInNavmesh(): boolean { return __CPP_ComponentProperty_get(this, 4232264184); }
  set IncludeInNavmesh(value: boolean) { __CPP_ComponentProperty_set(this, 4232264184, value); }
}

export class InputComponent extends Component
{
  public static GetTypeNameHash(): number { return 3356365986; }
  GetCurrentInputState(InputAction: string, OnlyKeyPressed: boolean): number { return __CPP_ComponentFunction_Call(this, 203962772, InputAction, OnlyKeyPressed); }
  get InputSet(): string { return __CPP_ComponentProperty_get(this, 3122856233); }
  set InputSet(value: string) { __CPP_ComponentProperty_set(this, 3122856233, value); }
  get Granularity(): Enum.InputMessageGranularity { return __CPP_ComponentProperty_get(this, 4138318112); }
  set Granularity(value: Enum.InputMessageGranularity) { __CPP_ComponentProperty_set(this, 4138318112, value); }
  get ForwardToBlackboard(): boolean { return __CPP_ComponentProperty_get(this, 37629567); }
  set ForwardToBlackboard(value: boolean) { __CPP_ComponentProperty_set(this, 37629567, value); }
}

export class InstancedMeshComponent extends MeshComponentBase
{
  public static GetTypeNameHash(): number { return 3725395076; }
  get Mesh(): string { return __CPP_ComponentProperty_get(this, 1897303241); }
  set Mesh(value: string) { __CPP_ComponentProperty_set(this, 1897303241, value); }
  get MainColor(): Color { return __CPP_ComponentProperty_get(this, 494953498); }
  set MainColor(value: Color) { __CPP_ComponentProperty_set(this, 494953498, value); }
}

export class JointAttachmentComponent extends Component
{
  public static GetTypeNameHash(): number { return 2994552942; }
  get JointName(): string { return __CPP_ComponentProperty_get(this, 3084471528); }
  set JointName(value: string) { __CPP_ComponentProperty_set(this, 3084471528, value); }
  get PositionOffset(): Vec3 { return __CPP_ComponentProperty_get(this, 513472167); }
  set PositionOffset(value: Vec3) { __CPP_ComponentProperty_set(this, 513472167, value); }
  get RotationOffset(): Quat { return __CPP_ComponentProperty_get(this, 1197051065); }
  set RotationOffset(value: Quat) { __CPP_ComponentProperty_set(this, 1197051065, value); }
}

export class JointOverrideComponent extends Component
{
  public static GetTypeNameHash(): number { return 1611350560; }
  get JointName(): string { return __CPP_ComponentProperty_get(this, 2457458788); }
  set JointName(value: string) { __CPP_ComponentProperty_set(this, 2457458788, value); }
  get OverridePosition(): boolean { return __CPP_ComponentProperty_get(this, 1635931413); }
  set OverridePosition(value: boolean) { __CPP_ComponentProperty_set(this, 1635931413, value); }
  get OverrideRotation(): boolean { return __CPP_ComponentProperty_get(this, 2171188702); }
  set OverrideRotation(value: boolean) { __CPP_ComponentProperty_set(this, 2171188702, value); }
  get OverrideScale(): boolean { return __CPP_ComponentProperty_get(this, 1486447761); }
  set OverrideScale(value: boolean) { __CPP_ComponentProperty_set(this, 1486447761, value); }
}

export class JoltActorComponent extends Component
{
  public static GetTypeNameHash(): number { return 145129917; }
  GetObjectFilterID(): number { return __CPP_ComponentFunction_Call(this, 3517226245); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 673616202); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 673616202, value); }
}

export class JoltBoneColliderComponent extends Component
{
  public static GetTypeNameHash(): number { return 2345071682; }
  GetObjectFilterID(): number { return __CPP_ComponentFunction_Call(this, 2542769815); }
  RecreatePhysicsShapes(): void { __CPP_ComponentFunction_Call(this, 1453744995); }
  get QueryShapeOnly(): boolean { return __CPP_ComponentProperty_get(this, 575223213); }
  set QueryShapeOnly(value: boolean) { __CPP_ComponentProperty_set(this, 575223213, value); }
  get UpdateThreshold(): number { return __CPP_ComponentProperty_get(this, 3568632103); }
  set UpdateThreshold(value: number) { __CPP_ComponentProperty_set(this, 3568632103, value); }
}

export class JoltCharacterControllerComponent extends Component
{
  public static GetTypeNameHash(): number { return 2932604411; }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 889588739); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 889588739, value); }
  get PresenceCollisionLayer(): number { return __CPP_ComponentProperty_get(this, 3921741155); }
  set PresenceCollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 3921741155, value); }
  get Mass(): number { return __CPP_ComponentProperty_get(this, 1496629677); }
  set Mass(value: number) { __CPP_ComponentProperty_set(this, 1496629677, value); }
  get Strength(): number { return __CPP_ComponentProperty_get(this, 1083462334); }
  set Strength(value: number) { __CPP_ComponentProperty_set(this, 1083462334, value); }
  get MaxClimbingSlope(): number { return __CPP_ComponentProperty_get(this, 1096646423); }
  set MaxClimbingSlope(value: number) { __CPP_ComponentProperty_set(this, 1096646423, value); }
  get DebugFlags(): Flags.JoltCharacterDebugFlags { return __CPP_ComponentProperty_get(this, 3328405572); }
  set DebugFlags(value: Flags.JoltCharacterDebugFlags) { __CPP_ComponentProperty_set(this, 3328405572, value); }
}

export class JoltConstraintComponent extends Component
{
  public static GetTypeNameHash(): number { return 3263884947; }
  get PairCollision(): boolean { return __CPP_ComponentProperty_get(this, 480650892); }
  set PairCollision(value: boolean) { __CPP_ComponentProperty_set(this, 480650892, value); }
  get ParentActor(): string { return __CPP_ComponentProperty_get(this, 2060053415); }
  set ParentActor(value: string) { __CPP_ComponentProperty_set(this, 2060053415, value); }
  get ChildActor(): string { return __CPP_ComponentProperty_get(this, 127897865); }
  set ChildActor(value: string) { __CPP_ComponentProperty_set(this, 127897865, value); }
  get ChildActorAnchor(): string { return __CPP_ComponentProperty_get(this, 1844544929); }
  set ChildActorAnchor(value: string) { __CPP_ComponentProperty_set(this, 1844544929, value); }
}

export class JoltConeConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 4116378593; }
  get ConeAngle(): number { return __CPP_ComponentProperty_get(this, 2701179480); }
  set ConeAngle(value: number) { __CPP_ComponentProperty_set(this, 2701179480, value); }
}

export class JoltDefaultCharacterComponent extends JoltCharacterControllerComponent
{
  public static GetTypeNameHash(): number { return 3562973243; }
  TeleportCharacter(globalFootPosition: Vec3): void { __CPP_ComponentFunction_Call(this, 511618597, globalFootPosition); }
  IsStandingOnGround(): boolean { return __CPP_ComponentFunction_Call(this, 812865174); }
  IsSlidingOnGround(): boolean { return __CPP_ComponentFunction_Call(this, 3974681424); }
  IsInAir(): boolean { return __CPP_ComponentFunction_Call(this, 2707039502); }
  IsCrouching(): boolean { return __CPP_ComponentFunction_Call(this, 2850427228); }
  get ShapeRadius(): number { return __CPP_ComponentProperty_get(this, 759885506); }
  set ShapeRadius(value: number) { __CPP_ComponentProperty_set(this, 759885506, value); }
  get CrouchHeight(): number { return __CPP_ComponentProperty_get(this, 307699824); }
  set CrouchHeight(value: number) { __CPP_ComponentProperty_set(this, 307699824, value); }
  get StandHeight(): number { return __CPP_ComponentProperty_get(this, 3920831966); }
  set StandHeight(value: number) { __CPP_ComponentProperty_set(this, 3920831966, value); }
  get FootRadius(): number { return __CPP_ComponentProperty_get(this, 3158381930); }
  set FootRadius(value: number) { __CPP_ComponentProperty_set(this, 3158381930, value); }
  get WalkSpeedCrouching(): number { return __CPP_ComponentProperty_get(this, 4185322425); }
  set WalkSpeedCrouching(value: number) { __CPP_ComponentProperty_set(this, 4185322425, value); }
  get WalkSpeedStanding(): number { return __CPP_ComponentProperty_get(this, 1886508903); }
  set WalkSpeedStanding(value: number) { __CPP_ComponentProperty_set(this, 1886508903, value); }
  get WalkSpeedRunning(): number { return __CPP_ComponentProperty_get(this, 3517983082); }
  set WalkSpeedRunning(value: number) { __CPP_ComponentProperty_set(this, 3517983082, value); }
  get AirSpeed(): number { return __CPP_ComponentProperty_get(this, 460141912); }
  set AirSpeed(value: number) { __CPP_ComponentProperty_set(this, 460141912, value); }
  get AirFriction(): number { return __CPP_ComponentProperty_get(this, 3853034609); }
  set AirFriction(value: number) { __CPP_ComponentProperty_set(this, 3853034609, value); }
  get MaxStepUp(): number { return __CPP_ComponentProperty_get(this, 509782154); }
  set MaxStepUp(value: number) { __CPP_ComponentProperty_set(this, 509782154, value); }
  get MaxStepDown(): number { return __CPP_ComponentProperty_get(this, 847988376); }
  set MaxStepDown(value: number) { __CPP_ComponentProperty_set(this, 847988376, value); }
  get JumpImpulse(): number { return __CPP_ComponentProperty_get(this, 3059615418); }
  set JumpImpulse(value: number) { __CPP_ComponentProperty_set(this, 3059615418, value); }
  get RotateSpeed(): number { return __CPP_ComponentProperty_get(this, 585733280); }
  set RotateSpeed(value: number) { __CPP_ComponentProperty_set(this, 585733280, value); }
  get WalkSurfaceInteraction(): string { return __CPP_ComponentProperty_get(this, 4274180067); }
  set WalkSurfaceInteraction(value: string) { __CPP_ComponentProperty_set(this, 4274180067, value); }
  get WalkInteractionDistance(): number { return __CPP_ComponentProperty_get(this, 3899402690); }
  set WalkInteractionDistance(value: number) { __CPP_ComponentProperty_set(this, 3899402690, value); }
  get RunInteractionDistance(): number { return __CPP_ComponentProperty_get(this, 3797554199); }
  set RunInteractionDistance(value: number) { __CPP_ComponentProperty_set(this, 3797554199, value); }
  get FallbackWalkSurface(): string { return __CPP_ComponentProperty_get(this, 4005610831); }
  set FallbackWalkSurface(value: string) { __CPP_ComponentProperty_set(this, 4005610831, value); }
  get HeadObject(): string { return __CPP_ComponentProperty_get(this, 2946519742); }
  set HeadObject(value: string) { __CPP_ComponentProperty_set(this, 2946519742, value); }
}

export class JoltDistanceConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 2156492742; }
  get MinDistance(): number { return __CPP_ComponentProperty_get(this, 485426105); }
  set MinDistance(value: number) { __CPP_ComponentProperty_set(this, 485426105, value); }
  get MaxDistance(): number { return __CPP_ComponentProperty_get(this, 253460043); }
  set MaxDistance(value: number) { __CPP_ComponentProperty_set(this, 253460043, value); }
  get Frequency(): number { return __CPP_ComponentProperty_get(this, 573651481); }
  set Frequency(value: number) { __CPP_ComponentProperty_set(this, 573651481, value); }
  get Damping(): number { return __CPP_ComponentProperty_get(this, 2127796707); }
  set Damping(value: number) { __CPP_ComponentProperty_set(this, 2127796707, value); }
}

export class JoltDynamicActorComponent extends JoltActorComponent
{
  public static GetTypeNameHash(): number { return 3777484264; }
  AddLinearForce(vForce: Vec3): void { __CPP_ComponentFunction_Call(this, 3643321653, vForce); }
  AddLinearImpulse(vImpulse: Vec3): void { __CPP_ComponentFunction_Call(this, 1432037690, vImpulse); }
  AddAngularForce(vForce: Vec3): void { __CPP_ComponentFunction_Call(this, 1656271745, vForce); }
  AddAngularImpulse(vImpulse: Vec3): void { __CPP_ComponentFunction_Call(this, 3894470927, vImpulse); }
  get Kinematic(): boolean { return __CPP_ComponentProperty_get(this, 93598667); }
  set Kinematic(value: boolean) { __CPP_ComponentProperty_set(this, 93598667, value); }
  get StartAsleep(): boolean { return __CPP_ComponentProperty_get(this, 1011106744); }
  set StartAsleep(value: boolean) { __CPP_ComponentProperty_set(this, 1011106744, value); }
  get Mass(): number { return __CPP_ComponentProperty_get(this, 69266294); }
  set Mass(value: number) { __CPP_ComponentProperty_set(this, 69266294, value); }
  get Density(): number { return __CPP_ComponentProperty_get(this, 3010502594); }
  set Density(value: number) { __CPP_ComponentProperty_set(this, 3010502594, value); }
  get Surface(): string { return __CPP_ComponentProperty_get(this, 2626368487); }
  set Surface(value: string) { __CPP_ComponentProperty_set(this, 2626368487, value); }
  get GravityFactor(): number { return __CPP_ComponentProperty_get(this, 1844114909); }
  set GravityFactor(value: number) { __CPP_ComponentProperty_set(this, 1844114909, value); }
  get LinearDamping(): number { return __CPP_ComponentProperty_get(this, 3951056166); }
  set LinearDamping(value: number) { __CPP_ComponentProperty_set(this, 3951056166, value); }
  get AngularDamping(): number { return __CPP_ComponentProperty_get(this, 364927539); }
  set AngularDamping(value: number) { __CPP_ComponentProperty_set(this, 364927539, value); }
  get ContinuousCollisionDetection(): boolean { return __CPP_ComponentProperty_get(this, 106587755); }
  set ContinuousCollisionDetection(value: boolean) { __CPP_ComponentProperty_set(this, 106587755, value); }
  get OnContact(): Flags.OnJoltContact { return __CPP_ComponentProperty_get(this, 1306108781); }
  set OnContact(value: Flags.OnJoltContact) { __CPP_ComponentProperty_set(this, 1306108781, value); }
  get CustomCenterOfMass(): boolean { return __CPP_ComponentProperty_get(this, 113718223); }
  set CustomCenterOfMass(value: boolean) { __CPP_ComponentProperty_set(this, 113718223, value); }
  get CenterOfMass(): Vec3 { return __CPP_ComponentProperty_get(this, 2620231231); }
  set CenterOfMass(value: Vec3) { __CPP_ComponentProperty_set(this, 2620231231, value); }
}

export class JoltFixedConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 1720717420; }
}

export class JoltGrabObjectComponent extends Component
{
  public static GetTypeNameHash(): number { return 864826840; }
  GrabNearbyObject(): boolean { return __CPP_ComponentFunction_Call(this, 2350886449); }
  HasObjectGrabbed(): boolean { return __CPP_ComponentFunction_Call(this, 4210554877); }
  DropGrabbedObject(): void { __CPP_ComponentFunction_Call(this, 1658214217); }
  ThrowGrabbedObject(Direction: Vec3): void { __CPP_ComponentFunction_Call(this, 2060605967, Direction); }
  BreakObjectGrab(): void { __CPP_ComponentFunction_Call(this, 3977922082); }
  get MaxGrabPointDistance(): number { return __CPP_ComponentProperty_get(this, 291280383); }
  set MaxGrabPointDistance(value: number) { __CPP_ComponentProperty_set(this, 291280383, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 556728919); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 556728919, value); }
  get SpringStiffness(): number { return __CPP_ComponentProperty_get(this, 2653139541); }
  set SpringStiffness(value: number) { __CPP_ComponentProperty_set(this, 2653139541, value); }
  get SpringDamping(): number { return __CPP_ComponentProperty_get(this, 3543371364); }
  set SpringDamping(value: number) { __CPP_ComponentProperty_set(this, 3543371364, value); }
  get BreakDistance(): number { return __CPP_ComponentProperty_get(this, 449557248); }
  set BreakDistance(value: number) { __CPP_ComponentProperty_set(this, 449557248, value); }
  get AttachTo(): string { return __CPP_ComponentProperty_get(this, 2810409305); }
  set AttachTo(value: string) { __CPP_ComponentProperty_set(this, 2810409305, value); }
  get GrabAnyObjectWithSize(): number { return __CPP_ComponentProperty_get(this, 607170972); }
  set GrabAnyObjectWithSize(value: number) { __CPP_ComponentProperty_set(this, 607170972, value); }
}

export class JoltHingeConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 1610552646; }
  get LimitMode(): Enum.JoltConstraintLimitMode { return __CPP_ComponentProperty_get(this, 413757831); }
  set LimitMode(value: Enum.JoltConstraintLimitMode) { __CPP_ComponentProperty_set(this, 413757831, value); }
  get LowerLimit(): number { return __CPP_ComponentProperty_get(this, 3460083608); }
  set LowerLimit(value: number) { __CPP_ComponentProperty_set(this, 3460083608, value); }
  get UpperLimit(): number { return __CPP_ComponentProperty_get(this, 193322220); }
  set UpperLimit(value: number) { __CPP_ComponentProperty_set(this, 193322220, value); }
  get Friction(): number { return __CPP_ComponentProperty_get(this, 3635866091); }
  set Friction(value: number) { __CPP_ComponentProperty_set(this, 3635866091, value); }
  get DriveMode(): Enum.JoltConstraintDriveMode { return __CPP_ComponentProperty_get(this, 4085447402); }
  set DriveMode(value: Enum.JoltConstraintDriveMode) { __CPP_ComponentProperty_set(this, 4085447402, value); }
  get DriveTargetValue(): number { return __CPP_ComponentProperty_get(this, 145615573); }
  set DriveTargetValue(value: number) { __CPP_ComponentProperty_set(this, 145615573, value); }
  get DriveStrength(): number { return __CPP_ComponentProperty_get(this, 24226626); }
  set DriveStrength(value: number) { __CPP_ComponentProperty_set(this, 24226626, value); }
}

export class JoltPointConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 2980385397; }
}

export class JoltQueryShapeActorComponent extends JoltActorComponent
{
  public static GetTypeNameHash(): number { return 2989589675; }
  get Surface(): string { return __CPP_ComponentProperty_get(this, 1064934267); }
  set Surface(value: string) { __CPP_ComponentProperty_set(this, 1064934267, value); }
}

export class JoltRagdollComponent extends Component
{
  public static GetTypeNameHash(): number { return 2568542841; }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 2202579508); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 2202579508, value); }
  get SelfCollision(): boolean { return __CPP_ComponentProperty_get(this, 322042574); }
  set SelfCollision(value: boolean) { __CPP_ComponentProperty_set(this, 322042574, value); }
  get Start(): Enum.JoltRagdollStart { return __CPP_ComponentProperty_get(this, 2322490447); }
  set Start(value: Enum.JoltRagdollStart) { __CPP_ComponentProperty_set(this, 2322490447, value); }
  get GravityFactor(): number { return __CPP_ComponentProperty_get(this, 4165039863); }
  set GravityFactor(value: number) { __CPP_ComponentProperty_set(this, 4165039863, value); }
  get Stiffness(): number { return __CPP_ComponentProperty_get(this, 4022638923); }
  set Stiffness(value: number) { __CPP_ComponentProperty_set(this, 4022638923, value); }
}

export class JoltRopeComponent extends Component
{
  public static GetTypeNameHash(): number { return 3256239698; }
  get Anchor(): string { return __CPP_ComponentProperty_get(this, 2607266924); }
  set Anchor(value: string) { __CPP_ComponentProperty_set(this, 2607266924, value); }
  get AttachToOrigin(): boolean { return __CPP_ComponentProperty_get(this, 1317836455); }
  set AttachToOrigin(value: boolean) { __CPP_ComponentProperty_set(this, 1317836455, value); }
  get AttachToAnchor(): boolean { return __CPP_ComponentProperty_get(this, 2117347900); }
  set AttachToAnchor(value: boolean) { __CPP_ComponentProperty_set(this, 2117347900, value); }
  get Pieces(): number { return __CPP_ComponentProperty_get(this, 147598529); }
  set Pieces(value: number) { __CPP_ComponentProperty_set(this, 147598529, value); }
  get Slack(): number { return __CPP_ComponentProperty_get(this, 3335617833); }
  set Slack(value: number) { __CPP_ComponentProperty_set(this, 3335617833, value); }
  get Mass(): number { return __CPP_ComponentProperty_get(this, 4247036459); }
  set Mass(value: number) { __CPP_ComponentProperty_set(this, 4247036459, value); }
  get Thickness(): number { return __CPP_ComponentProperty_get(this, 3452861174); }
  set Thickness(value: number) { __CPP_ComponentProperty_set(this, 3452861174, value); }
  get BendStiffness(): number { return __CPP_ComponentProperty_get(this, 2286126276); }
  set BendStiffness(value: number) { __CPP_ComponentProperty_set(this, 2286126276, value); }
  get MaxBend(): number { return __CPP_ComponentProperty_get(this, 2490054614); }
  set MaxBend(value: number) { __CPP_ComponentProperty_set(this, 2490054614, value); }
  get MaxTwist(): number { return __CPP_ComponentProperty_get(this, 2197065425); }
  set MaxTwist(value: number) { __CPP_ComponentProperty_set(this, 2197065425, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 2000697062); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 2000697062, value); }
  get Surface(): string { return __CPP_ComponentProperty_get(this, 81055321); }
  set Surface(value: string) { __CPP_ComponentProperty_set(this, 81055321, value); }
  get GravityFactor(): number { return __CPP_ComponentProperty_get(this, 845736819); }
  set GravityFactor(value: number) { __CPP_ComponentProperty_set(this, 845736819, value); }
  get SelfCollision(): boolean { return __CPP_ComponentProperty_get(this, 788241200); }
  set SelfCollision(value: boolean) { __CPP_ComponentProperty_set(this, 788241200, value); }
  get ContinuousCollisionDetection(): boolean { return __CPP_ComponentProperty_get(this, 3063631935); }
  set ContinuousCollisionDetection(value: boolean) { __CPP_ComponentProperty_set(this, 3063631935, value); }
}

export class JoltSettingsComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 3029085394; }
  get ObjectGravity(): Vec3 { return __CPP_ComponentProperty_get(this, 4250321880); }
  set ObjectGravity(value: Vec3) { __CPP_ComponentProperty_set(this, 4250321880, value); }
  get CharacterGravity(): Vec3 { return __CPP_ComponentProperty_get(this, 804056281); }
  set CharacterGravity(value: Vec3) { __CPP_ComponentProperty_set(this, 804056281, value); }
  get SteppingMode(): Enum.JoltSteppingMode { return __CPP_ComponentProperty_get(this, 170268017); }
  set SteppingMode(value: Enum.JoltSteppingMode) { __CPP_ComponentProperty_set(this, 170268017, value); }
  get FixedFrameRate(): number { return __CPP_ComponentProperty_get(this, 1835756716); }
  set FixedFrameRate(value: number) { __CPP_ComponentProperty_set(this, 1835756716, value); }
  get MaxSubSteps(): number { return __CPP_ComponentProperty_get(this, 1374249886); }
  set MaxSubSteps(value: number) { __CPP_ComponentProperty_set(this, 1374249886, value); }
  get MaxBodies(): number { return __CPP_ComponentProperty_get(this, 1043658747); }
  set MaxBodies(value: number) { __CPP_ComponentProperty_set(this, 1043658747, value); }
}

export class JoltShapeComponent extends Component
{
  public static GetTypeNameHash(): number { return 2007253347; }
}

export class JoltShapeBoxComponent extends JoltShapeComponent
{
  public static GetTypeNameHash(): number { return 1155133265; }
  get HalfExtents(): Vec3 { return __CPP_ComponentProperty_get(this, 3149202545); }
  set HalfExtents(value: Vec3) { __CPP_ComponentProperty_set(this, 3149202545, value); }
}

export class JoltShapeCapsuleComponent extends JoltShapeComponent
{
  public static GetTypeNameHash(): number { return 2834745794; }
  get Height(): number { return __CPP_ComponentProperty_get(this, 2648342500); }
  set Height(value: number) { __CPP_ComponentProperty_set(this, 2648342500, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 3632574857); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 3632574857, value); }
}

export class JoltShapeConvexHullComponent extends JoltShapeComponent
{
  public static GetTypeNameHash(): number { return 274589303; }
  get CollisionMesh(): string { return __CPP_ComponentProperty_get(this, 793096053); }
  set CollisionMesh(value: string) { __CPP_ComponentProperty_set(this, 793096053, value); }
}

export class JoltShapeCylinderComponent extends JoltShapeComponent
{
  public static GetTypeNameHash(): number { return 2955814917; }
  get Height(): number { return __CPP_ComponentProperty_get(this, 2279696089); }
  set Height(value: number) { __CPP_ComponentProperty_set(this, 2279696089, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 1601346518); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 1601346518, value); }
}

export class JoltShapeSphereComponent extends JoltShapeComponent
{
  public static GetTypeNameHash(): number { return 1256463147; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 2158851025); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 2158851025, value); }
}

export class JoltSliderConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 1783386729; }
  get LimitMode(): Enum.JoltConstraintLimitMode { return __CPP_ComponentProperty_get(this, 4046735633); }
  set LimitMode(value: Enum.JoltConstraintLimitMode) { __CPP_ComponentProperty_set(this, 4046735633, value); }
  get LowerLimit(): number { return __CPP_ComponentProperty_get(this, 28177376); }
  set LowerLimit(value: number) { __CPP_ComponentProperty_set(this, 28177376, value); }
  get UpperLimit(): number { return __CPP_ComponentProperty_get(this, 916620453); }
  set UpperLimit(value: number) { __CPP_ComponentProperty_set(this, 916620453, value); }
  get Friction(): number { return __CPP_ComponentProperty_get(this, 1738024384); }
  set Friction(value: number) { __CPP_ComponentProperty_set(this, 1738024384, value); }
  get DriveMode(): Enum.JoltConstraintDriveMode { return __CPP_ComponentProperty_get(this, 2643322517); }
  set DriveMode(value: Enum.JoltConstraintDriveMode) { __CPP_ComponentProperty_set(this, 2643322517, value); }
  get DriveTargetValue(): number { return __CPP_ComponentProperty_get(this, 1785089043); }
  set DriveTargetValue(value: number) { __CPP_ComponentProperty_set(this, 1785089043, value); }
  get DriveStrength(): number { return __CPP_ComponentProperty_get(this, 1034380839); }
  set DriveStrength(value: number) { __CPP_ComponentProperty_set(this, 1034380839, value); }
}

export class JoltStaticActorComponent extends JoltActorComponent
{
  public static GetTypeNameHash(): number { return 4192094610; }
  get CollisionMesh(): string { return __CPP_ComponentProperty_get(this, 2438788458); }
  set CollisionMesh(value: string) { __CPP_ComponentProperty_set(this, 2438788458, value); }
  get IncludeInNavmesh(): boolean { return __CPP_ComponentProperty_get(this, 2239926002); }
  set IncludeInNavmesh(value: boolean) { __CPP_ComponentProperty_set(this, 2239926002, value); }
  get PullSurfacesFromGraphicsMesh(): boolean { return __CPP_ComponentProperty_get(this, 464060216); }
  set PullSurfacesFromGraphicsMesh(value: boolean) { __CPP_ComponentProperty_set(this, 464060216, value); }
  get Surface(): string { return __CPP_ComponentProperty_get(this, 3556056456); }
  set Surface(value: string) { __CPP_ComponentProperty_set(this, 3556056456, value); }
}

export class JoltSwingTwistConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 1578262512; }
  get SwingLimitY(): number { return __CPP_ComponentProperty_get(this, 3479105478); }
  set SwingLimitY(value: number) { __CPP_ComponentProperty_set(this, 3479105478, value); }
  get SwingLimitZ(): number { return __CPP_ComponentProperty_get(this, 1544015050); }
  set SwingLimitZ(value: number) { __CPP_ComponentProperty_set(this, 1544015050, value); }
  get Friction(): number { return __CPP_ComponentProperty_get(this, 2520828691); }
  set Friction(value: number) { __CPP_ComponentProperty_set(this, 2520828691, value); }
  get LowerTwistLimit(): number { return __CPP_ComponentProperty_get(this, 2591763733); }
  set LowerTwistLimit(value: number) { __CPP_ComponentProperty_set(this, 2591763733, value); }
  get UpperTwistLimit(): number { return __CPP_ComponentProperty_get(this, 3030611183); }
  set UpperTwistLimit(value: number) { __CPP_ComponentProperty_set(this, 3030611183, value); }
}

export class JoltTriggerComponent extends JoltActorComponent
{
  public static GetTypeNameHash(): number { return 316184978; }
  get TriggerMessage(): string { return __CPP_ComponentProperty_get(this, 2948682634); }
  set TriggerMessage(value: string) { __CPP_ComponentProperty_set(this, 2948682634, value); }
}

export class JoltVisColMeshComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 4008803426; }
  get CollisionMesh(): string { return __CPP_ComponentProperty_get(this, 3233843482); }
  set CollisionMesh(value: string) { __CPP_ComponentProperty_set(this, 3233843482, value); }
}

export class LineToComponent extends Component
{
  public static GetTypeNameHash(): number { return 1533979394; }
  get Target(): string { return __CPP_ComponentProperty_get(this, 3996901481); }
  set Target(value: string) { __CPP_ComponentProperty_set(this, 3996901481, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3876071147); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3876071147, value); }
}

export class MarkerComponent extends Component
{
  public static GetTypeNameHash(): number { return 1601973565; }
  get Marker(): string { return __CPP_ComponentProperty_get(this, 930410843); }
  set Marker(value: string) { __CPP_ComponentProperty_set(this, 930410843, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 999589493); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 999589493, value); }
}

export class MoveToComponent extends Component
{
  public static GetTypeNameHash(): number { return 1748098642; }
  SetTargetPosition(position: Vec3): void { __CPP_ComponentFunction_Call(this, 214604455, position); }
  get Running(): boolean { return __CPP_ComponentProperty_get(this, 279845198); }
  set Running(value: boolean) { __CPP_ComponentProperty_set(this, 279845198, value); }
  get TranslationSpeed(): number { return __CPP_ComponentProperty_get(this, 2033833829); }
  set TranslationSpeed(value: number) { __CPP_ComponentProperty_set(this, 2033833829, value); }
  get TranslationAcceleration(): number { return __CPP_ComponentProperty_get(this, 2021440494); }
  set TranslationAcceleration(value: number) { __CPP_ComponentProperty_set(this, 2021440494, value); }
  get TranslationDeceleration(): number { return __CPP_ComponentProperty_get(this, 1103628369); }
  set TranslationDeceleration(value: number) { __CPP_ComponentProperty_set(this, 1103628369, value); }
}

export class NpcComponent extends Component
{
  public static GetTypeNameHash(): number { return 3286107829; }
}

export class OccluderComponent extends Component
{
  public static GetTypeNameHash(): number { return 88153051; }
  get Extents(): Vec3 { return __CPP_ComponentProperty_get(this, 1943536156); }
  set Extents(value: Vec3) { __CPP_ComponentProperty_set(this, 1943536156, value); }
}

export class ParticleComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2686675370; }
  StartEffect(): boolean { return __CPP_ComponentFunction_Call(this, 2033083937); }
  StopEffect(): void { __CPP_ComponentFunction_Call(this, 3349038782); }
  InterruptEffect(): void { __CPP_ComponentFunction_Call(this, 3574566604); }
  IsEffectActive(): boolean { return __CPP_ComponentFunction_Call(this, 1214294675); }
  get Effect(): string { return __CPP_ComponentProperty_get(this, 3484195627); }
  set Effect(value: string) { __CPP_ComponentProperty_set(this, 3484195627, value); }
  get SpawnAtStart(): boolean { return __CPP_ComponentProperty_get(this, 1150464054); }
  set SpawnAtStart(value: boolean) { __CPP_ComponentProperty_set(this, 1150464054, value); }
  get OnFinishedAction(): Enum.OnComponentFinishedAction2 { return __CPP_ComponentProperty_get(this, 1953865125); }
  set OnFinishedAction(value: Enum.OnComponentFinishedAction2) { __CPP_ComponentProperty_set(this, 1953865125, value); }
  get MinRestartDelay(): number { return __CPP_ComponentProperty_get(this, 4025812929); }
  set MinRestartDelay(value: number) { __CPP_ComponentProperty_set(this, 4025812929, value); }
  get RestartDelayRange(): number { return __CPP_ComponentProperty_get(this, 1168028766); }
  set RestartDelayRange(value: number) { __CPP_ComponentProperty_set(this, 1168028766, value); }
  get RandomSeed(): number { return __CPP_ComponentProperty_get(this, 3044836071); }
  set RandomSeed(value: number) { __CPP_ComponentProperty_set(this, 3044836071, value); }
  get SpawnDirection(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 3051994722); }
  set SpawnDirection(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 3051994722, value); }
  get IgnoreOwnerRotation(): boolean { return __CPP_ComponentProperty_get(this, 532070852); }
  set IgnoreOwnerRotation(value: boolean) { __CPP_ComponentProperty_set(this, 532070852, value); }
  get SharedInstanceName(): string { return __CPP_ComponentProperty_get(this, 2480396375); }
  set SharedInstanceName(value: string) { __CPP_ComponentProperty_set(this, 2480396375, value); }
}

export class ParticleFinisherComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1971050762; }
}

export class PlayerStartPointComponent extends Component
{
  public static GetTypeNameHash(): number { return 420623154; }
  get PlayerPrefab(): string { return __CPP_ComponentProperty_get(this, 586140687); }
  set PlayerPrefab(value: string) { __CPP_ComponentProperty_set(this, 586140687, value); }
}

export class PointLightComponent extends LightComponent
{
  public static GetTypeNameHash(): number { return 2694457879; }
  get Range(): number { return __CPP_ComponentProperty_get(this, 2070313016); }
  set Range(value: number) { __CPP_ComponentProperty_set(this, 2070313016, value); }
}

export class PrefabReferenceComponent extends Component
{
  public static GetTypeNameHash(): number { return 2790782988; }
  get Prefab(): string { return __CPP_ComponentProperty_get(this, 3332257502); }
  set Prefab(value: string) { __CPP_ComponentProperty_set(this, 3332257502, value); }
}

export class ProjectileComponent extends Component
{
  public static GetTypeNameHash(): number { return 1307523631; }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 2209272853); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 2209272853, value); }
  get GravityMultiplier(): number { return __CPP_ComponentProperty_get(this, 2206024571); }
  set GravityMultiplier(value: number) { __CPP_ComponentProperty_set(this, 2206024571, value); }
  get MaxLifetime(): number { return __CPP_ComponentProperty_get(this, 2523658863); }
  set MaxLifetime(value: number) { __CPP_ComponentProperty_set(this, 2523658863, value); }
  get OnTimeoutSpawn(): string { return __CPP_ComponentProperty_get(this, 592607231); }
  set OnTimeoutSpawn(value: string) { __CPP_ComponentProperty_set(this, 592607231, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 1396671431); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 1396671431, value); }
  get FallbackSurface(): string { return __CPP_ComponentProperty_get(this, 1673089828); }
  set FallbackSurface(value: string) { __CPP_ComponentProperty_set(this, 1673089828, value); }
}

export class PropertyAnimComponent extends Component
{
  public static GetTypeNameHash(): number { return 3464210963; }
  PlayAnimationRange(RangeLow: number, RangeHigh: number): void { __CPP_ComponentFunction_Call(this, 3789596221, RangeLow, RangeHigh); }
  get Animation(): string { return __CPP_ComponentProperty_get(this, 3369422858); }
  set Animation(value: string) { __CPP_ComponentProperty_set(this, 3369422858, value); }
  get Playing(): boolean { return __CPP_ComponentProperty_get(this, 166357422); }
  set Playing(value: boolean) { __CPP_ComponentProperty_set(this, 166357422, value); }
  get Mode(): Enum.PropertyAnimMode { return __CPP_ComponentProperty_get(this, 1609689093); }
  set Mode(value: Enum.PropertyAnimMode) { __CPP_ComponentProperty_set(this, 1609689093, value); }
  get RandomOffset(): number { return __CPP_ComponentProperty_get(this, 3367951183); }
  set RandomOffset(value: number) { __CPP_ComponentProperty_set(this, 3367951183, value); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 459274022); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 459274022, value); }
  get RangeLow(): number { return __CPP_ComponentProperty_get(this, 4204810908); }
  set RangeLow(value: number) { __CPP_ComponentProperty_set(this, 4204810908, value); }
  get RangeHigh(): number { return __CPP_ComponentProperty_get(this, 1788390653); }
  set RangeHigh(value: number) { __CPP_ComponentProperty_set(this, 1788390653, value); }
}

export class RaycastComponent extends Component
{
  public static GetTypeNameHash(): number { return 2138446516; }
  get MaxDistance(): number { return __CPP_ComponentProperty_get(this, 3323574171); }
  set MaxDistance(value: number) { __CPP_ComponentProperty_set(this, 3323574171, value); }
  get DisableTargetObjectOnNoHit(): boolean { return __CPP_ComponentProperty_get(this, 2418328844); }
  set DisableTargetObjectOnNoHit(value: boolean) { __CPP_ComponentProperty_set(this, 2418328844, value); }
  get RaycastEndObject(): string { return __CPP_ComponentProperty_get(this, 593248749); }
  set RaycastEndObject(value: string) { __CPP_ComponentProperty_set(this, 593248749, value); }
  get ForceTargetParentless(): boolean { return __CPP_ComponentProperty_get(this, 2358355355); }
  set ForceTargetParentless(value: boolean) { __CPP_ComponentProperty_set(this, 2358355355, value); }
  get ShapeTypesToHit(): Flags.PhysicsShapeType { return __CPP_ComponentProperty_get(this, 1368614702); }
  set ShapeTypesToHit(value: Flags.PhysicsShapeType) { __CPP_ComponentProperty_set(this, 1368614702, value); }
  get CollisionLayerEndPoint(): number { return __CPP_ComponentProperty_get(this, 442462970); }
  set CollisionLayerEndPoint(value: number) { __CPP_ComponentProperty_set(this, 442462970, value); }
  get CollisionLayerTrigger(): number { return __CPP_ComponentProperty_get(this, 2347476005); }
  set CollisionLayerTrigger(value: number) { __CPP_ComponentProperty_set(this, 2347476005, value); }
  get TriggerMessage(): string { return __CPP_ComponentProperty_get(this, 1295093099); }
  set TriggerMessage(value: string) { __CPP_ComponentProperty_set(this, 1295093099, value); }
}

export class RenderTargetActivatorComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2562992528; }
  get RenderTarget(): string { return __CPP_ComponentProperty_get(this, 3221140373); }
  set RenderTarget(value: string) { __CPP_ComponentProperty_set(this, 3221140373, value); }
}

export class RopeRenderComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2531851482; }
  get Material(): string { return __CPP_ComponentProperty_get(this, 1666641405); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 1666641405, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 2685822600); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 2685822600, value); }
  get Thickness(): number { return __CPP_ComponentProperty_get(this, 1484383793); }
  set Thickness(value: number) { __CPP_ComponentProperty_set(this, 1484383793, value); }
  get Detail(): number { return __CPP_ComponentProperty_get(this, 1046542646); }
  set Detail(value: number) { __CPP_ComponentProperty_set(this, 1046542646, value); }
  get Subdivide(): boolean { return __CPP_ComponentProperty_get(this, 3992940747); }
  set Subdivide(value: boolean) { __CPP_ComponentProperty_set(this, 3992940747, value); }
  get UScale(): number { return __CPP_ComponentProperty_get(this, 4199831591); }
  set UScale(value: number) { __CPP_ComponentProperty_set(this, 4199831591, value); }
}

export class TransformComponent extends Component
{
  public static GetTypeNameHash(): number { return 1680961727; }
  SetDirectionForwards(Forwards: boolean): void { __CPP_ComponentFunction_Call(this, 1772757026, Forwards); }
  IsDirectionForwards(): boolean { return __CPP_ComponentFunction_Call(this, 535634261); }
  ToggleDirection(): void { __CPP_ComponentFunction_Call(this, 1750973492); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 1320097369); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 1320097369, value); }
  get Running(): boolean { return __CPP_ComponentProperty_get(this, 2998653796); }
  set Running(value: boolean) { __CPP_ComponentProperty_set(this, 2998653796, value); }
  get ReverseAtEnd(): boolean { return __CPP_ComponentProperty_get(this, 1093294572); }
  set ReverseAtEnd(value: boolean) { __CPP_ComponentProperty_set(this, 1093294572, value); }
  get ReverseAtStart(): boolean { return __CPP_ComponentProperty_get(this, 1892362220); }
  set ReverseAtStart(value: boolean) { __CPP_ComponentProperty_set(this, 1892362220, value); }
}

export class RotorComponent extends TransformComponent
{
  public static GetTypeNameHash(): number { return 3070814480; }
  get Axis(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 2360317893); }
  set Axis(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 2360317893, value); }
  get AxisDeviation(): number { return __CPP_ComponentProperty_get(this, 1861770418); }
  set AxisDeviation(value: number) { __CPP_ComponentProperty_set(this, 1861770418, value); }
  get DegreesToRotate(): number { return __CPP_ComponentProperty_get(this, 2477849409); }
  set DegreesToRotate(value: number) { __CPP_ComponentProperty_set(this, 2477849409, value); }
  get Acceleration(): number { return __CPP_ComponentProperty_get(this, 982214252); }
  set Acceleration(value: number) { __CPP_ComponentProperty_set(this, 982214252, value); }
  get Deceleration(): number { return __CPP_ComponentProperty_get(this, 3503289027); }
  set Deceleration(value: number) { __CPP_ComponentProperty_set(this, 3503289027, value); }
}

export class SensorComponent extends Component
{
  public static GetTypeNameHash(): number { return 1950355900; }
  get UpdateRate(): Enum.UpdateRate { return __CPP_ComponentProperty_get(this, 408363047); }
  set UpdateRate(value: Enum.UpdateRate) { __CPP_ComponentProperty_set(this, 408363047, value); }
  get SpatialCategory(): string { return __CPP_ComponentProperty_get(this, 391596057); }
  set SpatialCategory(value: string) { __CPP_ComponentProperty_set(this, 391596057, value); }
  get TestVisibility(): boolean { return __CPP_ComponentProperty_get(this, 1117377997); }
  set TestVisibility(value: boolean) { __CPP_ComponentProperty_set(this, 1117377997, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 168630636); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 168630636, value); }
  get ShowDebugInfo(): boolean { return __CPP_ComponentProperty_get(this, 2468499328); }
  set ShowDebugInfo(value: boolean) { __CPP_ComponentProperty_set(this, 2468499328, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 480095682); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 480095682, value); }
}

export class SensorConeComponent extends SensorComponent
{
  public static GetTypeNameHash(): number { return 3668756514; }
  get NearDistance(): number { return __CPP_ComponentProperty_get(this, 4156364868); }
  set NearDistance(value: number) { __CPP_ComponentProperty_set(this, 4156364868, value); }
  get FarDistance(): number { return __CPP_ComponentProperty_get(this, 421069967); }
  set FarDistance(value: number) { __CPP_ComponentProperty_set(this, 421069967, value); }
  get Angle(): number { return __CPP_ComponentProperty_get(this, 2857622228); }
  set Angle(value: number) { __CPP_ComponentProperty_set(this, 2857622228, value); }
}

export class SensorCylinderComponent extends SensorComponent
{
  public static GetTypeNameHash(): number { return 89262471; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 3201847377); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 3201847377, value); }
  get Height(): number { return __CPP_ComponentProperty_get(this, 376275050); }
  set Height(value: number) { __CPP_ComponentProperty_set(this, 376275050, value); }
}

export class SensorSphereComponent extends SensorComponent
{
  public static GetTypeNameHash(): number { return 3985283984; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 3153608822); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 3153608822, value); }
}

export class ShapeIconComponent extends Component
{
  public static GetTypeNameHash(): number { return 2751457557; }
}

export class SimpleAnimationComponent extends Component
{
  public static GetTypeNameHash(): number { return 3773119732; }
  get AnimationClip(): string { return __CPP_ComponentProperty_get(this, 4114851481); }
  set AnimationClip(value: string) { __CPP_ComponentProperty_set(this, 4114851481, value); }
  get AnimationMode(): Enum.PropertyAnimMode { return __CPP_ComponentProperty_get(this, 2854264169); }
  set AnimationMode(value: Enum.PropertyAnimMode) { __CPP_ComponentProperty_set(this, 2854264169, value); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 2330469972); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 2330469972, value); }
  get RootMotionMode(): Enum.RootMotionMode { return __CPP_ComponentProperty_get(this, 3939232860); }
  set RootMotionMode(value: Enum.RootMotionMode) { __CPP_ComponentProperty_set(this, 3939232860, value); }
}

export class SimpleWindComponent extends Component
{
  public static GetTypeNameHash(): number { return 626606470; }
  get MinWindStrength(): Enum.WindStrength { return __CPP_ComponentProperty_get(this, 619940196); }
  set MinWindStrength(value: Enum.WindStrength) { __CPP_ComponentProperty_set(this, 619940196, value); }
  get MaxWindStrength(): Enum.WindStrength { return __CPP_ComponentProperty_get(this, 1272420470); }
  set MaxWindStrength(value: Enum.WindStrength) { __CPP_ComponentProperty_set(this, 1272420470, value); }
  get MaxDeviation(): number { return __CPP_ComponentProperty_get(this, 597539859); }
  set MaxDeviation(value: number) { __CPP_ComponentProperty_set(this, 597539859, value); }
}

export class SkeletonComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1641866982; }
  get Skeleton(): string { return __CPP_ComponentProperty_get(this, 1515066319); }
  set Skeleton(value: string) { __CPP_ComponentProperty_set(this, 1515066319, value); }
  get VisualizeSkeleton(): boolean { return __CPP_ComponentProperty_get(this, 4113161467); }
  set VisualizeSkeleton(value: boolean) { __CPP_ComponentProperty_set(this, 4113161467, value); }
  get VisualizeColliders(): boolean { return __CPP_ComponentProperty_get(this, 3787596667); }
  set VisualizeColliders(value: boolean) { __CPP_ComponentProperty_set(this, 3787596667, value); }
  get VisualizeJoints(): boolean { return __CPP_ComponentProperty_get(this, 3456629988); }
  set VisualizeJoints(value: boolean) { __CPP_ComponentProperty_set(this, 3456629988, value); }
  get VisualizeSwingLimits(): boolean { return __CPP_ComponentProperty_get(this, 3194867746); }
  set VisualizeSwingLimits(value: boolean) { __CPP_ComponentProperty_set(this, 3194867746, value); }
  get VisualizeTwistLimits(): boolean { return __CPP_ComponentProperty_get(this, 1877742448); }
  set VisualizeTwistLimits(value: boolean) { __CPP_ComponentProperty_set(this, 1877742448, value); }
  get BonesToHighlight(): string { return __CPP_ComponentProperty_get(this, 2710454113); }
  set BonesToHighlight(value: string) { __CPP_ComponentProperty_set(this, 2710454113, value); }
}

export class SkeletonPoseComponent extends Component
{
  public static GetTypeNameHash(): number { return 4060488408; }
  get Skeleton(): string { return __CPP_ComponentProperty_get(this, 2576807777); }
  set Skeleton(value: string) { __CPP_ComponentProperty_set(this, 2576807777, value); }
  get Mode(): Enum.SkeletonPoseMode { return __CPP_ComponentProperty_get(this, 501630531); }
  set Mode(value: Enum.SkeletonPoseMode) { __CPP_ComponentProperty_set(this, 501630531, value); }
  get EditBones(): number { return __CPP_ComponentProperty_get(this, 4116987872); }
  set EditBones(value: number) { __CPP_ComponentProperty_set(this, 4116987872, value); }
}

export class SkyBoxComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1806701530; }
  get CubeMap(): string { return __CPP_ComponentProperty_get(this, 791111828); }
  set CubeMap(value: string) { __CPP_ComponentProperty_set(this, 791111828, value); }
  get ExposureBias(): number { return __CPP_ComponentProperty_get(this, 4053428649); }
  set ExposureBias(value: number) { __CPP_ComponentProperty_set(this, 4053428649, value); }
  get InverseTonemap(): boolean { return __CPP_ComponentProperty_get(this, 562715483); }
  set InverseTonemap(value: boolean) { __CPP_ComponentProperty_set(this, 562715483, value); }
  get UseFog(): boolean { return __CPP_ComponentProperty_get(this, 2183232300); }
  set UseFog(value: boolean) { __CPP_ComponentProperty_set(this, 2183232300, value); }
  get VirtualDistance(): number { return __CPP_ComponentProperty_get(this, 1475247756); }
  set VirtualDistance(value: number) { __CPP_ComponentProperty_set(this, 1475247756, value); }
}

export class SkyLightComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 2390201003; }
  get ReflectionProbeMode(): Enum.ReflectionProbeMode { return __CPP_ComponentProperty_get(this, 852024994); }
  set ReflectionProbeMode(value: Enum.ReflectionProbeMode) { __CPP_ComponentProperty_set(this, 852024994, value); }
  get CubeMap(): string { return __CPP_ComponentProperty_get(this, 575541439); }
  set CubeMap(value: string) { __CPP_ComponentProperty_set(this, 575541439, value); }
  get Intensity(): number { return __CPP_ComponentProperty_get(this, 821218387); }
  set Intensity(value: number) { __CPP_ComponentProperty_set(this, 821218387, value); }
  get Saturation(): number { return __CPP_ComponentProperty_get(this, 4010581560); }
  set Saturation(value: number) { __CPP_ComponentProperty_set(this, 4010581560, value); }
  get NearPlane(): number { return __CPP_ComponentProperty_get(this, 1331659047); }
  set NearPlane(value: number) { __CPP_ComponentProperty_set(this, 1331659047, value); }
  get FarPlane(): number { return __CPP_ComponentProperty_get(this, 268875995); }
  set FarPlane(value: number) { __CPP_ComponentProperty_set(this, 268875995, value); }
  get ShowDebugInfo(): boolean { return __CPP_ComponentProperty_get(this, 3344849363); }
  set ShowDebugInfo(value: boolean) { __CPP_ComponentProperty_set(this, 3344849363, value); }
  get ShowMipMaps(): boolean { return __CPP_ComponentProperty_get(this, 895237282); }
  set ShowMipMaps(value: boolean) { __CPP_ComponentProperty_set(this, 895237282, value); }
}

export class SliderComponent extends TransformComponent
{
  public static GetTypeNameHash(): number { return 1295303479; }
  get Axis(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 2215777889); }
  set Axis(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 2215777889, value); }
  get Distance(): number { return __CPP_ComponentProperty_get(this, 2929805649); }
  set Distance(value: number) { __CPP_ComponentProperty_set(this, 2929805649, value); }
  get Acceleration(): number { return __CPP_ComponentProperty_get(this, 1187090096); }
  set Acceleration(value: number) { __CPP_ComponentProperty_set(this, 1187090096, value); }
  get Deceleration(): number { return __CPP_ComponentProperty_get(this, 2302800190); }
  set Deceleration(value: number) { __CPP_ComponentProperty_set(this, 2302800190, value); }
  get RandomStart(): number { return __CPP_ComponentProperty_get(this, 1439600697); }
  set RandomStart(value: number) { __CPP_ComponentProperty_set(this, 1439600697, value); }
}

export class SpatialAnchorComponent extends Component
{
  public static GetTypeNameHash(): number { return 2762556177; }
}

export class SpawnComponent extends Component
{
  public static GetTypeNameHash(): number { return 438730474; }
  CanTriggerManualSpawn(): boolean { return __CPP_ComponentFunction_Call(this, 1182018235); }
  TriggerManualSpawn(IgnoreSpawnDelay: boolean, LocalOffset: Vec3): boolean { return __CPP_ComponentFunction_Call(this, 4253763478, IgnoreSpawnDelay, LocalOffset); }
  ScheduleSpawn(): void { __CPP_ComponentFunction_Call(this, 645050758); }
  get Prefab(): string { return __CPP_ComponentProperty_get(this, 1025383935); }
  set Prefab(value: string) { __CPP_ComponentProperty_set(this, 1025383935, value); }
  get AttachAsChild(): boolean { return __CPP_ComponentProperty_get(this, 2678119025); }
  set AttachAsChild(value: boolean) { __CPP_ComponentProperty_set(this, 2678119025, value); }
  get SpawnAtStart(): boolean { return __CPP_ComponentProperty_get(this, 4055899534); }
  set SpawnAtStart(value: boolean) { __CPP_ComponentProperty_set(this, 4055899534, value); }
  get SpawnContinuously(): boolean { return __CPP_ComponentProperty_get(this, 2426811985); }
  set SpawnContinuously(value: boolean) { __CPP_ComponentProperty_set(this, 2426811985, value); }
  get MinDelay(): number { return __CPP_ComponentProperty_get(this, 542565958); }
  set MinDelay(value: number) { __CPP_ComponentProperty_set(this, 542565958, value); }
  get DelayRange(): number { return __CPP_ComponentProperty_get(this, 490325517); }
  set DelayRange(value: number) { __CPP_ComponentProperty_set(this, 490325517, value); }
  get Deviation(): number { return __CPP_ComponentProperty_get(this, 824059517); }
  set Deviation(value: number) { __CPP_ComponentProperty_set(this, 824059517, value); }
}

export class SphereReflectionProbeComponent extends ReflectionProbeComponentBase
{
  public static GetTypeNameHash(): number { return 681694830; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 7676970); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 7676970, value); }
  get Falloff(): number { return __CPP_ComponentProperty_get(this, 562629380); }
  set Falloff(value: number) { __CPP_ComponentProperty_set(this, 562629380, value); }
  get SphereProjection(): boolean { return __CPP_ComponentProperty_get(this, 3697861663); }
  set SphereProjection(value: boolean) { __CPP_ComponentProperty_set(this, 3697861663, value); }
}

export class SpotLightComponent extends LightComponent
{
  public static GetTypeNameHash(): number { return 2983247510; }
  get Range(): number { return __CPP_ComponentProperty_get(this, 886765956); }
  set Range(value: number) { __CPP_ComponentProperty_set(this, 886765956, value); }
  get InnerSpotAngle(): number { return __CPP_ComponentProperty_get(this, 2388270276); }
  set InnerSpotAngle(value: number) { __CPP_ComponentProperty_set(this, 2388270276, value); }
  get OuterSpotAngle(): number { return __CPP_ComponentProperty_get(this, 1291241033); }
  set OuterSpotAngle(value: number) { __CPP_ComponentProperty_set(this, 1291241033, value); }
}

export class SpriteComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 4107853740; }
  get Texture(): string { return __CPP_ComponentProperty_get(this, 1708425619); }
  set Texture(value: string) { __CPP_ComponentProperty_set(this, 1708425619, value); }
  get BlendMode(): Enum.SpriteBlendMode { return __CPP_ComponentProperty_get(this, 1484307633); }
  set BlendMode(value: Enum.SpriteBlendMode) { __CPP_ComponentProperty_set(this, 1484307633, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 2584012464); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 2584012464, value); }
  get Size(): number { return __CPP_ComponentProperty_get(this, 880140730); }
  set Size(value: number) { __CPP_ComponentProperty_set(this, 880140730, value); }
  get MaxScreenSize(): number { return __CPP_ComponentProperty_get(this, 3365523384); }
  set MaxScreenSize(value: number) { __CPP_ComponentProperty_set(this, 3365523384, value); }
  get AspectRatio(): number { return __CPP_ComponentProperty_get(this, 1319232297); }
  set AspectRatio(value: number) { __CPP_ComponentProperty_set(this, 1319232297, value); }
}

export class StageSpaceComponent extends Component
{
  public static GetTypeNameHash(): number { return 3814358307; }
  get StageSpace(): Enum.XRStageSpace { return __CPP_ComponentProperty_get(this, 3796859176); }
  set StageSpace(value: Enum.XRStageSpace) { __CPP_ComponentProperty_set(this, 3796859176, value); }
}

export class StateMachineComponent extends Component
{
  public static GetTypeNameHash(): number { return 71440247; }
  SetState(Name: string): boolean { return __CPP_ComponentFunction_Call(this, 3119358439, Name); }
  get Resource(): string { return __CPP_ComponentProperty_get(this, 3553976178); }
  set Resource(value: string) { __CPP_ComponentProperty_set(this, 3553976178, value); }
  get InitialState(): string { return __CPP_ComponentProperty_get(this, 3055923916); }
  set InitialState(value: string) { __CPP_ComponentProperty_set(this, 3055923916, value); }
}

export class TimedDeathComponent extends Component
{
  public static GetTypeNameHash(): number { return 1589515529; }
  get MinDelay(): number { return __CPP_ComponentProperty_get(this, 2549195916); }
  set MinDelay(value: number) { __CPP_ComponentProperty_set(this, 2549195916, value); }
  get DelayRange(): number { return __CPP_ComponentProperty_get(this, 1350176412); }
  set DelayRange(value: number) { __CPP_ComponentProperty_set(this, 1350176412, value); }
  get TimeoutPrefab(): string { return __CPP_ComponentProperty_get(this, 978098831); }
  set TimeoutPrefab(value: string) { __CPP_ComponentProperty_set(this, 978098831, value); }
}

export class TriggerDelayModifierComponent extends EventMessageHandlerBaseComponent
{
  public static GetTypeNameHash(): number { return 928702445; }
  get ActivationDelay(): number { return __CPP_ComponentProperty_get(this, 3433323958); }
  set ActivationDelay(value: number) { __CPP_ComponentProperty_set(this, 3433323958, value); }
  get DeactivationDelay(): number { return __CPP_ComponentProperty_get(this, 789862730); }
  set DeactivationDelay(value: number) { __CPP_ComponentProperty_set(this, 789862730, value); }
}

export class VisualScriptComponent extends EventMessageHandlerComponent
{
  public static GetTypeNameHash(): number { return 4146054015; }
  get Script(): string { return __CPP_ComponentProperty_get(this, 514750595); }
  set Script(value: string) { __CPP_ComponentProperty_set(this, 514750595, value); }
}

export class VisualizeHandComponent extends Component
{
  public static GetTypeNameHash(): number { return 3717625868; }
}

export class WindVolumeComponent extends Component
{
  public static GetTypeNameHash(): number { return 969175823; }
  get Strength(): Enum.WindStrength { return __CPP_ComponentProperty_get(this, 1408869612); }
  set Strength(value: Enum.WindStrength) { __CPP_ComponentProperty_set(this, 1408869612, value); }
  get ReverseDirection(): boolean { return __CPP_ComponentProperty_get(this, 3820920862); }
  set ReverseDirection(value: boolean) { __CPP_ComponentProperty_set(this, 3820920862, value); }
  get BurstDuration(): number { return __CPP_ComponentProperty_get(this, 635172675); }
  set BurstDuration(value: number) { __CPP_ComponentProperty_set(this, 635172675, value); }
  get OnFinishedAction(): Enum.OnComponentFinishedAction { return __CPP_ComponentProperty_get(this, 1277794349); }
  set OnFinishedAction(value: Enum.OnComponentFinishedAction) { __CPP_ComponentProperty_set(this, 1277794349, value); }
}

export class WindVolumeConeComponent extends WindVolumeComponent
{
  public static GetTypeNameHash(): number { return 114696516; }
  get Angle(): number { return __CPP_ComponentProperty_get(this, 329015589); }
  set Angle(value: number) { __CPP_ComponentProperty_set(this, 329015589, value); }
  get Length(): number { return __CPP_ComponentProperty_get(this, 191039892); }
  set Length(value: number) { __CPP_ComponentProperty_set(this, 191039892, value); }
}

export class WindVolumeCylinderComponent extends WindVolumeComponent
{
  public static GetTypeNameHash(): number { return 1321819725; }
  get Length(): number { return __CPP_ComponentProperty_get(this, 4114686021); }
  set Length(value: number) { __CPP_ComponentProperty_set(this, 4114686021, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 258961560); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 258961560, value); }
  get Mode(): Enum.WindVolumeCylinderMode { return __CPP_ComponentProperty_get(this, 3800825428); }
  set Mode(value: Enum.WindVolumeCylinderMode) { __CPP_ComponentProperty_set(this, 3800825428, value); }
}

export class WindVolumeSphereComponent extends WindVolumeComponent
{
  public static GetTypeNameHash(): number { return 4046423258; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 1394920935); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 1394920935, value); }
}

