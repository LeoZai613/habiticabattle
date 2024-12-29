import React from 'react';
import { CharacterStats } from '../components/Character/CharacterStats';
import { CharacterAvatar } from '../components/Character/CharacterAvatar';
import { EquipmentDebug } from '../components/Debug/EquipmentDebug';
import { EnemyCard } from '../components/Enemy/EnemyCard';
import { BasilistDebug } from '../components/Debug/BasilistDebug';
import { useQuestBosses } from '../hooks/useQuestBosses';

export const Dashboard = () => {
  const { bosses, loading, error } = useQuestBosses();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Panel: Character Info */}
      <div className="space-y-6">
        <CharacterAvatar />
        <CharacterStats />
        <EquipmentDebug />
        <BasilistDebug />
      </div>

      {/* Right Panel: Available Bosses */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Available Bosses</h2>
        {loading && <div>Loading bosses...</div>}
        {error && <div className="text-red-500">Failed to load bosses</div>}

        {/* Static Basilist Display */}
        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-lg">
          <img
            src="/sprites/bosses/quest_basilist.png"
            alt="Basilist Boss"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Dynamic Bosses List */}
        {bosses.map((boss) => (
          <EnemyCard key={boss.id} enemy={boss} />
        ))}
      </div>
    </div>
  );
};
