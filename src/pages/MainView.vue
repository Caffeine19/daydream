<script setup lang="ts">
import DHeader from './DHeader.vue'
import DContent from '@/pages/DContent.vue'
</script>

<template>
  <div
    class="w-[100dvw] h-[100dvh] overflow-hidden transition-colors bg-white dark:bg-zinc-930 flex flex-col"
  >
    <DHeader></DHeader>
    <DContent></DContent>
  </div>
</template>

<style scoped></style>
