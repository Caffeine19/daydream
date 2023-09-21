<script setup lang="ts">
import { XMarkIcon, Bars2Icon, TrashIcon } from '@heroicons/vue/24/outline'

import { useIncomeStore } from '@/store/income'

defineProps<{ name: string; value: number; id: number; num: number }>()

const incomeStore = useIncomeStore()
</script>
<template>
  <div
    class="p-1.5 w-fit space-y-1.5 rounded-lg group/edit border border-neutral-200 col-start-7 lg:col-start-8 lg:col-span-5 col-span-5"
  >
    <div class="flex justify-between items-center">
      <input
        class="text-base placeholder:text-neutral-300 font-medium text-neutral-600 outline-none bg-transparent"
        :value="name"
        placeholder="item name"
        @change="
          (event) => incomeStore.updateIncomeItemName(id, (event.target as HTMLInputElement).value)
        "
      />
      <div class="opacity-0 group-hover/edit:opacity-100 transition-opacity">
        <button
          class="p-1 rounded hover:bg-neutral-50 group/bt bg-transparent transition-colors"
          @click="incomeStore.deleteIncomeItem(id)"
        >
          <TrashIcon
            class="w-4 h-4 transition-colors text-neutral-400 group-hover/bt:text-neutral-600"
          ></TrashIcon>
        </button>
      </div>
    </div>

    <div class="flex items-center space-x-1">
      <div class="rounded-lg border border-neutral-300 px-2 py-1 text-neutral-600">
        <input
          type="number"
          class="text-neutral-600 w-20 bg-transparent font-normal text-sm outline-none"
          :value="value"
          @change="
            (event) =>
              incomeStore.updateIncomeItemValue(
                id,
                parseInt((event.target as HTMLInputElement).value)
              )
          "
        />
      </div>
      <XMarkIcon class="text-neutral-300 w-4 h-4"></XMarkIcon>
      <div class="text-neural-400 px-3 py-2 rounded-lg border border-neutral-300">
        <input
          type="number"
          class="text-neutral-600 w-10 font-normal bg-transparent text-base outline-none"
          :value="num"
          @change="
            (event) =>
              incomeStore.updateIncomeItemNum(
                id,
                parseInt((event.target as HTMLInputElement).value)
              )
          "
        />
      </div>
      <Bars2Icon class="text-neutral-300 w-4 h-4"></Bars2Icon>
      <div class="text-neural-400 px-2 py-1 rounded-lg border border-neutral-300">
        <input
          type="number"
          disabled
          class="text-neutral-600 bg-transparent w-20 font-normal text-sm outline-none"
          :value="(num || 1) * value"
        />
      </div>
    </div>
  </div>
</template>
