import { useState, useEffect } from 'react';
import { fetchInventory } from '../api/habitica';

export const useInventory = () => {
  const [inventory, setInventory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadInventory = async () => {
      try {
        const data = await fetchInventory();
        setInventory(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadInventory();
  }, []);

  return { inventory, loading, error };
};