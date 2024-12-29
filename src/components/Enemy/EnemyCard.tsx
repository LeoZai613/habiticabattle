import React from 'react';
import { Sword, Shield, Heart, Zap } from 'lucide-react';
import { Enemy } from '../../types/enemy';
import { QuestBoss } from '../../types/quest';
import { EnemyImage } from './EnemyImage';

interface EnemyCardProps {
  enemy: Enemy | QuestBoss;
}

export const EnemyCard: React.FC<EnemyCardProps> = ({ enemy }) => {
  const { stats } = enemy;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-start gap-4">
        <EnemyImage bossId={enemy.id} name={enemy.name} />
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{enemy.name}</h3>
            <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
              Level {enemy.level}
            </span>
          </div>
          
          {'description' in enemy && (
            <p className="text-gray-600 text-sm mb-4">{enemy.description}</p>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-2">
          <Heart size={20} className="text-red-500" />
          <span>{stats.health}/{stats.maxHealth} HP</span>
        </div>
        <div className="flex items-center space-x-2">
          <Sword size={20} className="text-blue-500" />
          <span>{stats.strength} STR</span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield size={20} className="text-gray-600" />
          <span>{stats.defense} DEF</span>
        </div>
        
        {'rageAbility' in enemy && (
          <div className="flex items-center space-x-2 text-yellow-600">
            <Zap size={20} />
            <span>{enemy.rageAbility}</span>
          </div>
        )}

        <div className="mt-4 pt-2 border-t border-gray-200 text-sm text-gray-600">
          <p>Rewards:</p>
          <div className="grid grid-cols-2 gap-2">
            <span>{stats.experienceReward} XP</span>
            <span>{stats.goldReward} Gold</span>
          </div>
        </div>
      </div>
    </div>
  );
};