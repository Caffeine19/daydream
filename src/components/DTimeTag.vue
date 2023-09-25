<script setup lang="ts">
import { ref } from 'vue'

import { onClickOutside } from '@vueuse/core'

import { ChevronDownIcon } from '@heroicons/vue/24/outline'

import { TagColorOption, type TimeTag } from '@/types/timeTag'

import DTimeTagMenu from './DTimeTagMenu.vue'

defineProps<TimeTag>()

const showTimeTagMenu = ref(false)
const toggleTimeTag = () => {
  showTimeTagMenu.value = !showTimeTagMenu.value
}

const target = ref(null)
onClickOutside(target, () => (showTimeTagMenu.value = false))

defineEmits<{ select: [id: number] }>()
</script>
<template>
  <div
    ref="target"
    class="relative flex items-center justify-self-start md:justify-self-end col-span-6 col-end-6 md:col-end-4 md:col-span-3 lg:col-end-6 lg:col-span-2"
  >
    <button
      class="rounded-md px-2 py-1 flex w-fit space-x-1 items-center"
      :class="
        TagColorOption[color].backgroundColor.transparent + ' ' + TagColorOption[color].textColor
      "
      @click="toggleTimeTag"
    >
      <p class="text-sm font-normal">{{ name }}</p>
      <ChevronDownIcon class="w-5 h-5"></ChevronDownIcon>
    </button>
    <DTimeTagMenu
      :showTimeTagMenu="showTimeTagMenu"
      @select="
        (timeTagId) => {
          $emit('select', timeTagId)
          showTimeTagMenu = false
        }
      "
    >
    </DTimeTagMenu>
  </div>
</template>

<style scoped></style>
