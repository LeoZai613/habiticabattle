export interface SpritePosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface SpriteSheet {
  name: string;
  url: string;
  sprites: Record<string, SpritePosition>;
}

export interface SpriteConfig {
  sheet: keyof typeof import('./constants').SPRITE_PATHS.SHEETS;
  position: SpritePosition;
}