import { defineStore } from 'pinia'

import { useStorage, type RemovableRef } from '@vueuse/core'

import { v4 as uuidv4 } from 'uuid'

import { mockTimeTagList } from './mockData'

import { type TimeTag } from '@/types/timeTag'

export const useTimeTagStore = defineStore('timeTag', () => {
  const timeTagList: RemovableRef<TimeTag[]> = useStorage<TimeTag[]>('time-tag', mockTimeTagList)

  const createTimeTag = (name: TimeTag['name']) => {
    const blankTimeTag: TimeTag = {
      id: uuidv4(),
      name,
      color: 'zinc'
    }

    timeTagList.value.unshift(blankTimeTag)
  }

  const deleteTimeTag = (id: TimeTag['id']) => {
    timeTagList.value = timeTagList.value.filter((t) => t.id !== id)
  }

  const updateTimeTagColor = (id: TimeTag['id'], newVal: TimeTag['color']) => {
    const index = timeTagList.value.findIndex((t) => t.id === id)
    timeTagList.value[index].color = newVal
  }

  const updateTimeTagName = (id: TimeTag['id'], newVal: TimeTag['name']) => {
    const index = timeTagList.value.findIndex((t) => t.id === id)
    timeTagList.value[index].name = newVal
  }

  return {
    timeTagList,
    createTimeTag,
    deleteTimeTag,
    updateTimeTagName,
    updateTimeTagColor
  }
})
