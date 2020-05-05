<template>
  <div>
    <v-container>
      <h1 class="guild-name">
        {{ guild.name }}
      </h1>
      <v-select
        v-model="selectedEquipmentOptions"
        :items="equipmentOptions"
        multiple
      />
      <v-row>
        <v-col
          v-for="(guildMember, i) in guild.guildMembers"
          :key="'guildMember-' + i"
          cols="12"
          md="4"
          sm="6"
          xs="12"
        >
          <div>
            <character-card
              :character="guildMember.character"
            />
            <!-- <v-menu>
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  dark
                  v-on="on"
                  block
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
            </v-menu> -->
            <v-list dense>
              <v-list-item
                v-for="(equipment, j) in guildMember.equipment"
                :key="guildMember.character.name + '-equipment-' + j"
                @click="removeEquipment(guildMember, equipment)"
              >
                <v-list-item-title class="text-left">
                  {{ equipment.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ equipment.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <bottom-banner
      :advance="advance"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Cookie from 'js-cookie';
import {Equipment, Guild, GuildMember} from '@/types';
import equipment from '@/data/equipment.json';
import CharacterCard from '@/components/CharacterCard.vue';
import BottomBanner from '@/components/BottomBanner.vue';

@Component({
  components: {
    CharacterCard,
    BottomBanner,
  },
})
export default class SelectInventory extends Vue {
  guild: Guild = {
    name: '',
    guildMembers: [],
  };
  equipmentOptions = ['Starter', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'];
  selectedEquipmentOptions: string[] = [];
  equipment = equipment;

  mounted() {
    this.initializeGuild();
  }

  initializeGuild() {
    const guildCookie = Cookie.get('guild');
    if (guildCookie) {
      this.guild = JSON.parse(guildCookie);
    }
  }

  addEquipment(guildMember: GuildMember, equipment: Equipment) {
    console.log('#addEquipment: guildMember:' + JSON.stringify(guildMember, null, 2));
    console.log('#addEquipment: equipment:' + JSON.stringify(equipment, null, 2));
    return;
  }

  removeEquipment(guildMember: GuildMember, equipment: Equipment) {
    console.log('#removeEquipment: guildMember:' + JSON.stringify(guildMember, null, 2));
    console.log('#removeEquipment: equipment:' + JSON.stringify(equipment, null, 2));
    return;
  }

  advance() {
    Cookie.set('guild', JSON.stringify(this.guild));
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
