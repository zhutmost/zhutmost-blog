import { allPosts, type Post } from '@/content-collections'

const isProduction: boolean = process.env.NODE_ENV === 'production'

type SortOrder = 'asc' | 'desc'
type SortMethod = 'datePublish' | 'dateUpdate'

export function sortPosts(
  posts: Post[],
  order: SortOrder = 'desc',
  method: SortMethod = 'datePublish'
): Post[] {
  const compareFn = (a: Post, b: Post): number => {
    const methods = {
      datePublish: () => b.datePublish.getTime() - a.datePublish.getTime(),
      dateUpdate: () => b.dateUpdate.getTime() - a.dateUpdate.getTime(),
    }
    return methods[method]()
  }

  const postsDesc: Post[] = posts
    .filter((post: Post) => !isProduction || !post.draft)
    .toSorted(compareFn)
  return order === 'asc' ? postsDesc.reverse() : postsDesc
}

export const allPostsSortedByDate: Post[] = sortPosts(allPosts, 'desc', 'datePublish')

const allPostsSorted: Post[] = sortPosts(allPosts)

export default allPostsSorted
