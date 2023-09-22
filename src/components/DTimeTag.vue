<script setup lang="ts">
import { ref } from 'vue'

import { storeToRefs } from 'pinia'

import { onClickOutside } from '@vueuse/core'

import { ChevronDownIcon } from '@heroicons/vue/24/outline'

import { useTimeTagStore } from '@/store/timeTag'

import { type TimeTag } from '@/types/timeTag'

defineProps<TimeTag>()

const target = ref(null)
onClickOutside(target, () => (showTimeTagMenu.value = false))

const showTimeTagMenu = ref(false)

const timeTagStore = useTimeTagStore()
const { timeTagList } = storeToRefs(timeTagStore)

defineEmits<{ select: [id: number] }>()
</script>
<template>
  <div
    class="relative flex items-center justify-self-end col-end-4 col-span-3 lg:col-end-6 lg:col-span-2 group"
  >
    <div
      class="rounded-md px-2 py-1 flex w-fit space-x-1 items-center"
      :class="color"
      @click="showTimeTagMenu = !showTimeTagMenu"
    >
      <p class="text-sm font-normal">{{ name }}</p>
      <ChevronDownIcon class="w-5 h-5"></ChevronDownIcon>
    </div>

    <div
      ref="target"
      v-if="showTimeTagMenu"
      class="absolute top-[120%] left-0 z-10 rounded-md bg-neutral-100 shadow-2xl shadow-neutral-900/10"
    >
      <ul class="p-2 space-y-2">
        <li
          v-for="timeTag in timeTagList"
          :key="timeTag.id"
          :class="timeTag.color"
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
