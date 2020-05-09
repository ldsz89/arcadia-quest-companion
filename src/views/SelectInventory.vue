<template>
  <div>
    <v-container>
      <div class="d-flex">
        <back-button to="/select-characters" />
      </div>
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
                        :equipment="equipment.starters"
                        :guild-member="guildMember"
                        :add="addEquipment"
                      />
                      <equipment-menu
                        title="Level 1"
                        :equipment="equipment['level-1']"
                        :guild-member="guildMember"
                        :add="addEquipment"
                      />
                      <equipment-menu
                        title="Level 2"
                        :equipment="equipment['level-2']"
                        :guild-member="guildMember"
                        :add="addEquipment"
                      />
                      <equipment-menu
                        title="Level 3"
                        :equipment="equipment['level-3']"
                        :guild-member="guildMember"
                        :add="addEquipment"
                      />
                      <equipment-menu
                        title="Level 4"
                        :equipment="equipment['level-4']"
                        :guild-member="guildMember"
                        :add="addEquipment"
                      />
                      <equipment-menu
                        title="Level 5"
                        :equipment="equipment['level-5']"
                        :guild-member="guildMember"
                        :add="addEquipment"
                      />
                      <equipment-menu
                        title="Rewards"
                        :equipment="equipment.rewards"
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
import {Equipment, Guild, GuildMember, EquipmentJSON} from '@/types';
import equipmentJSON from '@/data/equipment.json';
import BackButton from '@/components/BackButton.vue';
import CharacterCard from '@/components/CharacterCard.vue';
import EquipmentCard from '@/components/EquipmentCard.vue';
import EquipmentMenu from '@/components/EquipmentMenu.vue';
import BottomBanner from '@/components/BottomBanner.vue';

interface EquipmentData {
  'starters': Equipment[];
  'level-1': Equipment[];
  'level-2': Equipment[];
  'level-3': Equipment[];
  'level-4': Equipment[];
  'level-5': Equipment[];
  'rewards': Equipment[];
}

interface EquipmentJSONData {
  'starters': EquipmentJSON[];
  'level-1': EquipmentJSON[];
  'level-2': EquipmentJSON[];
  'level-3': EquipmentJSON[];
  'level-4': EquipmentJSON[];
  'level-5': EquipmentJSON[];
  'rewards': EquipmentJSON[];
}

@Component({
  components: {
    BackButton,
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
  equipmentJSON: EquipmentJSONData = equipmentJSON;
  equipment!: EquipmentData;;

  mounted() {
    this.initializeGuild();
    this.equipment = this.initializeEquipment(this.equipmentJSON);
  }

  initializeGuild() {
    this.guild = this.$store.state.guild;
  }

  initializeEquipment(equipmentJSON: EquipmentJSONData): EquipmentData {
    const equipment: EquipmentData = {
      'starters': [],
      'level-1': [],
      'level-2': [],
      'level-3': [],
      'level-4': [],
      'level-5': [],
      'rewards': [],
    };
    equipment.starters = equipmentJSON.starters.map((equ) => {
      return {...equ, exhausted: false};
    });
    equipment['level-1'] = equipmentJSON['level-1'].map((equ) => {
      return {...equ, exhausted: false};
    });
    equipment['level-2'] = equipmentJSON['level-2'].map((equ) => {
      return {...equ, exhausted: false};
    });
    equipment['level-3'] = equipmentJSON['level-3'].map((equ) => {
      return {...equ, exhausted: false};
    });
    equipment['level-4'] = equipmentJSON['level-4'].map((equ) => {
      return {...equ, exhausted: false};
    });
    equipment['level-5'] = equipmentJSON['level-5'].map((equ) => {
      return {...equ, exhausted: false};
    });
    equipment.rewards = equipmentJSON.rewards.map((equ) => {
      return {...equ, exhausted: false};
    });

    return equipment;
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
