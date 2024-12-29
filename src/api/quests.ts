import { apiClient } from './client';
import { QuestBoss } from '../types/quest';

export const fetchQuestContent = async () => {
  const content = await apiClient.fetch<{ quests: Record<string, any> }>('/content');
  return content.quests;
};

export const getQuestBosses = async (): Promise<QuestBoss[]> => {
  const quests = await fetchQuestContent();
  
  return [
    {
      id: 'basilist',
      name: 'The Basi-List',
      type: 'boss',
      level: 3,
      stats: {
        health: 100,
        maxHealth: 100,
        strength: 1.5,
        defense: 1,
        experienceReward: 75,
        goldReward: 25
      },
      description: 'A fearsome basilisk with a powerful rallying cry.',
      rageAbility: 'Rallying Cry'
    },
    {
      id: 'vice1',
      name: 'Vice',
      type: 'boss',
      level: 5,
      stats: {
        health: 300,
        maxHealth: 300,
        strength: 2.5,
        defense: 2,
        experienceReward: 150,
        goldReward: 50
      },
      description: 'The mighty rabbit boss of the new year.',
      rageAbility: 'Begone!'
    },
    {
      id: 'moon1',
      name: 'The Moonstone Chain',
      type: 'boss',
      level: 8,
      stats: {
        health: 1000,
        maxHealth: 1000,
        strength: 4,
        defense: 3,
        experienceReward: 300,
        goldReward: 100
      },
      description: 'A mysterious entity from the lunar battle series.',
      rageAbility: 'Lunar Fury'
    },
    {
      id: 'atom1',
      name: 'The Necromancer',
      type: 'boss',
      level: 7,
      stats: {
        health: 800,
        maxHealth: 800,
        strength: 3.5,
        defense: 2.5,
        experienceReward: 250,
        goldReward: 75
      },
      description: 'Master of the undead with powerful summoning abilities.',
      rageAbility: 'Summon Undead'
    },
    {
      id: 'evilsanta2',
      name: 'The Killer Bunny',
      type: 'boss',
      level: 5,
      stats: {
        health: 300,
        maxHealth: 300,
        strength: 2.5,
        defense: 2,
        experienceReward: 150,
        goldReward: 50
      },
      description: 'A deceptively dangerous holiday creature.',
      rageAbility: 'Festive Fury'
    }
  ];
};