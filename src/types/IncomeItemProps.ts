import { type Income } from '@/store/income'
import type { TimeTag } from './timeTag'

export type IncomeItemProps = Income & {
  timeTag?: TimeTag
  accumulatedAsset: number
}
