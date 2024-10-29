import { Metadata } from 'next'

import { Author, allAuthors } from '@/content-collections'
import { MDXContent } from '@content-collections/mdx/react'
import mdxComponents from '@/components/mdx/mdx-components'
import AuthorLayout from '@/layouts/author-layout'
import { generatePageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'About',
})

export default function Page() {
  const authorDefault = allAuthors.find((author) => author.slugPath === 'default') as Author

  return (
    <AuthorLayout author={authorDefault}>
      <MDXContent code={authorDefault.mdx} components={mdxComponents} />
    </AuthorLayout>
  )
}
