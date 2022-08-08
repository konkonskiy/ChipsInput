import { customSplit } from './customSplit';
import { IChip } from '../types/index'
import { uniqId } from './uniqId'

export const createChipsFromString = (value: string): IChip[] => {
  const splitArr: IChip[] = 
    customSplit(value)
    .filter((str) => str)
    .map((chip) => ({
      chip,
      id: uniqId(),
      isSelected: false
    }))
  return splitArr
}
