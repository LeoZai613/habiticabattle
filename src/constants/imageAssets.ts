// Base URL for assets
export const getBossImage = (bossId: string): string => {
  // Return path relative to public directory
  return `/sprites/bosses/${bossId}.png`;
};

// Equipment images
export const getEquipmentImage = (itemKey: string): string => {
  return `/equipment/${itemKey}.png`;
};