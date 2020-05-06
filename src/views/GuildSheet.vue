<template>
  <div>
    <v-container>
      <h1 class="guild-name">
        {{ guild.name }}
      </h1>
      <v-row>
        <v-col
          v-for="(guildMember, i) in guild.guildMembers"
          :key="'guildMember-' + i"
          cols="12"
          md="4"
          sm="6"
          xs="12"
        >
          <character-card :character="guildMember.character" />
          <v-row>
            <v-col
              v-for="(equipment, j) in guildMember.equipment"
              :key="guildMember.character.name + '-equipment-' + j"
              cols="6"
            >
              <equipment-card
                :equipment="equipment"
                @click.native="toggleEquipmentExhaustion(equipment)"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Cookie from 'js-cookie';
import {Guild, Equipment} from '@/types';
import CharacterCard from '@/components/CharacterCard.vue';
import EquipmentCard from '@/components/EquipmentCard.vue';

@Component({
  components: {
    CharacterCard,
    EquipmentCard,
  },
})
export default class GuildSheet extends Vue {
  guild: Guild = {
    name: '',
    guildMembers: [],
  };

  mounted() {
    this.initializeGuild();
  }

  initializeGuild() {
    const guildCookie = Cookie.get('guild');
    if (guildCookie) {
      this.guild = JSON.parse(guildCookie);
    }
  }

  toggleEquipmentExhaustion(equipment: Equipment) {
    if (equipment.exhausted === undefined) {
      equipment.exhausted = true;
    } else {
      equipment.exhausted = !equipment.exhausted;
    }
  }
}
</script>
