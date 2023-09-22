import { defineStore, storeToRefs } from 'pinia'

import { computed, ref } from 'vue'

import { useTimeTagStore } from './timeTag'

import { mockIncomeList } from './mockData'

import type { TimeTag } from '@/types/timeTag'

export interface Income {
  id: number
  name: string
  value: number
  num: number

  timeTagId: TimeTag['id']
}

export const useIncomeStore = defineStore('income', () => {
  const incomeList = ref<Income[]>(mockIncomeList)

  const accumulatedAssetList = computed(() => {
    const newVal: number[] = []
    incomeList.value.forEach((d, index) => {
      const cur = d.value * d.num
      const acc = index > 0 ? newVal[index - 1] : 0
      newVal.push(acc + cur)
    })
    return newVal
  })

  const updateIncomeItemValue = (id: number, newVal: number) => {
    console.log('🚀 ~ file: Income.ts:61 ~ updateIncomeItemValue ~ newVal:', newVal)
    const index = incomeList.value.findIndex((d) => d.id === id)
    incomeList.value[index].value = newVal
  }

  const updateIncomeItemNum = (id: number, newVal: number) => {
    const index = incomeList.value.findIndex((d) => d.id === id)
    incomeList.value[index].num = newVal
  }

  const updateIncomeItemName = (id: number, newVal: string) => {
    const index = incomeList.value.findIndex((d) => d.id === id)
    incomeList.value[index].name = newVal
  }

  const updateIncomeItemTimeTag = (id: number, newVal: number) => {
    const index = incomeList.value.findIndex((d) => d.id === id)
    incomeList.value[index].timeTagId = newVal

    sortIncomeListByTimeTag()
  }

  const timeTagStore = useTimeTagStore()
  const { timeTagList } = storeToRefs(timeTagStore)
  const sortIncomeListByTimeTag = () => {
    incomeList.value.sort((prev, next) => {
      return (
        timeTagList.value.findIndex((timeTag) => timeTag.id === prev.timeTagId) -
        timeTagList.value.findIndex((timeTag) => timeTag.id === next.timeTagId)
      )
    })
  }

  const deleteIncomeItem = (id: number) => {
    incomeList.value = incomeList.value.filter((d) => d.id !== id)
  }

  const createIncomeItem = (prevId: number) => {
    const index = incomeList.value.findIndex((d) => d.id === prevId)

    const blankItem = {
      name: '',
      value: 0,
      num: 1,
      timeTagId: incomeList.value[index - 1].timeTagId,
      id: Math.floor(Math.random() * 1000)
    }
    incomeList.value.splice(index, 0, blankItem)
  }

  return {
    incomeList,
    accumulatedAssetList,
    updateIncomeItemNum,
    updateIncomeItemValue,
    updateIncomeItemName,
    updateIncomeItemTimeTag,
    deleteIncomeItem,
    createIncomeItem
  }
})