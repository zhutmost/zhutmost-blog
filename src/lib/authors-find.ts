import { allAuthors, type Author } from '@/content-collections'

export default function authorsFind(authors: string[]): Author[] {
  const defaultAuthor: Author = allAuthors.find((a) => a.slugPath === 'default')!

  function findAuthor(author: string): Author {
    return (
      allAuthors.find((a: Author) => author === a.slugPath) ||
      allAuthors.find((a: Author) => author === a._meta.path) ||
      allAuthors.find((a: Author) => author === a.name) ||
      defaultAuthor
    )
  }
  const authorsFound = authors.map((author: string) => findAuthor(author))
  return authorsFound.length > 0 ? authorsFound : [defaultAuthor]
}
