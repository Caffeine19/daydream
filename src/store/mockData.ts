import type { Income } from './income'

import { TagColorOption, type TimeTag } from '@/types/timeTag'

const mockIncomeList_1: Income[] = [
  {
    name: 'deposit/存款',
    value: 200000,
    num: 1,
    timeTagId: 1,
    id: 2
  },
  {
    name: 'salary/工资',
    value: 100,
    num: 3,
    timeTagId: 2,
    id: 7
  },
  {
    name: 'year-end bonus/年终奖',
    value: 200,
    timeTagId: 2,
    id: 12,
    num: 2
  },
  {
    name: '租房补贴',
    value: 200,
    timeTagId: 3,
    id: 212,
    num: 1
  },
  {
    name: 'salary/工资',
    value: 100,
    num: 6,
    timeTagId: 3,
    id: 124
  }
]

export const mockIncomeList = mockIncomeList_1

export const mockTimeTagList: TimeTag[] = [
  { name: '2023-H1', color: TagColorOption.lime, id: 1 },
  { name: '2023-H2', color: TagColorOption.sky, id: 2 },
  { name: '2024-H1', color: TagColorOption.pink, id: 3 },
  { name: '2024-H2', color: TagColorOption.orange, id: 4 }
]