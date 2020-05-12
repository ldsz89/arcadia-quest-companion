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

  setGuildSeal() {
    if (this.guildName === 'Tiger') {
      this.$store.commit('setGuildSeal', 'Tiger.png');
    } else if (this.guildName === 'Crow') {
      this.$store.commit('setGuildSeal', 'Crow.png');
    } else if (this.guildName === 'Shark') {
      this.$store.commit('setGuildSeal', 'Shark.png');
    } else if (this.guildName === 'Snake') {
      this.$store.commit('setGuildSeal', 'Snake.png');
    }
  }

  advance() {
    this.setGuildGold();
    this.setGuildSeal();
    this.$router.push('select-characters');
  }
}
</script>
