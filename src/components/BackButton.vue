<template>
  <router-link
    :to="to"
    class="back-btn"
  >
    <slot>
      Back
    </slot>
  </router-link>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class BackButton extends Vue {
  @Prop() to!: string;
}
</script>

<style lang="scss">
.back-btn {
  color: #C4C3A7 !important;
  text-decoration: none;
}
</style>
