import path from 'path';

export const SPRITE_CONFIG = {
  basePath: 'sprites/bosses',
  bosses: {
    basilist: {
      filename: 'basilist.png',
      dimensions: { width: 24, height: 24 }
    }
  }
} as const;

export const getBossSpritePath = (bossId: string): string => {
  const config = SPRITE_CONFIG.bosses[bossId as keyof typeof SPRITE_CONFIG.bosses];
  if (config) {
    return path.join(SPRITE_CONFIG.basePath, config.filename);
  }
  return path.join(SPRITE_CONFIG.basePath, `${bossId}.png`);
};