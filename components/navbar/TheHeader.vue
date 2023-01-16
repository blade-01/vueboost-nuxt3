<template>
  <header class="flex flex-col justify-center items-center text-center">
    <div class="flex justify-between gap-x-8 items-center text-center">
      <div class="flex flex-col items-center">
        <nuxt-img src="/nuxt.png" fit="contain" height="80" width="80" />
        <p class="text-base font-medium">Nuxt 3</p>
      </div>
      <Icon name="mdi:plus" size="40" />
      <div class="flex flex-col items-center">
        <img
          src="
          https://res.cloudinary.com/bladencove/image/upload/v1673219185/RC/vueboost_w_gdg5d5.svg
        "
          alt="logo"
          class="w-[80px] h-[80px] object-contain"
          v-if="$colorMode.value === 'dark'"
        />
        <img
          src="
          https://res.cloudinary.com/bladencove/image/upload/v1673218739/RC/vueboost_dhrmmb.svg
        "
          alt="logo"
          class="w-[80px] h-[80px] object-contain"
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
