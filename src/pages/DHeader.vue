<script setup lang="ts">
import { ArrowsUpDownIcon } from '@heroicons/vue/24/outline'

import { useIncomeStore } from '@/store/income'

const incomeStore = useIncomeStore()
</script>
<template>
  <div class="w-full p-2 bg-zinc-50 border-b border-zinc-100 grid grid-cols-12">
    <div class="flex items-center space-x-1 col-span-3">
      <img src="@/assets/img/rainbow.png" alt="rainbow" class="w-8 h-8" />
      <p class="text-xl font-semibold text-zinc-900">Daydream</p>
    </div>
    <div class="col-span-6 flex justify-center">
      <button
        @click="incomeStore.sortIncomeListByTimeTag"
        class="flex items-center space-x-1 text-zinc-600 hover:bg-zinc-200 transition-colors px-2 py-1 rounded-md"
      >
        <ArrowsUpDownIcon class="w-5 h-5"></ArrowsUpDownIcon>
        <p>Sort</p>
      </button>
    </div>
    <div class="col-span-3"></div>
  </div>
</template>
