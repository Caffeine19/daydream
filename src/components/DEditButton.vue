<script setup lang="ts">
defineProps<{ action: Function }>()
</script>
<template>
  <button
    class="p-1 rounded hover:bg-zinc-50 group/bt bg-transparent transition-colors hover:border-zinc-100 border border-transparent"
    @click="() => action()"
  >
    <slot></slot>
  </button>
</template>
