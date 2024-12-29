import React from 'react';
import { useHabiticaUser } from '../../hooks/useHabiticaUser';

export const CharacterAvatar = () => {
  const { userData, loading, error } = useHabiticaUser();

  if (loading) {
    return (
      <div className="flex flex-col items-center space-y-2">
        <div className="animate-pulse bg-gray-200 w-32 h-32 rounded-lg" />
        <div className="animate-pulse bg-gray-200 h-4 w-24 rounded" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md text-red-500">
        Unable to load character avatar
      </div>
    );
  }

  if (!userData) return null;

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative bg-white p-4 rounded-lg shadow-md">
        <img 
          src={`https://habitica.com/export/avatar-${userData._id}.png`}
          alt={`${userData.profile?.name || 'Character'}'s avatar`}
          className="w-32 h-32 object-contain"
          style={{ imageRendering: 'pixelated' }}
        />
        <div className="absolute bottom-1 right-1 bg-purple-600 text-white px-2 py-0.5 rounded text-sm">
          Lvl {userData.stats.lvl}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold">
        {userData.profile?.name || 'Adventurer'}
      </h3>
      
      <p className="text-sm text-gray-600">
        {userData.stats?.class || 'Warrior'} Class
      </p>
    </div>
  );
};