<template>
  <div>
    <v-container>
      <h1 class="guild-name">
        {{ guild.name }}
      </h1>
      <v-row>
        <v-col
          v-for="(guildMember, i) in guild.guildMembers"
          :key="'guildMember-' + i"
          cols="12"
          md="4"
          sm="6"
          xs="12"
        >
          <character-card :character="guildMember.character" />
          <v-row>
            <v-col
              v-for="(equipment, j) in guildMember.equipment"
              :key="guildMember.character.name + '-equipment-' + j"
            >
              <v-card>
                <v-card-title>Title</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Cookie from 'js-cookie';
import {Guild} from '@/types';
import CharacterCard from '@/components/CharacterCard.vue';

@Component({
  components: {
    CharacterCard,
  },
})
export default class GuildSheet extends Vue {
  guild: Guild = {
    name: '',
    guildMembers: [],
  };

  mounted() {
    this.initializeGuild();
  }

  initializeGuild() {
    const guildCookie = Cookie.get('guild');
    if (guildCookie) {
      this.guild = JSON.parse(guildCookie);
    }
  }
}
</script>
