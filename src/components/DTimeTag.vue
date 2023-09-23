<script setup lang="ts">
import { ref } from 'vue'

import { storeToRefs } from 'pinia'

import { onClickOutside } from '@vueuse/core'

import { ChevronDownIcon } from '@heroicons/vue/24/outline'

import { useTimeTagStore } from '@/store/timeTag'

import { TagColorOption, type TimeTag } from '@/types/timeTag'

defineProps<TimeTag>()

const showTimeTagMenu = ref(false)
const toggleTimeTag = () => {
  showTimeTagMenu.value = !showTimeTagMenu.value
}

const target = ref(null)
onClickOutside(target, () => (showTimeTagMenu.value = false))

const timeTagStore = useTimeTagStore()
const { timeTagList } = storeToRefs(timeTagStore)

defineEmits<{ select: [id: number] }>()
</script>
<template>
  <div
    ref="target"
    class="relative flex items-center justify-self-start md:justify-self-end col-span-6 col-end-6 md:col-end-4 md:col-span-3 lg:col-end-6 lg:col-span-2 group"
  >
    <div
      class="rounded-md px-2 py-1 flex w-fit space-x-1 items-center"
      :class="TagColorOption[color].backgroundColor + ' ' + TagColorOption[color].textColor"
      @click="toggleTimeTag"
    >
      <p class="text-sm font-normal">{{ name }}</p>
      <ChevronDownIcon class="w-5 h-5"></ChevronDownIcon>
    </div>

    <div
      v-if="showTimeTagMenu"
      class="absolute top-[120%] left-0 z-10 rounded-md bg-zinc-100 dark:bg-zinc-900 shadow-2xl shadow-zinc-900/10 dark:shadow-zinc-600/10"
    >
      <ul class="p-2 space-y-2">
        <li
          v-for="timeTag in timeTagList"
          :key="timeTag.id"
          :class="
            TagColorOption[timeTag.color].backgroundColor +
            ' ' +
            TagColorOption[timeTag.color].textColor
          "
          class="rounded-md px-2 py-1 whitespace-nowrap"
          @click="
            () => {
              $emit('select', timeTag.id)
              showTimeTagMenu = false
            }
          "
        >
          {{ timeTag.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
