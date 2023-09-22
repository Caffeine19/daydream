<script setup lang="ts">
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

import { useIncomeStore } from '@/store/income'

defineProps<{ prevId: number }>()

const incomeStore = useIncomeStore()
</script>
<template>
  <button class="flex items-center space-x-2 group" @click="incomeStore.createIncomeItem(prevId)">
    <ArrowRightIcon
      class="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity dark:text-zinc-500"
    ></ArrowRightIcon>
    <div
      class="h-4 w-[1px] bg-zinc-200 group-hover:bg-zinc-400 transition-colors dark:bg-zinc-700 dark:group-hover:bg-zinc-500"
    ></div>
    <ArrowLeftIcon
      class="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity dark:text-zinc-500"
    ></ArrowLeftIcon>
  </button>
</template>
