import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreStore = defineStore("storeStore", () => {
  const storeThingsIds = ref<number[]>([11,12,13,14,15,16,17,18]);

  return { storeThingsIds };
});