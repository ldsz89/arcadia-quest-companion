<template>
  <div>
    <v-container>
      <v-select
        v-model="guild.name"
        :items="guilds"
        label="Guild"
      />
    </v-container>
    <bottom-banner
      v-if="guild.name"
      :advance="advance"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Guild} from '../types';
import BottomBanner from '@/components/BottomBanner.vue';
import Cookie from 'js-cookie';

@Component({
  components: {
    BottomBanner,
  },
})
export default class SelectGuild extends Vue {
  guilds = ['Tiger', 'Crow', 'Shark', 'Snake'];
  guild: Guild = {
    name: '',
    guildMembers: [],
  };

  advance() {
    Cookie.set('guild', JSON.stringify(this.guild));
    this.$router.push('select-characters');
  }
}
</script>
