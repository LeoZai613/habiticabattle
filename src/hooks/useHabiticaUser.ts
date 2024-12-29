import { useState, useEffect } from 'react';
import { endpoints } from '../api/endpoints';
import { HABITICA_CONFIG } from '../config/habitica';
import { HabiticaUser } from '../types/user';

export const useHabiticaUser = () => {
  const [userData, setUserData] = useState<HabiticaUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await endpoints.user.getStats(HABITICA_CONFIG.USER_ID);
        setUserData(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch user data'));
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  return { userData, loading, error };
};