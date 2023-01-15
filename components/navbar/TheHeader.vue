<template>
  <header class="shadow-sm">
    <div class="container">
      <div class="flex justify-between items-center py-4">
        <h1 class="title">Conversar</h1>
        <span>
          <NuxtLink to="/">Home</NuxtLink> | <NuxtLink to="/about">About</NuxtLink> |
          <NuxtLink to="/dashboard">Dashboard</NuxtLink>
        </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link-active {
  @apply text-purple-500;
}
</style>
