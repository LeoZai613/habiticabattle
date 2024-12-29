import { Equipment } from '../../types/equipment';

export interface EquipmentBonus {
  str: number;
  con: number;
  int: number;
  per: number;
}

export interface EquipmentStats {
  base: EquipmentBonus;
  buffs: EquipmentBonus;
  total: EquipmentBonus;
}

export type EquippedGear = Record<string, string>;