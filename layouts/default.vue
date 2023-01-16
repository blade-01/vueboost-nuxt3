<template>
  <div class="flex flex-col justify-center items-center gap-5 text-center h-screen px-4">
    <NuxtLoadingIndicator />
    <slot />
    <NavbarTheFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
