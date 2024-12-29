import { useState, useEffect } from 'react';
import { equipmentApi } from '../api/equipment';
import { Equipment } from '../types/equipment';

export const useEquipment = () => {
  const [equipmentData, setEquipmentData] = useState<Record<string, Equipment> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadEquipmentData = async () => {
      try {
        const data = await equipmentApi.getAll();
        setEquipmentData(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch equipment data'));
      } finally {
        setLoading(false);
      }
    };

    loadEquipmentData();
  }, []);

  return { equipmentData, loading, error };
};