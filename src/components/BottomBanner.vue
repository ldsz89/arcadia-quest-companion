<template>
  <v-banner
    sticky
  >
    <slot />
    <template v-slot:actions>
      <v-btn
        text
        color="primary"
        :disabled="disabled"
        @click="advance()"
      >
        Continue
      </v-btn>
    </template>
  </v-banner>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class BottomBanner extends Vue {
  @Prop() advance: any;
  @Prop({
    default: false,
  }) disabled: any;
}
</script>

<style lang="scss" scoped>
.v-banner--sticky {
  top: unset !important;
  bottom: 0;
  background: rgb(174,51,71);
  background: linear-gradient(90deg, rgba(174,51,71,1) 0%, rgba(99,31,46,1) 50%, rgba(174,51,71,1) 100%);
}

.v-btn__content {
  color: #C4C3A7;
}
</style>
