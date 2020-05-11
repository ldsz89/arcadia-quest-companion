<template>
  <v-badge
    :content="attack"
    color="rgba(0, 0, 0, 0.5)"
    overlap
    bottom
    left
  >
    <v-img
      src="../assets/Sword.png"
      width="2.5em"
    />
  </v-badge>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class MeleeAttackBadge extends Vue {
  @Prop() attack!: number;
}
</script>

<style lang="scss" scoped>
</style>
