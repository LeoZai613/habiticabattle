import React from 'react';
import { HabiticaUser } from '../../types/user';
import { useEquipment } from '../../hooks/useEquipment';
import { calculateStrength } from '../../utils/statsUtils';

interface StatBreakdownProps {
  userData: HabiticaUser;
}

export const StatBreakdown: React.FC<StatBreakdownProps> = ({ userData }) => {
  const { equipmentData, loading, error } = useEquipment();

  if (loading) {
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="space-y-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/6"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-4 p-4 bg-red-50 rounded-lg text-red-600">
        Unable to load equipment data
      </div>
    );
  }

  if (!equipmentData) return null;

  const stats = calculateStrength(userData, equipmentData);

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Strength Breakdown</h3>
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Base:</span>
          <span>{stats.base}</span>
        </div>
        <div className="flex justify-between">
          <span>Level Bonus:</span>
          <span>+{stats.level}</span>
        </div>
        <div className="flex justify-between">
          <span>Equipment:</span>
          <span>+{stats.equipment}</span>
        </div>
        <div className="flex justify-between">
          <span>Class Bonus:</span>
          <span>+{Math.floor(stats.class)}</span>
        </div>
        {stats.buffs > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Buffs:</span>
            <span>+{stats.buffs}</span>
          </div>
        )}
        <div className="flex justify-between font-semibold border-t border-gray-200 pt-1 mt-1">
          <span>Total:</span>
          <span>{stats.total}</span>
        </div>
      </div>
    </div>
  );
};