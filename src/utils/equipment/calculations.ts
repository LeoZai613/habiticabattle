import { Equipment } from '../../types/equipment';
import { EquipmentBonus, EquippedGear } from './types';

const EQUIPMENT_SLOTS = [
  'weapon',
  'shield',
  'head',
  'armor',
  'headAccessory',
  'eyewear',
  'body',
  'back'
] as const;

export const calculateEquipmentBonus = (
  equippedGear: EquippedGear,
  equipmentData: Record<string, Equipment>
): EquipmentBonus => {
  const initialBonus: EquipmentBonus = {
    str: 0,
    con: 0,
    int: 0,
    per: 0
  };

  // Debug logs
  console.log('Calculating equipment bonuses:');
  
  return EQUIPMENT_SLOTS.reduce((total, slot) => {
    const itemKey = equippedGear[slot];
    if (!itemKey) return total;

    const item = equipmentData[itemKey];
    if (!item) return total;

    // Log each piece of equipment being processed
    console.log(`${slot}: ${itemKey}`, {
      str: item.str || 0,
      con: item.con || 0,
      int: item.int || 0,
      per: item.per || 0
    });

    return {
      str: total.str + (item.str || 0),
      con: total.con + (item.con || 0),
      int: total.int + (item.int || 0),
      per: total.per + (item.per || 0)
    };
  }, initialBonus);
};