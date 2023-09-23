<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { CurrencyYenIcon } from '@heroicons/vue/24/outline'

import DEditPanel from './DEditPanel.vue'
import DTimeTag from './DTimeTag.vue'

import { useIncomeStore } from '@/store/income'

import type { IncomeItemProps } from '@/types/IncomeItemProps'

import { TagColorOption } from '@/types/timeTag'

defineProps<IncomeItemProps>()

const incomeStore = useIncomeStore()

const { highlightedIncomeItem } = storeToRefs(incomeStore)
</script>
<template>
  <div class="grid grid-cols-12 items-center">
    <DTimeTag
      v-if="timeTag"
      v-bind="timeTag"
      @select="(timeTagId) => incomeStore.updateIncomeItemTimeTag(id, timeTagId)"
    ></DTimeTag>

    <div
      class="accumulated-asset rounded-full px-2 py-1 border flex items-center space-x-1 md:col-start-4 col-start-7 col-span-6 md:col-span-3 lg:col-start-6 lg:col-span-2 justify-self-end md:justify-self-center transition-colors"
      :class="
        highlightedIncomeItem === id
          ? TagColorOption[timeTag?.color || 'sky'].borderColor +
            ' ' +
            TagColorOption[timeTag?.color || 'sky'].backgroundColor +
            ' ' +
            TagColorOption[timeTag?.color || 'sky'].textColor
          : 'border-zinc-200 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-50'
      "
    >
      <CurrencyYenIcon class="w-4 h-4"></CurrencyYenIcon>
      <p class="text-base font-medium">{{ accumulatedAsset }}</p>
    </div>

    <DEditPanel :name="name" :id="id" :value="value" :num="num"></DEditPanel>
  </div>
</template>
