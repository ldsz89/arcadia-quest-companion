import Vue from 'vue';
import Vuex from 'vuex';
import {Guild, GuildMember, Character, Equipment} from '../types';

const guild: Guild = {
  name: '',
  guildMembers: [],
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
        if (member.character.name === guildMember.character.name) {
          member.equipment = guildMember.equipment;
        }
      }
    },
  },
  actions: {},
  modules: {},
});
