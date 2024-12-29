import { useState, useEffect } from 'react';
import { QuestBoss } from '../types/quest';
import { getQuestBosses } from '../api/quests';

export const useQuestBosses = () => {
  const [bosses, setBosses] = useState<QuestBoss[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadBosses = async () => {
      try {
        const data = await getQuestBosses();
        setBosses(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch quest bosses'));
      } finally {
        setLoading(false);
      }
    };

    loadBosses();
  }, []);

  return { bosses, loading, error };
};