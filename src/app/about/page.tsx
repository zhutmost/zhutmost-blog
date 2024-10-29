import { Metadata } from 'next'

import { MDXContent } from '@content-collections/mdx/react'
import mdxComponents from '@/components/mdx/mdx-components'
import AuthorLayout from '@/layouts/author-layout'
import { generatePageMetadata } from '@/lib/page-metadata'
import { authorDefault } from '@/lib/author-sort'

export const metadata: Metadata = generatePageMetadata({
  title: 'About',
})

export default function Page() {
  return (
    <AuthorLayout author={authorDefault}>
      <MDXContent code={authorDefault.mdx} components={mdxComponents} />
    </AuthorLayout>
  )
}
