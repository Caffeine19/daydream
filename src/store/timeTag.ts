import { defineStore } from 'pinia'

import { useStorage, type RemovableRef } from '@vueuse/core'

import { mockTimeTagList } from './mockData'

import { type TimeTag } from '@/types/timeTag'

export const useTimeTagStore = defineStore('timeTag', () => {
  const timeTagList: RemovableRef<TimeTag[]> = useStorage<TimeTag[]>('time-tag', mockTimeTagList)

  const createTimeTag = (name: TimeTag['name']) => {
    const blankTimeTag: TimeTag = {
      id: Math.floor(Math.random() * 1000),
      name,
      color: 'zinc'
    }

    timeTagList.value.unshift(blankTimeTag)
  }

  const deleteTimeTag = (id: TimeTag['id']) => {
    timeTagList.value = timeTagList.value.filter((t) => t.id !== id)
  }

  return {
    timeTagList,
    createTimeTag,
    deleteTimeTag
  }
})
