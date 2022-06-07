import { Filter } from './types'

export const filterFileName = (
  fileName: string,
  filter: Filter | undefined,
) => {
  if (filter instanceof RegExp) {
    return filter.test(fileName)
  }
  if (typeof filter === 'function') {
    return filter(fileName)
  }

  if (typeof filter === 'string') {
    return fileName === filter
  }

  return true
}
