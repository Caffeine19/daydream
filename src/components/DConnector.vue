<script setup lang="ts">
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

import { useIncomeStore } from '@/store/income'

defineProps<{ prevId: number }>()

const incomeStore = useIncomeStore()
</script>
<template>
  <button class="flex items-center space-x-2 group" @click="incomeStore.createIncomeItem(prevId)">
    <ArrowRightIcon
      class="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity"
    ></ArrowRightIcon>
    <div class="h-4 w-[1px] bg-neutral-200 group-hover:bg-neutral-400 transition-colors"></div>
    <ArrowLeftIcon
      class="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity"
    ></ArrowLeftIcon>
  </button>
</template>
