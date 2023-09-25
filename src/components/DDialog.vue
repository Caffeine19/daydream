<script setup lang="ts">
import { ref } from 'vue'

import { onClickOutside } from '@vueuse/core'

withDefaults(defineProps<{ showDialog: boolean; label?: string }>(), { showDialog: false })

const emits = defineEmits<{
  confirm: []
  cancel: []
  clickOutside: []
}>()

const el = ref<null | HTMLElement>(null)
onClickOutside(el, () => emits('clickOutside'))
</script>
<template>
  <Teleport to="body">
    <div
      v-if="showDialog"
      class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center dark:bg-zinc-700/60 bg-zinc-200/60"
    >
      <div class="dark:bg-zinc-930 rounded-md p-3 space-y-2 bg-white" ref="el">
        <p class="text-lg font-medium text-zinc-700 dark:text-zinc-200">{{ label }}</p>
        <slot></slot>
        <div class="flex items-center justify-between space-x-2">
          <button
            @click="$emit('cancel')"
            class="text-zinc-400 px-2 py-1 border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 hover:text-zinc-500 rounded dark:hover:bg-zinc-800 transition-colors dark:hover:text-zinc-400 bg-transparent dark:text-zinc-500"
          >
            <p>Cancel</p>
          </button>
          <button
            @click="$emit('confirm')"
            class="text-zinc-500 dark:text-zinc-400 px-2 py-1 dark:bg-zinc-800 rounded-md transition-colors dark:hover:bg-zinc-700 dark:hover:text-zinc-300 bg-zinc-100 hover:text-zinc-600 hover:bg-zinc-200"
          >
            <p>Confirm</p>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
