<script lang="ts">
type IncomeItemProps = Income & {
  timeTag?: TimeTag
  accumulatedAsset: number
}
</script>
<script setup lang="ts">
import { CurrencyYenIcon } from '@heroicons/vue/24/outline'
import DEditPanel from './DEditPanel.vue'
import DTimeTag from './DTimeTag.vue'

import { useIncomeStore, type Income } from '@/store/income'

import { type TimeTag } from '@/types/timeTag'
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
      class="rounded-full px-2 py-1 border border-neutral-200 flex items-center space-x-1 col-start-4 col-span-3 lg:col-start-6 lg:col-span-2 justify-self-center"
    >
      <CurrencyYenIcon class="w-4 h-4 text-neutral-600"></CurrencyYenIcon>
      <p class="text-neutral-600 text-base font-medium">{{ accumulatedAsset }}</p>
    </div>

    <DEditPanel :name="name" :id="id" :value="value" :num="num"></DEditPanel>
  </div>
</template>
