<template>
  <footer>
    <div class="flex gap-3.5 justify-center items-center">
      <NuxtLink to="/"><Icon name="mdi:home" size="23" class="link" /></NuxtLink>
      <div
        @click="setTheme($colorMode.preference === 'dark' ? 'light' : 'dark')"
        class="transition-all ease-linear duration-300"
      >
        <Icon
          name="mdi:weather-night"
          size="23"
          v-if="$colorMode.value === 'dark'"
          class="link"
        />
        <Icon name="mdi:weather-sunny" size="23" v-else class="link" />
      </div>
      <Icon name="mdi:translate" size="23" class="link" @click="toggleLocales" />
      <NuxtLink to="/about"
        ><Icon name="fluent:tab-desktop-multiple-20-regular" size="23" class="link"
      /></NuxtLink>
      <a href="https://github.com/blade-01/vueboost" target="_blank"
        ><Icon name="mdi:github" size="23" class="link"
      /></a>
    </div>
    <aside class="text-center mt-5">
      <p class="font-light text-sm">
        Inspired by
        <a href="https://vueboost.netlify.app" target="_blank" class="underline"
          >Vue Boost</a
        >
      </p>
    </aside>
  </footer>
</template>

<script setup lang="ts">
type Theme = 'dark' | 'light'
const setTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
const { availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<style scoped>
.link {
  @apply cursor-pointer transition-colors hover:text-[#344675];
}
</style>
