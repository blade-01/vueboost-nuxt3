<template>
  <div class="relative overflow-x-clip">
    <NavbarTheSidebar :nav="nav" />
    <main class="sidebar-wrapper" :class="{ 'active-mainbar': nav }">
      <div class="relative">
        <NavbarTheTopbar @toggle-sidebar="toggleSidebar" />
        <div class="p-4">
          <NuxtLoadingIndicator />
          <NuxtPage />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const nav = ref<boolean>(false)

const toggleSidebar = () => {
  nav.value = !nav.value
}
</script>

<style scoped>
.sidebar-wrapper {
  @apply bg-gray-50 dark:bg-darkBg h-screen overflow-y-auto w-full md:ml-[260px] md:w-[calc(100%-260px)] transition-[margin-left];
}
.active-mainbar {
  @apply ml-[260px] md:ml-0 md:w-full;
}
</style>
