import { fetchMemberStats } from '../api/habitica';
import { HABITICA_CONFIG } from '../config/habitica';

const fetchAndLogStats = async () => {
  try {
    const data = await fetchMemberStats(HABITICA_CONFIG.USER_ID);
    console.log('Strength:', Math.floor(data.stats.str + (data.stats.buffs?.str || 0)));
    console.log('Constitution:', Math.floor(data.stats.con + (data.stats.buffs?.con || 0)));
    return data.stats;
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchAndLogStats();