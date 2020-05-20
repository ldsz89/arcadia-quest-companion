<template>
  <div class="d-flex justify-space-between wounds">
    <div>
      <p>Wounds - {{ guildMember.wounds }}</p>
    </div>
    <div class="d-flex align-center">
      <v-btn
        fab
        icon="true"
        :disabled="guildMember.wounds === 0"
        @click="decrement()"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <div
        v-for="(wound, index) in guildMember.wounds"
        :key="guildMember.character.name + '-wound-' + index"
      >
        <v-icon class="wound">
          mdi-heart
        </v-icon>
      </div>
      <v-btn
        fab
        icon="true"
        @click="increment()"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import {GuildMember} from '../types';

@Component
export default class WoundTracker extends Vue {
  @Prop() guildMember!: GuildMember;

  increment() {
    if (this.guildMember.wounds < this.guildMember.character.health) {
      this.$store.commit('incrementGuildMemberWounds', this.guildMember);
    }
  }

  decrement() {
    this.$store.commit('decrementGuildMemberWounds', this.guildMember);
  }
}
</script>

<style lang="scss" scoped>
.wounds {
  margin-top: 1em;
  color: #C4C3A7;

  .wound {
    color: red;
  }
}
</style>
