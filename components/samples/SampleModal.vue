<template>
  <ReusablesBaseModal :is-active="isActive" @open-modal="openModal">
    <div class="flex justify-between items-center w-full">
      <p class="title">Hello there</p>
      <Icon name="mdi:close" class="icon-style text-red-400 hover:bg-red-200 mdi mdi-close" @click="openModal(false)"></Icon>
    </div>
  </ReusablesBaseModal>
  <button class="btn" @click="openModal(true)">Open Modal</button>
</template>

<script setup lang="ts">
const { isActive, openModal } = useModal()
</script>

<style scoped></style>
