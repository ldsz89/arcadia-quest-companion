<template>
  <div>
    <v-container>
      <v-select
        v-model="guildName"
        :items="guilds"
        label="Guild"
        @change="setGuildName(guildName)"
      />
    </v-container>
    <bottom-banner
      v-if="guildName"
      :advance="advance"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BottomBanner from '@/components/BottomBanner.vue';

@Component({
  components: {
    BottomBanner,
  },
})
export default class SelectGuild extends Vue {
  guilds = ['Tiger', 'Crow', 'Shark', 'Snake'];
  guildName = '';

  mounted() {
    this.guildName = this.$store.state.guild.name;
  }

  setGuildName(name: string) {
    this.$store.commit('setGuildName', name);
  }

  setGuildGold() {
    this.$store.commit('setGuildGold', 0);
  }

  advance() {
    this.setGuildGold();
    this.$router.push('select-characters');
  }
}
</script>
