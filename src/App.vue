<script setup lang="ts">
import { FlagIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center p-8 border-neutral-200 border space-y-1">
      <div class="px-3 py-2 bg-red-600/10 rounded-full flex items-center space-x-1 text-red-600">
        <FlagIcon class="w-6 h-6"></FlagIcon>
        <p class="text-lg font-medium">Begin</p>
      </div>
      <div class="h-12 w-[2px] bg-neutral-400"></div>
      <div class="px-3 py-2 border border-neutral-400 rounded-lg">
        <p class="text-neutral-600 text-base font-normal">2,000</p>
      </div>
      <div class="h-12 w-[2px] bg-neutral-400"></div>
      <div class="px-3 py-2 border border-neutral-400 rounded-lg">
        <p class="text-neutral-600 text-base font-normal">2,000</p>
      </div>
      <div class="h-12 w-[2px] bg-neutral-400"></div>
      <div class="px-3 py-2 border border-neutral-400 rounded-lg">
        <p class="text-neutral-600 text-base font-normal">2,000</p>
      </div>
      <div class="h-12 w-[2px] bg-neutral-400"></div>
      <div class="px-3 py-2 border border-neutral-400 rounded-lg">
        <p class="text-neutral-600 text-base font-normal">2,000</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
