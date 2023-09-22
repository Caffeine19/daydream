import { defineStore } from 'pinia'

import { useStorage, type RemovableRef } from '@vueuse/core'

import { mockTimeTagList } from './mockData'

import type { TimeTag } from '@/types/timeTag'

export const useTimeTagStore = defineStore('timeTag', () => {
  const timeTagList: RemovableRef<TimeTag[]> = useStorage<TimeTag[]>('time-tag', mockTimeTagList)

  return {
    timeTagList
  }
})
