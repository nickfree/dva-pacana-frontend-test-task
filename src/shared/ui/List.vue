<script setup lang="ts">

</script>

<template>
  <div :class="$style['list']">
    <slot />
  </div>
</template>

<style lang="scss" module>
.list {
  flex-grow: 1;

  display: flex;
  flex-wrap: wrap;
  gap: design.$size-medium;
}
</style>