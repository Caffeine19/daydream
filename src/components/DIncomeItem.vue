<script setup lang="ts">
import { CurrencyYenIcon } from '@heroicons/vue/24/outline'
import DEditPanel from './DEditPanel.vue'
import DTimeTag from './DTimeTag.vue'

import { useIncomeStore } from '@/store/income'

import type { IncomeItemProps } from '@/types/IncomeItemProps'
defineProps<IncomeItemProps>()

const incomeStore = useIncomeStore()
</script>
<template>
  <div class="grid grid-cols-12 items-center">
    <DTimeTag
      v-if="timeTag"
      v-bind="timeTag"
      @select="(timeTagId) => incomeStore.updateIncomeItemTimeTag(id, timeTagId)"
    ></DTimeTag>

    <div
      class="rounded-full px-2 py-1 border border-zinc-200 flex items-center space-x-1 col-start-4 col-span-3 lg:col-start-6 lg:col-span-2 justify-self-center"
    >
      <CurrencyYenIcon class="w-4 h-4 text-zinc-900"></CurrencyYenIcon>
      <p class="text-zinc-900 text-base font-medium">{{ accumulatedAsset }}</p>
    </div>

    <DEditPanel :name="name" :id="id" :value="value" :num="num"></DEditPanel>
  </div>
</template>
