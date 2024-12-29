import { apiClient } from './client';
import { Equipment } from '../types/equipment';

export const equipmentApi = {
  getAll: async (): Promise<Record<string, Equipment>> => {
    const data = await apiClient.fetch<{ gear: { flat: Record<string, Equipment> } }>('/content');
    
    if (!data.gear?.flat) {
      throw new Error('Invalid equipment data structure');
    }

    return data.gear.flat;
  }
};