import path from 'path';

// Sprite configuration for boss characters
export const SPRITE_CONFIG = {
  basePath: 'sprites/bosses',
  defaultDimensions: { width: 24, height: 24 }
} as const;

export const getBossSpritePath = (bossId: string): string => {
  return `${SPRITE_CONFIG.basePath}/${bossId}.png`;
};