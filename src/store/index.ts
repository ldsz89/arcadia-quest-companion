import Vue from 'vue';
import Vuex from 'vuex';
import {Guild, GuildMember, Character} from '../types';

let guild: Guild = {
  name: '',
  guildMembers: [],
  gold: 0,
  guildSeal: '',
};

guild = {
  'name': 'Shark',
  'gold': 0,
  'guildSeal': 'Shark.png',
  'guildMembers': [{
    'character': {
      'name': 'Kisha',
      'health': 3,
      'defense': 3,
      'abilityName': 'Lucky Shot',
      'abilityDescription': '+1 Reroll for every equipped non-Magic Ranged attack card.',
      'picture': 'Kisha.png',
      'exhausted': false,
    },
    'equipment': [
      {
        'name': 'Uberblade',
        'type': 'Melee Attack',
        'strength': 6,
        'item': 'Sword',
        'cost': 7,
        'defense': 3,
        'exhausted': true,
      },
      {
        'name': 'Ultraviolent Shield',
        'type': 'Permanent',
        'item': 'Shield',
        'description': 'This Hero may take 2 Damnation to roll an extra +2 Defense dice.',
        'cost': 6,
        'reroll': 4,
        'defense': 4,
        'exhausted': false,
      },
    ],
    'inventory': [],
    'wounds': 2,
  }, {
    'character': {
      'name': 'Cassius',
      'health': 4,
      'defense': 1,
      'abilityName': 'Foe on a Stick',
      'abilityDescription': 'When attacking with a Lance or Exotic attack card, the target does not roll Defense dice.',
      'picture': 'Cassius.png',
      'exhausted': false,
    },
    'equipment': [],
    'inventory': [],
    'wounds': 2,
  }, {
    'character': {
      'name': 'Phyx',
      'health': 4,
      'defense': 1,
      'abilityName': 'Secret of the Blade',
      'abilityDescription': 'When attacking with a Sword attack card, each crit deals one additional Hit.',
      'picture': 'Phyx.png',
      'exhausted': false,
    },
    'equipment': [],
    'inventory': [],
    'wounds': 2,
  }],
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    guild,
  },
  getters: {
    characters(state) {
      const characters: Character[] = [];
      for (const guildMember of state.guild.guildMembers) {
        characters.push(guildMember.character);
      }
      return characters;
    },
  },
  mutations: {
    setGuildName(state, name: string) {
      state.guild.name = name;
    },
    setGuildMembers(state, guildMembers: GuildMember[]) {
      state.guild.guildMembers = guildMembers;
    },
    addGuildMembers(state, guildMember: GuildMember) {
      if (state.guild.guildMembers.indexOf(guildMember) === -1) {
        state.guild.guildMembers.push(guildMember);
      }
    },
    removeGuildMember(state, guildMember: GuildMember) {
      for (const member of state.guild.guildMembers) {
        if (member.character.name === guildMember.character.name) {
          state.guild.guildMembers.splice(state.guild.guildMembers.indexOf(member), 1);
        }
      }
    },
    clearGuildMembers(state) {
      state.guild.guildMembers = [];
    },
    setGuildMemberExhaustion(state, guildMember: GuildMember) {
      for (const member of state.guild.guildMembers) {
        if (member.character.name === guildMember.character.name) {
          member.character.exhausted = guildMember.character.exhausted;
        }
      }
    },
    setGuildMemberEquipment(state, guildMember: GuildMember) {
      for (const member of state.guild.guildMembers) {
        if (member.character === guildMember.character) {
          member.equipment = guildMember.equipment;
        }
      }
    },
    setGuildGold(state, gold: number) {
      state.guild.gold = gold;
    },
    setGuildSeal(state, guildSeal: string) {
      state.guild.guildSeal = guildSeal;
    },
    setGuildMemberInventory(state, guildMember: GuildMember) {
      for (const member of state.guild.guildMembers) {
        if (member.character === guildMember.character) {
          member.inventory = guildMember.inventory;
        }
      }
    },
    incrementGuildMemberWounds(state, guildMember: GuildMember) {
      for (const member of state.guild.guildMembers) {
        if (member.character === guildMember.character) {
          member.wounds++;
        }
      }
    },
    decrementGuildMemberWounds(state, guildMember: GuildMember) {
      for (const member of state.guild.guildMembers) {
        if (member.character === guildMember.character) {
          if (member.wounds > 0) {
            member.wounds--;
          }
        }
      }
    },
  },
  actions: {},
  modules: {},
});
