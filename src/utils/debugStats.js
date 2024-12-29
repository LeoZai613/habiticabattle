const HABITICA_CONFIG = {
  API_URL: 'https://habitica.com/api/v3',
  USER_ID: '84efba67-39c4-4713-a3f0-9f13f7128ac8',
  API_TOKEN: '4b232b46-2841-4260-9f88-2b81b3a4d8a0'
};

const headers = {
  'Content-Type': 'application/json',
  'x-api-user': HABITICA_CONFIG.USER_ID,
  'x-api-key': HABITICA_CONFIG.API_TOKEN,
  'x-client': `${HABITICA_CONFIG.USER_ID}-HabiticaClone`
};

async function fetchMemberStats() {
  try {
    const response = await fetch(`${HABITICA_CONFIG.API_URL}/members/${HABITICA_CONFIG.USER_ID}`, {
      headers,
      method: 'GET'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }
    
    const data = await response.json();
    const stats = data.data.stats;
    
    console.log('Strength:', Math.floor(stats.str + (stats.buffs?.str || 0)));
    console.log('Constitution:', Math.floor(stats.con + (stats.buffs?.con || 0)));
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchMemberStats();