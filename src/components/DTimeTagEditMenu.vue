<script setup lang="ts">
import { ref } from 'vue'

import { onClickOutside } from '@vueuse/core'

import { CheckIcon } from '@heroicons/vue/24/outline'

import { TagColorOption, type TimeTag } from '@/types/timeTag'

import DInput from './DInput.vue'

import { useTimeTagStore } from '@/store/timeTag'

const props = defineProps<{ showEditMenu: boolean; timeTag: TimeTag }>()
const emits = defineEmits<{ 'update:showEditMenu': [newVal: boolean] }>()

const timeTagStore = useTimeTagStore()

const newTimeTagName = ref(props.timeTag.name)
const submit = () => {
  timeTagStore.updateTimeTagName(props.timeTag.id, newTimeTagName.value)
  emits('update:showEditMenu', false)
}

const el = ref<null | HTMLElement>(null)
onClickOutside(el, () => emits('update:showEditMenu', false))
</script>
<template>
  <Transition name="fade">
    <div
      ref="el"
      v-if="showEditMenu"
      class="dark:bg-zinc-900 bg-zinc-50 border-zinc-100 border dark:border-zinc-800 absolute rounded-md top-10 -right-12 z-20 p-2 space-y-2 flex flex-col"
    >
      <div class="flex space-x-1">
        <button
          class="rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors bg-transparent p-1.5 group/bt"
          @click="submit"
        >
          <CheckIcon
            class="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover/bt:text-zinc-600 dark:group-hover/bt:text-zinc-400"
          ></CheckIcon>
        </button>
        <DInput
          :value="newTimeTagName"
          @change="(newVal) => (newTimeTagName = newVal)"
          @enter="submit"
        ></DInput>
      </div>

      <div class="grid gap-2 grid-cols-4 place-items-center">
        <button
          v-for="(cv, ck) in TagColorOption"
          :key="ck"
          @click="() => timeTagStore.updateTimeTagColor(timeTag.id, ck)"
          :class="cv.backgroundColor.transparent"
          class="w-8 h-8 rounded-full flex items-center justify-center"
        >
          <div class="w-4 h-4 rounded-full" :class="cv.backgroundColor.solid"></div>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.12s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
