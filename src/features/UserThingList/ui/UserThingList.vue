<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { List } from 'src/shared';
import { useUserStore } from 'src/entities/User';
import { useThingStore, ThingCard, type IThing } from 'src/entities/Thing';
import { selectionLimit } from '../config';

const emit = defineEmits(['select-things']);

const thingStore = useThingStore();
const { thingsIndexedById } = storeToRefs(thingStore);

const userStore = useUserStore();
const { userThingsIds } = storeToRefs(userStore);

const selectedUserThingIds = ref<number[]>([]);

const selectionDisabled = computed(() => selectedUserThingIds.value.length >= selectionLimit);

const things = computed(() => userThingsIds.value
  .map(id => thingsIndexedById.value[id])
  .filter(item => item)
);

const selectedThings = computed(() => selectedUserThingIds.value.reduce((acc, id) => {
  const thing = thingsIndexedById.value[id];
  if (thing) {
    acc[thing.id] = (thing);
  }
  return acc;
}, {} as Record<number, IThing>));

const selectUserThing = (thingId: number) => {
  if (typeof thingId !== 'number') {
    return;
  }

  if (selectedUserThingIds.value.includes(thingId)) {
    selectedUserThingIds.value = selectedUserThingIds.value.filter(id => id !== thingId);
  } else if (!selectionDisabled.value) {
    selectedUserThingIds.value.push(thingId);
  }

  emit('select-things', selectedUserThingIds.value);
}
</script>

<template>
  <div>
    <h4>User things</h4>
    
    <List>
      <ThingCard
        v-for="thing in things"
        :key="thing?.id"
        :id="thing?.id"
        :accent="!!selectedThings[thing?.id as number]"
        :disabled="selectionDisabled && !selectedThings[thing?.id as number]"
        @click="selectUserThing(thing?.id as number)"
      />
    </List>
  </div>
</template>

<style lang="scss" module>

</style>