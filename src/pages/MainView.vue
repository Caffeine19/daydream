<script setup lang="ts">
import DHeader from './DHeader.vue'
import DContent from '@/pages/DContent.vue'
</script>

<template>
  <div
    class="w-[100dvw] h-[100dvh] overflow-hidden transition-colors bg-white dark:bg-[hsl(240,10%,7%)] flex flex-col"
  >
    <DHeader></DHeader>
    <DContent></DContent>
  </div>
</template>

<style scoped></style>
