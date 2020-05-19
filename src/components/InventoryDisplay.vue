<template>
  <div class="d-flex">
    <v-img
      v-for="(token, i) in guildMember.inventory"
      :key="guildMember.character.name + '-inventory-' + i"
      :src="require('../assets/' + token.picture)"
      width="4em"
      class="mx-1"
      @click="remove(guildMember, token)"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import {GuildMember} from '../types';

@Component
export default class InventoryDisplay extends Vue {
  @Prop() guildMember!: GuildMember;
  @Prop() remove!: any;
}
</script>

<style lang="scss" scoped>
</style>
