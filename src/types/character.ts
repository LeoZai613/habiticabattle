export interface CharacterStats {
  level: number;
  health: number;
  maxHealth: number;
  experience: number;
  experienceToLevel: number;
  strength: number;
  defense: number;
  gold: number;
}

export interface Character {
  id: string;
  name: string;
  class: 'warrior' | 'mage' | 'healer' | 'rogue';
  stats: CharacterStats;
}

export const initialCharacterStats: CharacterStats = {
  level: 1,
  health: 50,
  maxHealth: 50,
  experience: 0,
  experienceToLevel: 100,
  strength: 10,
  defense: 5,
  gold: 0
};