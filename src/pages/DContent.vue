<script setup lang="ts">
import { ref } from 'vue'

import { storeToRefs } from 'pinia'

import { useSortable } from '@vueuse/integrations/useSortable'

import { FlagIcon, MapPinIcon } from '@heroicons/vue/24/solid'

import DConnector from '@/components/DConnector.vue'
import DIncomeItem from '@/components/DIncomeItem.vue'
import DRoadSign, { toRoadSign, startRoadSign } from '@/components/DRoadSign.vue'

import { useIncomeStore } from '@/store/income'
import { useTimeTagStore } from '@/store/timeTag'

const incomeStore = useIncomeStore()
const timeTagStore = useTimeTagStore()

const { timeTagList } = storeToRefs(timeTagStore)

const { accumulatedAssetList, incomeList } = storeToRefs(incomeStore)

const el = ref<HTMLElement | null>(null)
const { option } = useSortable(el, incomeList, {
  handle: '.accumulated-asset'
})
</script>

<template>
  <div class="container mx-auto h-full p-4 overflow-y-auto">
    <div class="flex flex-col p-2 space-y-1">
      <DRoadSign v-bind="startRoadSign"><FlagIcon class="w-4 h-4" /></DRoadSign>

      <div ref="el">
        <div v-for="(income, index) in incomeList" :key="income.id">
          <div v-if="index !== 0" class="grid-cols-12 grid">
            <DConnector
              :prevId="income.id"
              class="place-self-center col-start-1 col-span-12 md:col-span-3 md:col-start-4 lg:col-start-6 lg:col-span-2"
            ></DConnector>
          </div>
          <DIncomeItem
            :id="income.id"
            :num="income.num"
            :value="income.value"
            :time-tag-id="income.timeTagId"
            :accumulatedAsset="accumulatedAssetList[index]"
            :timeTag="timeTagList.find((t) => t.id === income.timeTagId)"
            :name="income.name"
          ></DIncomeItem>
        </div>
      </div>

      <DRoadSign v-bind="toRoadSign"><MapPinIcon class="w-4 h-4" /></DRoadSign>
    </div>
  </div>
</template>

<style scoped></style>
