export const EQUIPMENT_SLOTS = [
  'weapon',
  'shield',
  'head',
  'armor',
  'headAccessory',
  'eyewear',
  'body',
  'back'
] as const;

export const EQUIPMENT_STATS = ['str', 'con', 'int', 'per'] as const;

export const SPECIAL_SETS = {
  winter2025MooseWarriorSet: {
    name: 'Moose Warrior Set',
    season: 'winter',
    year: '2024-2025',
    class: 'warrior',
    pieces: {
      shield: {
        key: 'shield_special_winter2025Warrior',
        text: 'Moose Warrior Shield',
        str: 8,
        con: 0,
        int: 0,
        per: 0,
        notes: 'Part of the Winter 2024-2025 Warrior Set'
      },
      // Add other set pieces here as they become available
    }
  }
} as const;

// Equipment type validation
export const isSpecialSet = (setKey: string): setKey is keyof typeof SPECIAL_SETS => {
  return setKey in SPECIAL_SETS;
};

export const getSetBonus = (setKey: string) => {
  if (!isSpecialSet(setKey)) return null;
  const set = SPECIAL_SETS[setKey];
  
  // Calculate total set bonus
  return Object.values(set.pieces).reduce(
    (total, piece) => ({
      str: total.str + (piece.str || 0),
      con: total.con + (piece.con || 0),
      int: total.int + (piece.int || 0),
      per: total.per + (piece.per || 0)
    }),
    { str: 0, con: 0, int: 0, per: 0 }
  );
};