import { type Income } from '@/store/income'

export type IncomeItemProps = Income & {
  timeTag?: TimeTag
  accumulatedAsset: number
}
