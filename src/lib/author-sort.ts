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
    const methods = {
      name: () => a.name.localeCompare(b.name),
      slug: () => a.slug.localeCompare(b.slug),
      dateUpdate: () => b.dateUpdate.getTime() - a.dateUpdate.getTime(),
    }
    return methods[method]()
  }
  const authorsSorted: Author[] = authors.toSorted(compareFn)
  return order === 'asc' ? authorsSorted : authorsSorted.reverse()
}

export { allAuthorsNonDefault, authorDefault }
