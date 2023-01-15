<template>
  <div class="flex flex-col justify-center items-center gap-5 text-center h-screen px-4">
    <div class="flex flex-col gap-2 items-center text-center">
      <Icon name="fluent:tab-desktop-multiple-20-regular" size="70" />
      <h1 class="text-center font-medium text-2xl">About</h1>
      <p class="font-light max-w-[780px] text-left text-lg">
        <a
          href="https://github.com/blade-01/vueboost-nuxt3"
          target="_blank"
          class="underline font-light"
          >Vue Boost + Nuxt 3</a
        >
        is an opinionated
        <a
          href="https://nuxt.com/"
          target="_blank"
          class="underline font-light"
          >Nuxt</a
        >
        starter template inspired by
        <a
          href="https://github.com/blade-01/vueboost"
          target="_blank"
          class="underline font-light"
          >Vue Boost</a
        >
        and made by
        <a href="https://github.com/blade-01" target="_blank" class="underline font-light"
          >@blade-01</a
        >
        for mocking apps swiftly. With
        <strong
          >file-based routing, components auto importing, I18n, PWA, reusable
          components</strong
        >
        and uses <strong>TailwindCSS</strong> for styling and <strong>Iconify</strong> for
        icons.

        <br /><br />

        Checkout the
        <a
          href="https://github.com/blade-01/vueboost-nuxt3"
          target="_blank"
          class="underline font-light"
          >GitHub repo</a
        >
        for more details.

        <br /><br />

        <strong>NB:</strong> To see the reusable components in action go to
        <NuxtLink to="/dashboard" class="underline font-light">dashboard</NuxtLink>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
