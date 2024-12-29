// Map of boss IDs to their sprite paths
export const BOSS_SPRITES = {
  basilist: 'sprites/bosses/basilist.png',
  vice: 'sprites/bosses/vice.png',
  moonstone: 'sprites/bosses/moonstone.png',
  necromancer: 'sprites/bosses/necromancer.png'
} as const;

export const getBossSpritePath = (bossId: string): string => {
  // Return the sprite path without leading slash for proper public asset reference
  return BOSS_SPRITES[bossId as keyof typeof BOSS_SPRITES] || `sprites/bosses/${bossId}.png`;
};