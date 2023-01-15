<template>
  <div class="container">
    <div class="cursor-pointer" @click="setTheme($colorMode.preference === 'dark' ? 'light' : 'dark')">
      <Icon name="mdi:weather-night" v-if="$colorMode.value === 'dark'" />
      <Icon name="mdi:weather-sunny" v-else-if="$colorMode.value === 'light'" />
    </div>
  </div>
</template>

<script setup lang="ts">
type Theme = 'dark' | 'light'
const setTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
</script>

<style scoped></style>
