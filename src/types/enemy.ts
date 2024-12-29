export interface EnemyStats {
  health: number;
  maxHealth: number;
  strength: number;
  defense: number;
  experienceReward: number;
  goldReward: number;
}

export interface Enemy {
  id: string;
  name: string;
  type: 'boss' | 'regular';
  level: number;
  stats: EnemyStats;
}

export const enemies: Enemy[] = [
  {
    id: 'evil-dragon',
    name: 'Evil Dragon',
    type: 'boss',
    level: 5,
    stats: {
      health: 200,
      maxHealth: 200,
      strength: 20,
      defense: 15,
      experienceReward: 100,
      goldReward: 50
    }
  },
  {
    id: 'dark-knight',
    name: 'Dark Knight',
    type: 'regular',
    level: 3,
    stats: {
      health: 100,
      maxHealth: 100,
      strength: 15,
      defense: 10,
      experienceReward: 50,
      goldReward: 25
    }
  }
];