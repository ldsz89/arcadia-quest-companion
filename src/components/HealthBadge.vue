<template>
  <v-badge
    :content="health"
    color="rgba(0, 0, 0, 0.5)"
    overlap
    bottom
    left
  >
    <v-icon>mdi-heart</v-icon>
  </v-badge>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class HealthBadge extends Vue {
  @Prop() health!: number;
}
</script>

<style lang="scss" scoped>
.v-badge {
  margin: 0 .2em 1em .2em;

  .v-icon {
    font-size: 2.3em;
    color: red;
    background-color: rgba(108,145,172,1);
    border-radius: 17px;
    padding: 2px;
  }
}
</style>
