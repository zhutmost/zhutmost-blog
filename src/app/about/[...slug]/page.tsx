import { Metadata } from 'next'

import { Author } from '@/content-collections'
import { MDXContent } from '@content-collections/mdx/react'
import mdxComponents from '@/components/mdx/mdx-components'
import AuthorLayout from '@/layouts/author-layout'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/lib/page-metadata'
import { allAuthorsNonDefault } from '@/lib/author-sort'

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allAuthorsNonDefault.map((author) => ({ slug: author.slug.split('/') }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const author: Author | undefined = allAuthorsNonDefault.find(
    (author) => author.slug === params.slug.join('/')
  )
  if (!author) {
    return
  }

  return generatePageMetadata({
    title: `About - ${author.name}`,
  })
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const author: Author | undefined = allAuthorsNonDefault.find(
    (author) => author.slug === params.slug.join('/')
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
