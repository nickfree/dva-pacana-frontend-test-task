import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { mockThings } from '../config';
import type { IThing } from '../types';

export const useThingStore = defineStore("thingStore", () => {
  const things = ref<IThing[]>(mockThings);

  const thingsIndexedById = computed(() => {
    return things.value.reduce((acc, thing) => {
      acc[thing.id] = thing;
      return acc;
    }, {} as Record<string, IThing>)
  })

  return { things, thingsIndexedById };
});