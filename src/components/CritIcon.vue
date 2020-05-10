<template>
  <div class="crit">
    <v-icon>mdi-alert-octagram-outline</v-icon>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class CritIcon extends Vue {
}
</script>

<style lang="scss">
.v-icon {
  font-size: 3em;
  color: white;
  background-color: black;
  border-radius: 17px;
  padding: 2px;
}
</style>
