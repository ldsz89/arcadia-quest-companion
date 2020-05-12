<template>
  <v-card>
    <div
      v-if="equipment.exhausted"
      class="exhausted"
      :class="exhaustionClass()"
    />
    <div class="equipment-card">
      <v-card-title class="equipment-title">
        {{ equipment.name }}
      </v-card-title>
      <div>
        <div
          :class="equipmentSolidClass(equipment.type)"
          class="equipment-type-strength d-flex justify-space-between"
        >
          <span>{{ equipment.type }}</span>
          <span>
            <melee-attack-badge
              v-if="equipment.type === 'Melee Attack'"
              :attack="equipment.strength"
            />
            <ranged-attack-badge
              v-else-if="equipment.type === 'Ranged Attack'"
              :attack="equipment.strength"
            />
          </span>
        </div>
        <div class="equipment-item">
          {{ equipment.item }}
        </div>
        <div
          :class="equipmentGradientClass(equipment.type)"
          class="equipment-description"
        >
          <div class="d-flex justify-space-around">
            <defense-badge
              v-if="equipment.defense"
              :defense="equipment.defense"
            />
            <health-badge
              v-if="equipment.health"
              :health="equipment.health"
            />
            <reroll-badge
              v-if="equipment.reroll"
              :reroll="equipment.reroll"
            />
          </div>
          <p>{{ equipment.description }}</p>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import {Equipment} from '../types';
import DefenseBadge from '@/components/DefenseBadge.vue';
import HealthBadge from '@/components/HealthBadge.vue';
import RerollBadge from '@/components/RerollBadge.vue';
import MeleeAttackBadge from '@/components/MeleeAttackBadge.vue';
import RangedAttackBadge from '@/components/RangedAttackBadge.vue';

@Component({
  components: {
    DefenseBadge,
    HealthBadge,
    RerollBadge,
    MeleeAttackBadge,
    RangedAttackBadge,
  },
})
export default class EquipmentCard extends Vue {
  @Prop() equipment!: Equipment;
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

  equipmentSolidClass(type: string) {
    if (type === 'Boost') {
      return {
        'boost-gradient': true,
      };
    } else if (type === 'Permanent') {
      return {
        'permanent-gradient': true,
      };
    } else {
      return {
        'attack-solid': true,
      };
    }
  }

  equipmentGradientClass(type: string) {
    if (type === 'Boost') {
      return {
        'boost-gradient': true,
      };
    } else if (type === 'Permanent') {
      return {
        'permanent-gradient': true,
      };
    } else {
      return {
        'attack-gradient': true,
      };
    }
  }
}
</script>

<style lang="scss" scoped>
$attack-gradient: radial-gradient(circle, rgba(186,209,214,1) 0%, rgba(64,104,118,1) 100%);
$boost-gradient: radial-gradient(circle, rgba(155,182,78,1) 0%, rgba(62,95,30,1) 100%);
$permanent-gradient: radial-gradient(circle, rgba(51,68,95,1) 0%, rgba(17,29,41,1) 100%);
$accent: #CEC6B2;

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
    background-size: 60%;
  }

  &.crow {
    background-image: url("../assets/Crow.png");
    background-position: center center;
    background-size: 60%;
  }

  &.shark {
    background-image: url("../assets/Shark.png");
    background-position: center center;
    background-size: 60%;
  }

  &.snake {
    background-image: url("../assets/Snake.png");
    background-position: center center;
    background-size: 60%;
  }
}

.attack-solid {
  background: rgba(64,104,118,1);
  color: white;
}

.attack-gradient {
  background: $attack-gradient;
  color: white;
}

.boost-gradient {
  background: $boost-gradient;
  color: white;
}

.permanent-gradient {
  background: $permanent-gradient;
  color: white;
}

.v-card {
  height: 100%;
}

.equipment-card {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100%;
}

.equipment-title {
  background-color: $accent;
}

.equipment-type-strength {
  padding: 0 .1em;
  border: 1em $accent;
  border-style: none solid;
}

.equipment-item {
  text-align: left;
  background-color: $accent;
  padding: 0 1em;
}

.equipment-description {
  padding: .1em;
  border: 1em $accent;
  border-style: none solid solid solid;
  height: 10em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
