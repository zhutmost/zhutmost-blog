import { twMerge, twJoin, type ClassNameValue } from 'tailwind-merge'

export function cn(...classLists: ClassNameValue[]) {
  return twMerge(twJoin(...classLists))
}
