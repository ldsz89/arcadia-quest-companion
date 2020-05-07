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
      if (state.guild.guildMembers.indexOf(guildMember) !== -1) {
        state.guild.guildMembers.splice(state.guild.guildMembers.indexOf(guildMember), 1);
      }
    },
    clearGuildMembers(state) {
      state.guild.guildMembers = [];
    },
    // setGuildMemberCharacter(state, guildMember: GuildMember, character: Character) {
    //   const guildMemberIndex = state.guild.guildMembers.indexOf(guildMember);
    //   if (guildMemberIndex !== -1) {
    //     state.guild.guildMembers[guildMemberIndex].character = character;
    //   }
    // },
    // setGuildMemberEquipment(state, guildMember: GuildMember, equipment: Equipment[]) {
    //   const guildMemberIndex = state.guild.guildMembers.indexOf(guildMember);
    //   state.guildMembers[guildMemberIndex].equipment = equipment;
    // },
  },
  actions: {},
  modules: {},
});
