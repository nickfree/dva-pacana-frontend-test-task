import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const userThingsIds = ref<number[]>([1,2,3,4,5,6,7,8]);

  return { userThingsIds };
});