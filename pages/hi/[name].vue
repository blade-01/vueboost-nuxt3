<template>
  <div class="flex flex-col justify-center items-center gap-5 text-center">
    <div class="flex flex-col gap-2 items-center text-center">
      <Icon name="mdi:run-fast" size="70" />
      <h1 class="text-center font-medium">Hi, {{ name }}! 👋</h1>
      <p class="text-sm font-light">{{ $t('dynamic') }}</p>
    </div>
    <ReusablesBaseButton :label="$t('back')" class="px-6 h-[35px]" @click="goBack" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const name = route.params.name
useHead({
  title: `Hi, ${name}`
})
const router = useRouter()
const goBack = (): void => router.go(-1)
</script>

<style scoped></style>
