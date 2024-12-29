import { Equipment, EquipmentStats, EquippedGear } from '../types/equipment';
import { HabiticaUser } from '../types/user';

// Equipment stat calculation
export const calculateEquipmentStats = (equippedItems: EquippedGear, gearData: Record<string, Equipment>): EquipmentStats => {
  const stats: EquipmentStats = {
    str: 0,
    con: 0,
    int: 0,
    per: 0
  };

  // Sum up stats from all equipped items
  Object.values(equippedItems).forEach(itemKey => {
    if (!itemKey) return;
    
    const item = gearData[itemKey];
    if (!item?.stats) return;

    Object.entries(item.stats).forEach(([stat, value]) => {
      if (stat in stats && typeof value === 'number') {
        stats[stat] += value;
      }
    });
  });

  return stats;
};

// Get equipped gear based on preferences
export const getEquippedGear = (userData: HabiticaUser): EquippedGear => {
  const { items, preferences } = userData;
  return preferences.costume ? items.gear.costume : items.gear.equipped;
};