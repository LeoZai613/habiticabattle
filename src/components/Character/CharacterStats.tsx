import React from 'react';
import { Shield, Sword, Heart } from 'lucide-react';
import { useHabiticaUser } from '../../hooks/useHabiticaUser';
import { useEquipment } from '../../hooks/useEquipment';
import { calculateStrength, calculateConstitution } from '../../utils/statsUtils';

export const CharacterStats = () => {
  const { userData, loading: userLoading, error: userError } = useHabiticaUser();
  const { equipmentData, loading: equipLoading, error: equipError } = useEquipment();

  if (userLoading || equipLoading) {
    return <div className="bg-white p-4 rounded-lg shadow-md">Loading character stats...</div>;
  }

  if (userError || equipError) {
    return <div className="bg-white p-4 rounded-lg shadow-md text-red-500">Error loading character stats</div>;
  }

  if (!userData || !equipmentData) return null;

  const strengthStats = calculateStrength(userData, equipmentData);
  const constitutionStats = calculateConstitution(userData, equipmentData);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Character Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Heart size={20} className="text-red-500" />
          <span>{Math.floor(userData.stats.hp)}/{userData.stats.maxHealth} HP</span>
        </div>
        <div className="flex items-center space-x-2">
          <Sword size={20} className="text-blue-500" />
          <span>{strengthStats.total} STR</span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield size={20} className="text-gray-600" />
          <span>{constitutionStats.total} CON</span>
        </div>
      </div>
    </div>
  );
};