import { defineStore } from 'pinia'

import { ref } from 'vue'

import { mockTimeTagList } from './mockData'

import type { TimeTag } from '@/types/timeTag'

export const useTimeTagStore = defineStore('timeTag', () => {
  const timeTagList = ref<TimeTag[]>(mockTimeTagList)

  return {
    timeTagList
  }
})
