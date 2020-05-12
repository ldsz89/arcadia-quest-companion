<template>
  <v-card :class="{selected: selected}">
    <div
      v-if="character.exhausted"
      class="exhausted"
      :class="exhaustionClass()"
    />
    <div class="card">
      <div>
        <v-card-title
          class="headline"
          v-text="character.name"
        />
        <v-card-subtitle>
          <div class="d-flex justify-space-around">
            <defense-badge :defense="character.defense" />
            <health-badge :health="character.health" />
          </div>
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
  </v-card>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import {Character} from '@/types';
import DefenseBadge from '@/components/DefenseBadge.vue';
import HealthBadge from '@/components/HealthBadge.vue';

@Component({
  components: {
    DefenseBadge,
    HealthBadge,
  },
})
export default class CharacterCard extends Vue {
  @Prop() character!: Character;
  @Prop() selected!: boolean;
  @Prop() guildSeal!: string;

  exhaustionClass() {
    switch (this.guildSeal) {
    case 'Tiger.png':
      return {
        'tiger': true,
      };
    case 'Crow.png':
      return {
        'crow': true,
      };
    case 'Shark.png':
      return {
        'shark': true,
      };
    case 'Snake.png':
      return {
        'snake': true,
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.exhausted {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 4;

  &.tiger {
    background-image: url("../assets/Tiger.png");
    background-position: center center;
    background-size: 40%;
  }

  &.crow {
    background-image: url("../assets/Crow.png");
    background-position: center center;
    background-size: 40%;
  }

  &.shark {
    background-image: url("../assets/Shark.png");
    background-position: center center;
    background-size: 40%;
  }

  &.snake {
    background-image: url("../assets/Snake.png");
    background-position: center center;
    background-size: 40%;
  }
}

div.v-card {
  // height: 15em;
  height: 19em;
  border: 1em solid #EAE7E0;
  background: rgb(56,88,129);
  background: linear-gradient(0deg, rgba(56,88,129,1) 0%, rgba(108,145,172,1) 50%, rgba(56,88,129,1) 100%);

  &.selected {
    border: 1em solid #A83346;
  }
}
</style>
