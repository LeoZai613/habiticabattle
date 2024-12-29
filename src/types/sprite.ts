export interface SpritePaths {
  base: string;
  sprites: {
    bosses: {
      [key: string]: string;
    };
  };
}

export interface SpriteConfig {
  width: number;
  height: number;
  path: string;
}

export interface BossSprite extends SpriteConfig {
  id: string;
}

export interface SpriteRenderOptions {
  pixelated: boolean;
}