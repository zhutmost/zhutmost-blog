import { MDXContent } from '@content-collections/mdx/react'
import { Metadata } from 'next'

import mdxComponents from '@/components/mdx/mdx-components'
import AuthorLayout from '@/layouts/author-layout'
import { authorDefault } from '@/lib/author-sort'
import { generatePageMetadata } from '@/lib/page-metadata'

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
