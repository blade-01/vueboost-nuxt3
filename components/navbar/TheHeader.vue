<template>
  <header class="flex flex-col justify-center items-center text-center">
    <div class="flex justify-between gap-x-8 items-center text-center">
      <div class="flex flex-col items-center gap-2">
        <nuxt-img src="/nuxt.png" fit="contain" height="80" width="80" />
        <p class="text-base font-medium">Nuxt 3</p>
      </div>
      <Icon name="mdi:plus" size="40" />
      <div class="flex flex-col items-center gap-2">
        <nuxt-img
          provider="cloudinary"
          src="/vueboost_w.svg"
          alt="logo"
          fit="inside"
          height="80"
          width="80"
          v-if="$colorMode.value === 'dark'"
        />
        <nuxt-img
          provider="cloudinary"
          src="/vueboost.svg"
          alt="logo"
          fit="inside"
          height="80"
          width="80"
          v-else
        />
        <p class="text-base font-medium">Vue Boost</p>
      </div>
    </div>
    <p class="text-lg font-light italic mt-5">{{ $t('title') }}</p>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
