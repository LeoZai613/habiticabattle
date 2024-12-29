import { HABITICA_CONFIG } from '../config/habitica';
import { HabiticaUser } from '../types/user';
import { Equipment } from '../types/equipment';

const headers = {
  'Content-Type': 'application/json',
  'x-api-user': HABITICA_CONFIG.USER_ID,
  'x-api-key': HABITICA_CONFIG.API_TOKEN,
  'x-client': `${HABITICA_CONFIG.USER_ID}-HabiticaClone`
};

export const fetchMemberStats = async (memberId: string): Promise<HabiticaUser> => {
  try {
    const response = await fetch(`${HABITICA_CONFIG.API_URL}/members/${memberId}`, {
      headers,
      method: 'GET'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch member stats');
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching member stats:', error);
    throw error;
  }
};

export const fetchEquipmentData = async (): Promise<Record<string, Equipment>> => {
  try {
    const response = await fetch(`${HABITICA_CONFIG.API_URL}/content`, {
      headers,
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch equipment data');
    }

    const data = await response.json();
    
    if (!data.data?.gear?.flat) {
      console.error('Unexpected equipment data structure:', data);
      throw new Error('Invalid equipment data structure');
    }

    // Debug log the first few items to verify structure
    const sampleItems = Object.entries(data.data.gear.flat).slice(0, 3);
    console.log('Sample equipment items:', sampleItems);

    return data.data.gear.flat;
  } catch (error) {
    console.error('Error fetching equipment data:', error);
    throw error;
  }
};