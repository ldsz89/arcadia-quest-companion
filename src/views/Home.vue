<template>
  <div class="home">
    <img
      src="../assets/arcadia_quest_inferno_logo.png"
      alt="Arcadia Quest Inferno"
    >
    <h1>Welcome to the Arcadia Quest: Inferno Companion App</h1>
    <div class="d-flex justify-center">
      <v-btn
        href="/select-guild"
        color="#631f2e"
      >
        Start
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style lang="scss">
h1 {
  color: #C4C3A7;
}

.v-btn {
  color: #C4C3A7 !important;
}
</style>
