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
        >
          <select-character-card
            :character="character"
            :select="selectCharacter"
            :deselect="deselectCharacter"
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
import SelectCharacterCard from '@/components/SelectCharacterCard.vue';
import BottomBanner from '@/components/BottomBanner.vue';
import characters from '@/data/characters.json';
import {Character, Guild, GuildMember} from '../types';
import Cookie from 'js-cookie';

@Component({
  components: {
    SelectCharacterCard,
    BottomBanner,
  },
})
export default class SelectCharcters extends Vue {
  guild: Guild = {
    name: '',
    guildMembers: [],
  };
  characters = characters;
  selectedCharacters: Character[] = [];

  mounted() {
    this.initializeGuild();
  }

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

  initializeGuild() {
    const guildCookie = Cookie.get('guild');
    if (guildCookie) {
      this.guild = JSON.parse(guildCookie);
    }
  }

  setGuildMembers() {
    for (const character of this.selectedCharacters) {
      const guildMember: GuildMember = {
        character,
        equipment: [],
      };
      this.guild.guildMembers.push(guildMember);
    }
  }

  advance() {
    if (this.selectedCharacters.length === 3) {
      this.setGuildMembers();
      Cookie.set('guild', JSON.stringify(this.guild));
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
