<template>
  <v-badge
    :content="defense"
    color="rgba(0, 0, 0, 0.5)"
    overlap
    bottom
    left
  >
    <v-img
      src="../assets/defense.png"
      width="2.5em"
    />
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
}
</style>
