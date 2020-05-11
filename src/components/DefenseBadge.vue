<template>
  <v-badge
    :content="defense"
    color="rgba(0, 0, 0, 0.5)"
    overlap
    bottom
    left
  >
    <v-icon>mdi-shield</v-icon>
  </v-badge>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class DefenseBadge extends Vue {
  @Prop() defense!: number;
}
</script>

<style lang="scss" scoped>
.v-badge {
  margin: 0 .2em 1em .2em;

  .v-icon {
    font-size: 3em;
    color: black;
    background-color: white;
    border-radius: 17px;
    padding: 2px;
  }
}
</style>
