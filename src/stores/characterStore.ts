import { create } from 'zustand';
import { Character, initialCharacterStats } from '../types/character';

interface CharacterStore {
  character: Character | null;
  setCharacter: (character: Character) => void;
  updateHealth: (amount: number) => void;
  gainExperience: (amount: number) => void;
  gainGold: (amount: number) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  character: {
    id: '1',
    name: 'Hero',
    class: 'warrior',
    stats: initialCharacterStats,
  },
  setCharacter: (character) => set({ character }),
  updateHealth: (amount) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            stats: {
              ...state.character.stats,
              health: Math.min(
                Math.max(0, state.character.stats.health + amount),
                state.character.stats.maxHealth
              ),
            },
          }
        : null,
    })),
  gainExperience: (amount) =>
    set((state) => {
      if (!state.character) return state;
      
      const newExp = state.character.stats.experience + amount;
      const levelUps = Math.floor(newExp / state.character.stats.experienceToLevel);
      const remainingExp = newExp % state.character.stats.experienceToLevel;
      
      return {
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            level: state.character.stats.level + levelUps,
            experience: remainingExp,
            maxHealth: state.character.stats.maxHealth + (levelUps * 10),
            strength: state.character.stats.strength + (levelUps * 2),
            defense: state.character.stats.defense + levelUps,
          },
        },
      };
    }),
  gainGold: (amount) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            stats: {
              ...state.character.stats,
              gold: state.character.stats.gold + amount,
            },
          }
        : null,
    })),
}));