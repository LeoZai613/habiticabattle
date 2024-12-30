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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
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
        
        {/* Debug Information */}
        <div className="bg-gray-100 p-4 rounded-lg text-sm">
          <h3 className="font-bold mb-2">Debug Info:</h3>
          <div>Loading: {loading.toString()}</div>
          <div>Error: {error ? 'Yes' : 'No'}</div>
          <div>Number of Bosses: {bosses.length}</div>
          <div className="mt-2">
            <div className="font-bold">Boss IDs:</div>
            {bosses.map(boss => (
              <div key={boss.id} className="ml-2 text-xs">
                • {boss.id} - {boss.name}
              </div>
            ))}
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500" />
          </div>
        )}
        
        {error && (
          <div className="text-red-500 p-4 bg-red-50 rounded-lg">
            Failed to load bosses. Please try again later.
          </div>
        )}

        {/* Dynamic Bosses List */}
        <div className="grid gap-4">
          {bosses.map((boss) => (
            <EnemyCard key={boss.id} enemy={boss} />
          ))}
        </div>
      </div>
    </div>
  );
};
