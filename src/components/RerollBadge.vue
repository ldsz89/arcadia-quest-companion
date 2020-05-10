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
  @Prop() reroll!: number;
}
</script>

<style lang="scss" scoped>
.v-badge {
  margin-bottom: 1em;

  .v-icon {
    font-size: 3em;
    color: red;
    background-color: rgba(108,145,172,1);
    border-radius: 17px;
    padding: 2px;
  }
}
</style>
