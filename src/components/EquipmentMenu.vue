<template>
  <v-menu>
    <template v-slot:activator="{on}">
      <v-btn
        color="primary"
        dark
        tile
        v-on="on"
      >
        {{ title }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(equ, index) in equipment"
        :key="title + '-' + equ.name + '-' + index"
        @click="add(guildMember, equ)"
      >
        <v-list-item-title>{{ equ.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import {Equipment, GuildMember} from '../types';

@Component
export default class EquipmentMenu extends Vue {
  @Prop() title!: string;
  @Prop() equipment!: Equipment[];
  @Prop() guildMember!: GuildMember;
  @Prop() add!: any;
}
</script>
