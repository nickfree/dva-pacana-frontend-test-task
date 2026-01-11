<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { List } from 'src/shared';
import { useStoreStore } from 'src/entities/Store';
import { useThingStore, ThingCard } from 'src/entities/Thing';

const emit = defineEmits(['select-thing']);

const thingStore = useThingStore();
const { thingsIndexedById } = storeToRefs(thingStore);

const storeStore = useStoreStore();
const { storeThingsIds } = storeToRefs(storeStore);

const selectedStoreThingId = ref<number | undefined>();

const things = computed(() => storeThingsIds.value
  .map(id => thingsIndexedById.value[id])
  .filter(item => item)
);

const selectedThing = computed(() => thingsIndexedById.value[selectedStoreThingId.value as number]);

const selectStoreThing = (thingId: number) => {
  selectedStoreThingId.value = thingId;

  emit('select-thing', selectedStoreThingId.value);
}
</script>

<template>
  <div>
    <h4>Store things</h4>
    
    <List>
      <ThingCard
        v-for="thing in things"
        :key="thing?.id"
        :id="thing?.id"
        :accent="selectedThing?.id === thing?.id"
        @click="selectStoreThing(thing?.id as number)"
      />
    </List>
  </div>
</template>

<style lang="scss" module>

</style>