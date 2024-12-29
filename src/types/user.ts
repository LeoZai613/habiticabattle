export interface HabiticaStats {
  hp: number;
  maxHealth: number;
  mp: number;
  maxMP: number;
  exp: number;
  toNextLevel: number;
  lvl: number;
  class: string;
  gp: number;
  str: number;
  con: number;
  int: number;
  per: number;
  buffs: {
    str: number;
    int: number;
    per: number;
    con: number;
    stealth: number;
    streaks: boolean;
  };
}

export interface HabiticaUser {
  _id: string;
  stats: HabiticaStats;
  preferences: {
    size: string;
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
    class: string;
  };
  items: {
    gear: {
      equipped: Record<string, string>;
      costume: Record<string, string>;
    };
  };
  profile: {
    name: string;
  };
}