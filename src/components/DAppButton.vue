<script setup lang="ts">
defineProps<{ action: Function; label: string }>()
</script>
<template>
  <button
    @click="() => action()"
    class="flex items-center space-x-1 text-zinc-600 hover:bg-zinc-200 transition-colors px-2 py-1 rounded-md dark:text-zinc-300 dark:hover:bg-zinc-800"
  >
    <slot></slot>
    <p class="hidden md:block">{{ label }}</p>
  </button>
</template>
