<script setup lang="ts">
import { XMarkIcon, Bars2Icon } from '@heroicons/vue/24/outline'

import { useIncomeStore, type Income } from '@/store/income'

import DEditButtonGroup from './DEditButtonGroup.vue'
import DInput from './DInput.vue'

defineProps<Omit<Income, 'timeTagId'>>()

const incomeStore = useIncomeStore()
</script>
<template>
  <div
    class="edit-panel p-1.5 w-auto md:w-fit space-y-1.5 rounded-md group/edit border dark:border-zinc-800 dark:bg-zinc-900 border-zinc-100 bg-zinc-50 md:col-start-7 col-span-12 col-start-1 lg:col-start-8 lg:col-span-5 md:col-span-5 my-2 md:my-0"
  >
    <div class="flex justify-between items-center">
      <DInput
        class="name-input"
        placeholder="item name"
        :value="name"
        @change="(newVal) => incomeStore.updateIncomeItemName(id, newVal)"
      ></DInput>
      <DEditButtonGroup class="opacity-0 group-hover/edit:opacity-100 transition-opacity" :id="id">
      </DEditButtonGroup>
    </div>

    <div class="flex justify-between items-center space-x-1">
      <DInput
        :value="value"
        type="number"
        @change="(newVal) => incomeStore.updateIncomeItemValue(id, parseInt(newVal))"
        class="w-20"
      ></DInput>
      <XMarkIcon class="text-zinc-300 w-4 h-4"></XMarkIcon>
      <DInput
        :value="num"
        type="number"
        @change="(newVal) => incomeStore.updateIncomeItemNum(id, parseInt(newVal))"
        class="w-20"
      ></DInput>
      <Bars2Icon class="text-zinc-300 w-4 h-4 dark:text-zinc-600"></Bars2Icon>
      <DInput class="w-20" :value="num * value" :disabled="true" type="number"></DInput>
    </div>
  </div>
</template>
<style>
.name-input.d-input {
  @apply text-base font-medium border-transparent dark:border-transparent;
}
</style>
