<template>
  <v-card
    :class="{selected: selected}"
    @click="toggleCharacter(character)"
  >
    <div class="card">
      <div>
        <v-card-title
          class="headline"
          v-text="character.name"
        />
        <v-card-subtitle>
          <v-icon>mdi-security</v-icon> - {{ character.defense }}
          <v-icon>mdi-heart</v-icon> - {{ character.health }}
          <p>{{ character.abilityName }}</p>
          <p>{{ character.abilityDescription }}</p>
        </v-card-subtitle>
      </div>
      <v-avatar
        class="ma-3"
        size="125"
        tile
      >
        <v-img :src="require(`../assets/${character.picture}`)" />
      </v-avatar>
    </div>
    <v-card-actions>
      <v-btn>Select</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

interface Character {
  name: string;
  health: number;
  defense: number;
  abilityName: string;
  abilityDescription: string;
  picture: string;
}

@Component
export default class CharacterCard extends Vue {
  @Prop() character!: Character;
  @Prop() select: any;
  @Prop() deselect: any;

  selected = false;

  toggleCharacter(character: Character) {
    if (this.selected) {
      this.deselectCharacter(character);
    } else {
      this.selectCharacter(character);
    }
  }

  selectCharacter(character: Character) {
    this.selected = this.select(character);
  }

  deselectCharacter(character: Character) {
    this.deselect(character);
    this.selected = false;
  }
}
</script>

<style lang="scss" scoped>
div.v-card {
  border: 1em solid #EAE7E0;
  background: rgb(56,88,129);
  background: linear-gradient(0deg, rgba(56,88,129,1) 0%, rgba(108,145,172,1) 50%, rgba(56,88,129,1) 100%);

  &.selected {
    border: 1em solid #A83346;
  }
}
</style>
