<script setup lang="ts">
import { ref } from 'vue'

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
import DDialog from '@/components/DDialog.vue'

const incomeStore = useIncomeStore()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { incomeList } = storeToRefs(incomeStore)
const { copy } = useClipboard()

const jsonStr = ref<string>()

const showDialog = ref(false)
const onCancel = () => (showDialog.value = false)
const onConfirm = () => {
  if (jsonStr.value) incomeStore.importIncomeList(jsonStr.value)
  showDialog.value = false
}
const onClickOutside = () => (showDialog.value = false)
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
      <DAppButton label="Import" :action="() => (showDialog = true)">
        <ArrowTopRightOnSquareIcon class="w-5 h-5"></ArrowTopRightOnSquareIcon>
        <DDialog
          :showDialog="showDialog"
          label="Import"
          @confirm="onConfirm"
          @cancel="onCancel"
          @clickOutside="onClickOutside"
        >
          <textarea
            v-model="jsonStr"
            class="rounded-md outline-none bg-zinc-50 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 text-base font-normal p-2 min-h-[20vh] custom-scrollbar min-w-[75vw] sm:min-w-[25rem]"
          ></textarea>
        </DDialog>
      </DAppButton>
    </div>
  </div>
</template>
