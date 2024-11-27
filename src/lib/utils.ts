import { twMerge, twJoin, type ClassNameValue } from 'tailwind-merge'

export function cn(...classLists: ClassNameValue[]) {
  return twMerge(twJoin(...classLists))
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T
