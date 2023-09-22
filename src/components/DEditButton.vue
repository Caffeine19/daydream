<script setup lang="ts">
defineProps<{ action: Function }>()
</script>
<template>
  <button
    class="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 group/bt bg-transparent transition-colors hover:border-zinc-200 dark:hover:border-zinc-700 border border-transparent"
    @click="() => action()"
  >
    <slot></slot>
  </button>
</template>
