import Vue from 'vue';
import Vuex from 'vuex';
import {Guild, GuildMember, Character, Equipment} from '../types';

const guild: Guild = {
  name: '',
  guildMembers: [],
};
// const guild: Guild = {
//   'name': 'Tiger',
//   'guildMembers': [
//     {
//       'character': {
//         'name': 'Kisha', 'health': 3, 'defense': 3, 'abilityName': 'Lucky Shot',
//         'abilityDescription': '+1 Reroll for every equipped non-Magic Ranged attack card.',
//         'picture': 'Kisha.png',
//         'exhausted': false,
//       },
//       'equipment': [],
//     },
//     {
//       'character': {
//         'name': 'Jaimie', 'health': 3, 'defense': 3, 'abilityName': 'Shield Bash',
//         'abilityDescription': 'May exhaust her Hero card to Move a Close Character up to 2 spaces away ' +
//           '(this Move doesn\'t trigger Guard Reaction).',
//         'picture': 'Jaimie.png',
//         'exhausted': false,
//       },
//       'equipment': [],
//     },
//     {
//       'character': {
//         'name': 'Diana', 'health': 4, 'defense': 2, 'abilityName': 'Volley',
//         'abilityDescription': 'When attacking a Clost Enemy with a Bow or Thrown Weapon, may target one extra ' +
//           'Close enemy per crit rolled.',
//         'picture': 'Diana.png',
//         'exhausted': false,
//       },
//       'equipment': [],
//     },
//   ],
// };

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
  },
  actions: {
    // setGuildMemberEquipment(context: any, guildMember: GuildMember, equipment: Equipment[]) {
    //   guildMember.equipment = equipment;
    //   context.commit('setGuildEquipment', guildMember);
    // },
  },
  modules: {},
});
