import { allAuthors, Author } from '@/content-collections'

const allAuthorsNonDefault: Author[] = allAuthors.filter((a) => a.slug !== 'default')

const authorDefault: Author = allAuthors.find((a) => a.slug === 'default')!

type SortOrder = 'asc' | 'desc'

type SortMethod = 'name' | 'slug' | 'dateUpdate'

export function sortAuthors(
  authors: Author[],
  order: SortOrder = 'asc',
  method: SortMethod = 'name'
): Author[] {
  const compareFn = (a: Author, b: Author): number => {
    if (method === 'name') {
      return a.name.localeCompare(b.name)
    } else if (method === 'slug') {
      return a.slug.localeCompare(b.slug)
    } else if (method === 'dateUpdate') {
      return b.dateUpdate.getTime() - a.dateUpdate.getTime()
    } else {
      throw new Error(`Unknown author sorting method: ${method}`)
    }
  }
  const authorsSorted: Author[] = authors.toSorted(compareFn)
  return order === 'asc' ? authorsSorted : authorsSorted.reverse()
}

export { allAuthorsNonDefault, authorDefault }
