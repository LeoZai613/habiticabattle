// Habitica CDN base URL
const HABITICA_CDN_BASE = 'https://habitica-assets.s3.amazonaws.com/mobileApp/images';

// Boss images from Habitica's CDN
export const getBossImage = (bossId: string): string => {
  return `${HABITICA_CDN_BASE}/quest_bosses/${bossId}.png`;
};

// Equipment images
export const getEquipmentImage = (itemKey: string): string => {
  return `${HABITICA_CDN_BASE}/shop_${itemKey}.png`;
};