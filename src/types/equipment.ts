export type EquipmentSlot = typeof EQUIPMENT_SLOTS[number];
export type EquipmentStat = typeof EQUIPMENT_STATS[number];

export interface Equipment {
  key: string;
  text: string;
  notes?: string;
  value?: number;
  str?: number;
  con?: number;
  int?: number;
  per?: number;
  type: string;
  klass?: string;
  index?: string;
  season?: string;
  specialClass?: string;
  set?: string;
}

export interface EquippedGear {
  weapon?: string;
  shield?: string;
  head?: string;
  armor?: string;
  headAccessory?: string;
  eyewear?: string;
  body?: string;
  back?: string;
}

export interface EquipmentSet {
  name: string;
  season: string;
  year: string;
  class: string;
}