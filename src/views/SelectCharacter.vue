<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="(character, i) in characters"
        :key="i"
        cols="12"
      >
        <character-card :character="character" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import CharacterCard from '@/components/CharacterCard.vue';
import characters from '@/data/characters.json';

@Component({
  components: {
    CharacterCard,
  },
})
export default class SelectCharcter extends Vue {
  characters = characters;
}
</script>

<style lang="scss">
.v-card div.card {
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;

  .v-card__subtitle {
    text-align: left;
  }
}
</style>
