<script setup lang="ts">
import { storeToRefs } from 'pinia'

import {
  ArrowsUpDownIcon,
  MoonIcon,
  SunIcon,
  ArrowUpTrayIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/vue/24/outline'

import { useClipboard, useDark, useToggle } from '@vueuse/core'

import { useIncomeStore } from '@/store/income'

import DAppButton from '@/components/DAppButton.vue'

const incomeStore = useIncomeStore()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { incomeList } = storeToRefs(incomeStore)
const { copy } = useClipboard()
</script>
<template>
  <div
    class="w-full p-2 bg-zinc-50 border-b border-zinc-100 grid grid-cols-12 dark:bg-zinc-900 dark:border-zinc-800 transition-colors"
  >
    <div class="flex items-center space-x-1 col-span-3">
      <img src="@/assets/img/rainbow.png" alt="rainbow" class="w-8 h-8" />
      <p class="text-xl font-semibold text-zinc-900 md:inline hidden dark:text-zinc-50">Daydream</p>
    </div>
    <div class="col-span-6 flex justify-end lg:justify-center space-x-2 col-end-13 lg:col-end-10">
      <DAppButton :action="incomeStore.sortIncomeListByTimeTag" label="Sort">
        <ArrowsUpDownIcon class="w-5 h-5"></ArrowsUpDownIcon>
      </DAppButton>
      <DAppButton :label="isDark ? 'Dark' : 'Light'" :action="toggleDark">
        <MoonIcon v-if="isDark" class="w-5 h-5"></MoonIcon>
        <SunIcon v-else class="w-5 h-5"></SunIcon>
      </DAppButton>

      <DAppButton label="Export" :action="() => copy(JSON.stringify(incomeList))">
        <ArrowUpTrayIcon class="w-5 h-5"></ArrowUpTrayIcon
      ></DAppButton>
      <DAppButton label="Import" :action="() => copy(JSON.stringify(incomeList))">
        <ArrowTopRightOnSquareIcon class="w-5 h-5"></ArrowTopRightOnSquareIcon
      ></DAppButton>
    </div>
  </div>
</template>
