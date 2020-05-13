<template>
  <v-menu>
    <template v-slot:activator="{ on }">
      <v-btn
        fab
        icon="true"
        v-on="on"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(token, i) in inventoryMenuItems"
        :key="token + i"
      >
        <v-list-title>{{ token.name }}</v-list-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ExplorationTokenData from '@/data/exploration-tokens.json';
import {Token} from '@/types';

@Component
export default class InventoryMenu extends Vue {
  inventoryMenuItems: Token[] = ExplorationTokenData;
}
</script>

<style lang="scss" scoped>
</style>
