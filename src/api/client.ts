import { HABITICA_CONFIG } from '../config/habitica';

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

class ApiClient {
  private headers = {
    'Content-Type': 'application/json',
    'x-api-user': HABITICA_CONFIG.USER_ID,
    'x-api-key': HABITICA_CONFIG.API_TOKEN,
    'x-client': `${HABITICA_CONFIG.USER_ID}-HabiticaClone`
  };

  async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
      const response = await fetch(`${HABITICA_CONFIG.API_URL}${endpoint}`, {
        ...options,
        headers: { ...this.headers, ...options.headers }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `API request failed: ${response.statusText}`);
      }

      const data: ApiResponse<T> = await response.json();
      
      if (!data.success) {
        throw new Error('API request was not successful');
      }

      return data.data;
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      throw error;
    }
  }
}

// Export a singleton instance
export const apiClient = new ApiClient();