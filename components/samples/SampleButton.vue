<template>
  <div class="flex items-center flex-wrap gap-3">
    <ReusablesBaseButton label="Hello" />
    <ReusablesBaseButton label="Hello" icon-left="emoticon" />
    <ReusablesBaseButton label="Hello" icon-right="chevron-right" :right-size="20" />
    <ReusablesBaseButton
      label="Hello"
      icon-right="emoticon-angry"
      :right-size="20"
      icon-left="emoticon-excited"
      :left-size="20"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
