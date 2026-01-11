<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { Card } from 'src/shared';
import { useThingStore } from '../model/thingStore';

interface Props {
  id?: number;
  accent?: boolean;
}

const props = defineProps<Props>();

const thingStore = useThingStore();
const { thingsIndexedById } = storeToRefs(thingStore);

const thing = computed(() => thingsIndexedById.value[props.id as number]);
</script>

<template>
  <Card v-if="thing" :accent="props.accent">
    {{ thing.name }}
  </Card>
</template>

<style lang="scss" module>

</style>