<script setup lang="ts">
import { ref } from 'vue'

import { storeToRefs } from 'pinia'

import { onClickOutside } from '@vueuse/core'

import { ChevronDownIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/outline'

import { useTimeTagStore } from '@/store/timeTag'

import { TagColorOption, type TimeTag } from '@/types/timeTag'

import DInput from './DInput.vue'

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

const newTimeTagName = ref<string>()
</script>
<template>
  <div
    ref="target"
    class="relative flex items-center justify-self-start md:justify-self-end col-span-6 col-end-6 md:col-end-4 md:col-span-3 lg:col-end-6 lg:col-span-2 group"
  >
    <button
      class="rounded-md px-2 py-1 flex w-fit space-x-1 items-center"
      :class="TagColorOption[color].backgroundColor + ' ' + TagColorOption[color].textColor"
      @click="toggleTimeTag"
    >
      <p class="text-sm font-normal">{{ name }}</p>
      <ChevronDownIcon class="w-5 h-5"></ChevronDownIcon>
    </button>
    <Transition>
      <div
        v-if="showTimeTagMenu"
        class="p-2 absolute top-[120%] left-0 z-10 space-y-2 rounded-md bg-zinc-100 dark:bg-zinc-900 flex flex-col"
      >
        <DInput :value="newTimeTagName" placeholder="new time tag name"> </DInput>
        <ul class="space-y-2">
          <li v-for="timeTag in timeTagList" :key="timeTag.id" class="flex items-center space-x-1">
            <button
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
            </button>
            <button
              class="rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors bg-transparent px-0.5 py-1.5"
            >
              <EllipsisVerticalIcon
                class="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
              ></EllipsisVerticalIcon>
            </button>
          </li>
        </ul></div
    ></Transition>
  </div>
</template>
