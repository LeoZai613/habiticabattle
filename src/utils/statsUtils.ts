import { HabiticaUser } from '../types/user';
import { Equipment } from '../types/equipment';
import { calculateEquipmentBonus } from './equipment/calculations';

interface StatBreakdown {
  base: number;
  level: number;
  equipment: number;
  class: number;
  allocated: number;
  buffs: number;
  total: number;
}

export const calculateStrength = (
  userData: HabiticaUser, 
  equipmentData: Record<string, Equipment>
): StatBreakdown => {
  const base = userData.stats.str || 0;
  const level = userData.stats.lvl;
  const equipmentBonus = calculateEquipmentBonus(userData.items.gear.equipped, equipmentData);
  const equipment = equipmentBonus.str;
  const classBonus = userData.stats.class === 'warrior' ? userData.stats.lvl * 0.5 : 0;
  const allocated = 0;
  const buffs = userData.stats.buffs?.str || 0;
  const total = Math.floor(base + level + equipment + classBonus + allocated + buffs);

  return { base, level, equipment, class: classBonus, allocated, buffs, total };
};

export const calculateConstitution = (
  userData: HabiticaUser, 
  equipmentData: Record<string, Equipment>
): StatBreakdown => {
  const base = userData.stats.con || 0;
  const level = userData.stats.lvl;
  const equipmentBonus = calculateEquipmentBonus(userData.items.gear.equipped, equipmentData);
  const equipment = equipmentBonus.con;
  const classBonus = userData.stats.class === 'warrior' ? userData.stats.lvl * 0.5 : 0;
  const allocated = 0;
  const buffs = userData.stats.buffs?.con || 0;
  const total = Math.floor(base + level + equipment + classBonus + allocated + buffs);

  return { base, level, equipment, class: classBonus, allocated, buffs, total };
};