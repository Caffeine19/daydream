<script setup lang="ts">
import { XMarkIcon, Bars2Icon } from '@heroicons/vue/24/outline'

import { useIncomeStore } from '@/store/income'

import DEditButtonGroup from './DEditButtonGroup.vue'

defineProps<{ name: string; value: number; id: number; num: number }>()

const incomeStore = useIncomeStore()
</script>
<template>
  <div
    class="p-1.5 w-auto md:w-fit space-y-1.5 rounded-md group/edit border border-zinc-100 bg-zinc-50 md:col-start-7 col-span-12 col-start-1 lg:col-start-8 lg:col-span-5 md:col-span-5 my-2 md:my-0"
  >
    <div class="flex justify-between items-center">
      <input
        class="text-base placeholder:text-zinc-300 font-medium text-zinc-600 outline-none bg-transparent"
        :value="name"
        placeholder="item name"
        @change="
          (event) => incomeStore.updateIncomeItemName(id, (event.target as HTMLInputElement).value)
        "
      />
      <DEditButtonGroup class="opacity-0 group-hover/edit:opacity-100 transition-opacity" :id="id">
      </DEditButtonGroup>
    </div>

    <div class="flex justify-between items-center space-x-1">
      <input
        type="number"
        class="p-1 w-20 bg-transparent font-normal text-sm outline-none rounded-md border border-zinc-300 text-zinc-600"
        :value="value"
        @change="
          (event) =>
            incomeStore.updateIncomeItemValue(
              id,
              parseInt((event.target as HTMLInputElement).value)
            )
        "
      />

      <XMarkIcon class="text-zinc-300 w-4 h-4"></XMarkIcon>
      <input
        type="number"
        class="p-1 w-20 bg-transparent font-normal text-sm outline-none rounded-md border border-zinc-300 text-zinc-600"
        :value="num"
        @change="
          (event) =>
            incomeStore.updateIncomeItemNum(id, parseInt((event.target as HTMLInputElement).value))
        "
      />

      <Bars2Icon class="text-zinc-300 w-4 h-4"></Bars2Icon>
      <input
        type="number"
        disabled
        class="p-1 w-20 bg-transparent font-normal text-sm outline-none rounded-md border border-zinc-300 text-zinc-600"
        :value="(num || 1) * value"
      />
    </div>
  </div>
</template>
