import Vue from 'vue';
import Vuex from 'vuex';
import {Guild, GuildMember, Character} from '../types';

let guild: Guild = {
  name: '',
  guildMembers: [],
  gold: 0,
};

guild = {
  'name': 'Shark',
  'gold': 0,
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
    'equipment': [],
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
  },
  actions: {
  },
  actions: {},
  modules: {},
});
