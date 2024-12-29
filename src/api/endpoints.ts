import { apiClient } from './client';
import { HabiticaUser } from '../types/user';
import { Equipment } from '../types/equipment';

export const endpoints = {
  user: {
    getStats: (memberId: string) => 
      apiClient.fetch<HabiticaUser>(`/members/${memberId}`),
    
    getEquipment: () => 
      apiClient.fetch<Record<string, Equipment>>('/content')
      .then(data => data.gear.flat)
  }
};