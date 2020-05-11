<template>
  <v-badge
    :content="reroll"
    color="rgba(0, 0, 0, 0.5)"
    overlap
    bottom
    left
  >
    <v-icon>mdi-dice-3</v-icon>
  </v-badge>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class RerollBadge extends Vue {
  @Prop() reroll!: number | string;

  mounted() {
    if (this.reroll === 999) {
      this.reroll = 'X';
    }
  }
}
</script>

<style lang="scss" scoped>
.v-badge {
  margin: 0 .2em 1em .2em;

  .v-icon {
    font-size: 2.3em;
    color: #9bb64e;
    background-color: white;
    border-radius: 17px;
    padding: 2px;
  }
}
</style>
