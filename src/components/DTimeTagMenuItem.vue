<script setup lang="ts">
import { ref } from 'vue'

import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/vue/24/outline'

import { TagColorOption, type TimeTag } from '@/types/timeTag'

import DTimeTagEditMenu from './DTimeTagEditMenu.vue'

import { useTimeTagStore } from '@/store/timeTag'

defineProps<{ timeTag: TimeTag }>()

const timeTagStore = useTimeTagStore()

const showEditMenu = ref(false)
const toggleShowEditMenu = () => {
  showEditMenu.value = !showEditMenu.value
}
</script>
<template>
  <li class="flex group justify-between items-center space-x-1">
    <div class="flex items-center space-x-1">
      <button
        @click="() => timeTagStore.deleteTimeTag(timeTag.id)"
        class="rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors bg-transparent p-1.5"
      >
        <XMarkIcon
          class="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
        >
        </XMarkIcon>
      </button>
      <button
        :class="
          TagColorOption[timeTag.color].backgroundColor.transparent +
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
    </div>

    <button
      class="rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors bg-transparent p-1.5 relative"
      @click="showEditMenu = true"
    >
      <EllipsisHorizontalIcon
        class="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
      >
      </EllipsisHorizontalIcon>
      <DTimeTagEditMenu :showEditMenu="showEditMenu" :timeTag="timeTag"></DTimeTagEditMenu>
    </button>
  </li>
</template>
