export interface Character {
  name: string;
  health: number;
  defense: number;
  abilityName: string;
  abilityDescription: string;
  picture: string;
  exhausted?: boolean;
}

export interface Equipment {
  name: string;
  type: string;
  strength?: number;
  item: string;
  description?: string;
  exhausted?: boolean;
  cost?: number;
}

export interface GuildMember {
  character: Character;
  equipment: Equipment[];
}

export interface Guild {
  name: string;
  guildMembers: GuildMember[];
}

export interface DeathCurse {
  name: string;
  value: number;
  description: string;
}
