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

async function logCharacterStats() {
  try {
    const response = await fetch(`${HABITICA_CONFIG.API_URL}/members/${HABITICA_CONFIG.USER_ID}`, {
      headers,
      method: 'GET'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }
    
    const { data } = await response.json();
    const { stats } = data;
    
    console.group('Character Stats');
    console.log('=== Basic Info ===');
    console.log(`Level: ${stats.lvl}`);
    console.log(`Class: ${stats.class}`);
    
    console.log('\n=== Health & Mana ===');
    console.log(`HP: ${Math.floor(stats.hp)}/${stats.maxHealth}`);
    console.log(`MP: ${Math.floor(stats.mp)}/${stats.maxMP}`);
    
    console.log('\n=== Experience & Gold ===');
    console.log(`XP: ${Math.floor(stats.exp)}/${stats.toNextLevel}`);
    console.log(`Gold: ${Math.floor(stats.gp)}`);
    
    console.log('\n=== Base Stats ===');
    console.log(`Strength: ${Math.floor(stats.str)}`);
    console.log(`Constitution: ${Math.floor(stats.con)}`);
    console.log(`Intelligence: ${Math.floor(stats.int)}`);
    console.log(`Perception: ${Math.floor(stats.per)}`);
    
    if (stats.buffs) {
      console.log('\n=== Active Buffs ===');
      console.log(`Strength Buff: +${stats.buffs.str || 0}`);
      console.log(`Constitution Buff: +${stats.buffs.con || 0}`);
      console.log(`Intelligence Buff: +${stats.buffs.int || 0}`);
      console.log(`Perception Buff: +${stats.buffs.per || 0}`);
    }
    
    console.groupEnd();
  } catch (error) {
    console.error('Error fetching character stats:', error);
  }
}

logCharacterStats();