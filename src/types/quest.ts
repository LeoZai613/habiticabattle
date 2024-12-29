import { EnemyStats } from './enemy';

export interface QuestBoss {
  id: string;
  name: string;
  type: 'boss';
  level: number;
  stats: EnemyStats;
  description: string;
  rageAbility: string;
}