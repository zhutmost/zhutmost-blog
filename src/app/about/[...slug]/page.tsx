import { Metadata } from 'next'

import { allAuthors } from '@/content-collections'
import { MDXContent } from '@content-collections/mdx/react'
import mdxComponents from '@/components/mdx/mdx-components'
import AuthorLayout from '@/layouts/author-layout'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
  return allAuthors
    .filter((author) => author.slugPath != 'default')
    .map((author) => ({ slug: author.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const author = allAuthors.find((author) => author.slugPath === params.slug.join('/'))
  if (!author) {
    return
  }

  return {
    title: `About - ${author.name}`,
  }
}

function Page({ params }: { params: { slug: string[] } }) {
  const author = allAuthors.find((author) => author.slugPath === params.slug.join('/'))
  if (!author) {
    return notFound()
  }

  return (
    <AuthorLayout author={author}>
      <MDXContent code={author.mdx} components={mdxComponents} />
    </AuthorLayout>
  )
}

export default Page
