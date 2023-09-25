<script setup lang="ts">
import { ref } from 'vue'

import { storeToRefs } from 'pinia'

import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/vue/24/outline'

import DInput from './DInput.vue'

import { useTimeTagStore } from '@/store/timeTag'

import { TagColorOption } from '@/types/timeTag'

defineProps<{ showTimeTagMenu: boolean }>()
defineEmits<{ select: [id: number] }>()

const newTimeTagName = ref<string>()

const timeTagStore = useTimeTagStore()
const { timeTagList } = storeToRefs(timeTagStore)

const onEnter = (newVal: string) => {
  timeTagStore.createTimeTag(newVal)
}
</script>
<template>
  <Transition name="fade">
    <div
      v-if="showTimeTagMenu"
      class="p-2 absolute top-[120%] left-0 z-10 space-y-2 rounded-md bg-zinc-50 border-zinc-100 dark:border-zinc-800 border dark:bg-zinc-900 flex flex-col"
    >
      <DInput
        :value="newTimeTagName"
        placeholder="new time tag name"
        @enter="(newVal) => onEnter(newVal)"
      >
      </DInput>
      <ul class="space-y-2">
        <li
          v-for="timeTag in timeTagList"
          :key="timeTag.id"
          class="flex group items-center space-x-1"
        >
          <button
            class="rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors bg-transparent p-1.5"
          >
            <XMarkIcon
              class="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
            >
            </XMarkIcon>
          </button>
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
              }
            "
          >
            {{ timeTag.name }}
          </button>
          <button
            class="rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors bg-transparent p-1.5"
          >
            <EllipsisVerticalIcon
              class="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
            >
            </EllipsisVerticalIcon>
          </button>
        </li>
      </ul></div
  ></Transition>
</template>
