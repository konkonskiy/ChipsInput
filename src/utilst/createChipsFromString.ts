import { IChip } from '../types/index'
import { uniqId } from './uniqId'

export const createChipsFromString = (value: string): IChip[] => {
  const splitArr: IChip[] = value
    .split(',')
    .filter((str) => str)
    .map((chip) => ({
      chip,
      id: uniqId(),
    }))
  return splitArr
}
