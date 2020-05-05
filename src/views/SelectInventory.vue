<template>
  <div>
    <v-container>
      <h1 class="guild-name">
        {{ guild.name }}
      </h1>
      <v-select
        v-model="selectedEquipmentSources"
        :items="equipmentSource"
        label="Equipment options"
        item-text="label"
        item-value="value"
        multiple
        @change="setEquipment()"
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
            <v-select
              v-for="j in 4"
              :key="guildMember.character.name + '-equipment-' + j"
              v-model="guildMember.equipment[j-1]"
              :items="equipment"
              item-text="item"
              item-value="value"
              background-color="#C4C3A7"
              color="#C4C3A7"
            />
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
import equipmentData from '@/data/equipment.json';
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
  equipmentSource = [
    {
      label: 'Starter',
      value: 'starter',
    },
    {
      label: 'Level 1',
      value: 'level-1',
    },
    {
      label: 'Level 2',
      value: 'level-2',
    },
    {
      label: 'Level 3',
      value: 'level-3',
    },
    {
      label: 'Level 4',
      value: 'level-4',
    },
    {
      label: 'Level 5',
      value: 'level-5',
    },
    {
      label: 'Rewards',
      value: 'rewards',
    },
  ];
  selectedEquipmentSources: string[] = [];
  equipmentData = equipmentData;
  equipment: any[] = [];

  mounted() {
    this.initializeGuild();
  }

  initializeGuild() {
    const guildCookie = Cookie.get('guild');
    if (guildCookie) {
      this.guild = JSON.parse(guildCookie);
    }
  }

  setEquipment() {
    const equipment = [];
    for (const source of this.selectedEquipmentSources) {
      for (const data of this.equipmentData[source]) {
        equipment.push({
          item: data.name,
          value: data,
        });
      }
    }
    this.equipment = equipment;
  }

  advance() {
    Cookie.set('guild', JSON.stringify(this.guild));
    this.$router.push('guild-sheet');
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

.v-select__selection--comma {
  color: #C4C3A7 !important;
}
</style>
