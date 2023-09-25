<script setup lang="ts">
import { ref } from 'vue'

import { TagColorOption, type TimeTag } from '@/types/timeTag'

import DInput from './DInput.vue'

import { useTimeTagStore } from '@/store/timeTag'

const props = defineProps<{ showEditMenu: boolean; timeTag: TimeTag }>()

const timeTagStore = useTimeTagStore()

const newTimeTagName = ref(props.timeTag.name)
const onSubmit = () => {
  timeTagStore.updateTimeTagName(props.timeTag.id, newTimeTagName.value)
}
</script>
<template>
  <Transition name="fade"
    ><div
      v-if="showEditMenu"
      class="bg-zinc-900 border border-zinc-800 absolute rounded-md top-9 left-1/2 -translate-x-1/2 z-20 p-2 space-y-2 flex flex-col"
    >
      <div class="flex space-x-1">
        <button></button>
        <DInput
          :value="newTimeTagName"
          @change="(newVal) => (newTimeTagName = newVal)"
          @enter="onSubmit"
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
      </div></div
  ></Transition>
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
