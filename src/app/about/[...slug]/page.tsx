import { MDXContent } from '@content-collections/mdx/react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import mdxComponents from '@/components/mdx/mdx-components'
import { Author } from '@/content-collections'
import AuthorLayout from '@/layouts/author-layout'
import { allAuthorsNonDefault } from '@/lib/author-sort'
import { generatePageMetadata } from '@/lib/page-metadata'

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allAuthorsNonDefault.map((author) => ({ slug: author.slug.split('/') }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
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

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
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
