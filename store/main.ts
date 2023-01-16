import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const name = ref<string>('Blade');
  const toggleLoader = (value: boolean): any => {};
  const toggleError = (value: boolean): any => {};

  return {
    name,
    toggleLoader,
    toggleError
  };
});
