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
          <div>
            <character-card
              :character="guildMember.character"
            />
            <v-row>
              <v-col
                v-for="equipment in guildMember.equipment"
                :key="guildMember.character.name + '-equipment-' + equipment.name"
                cols="6"
              >
                <equipment-card
                  :equipment="equipment"
                  @click.native="removeEquipment(guildMember, equipment)"
                />
              </v-col>
              <v-col
                v-if="guildMember.equipment.length < 4"
                cols="6"
              >
                <v-card>
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <equipment-menu
                        title="Starters"
                        :equipment="equipmentJSON.starters"
                        :guild-member="guildMember"
                        :add="addEquipment"
                      />
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <bottom-banner
      :advance="advance"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Cookie from 'js-cookie';
import {Equipment, Guild, GuildMember, EquipmentJSON} from '@/types';
import equipmentJSON from '@/data/equipment.json';
import CharacterCard from '@/components/CharacterCard.vue';
import EquipmentCard from '@/components/EquipmentCard.vue';
import EquipmentMenu from '@/components/EquipmentMenu.vue';
import BottomBanner from '@/components/BottomBanner.vue';

@Component({
  components: {
    CharacterCard,
    EquipmentCard,
    EquipmentMenu,
    BottomBanner,
  },
})
export default class SelectInventory extends Vue {
  guild: Guild = {
    name: '',
    guildMembers: [],
  };
  equipmentJSON = equipmentJSON;
  equipment: Equipment[] = [];

  mounted() {
    this.initializeGuild();
  }

  initializeGuild() {
    this.guild = this.$store.state.guild;
  }

  addEquipment(guildMember: GuildMember, equipment: Equipment) {
    if (guildMember.equipment.length < 4 && guildMember.equipment.indexOf(equipment) === -1) {
      guildMember.equipment.push(equipment);
      this.$store.commit('setGuildMemberEquipment', guildMember);
    }
  }

  removeEquipment(guildMember: GuildMember, equipment: Equipment) {
    guildMember.equipment.splice(guildMember.equipment.indexOf(equipment), 1);
    this.$store.commit('setGuildMemberEquipment', guildMember);
  }

  advance() {
    Cookie.set('guild', JSON.stringify(this.guild));
    this.$router.push('guild-sheet');
  }
}
</script>

<style lang="scss" scoped>
.v-card div.card {
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;

  .v-card__subtitle {
    text-align: left;
  }
}

.v-select__selection--comma {
  color: #C4C3A7 !important;
}
</style>
