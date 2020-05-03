<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(character, i) in characters"
          :key="'select-' + i"
          cols="12"
        >
          <character-card
            :character="character"
            :select="selectCharacter"
            :deselect="deselectCharacter"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-banner
      v-if="selectedCharacters.length"
      sticky
    >
      <v-chip
        v-for="(character, i) in selectedCharacters"
        :key="i"
        class="ma-2"
      >
        <v-avatar>
          <v-img :src="require(`../assets/${character.picture}`)" />
        </v-avatar>
        {{ character.name }}
      </v-chip>
      <template v-slot:actions>
        <v-btn
          text
          color="primary"
        >
          Continue
        </v-btn>
      </template>
    </v-banner>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import CharacterCard from '@/components/CharacterCard.vue';
import characters from '@/data/characters.json';
import {Character} from '../types';

@Component({
  components: {
    CharacterCard,
  },
})
export default class SelectCharcter extends Vue {
  characters = characters;
  selectedCharacters: Character[] = [];

  selectCharacter(character: Character) {
    if (this.selectedCharacters.length < 3 && this.selectedCharacters.indexOf(character) === -1) {
      this.selectedCharacters.push(character);
      return true;
    }
    return false;
  }

  deselectCharacter(character: Character) {
    const characterIndex = this.selectedCharacters.indexOf(character);
    if (characterIndex !== -1) {
      this.selectedCharacters.splice(characterIndex, 1);
    }
  }
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

.v-banner--sticky {
  top: unset !important;
  bottom: 0;
}

.v-banner__content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.v-chip {
  margin-left: .5em;
  margin-right: .2em;
}
</style>
