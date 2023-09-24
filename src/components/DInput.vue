<script setup lang="ts">
defineProps<{
  value: any
  placeholder?: string
  type?: string
  disabled?: boolean
}>()
defineEmits<{
  change: [newVal: HTMLInputElement['value']]
}>()
</script>
<template>
  <input
    class="d-input placeholder:text-zinc-300 p-1 bg-transparent font-normal text-sm outline-none rounded-md border border-zinc-300 text-zinc-600 dark:text-zinc-300 dark:border-zinc-600 dark:placeholder:text-zinc-600"
    :value="value"
    :placeholder="placeholder"
    :type="type"
    :disabled="disabled === undefined ? false : disabled"
    @change="(event) => $emit('change', (event.target as HTMLInputElement).value)"
  />
</template>
