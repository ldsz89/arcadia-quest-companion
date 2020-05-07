<template>
  <div>
    <v-container>
      <h1 class="guild-name">
        {{ guild.name }}
      </h1>
      <v-row dense>
        <v-col
          v-for="(character, i) in characters"
          :key="'select-' + i"
          cols="12"
          md="4"
          xs="12"
        >
          <character-card
            :character="character"
            :selected="isSelected(character)"
            @click.native="toggleCharacter(character)"
          />
        </v-col>
      </v-row>
    </v-container>
    <bottom-banner
      v-if="selectedCharacters.length"
      :advance="advance"
      :disabled="!(selectedCharacters.length === 3)"
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
    </bottom-banner>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import CharacterCard from '@/components/CharacterCard.vue';
import BottomBanner from '@/components/BottomBanner.vue';
import charactersData from '@/data/characters.json';
import {Character, Guild, GuildMember, CharacterJSON} from '../types';

@Component({
  components: {
    CharacterCard,
    BottomBanner,
  },
})
export default class SelectCharcters extends Vue {
  guild: Guild = {
    name: '',
    guildMembers: [],
  };
  characterJSON = charactersData;
  characters: Character[] = [];
  selectedCharacters: Character[] = [];

  mounted() {
    this.initializeGuild();
    this.updateSelectedCharacters();
    this.characters = this.initializeCharacters(this.characterJSON);
  }

  initializeGuild() {
    this.guild = this.$store.state.guild;
  }

  initializeCharacters(characterJSON: CharacterJSON[]): Character[] {
    return characterJSON.map((character): Character => {
      return {...character, exhausted: false};
    });
  }

  updateSelectedCharacters() {
    this.selectedCharacters = this.$store.getters.characters;
  }

  toggleCharacter(character: Character) {
    if (this.$store.getters.characters.indexOf(character) !== -1) {
      this.deselectCharacter(character);
    } else {
      this.selectCharacter(character);
    }
    this.updateSelectedCharacters();
  }

  selectCharacter(character: Character) {
    const guildMember: GuildMember = {
      character,
      equipment: [],
    };
    if (this.$store.getters.characters.length < 3) {
      this.$store.commit('addGuildMembers', guildMember);
    }
  }

  deselectCharacter(character: Character) {
    const guildMember: GuildMember = {
      character,
      equipment: [],
    };
    this.$store.commit('removeGuildMember', guildMember);
  }

  isSelected(character: Character) {
    return this.selectedCharacters.includes(character);
  }

  advance() {
    if (this.selectedCharacters.length === 3) {
      this.$router.push('select-inventory');
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
