import { Metadata } from 'next'

import { allAuthors, Author } from '@/content-collections'
import { MDXContent } from '@content-collections/mdx/react'
import mdxComponents from '@/components/mdx/mdx-components'
import AuthorLayout from '@/layouts/author-layout'
import { notFound } from 'next/navigation'

const allAuthorsExcludingDefault = allAuthors.filter((author) => author.slugPath != 'default')

export const generateStaticParams = async () => {
  return allAuthorsExcludingDefault.map((author) => ({ slug: author.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const author: Author | undefined = allAuthorsExcludingDefault.find(
    (author) => author.slugPath === params.slug.join('/')
  )
  if (!author) {
    return
  }

  return {
    title: `About - ${author.name}`,
  }
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const author: Author | undefined = allAuthorsExcludingDefault.find(
    (author) => author.slugPath === params.slug.join('/')
  )
  if (!author) {
    return notFound()
  }

  return (
    <AuthorLayout author={author}>
      <MDXContent code={author.mdx} components={mdxComponents} />
    </AuthorLayout>
  )
}
