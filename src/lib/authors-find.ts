import { allAuthors, type Author } from '@/content-collections'
import { authorDefault } from '@/lib/author-sort'

export default function authorsFind(authors: string[]): Author[] {
  function findAuthor(author: string): Author {
    return (
      allAuthors.find((a: Author) => author === a.slug) ??
      allAuthors.find((a: Author) => author === a._meta.path) ??
      allAuthors.find((a: Author) => author === a.name) ??
      authorDefault
    )
  }
  const authorsFound = authors.map((author: string) => findAuthor(author))
  return authorsFound.length > 0 ? authorsFound : [authorDefault]
}
