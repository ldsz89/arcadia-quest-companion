<template>
  <div>
    <v-container>
      <v-row v-if="guilds.length">
        <v-col cols="12">
          <v-select
            v-model="guild.name"
            :items="guilds"
            label="Guild"
          />
        </v-col>
      </v-row>
      <v-row
        v-for="(guildMember, i) in guild.guildMembers"
        :key="'guildMember-' + i"
      >
        <v-col
          cols="12"
          sm="6"
          xs="12"
        >
          <character-card
            :character="guildMember.character"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          xs="12"
        >
          <v-menu>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                v-on="on"
              >
                Add equipment
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(equipment, index) in starterEquipment"
                :key="index"
                @click="addEquipment(guildMember, equipment)"
              >
                <v-list-item-title>{{ equipment.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-list-item
            v-for="(equipment, j) in guildMember.equipment"
            :key="guildMember.character.name + '-equipment-' + j"
            @click="removeEquipment(guildMember, equipment)"
          >
            <v-list-item-content>
              <v-list-item-title class="text-left">
                {{ equipment.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ equipment.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
    <v-banner
      v-if="showAdvanceBanner()"
      sticky
    >
      <template v-slot:actions>
        <v-btn
          text
          color="primary"
          @click="advance()"
        >
          Continue
        </v-btn>
      </template>
    </v-banner>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Cookie from 'js-cookie';
import {Character, Equipment, Guild, GuildMember} from '@/types';
import equipment from '@/data/equipment.json';
import CharacterCard from '@/components/CharacterCard.vue';

@Component({
  components: {
    CharacterCard,
  },
})
export default class SelectInventory extends Vue {
  guilds = ['Tiger', 'Crow', 'Shark', 'Snake'];
  guild: Guild = {
    name: '',
    guildMembers: [],
  };
  characters: Character[] = [];
  starterEquipment: Equipment[] = equipment.starters;

  mounted() {
    this.initializeCharacters();
    this.initializeGuild();
  }

  initializeCharacters() {
    const charactersCookie = Cookie.get('characters');
    if (charactersCookie) {
      this.characters = JSON.parse(charactersCookie);
    }
  }

  initializeGuild() {
    for (const character of this.characters) {
      const guildMember: GuildMember = {
        character,
        equipment: [],
      };
      this.guild.guildMembers.push(guildMember);
    }
  }

  addEquipment(guildMember: GuildMember, equipment: Equipment) {
    if (guildMember.equipment.length < 4 && this.starterEquipment.indexOf(equipment) !== -1) {
      guildMember.equipment.push(equipment);
      this.starterEquipment.splice(this.starterEquipment.indexOf(equipment), 1);
    }
  }

  removeEquipment(guildMember: GuildMember, equipment: Equipment) {
    if (guildMember.equipment.indexOf(equipment) !== -1) {
      guildMember.equipment.splice(guildMember.equipment.indexOf(equipment), 1);
      this.starterEquipment.push(equipment);
    }
  }

  showAdvanceBanner() {
    return !this.starterEquipment.length && this.guild.name;
  }

  advance() {
    if (this.guild.name) {
      Cookie.set('guild', JSON.stringify(this.guild));
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card div.card {
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;

  .v-card__subtitle {
    text-align: left;
  }
}
</style>
