<script setup lang="ts">
import { ArrowsUpDownIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

import { useDark, useToggle } from '@vueuse/core'

import { useIncomeStore } from '@/store/income'

const incomeStore = useIncomeStore()

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <div
    class="w-full p-2 bg-zinc-50 border-b border-zinc-100 grid grid-cols-12 dark:bg-zinc-900 dark:border-zinc-800 transition-colors"
  >
    <div class="flex items-center space-x-1 col-span-3">
      <img src="@/assets/img/rainbow.png" alt="rainbow" class="w-8 h-8" />
      <p class="text-xl font-semibold text-zinc-900 md:inline hidden dark:text-zinc-50">Daydream</p>
    </div>
    <div class="col-span-6 flex justify-center space-x-1">
      <button
        @click="incomeStore.sortIncomeListByTimeTag"
        class="flex items-center space-x-1 text-zinc-600 hover:bg-zinc-200 transition-colors px-2 py-1 rounded-md dark:text-zinc-300 dark:hover:bg-zinc-800"
      >
        <ArrowsUpDownIcon class="w-5 h-5"></ArrowsUpDownIcon>
        <p>Sort</p>
      </button>
      <button
        @click="() => toggleDark()"
        class="flex items-center space-x-1 text-zinc-600 hover:bg-zinc-200 transition-colors px-2 py-1 rounded-md dark:text-zinc-300 dark:hover:bg-zinc-800"
      >
        <MoonIcon v-if="isDark" class="w-5 h-5"></MoonIcon>
        <SunIcon v-else class="w-5 h-5"></SunIcon>

        <p>{{ isDark ? 'Dark' : 'Light' }}</p>
      </button>
    </div>
    <div class="col-span-3"></div>
  </div>
</template>
