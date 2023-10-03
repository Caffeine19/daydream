import type { Income } from './income'

import { type TimeTag } from '@/types/timeTag'

const mockIncomeList_1: Income[] = [
  {
    name: '存款',
    value: 200000,
    num: 1,
    timeTagId: '1',
    id: '2'
  },
  {
    name: '工资',
    value: 100,
    num: 3,
    timeTagId: '2',
    id: '7'
  },
  {
    name: '年终奖',
    value: 200,
    timeTagId: '2',
    id: '12',
    num: 2
  },
  {
    name: '租房补贴',
    value: 200,
    timeTagId: '3',
    id: '212',
    num: 1
  },
  {
    name: 'salary/工资',
    value: 100,
    num: 6,
    timeTagId: '3',
    id: '124'
  }
]

export const mockIncomeList = mockIncomeList_1

export const mockTimeTagList: TimeTag[] = [
  { name: '2023-H1', color: 'lime', id: '1' },
  { name: '2023-H2', color: 'sky', id: '2' },
  { name: '2024-H1', color: 'pink', id: '3' },
  { name: '2024-H2', color: 'orange', id: '4' }
]
