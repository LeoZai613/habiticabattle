// Avatar system types
export interface SpritePosition {
  x: number;
  y: number;
}

export interface AvatarPreferences {
  size: 'slim' | 'broad';
  hair: {
    color: string;
    base: number;
    bangs: number;
    mustache: number;
    beard: number;
    flower: number;
  };
  skin: string;
  shirt: string;
  chair: string;
  background: string;
  costume: boolean;
  sleep: boolean;
  class?: string;
}

export interface AvatarGear {
  equipped: {
    armor?: string;
    head?: string;
    shield?: string;
    weapon?: string;
  };
  costume: {
    armor?: string;
    head?: string;
    shield?: string;
    weapon?: string;
  };
}

export interface AvatarBuffs {
  snowball?: boolean;
  spookySparkles?: boolean;
  shinySeed?: boolean;
  seafoam?: boolean;
}

export interface AvatarMember {
  preferences: AvatarPreferences;
  items: {
    gear: AvatarGear;
  };
  stats: {
    buffs: AvatarBuffs;
  };
}