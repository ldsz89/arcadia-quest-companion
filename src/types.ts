export interface Character {
  name: string;
  health: number;
  defense: number;
  abilityName: string;
  abilityDescription: string;
  picture: string;
  exhausted: boolean;
}

export interface CharacterJSON {
  name: string;
  health: number;
  defense: number;
  abilityName: string;
  abilityDescription: string;
  picture: string;
}

export interface Equipment {
  name: string;
  type: string;
  strength?: number;
  item: string;
  description?: string;
  exhausted: boolean;
  cost?: number;
  defense?: number;
  reroll?: number;
  health?: number;
}

export interface EquipmentJSON {
  name: string;
  type: string;
  strength?: number;
  item: string;
  description?: string;
  cost?: number;
}

export interface GuildMember {
  character: Character;
  equipment: Equipment[];
}

export interface Guild {
  name: string;
  guildMembers: GuildMember[];
  gold: number;
  guildSeal: string;
}

export interface DeathCurse {
  name: string;
  value: number;
  description: string;
}

export interface Token {
  name: string;
  description: string;
  picture: string;
}
