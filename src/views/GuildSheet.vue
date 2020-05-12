<template>
  <div>
    <v-container>
      <div class="d-flex">
        <back-button to="/select-inventory">
          Select Inventory
        </back-button>
      </div>
      <h1 class="guild-name">
        {{ guild.name }}
      </h1>
      <div class="d-flex align-center justify-center">
        <v-btn
          icon
          :disabled="disableDecrement()"
          @click="decrementGold()"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-badge
          :content="guild.gold"
          overlap
          color="#ae3347"
        >
          <v-img
            src="../assets/gold.svg"
            width="50"
          />
        </v-badge>
        <v-btn
          icon
          @click="incrementGold()"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <v-row>
        <v-col
          v-for="(guildMember, i) in guild.guildMembers"
          :key="'guildMember-' + i"
          cols="12"
          md="4"
          sm="6"
          xs="12"
        >
          <character-card
            :character="guildMember.character"
            @click.native="toggleCharacterExhaustion(guildMember)"
          />
          <v-row>
            <v-col
              v-for="(equipment, j) in guildMember.equipment"
              :key="guildMember.character.name + '-equipment-' + j"
              cols="6"
            >
              <equipment-card
                :equipment="equipment"
                @click.native="toggleEquipmentExhaustion(guildMember, equipment)"
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
import {Guild, Equipment, GuildMember} from '@/types';
import CharacterCard from '@/components/CharacterCard.vue';
import EquipmentCard from '@/components/EquipmentCard.vue';
import BackButton from '@/components/BackButton.vue';

@Component({
  components: {
    BackButton,
    CharacterCard,
    EquipmentCard,
  },
})
export default class GuildSheet extends Vue {
  guild: Guild = {
    name: '',
    guildMembers: [],
    gold: 0,
  };

  mounted() {
    this.initializeGuild();
  }

  initializeGuild() {
    this.guild = this.$store.state.guild;
  }

  incrementGold() {
    this.$store.commit('setGuildGold', ++this.guild.gold);
  }

  decrementGold() {
    this.$store.commit('setGuildGold', --this.guild.gold);
  }

  disableDecrement() {
    return this.guild.gold === 0;
  }

  toggleCharacterExhaustion(guildMember: GuildMember) {
    guildMember.character.exhausted = !guildMember.character.exhausted;
    this.$store.commit('setGuildMemberExhaustion', guildMember);
  }

  toggleEquipmentExhaustion(guildMember: GuildMember, equipment: Equipment) {
    equipment.exhausted = !equipment.exhausted;
    this.$store.commit('setGuildMemberEquipment', guildMember);
  }
}
</script>

<style lang="scss" scoped>
#gold {
  width: 5em;
}
</style>
