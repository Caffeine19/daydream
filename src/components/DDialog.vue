<script setup lang="ts">
import { ref } from 'vue'

import { onClickOutside } from '@vueuse/core'

withDefaults(defineProps<{ showDialog: boolean }>(), { showDialog: false })

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
      class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-zinc-700/60"
    >
      <div class="dark:bg-zinc-930 rounded-md p-3 space-y-2" ref="el">
        <p class="text-lg font-medium text-zinc-200">Import</p>
        <slot></slot>
        <div class="flex items-center justify-between space-x-2">
          <button
            @click="$emit('cancel')"
            class="text-zinc-400 px-2 py-1 border border-zinc-700 rounded hover:bg-zinc-800 transition-colors hover:text-zinc-300 bg-transparent"
          >
            <p>Cancel</p>
          </button>
          <button
            @click="$emit('confirm')"
            class="text-zinc-400 px-2 py-1 bg-zinc-800 rounded-md transition-colors hover:bg-zinc-700 hover:text-zinc-300"
          >
            <p>Confirm</p>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
