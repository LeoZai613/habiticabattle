import React from 'react';
import { useHabiticaUser } from '../../hooks/useHabiticaUser';
import { HabiticaStats } from '../../types/user';

const StatRow = ({ label, value }: { label: string; value: any }) => (
  <div className="flex justify-between border-b border-gray-200 py-1">
    <span className="font-mono">{label}:</span>
    <span className="font-mono">{JSON.stringify(value)}</span>
  </div>
);

export const StatsDebug = () => {
  const { userData, loading, error } = useHabiticaUser();

  if (loading) return <div>Loading stats...</div>;
  if (error) return <div>Error loading stats: {error.message}</div>;
  if (!userData) return null;

  const { stats } = userData;

  const statGroups: Array<{ title: string; stats: Array<{ key: keyof HabiticaStats; label: string }> }> = [
    {
      title: 'Basic Stats',
      stats: [
        { key: 'lvl', label: 'Level' },
        { key: 'class', label: 'Class' },
        { key: 'hp', label: 'HP' },
        { key: 'maxHealth', label: 'Max HP' },
        { key: 'mp', label: 'MP' },
        { key: 'maxMP', label: 'Max MP' },
      ]
    },
    {
      title: 'Attributes',
      stats: [
        { key: 'str', label: 'Strength' },
        { key: 'con', label: 'Constitution' },
        { key: 'int', label: 'Intelligence' },
        { key: 'per', label: 'Perception' },
      ]
    },
    {
      title: 'Buffs',
      stats: [{ key: 'buffs', label: 'Active Buffs' }]
    },
    {
      title: 'Progress',
      stats: [
        { key: 'exp', label: 'Experience' },
        { key: 'toNextLevel', label: 'XP to Next Level' },
        { key: 'gp', label: 'Gold' },
      ]
    }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Debug Stats</h2>
        <span className="text-xs text-gray-500">Raw API Data</span>
      </div>
      
      <div className="space-y-4">
        {statGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-semibold text-gray-700 mb-2">{group.title}</h3>
            {group.stats.map(({ key, label }) => (
              <StatRow key={key} label={label} value={stats[key]} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};