<script lang="ts">
interface RoadSign {
  label: string
  backgroundColor: string
  textColor: string
}

export const startRoadSign: RoadSign = {
  label: 'Start',
  backgroundColor: 'bg-red-500',
  textColor: 'text-red-50'
}

export const toRoadSign: RoadSign = {
  label: 'To',
  backgroundColor: 'bg-blue-500',
  textColor: 'text-blue-50'
}
</script>

<script setup lang="ts">
defineProps<RoadSign>()
</script>

<template>
  <div class="grid grid-cols-12">
    <div
      class="col-span-3 col-start-4 lg:col-start-6 w-fit lg:col-span-2 justify-self-center px-2 py-1 rounded-full flex items-center space-x-1"
      :class="backgroundColor + ' ' + textColor"
    >
      <slot></slot>
      <p class="text-base font-medium">Start</p>
    </div>
  </div>
</template>
