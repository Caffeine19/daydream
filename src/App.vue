<script setup lang="ts">
import { FlagIcon, MapPinIcon } from '@heroicons/vue/24/solid'

import DConnector from '@/components/DConnector.vue'
import DIncomeItem from '@/components/DIncomeItem.vue'
import DRoadSign, { toRoadSign, startRoadSign } from './components/DRoadSign.vue'

import { useIncomeStore } from '@/store/income'
import { useTimeTagStore } from './store/timeTag'

import { storeToRefs } from 'pinia'

const incomeStore = useIncomeStore()
const timeTagStore = useTimeTagStore()

const { timeTagList } = storeToRefs(timeTagStore)

const { accumulatedAssetList, incomeList } = storeToRefs(incomeStore)
</script>

<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="container mx-auto h-full p-2 overflow-y-auto">
      <div class="flex flex-col p-2 space-y-1">
        <DRoadSign v-bind="startRoadSign"><FlagIcon class="w-4 h-4" /></DRoadSign>

        <template v-for="(income, index) in incomeList" :key="index">
          <div v-if="index !== 0" class="grid-cols-12 grid">
            <DConnector
              :prevId="income.id"
              class="place-self-center col-span-3 col-start-4 lg:col-start-6 lg:col-span-2"
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
        </template>

        <DRoadSign v-bind="toRoadSign"><MapPinIcon class="w-4 h-4" /></DRoadSign>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
