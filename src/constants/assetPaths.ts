// Base paths for different asset types
export const ASSET_PATHS = {
  bosses: '/src/assets/images/bosses',
  equipment: '/src/assets/images/gear',
} as const;

// Get the local path for a boss image
export const getBossImagePath = (bossId: string): string => {
  // All boss images have the quest_ prefix
  return `${ASSET_PATHS.bosses}/quest_${bossId}.png`;
};

// Get the local path for equipment image
export const getEquipmentImagePath = (itemKey: string): string => {
  return `${ASSET_PATHS.equipment}/${itemKey}.png`;
};
