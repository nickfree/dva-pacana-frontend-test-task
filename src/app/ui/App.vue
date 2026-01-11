<script setup lang="ts">
import { SelectionPage } from 'src/pages/SelectionPage';
</script>

<template>
  <div :class="$style['app']">
    <SelectionPage />
  </div>
</template>

<style lang="scss" module>
.app {
  display: flex;
  flex-grow: 1;
}

body, html {
  display: flex;
  flex-grow: 1;

  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;
}

h4 {
  margin: 0px;
  font-size: design.$size-large;
  font-weight: 400;
}
</style>
