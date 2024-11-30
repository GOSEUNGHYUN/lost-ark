export interface IInfoData {
  ArmoryProfile: ArmoryProfile;
  ArmoryEquipment?: ArmoryEquipmentEntity[] | null;
  ArmorySkills?: ArmorySkillsEntity[] | null;
  ArmoryEngraving: ArmoryEngraving;
}
export interface ArmoryProfile {
  CharacterImage: string;
  ExpeditionLevel: number;
  PvpGradeName: string;
  TownLevel: number;
  TownName: string;
  Title: string;
  GuildMemberGrade?: null;
  GuildName?: null;
  UsingSkillPoint: number;
  TotalSkillPoint: number;
  Stats?: StatsEntity[] | null;
  Tendencies?: TendenciesEntity[] | null;
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
}
export interface StatsEntity {
  Type: string;
  Value: string;
  Tooltip?: string[] | null;
}
export interface TendenciesEntity {
  Type: string;
  Point: number;
  MaxPoint: number;
}
export interface ArmoryEquipmentEntity {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
}
export interface ArmorySkillsEntity {
  Name: string;
  Icon: string;
  Level: number;
  Type: string;
  SkillType: number;
  Tripods?: (TripodsEntity | null)[] | null;
  Rune?: Rune | null;
  Tooltip: string;
}
export interface TripodsEntity {
  Tier: number;
  Slot: number;
  Name: string;
  Icon: string;
  Level: number;
  IsSelected: boolean;
  Tooltip: string;
}
export interface Rune {
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
}
export interface ArmoryEngraving {
  Engravings?: EngravingsEntity[] | null;
  Effects?: EffectsEntity[] | null;
  ArkPassiveEffects?: null;
}
export interface EngravingsEntity {
  Slot: number;
  Name: string;
  Icon: string;
  Tooltip: string;
}
export interface EffectsEntity {
  Icon: string;
  Name: string;
  Description: string;
}
