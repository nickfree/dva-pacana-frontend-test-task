<script setup lang="ts">
interface Props {
  big?: boolean;
  accent?: boolean;
  disabled?: boolean;
}

const props = defineProps<Props>()
</script>

<template>
  <q-card :class="[
    $style['card'], 
    props.big && $style['card_big'], 
    props.accent && $style['card_accent'],
    props.disabled && $style['card_disabled']
  ]">
    <slot />
  </q-card>
</template>

<style lang="scss" module>
.card {
  width: design.$size-xxxxx-large;
  height: design.$size-xxxxx-large;

  padding: design.$size-medium;

  cursor: pointer;

  &_accent {
    background-color: $primary;
    color: #fff;

    transition: all design.$transition-default;
  }

  &_disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }

  &_big {
    width: 200px;
    height: 200px;
  }
}
</style>