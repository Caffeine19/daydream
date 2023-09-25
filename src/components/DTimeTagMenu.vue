<script setup lang="ts">
import { ref } from 'vue'

import { storeToRefs } from 'pinia'

import { PlusIcon } from '@heroicons/vue/24/outline'

import DInput from './DInput.vue'
import DTimeTagMenuItem from './DTimeTagMenuItem.vue'

import { useTimeTagStore } from '@/store/timeTag'

defineProps<{ showTimeTagMenu: boolean }>()
defineEmits<{ select: [id: number] }>()

const newTimeTagName = ref<string>()

const timeTagStore = useTimeTagStore()
const { timeTagList } = storeToRefs(timeTagStore)

const onEnter = (newVal: string) => {
  timeTagStore.createTimeTag(newVal)
}
const onCreateButtonClick = () => {
  if (newTimeTagName.value) {
    timeTagStore.createTimeTag(newTimeTagName.value)
  }
}
</script>
<template>
  <Transition name="fade">
    <div
      v-if="showTimeTagMenu"
      class="p-2 absolute top-[120%] left-0 z-10 space-y-2 rounded-md bg-zinc-50 border-zinc-100 dark:border-zinc-800 border dark:bg-zinc-900 flex flex-col"
    >
      <div class="flex space-x-1">
        <button
          @click="onCreateButtonClick"
          class="rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors bg-transparent p-1.5"
        >
          <PlusIcon
            class="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
          >
          </PlusIcon>
        </button>
        <DInput
          :value="newTimeTagName"
          placeholder="new time tag name"
          @enter="(newVal) => onEnter(newVal)"
          @change="(newVal) => (newTimeTagName = newVal)"
          class="time-tag-name-input"
        >
        </DInput>
      </div>

      <ul class="space-y-2">
        <DTimeTagMenuItem
          v-for="timeTag in timeTagList"
          :key="timeTag.id"
          :timeTag="timeTag"
          @select="(timeTagId) => $emit('select', timeTagId)"
        >
        </DTimeTagMenuItem>
      </ul>
    </div>
  </Transition>
</template>

<style scoped>
.time-tag-name-input.d-input {
  @apply w-48;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.12s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
