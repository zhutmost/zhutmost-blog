import * as React from 'react'
import siteConfig from '@/lib/site-config'
import allPostsSorted from '@/lib/post-sort'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import PostPagination from '@/components/post-pagination'
import { redirect } from 'next/navigation'
import PostCard from '@/components/post-card'

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allPostsSorted.length / siteConfig.postPerPage)
  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
}

export default function Page({ params }: { params: { page: string } }) {
  const totalPages = Math.ceil(allPostsSorted.length / siteConfig.postPerPage)
  const currPage = parseInt(params.page)
  if (currPage < 1 || currPage > totalPages) {
    redirect('/archive/page/1')
  }

  const posts = allPostsSorted.slice(
    siteConfig.postPerPage * (currPage - 1),
    siteConfig.postPerPage * currPage
  )

  return (
    <article className="divide-y divide-border">
      <PageHeader>
        <PageHeaderHeading>All Posts</PageHeaderHeading>
        <PageHeaderDescription>
          Hello, Bonjour, こんにちは, 你好! Welcome to {siteConfig.siteTitle}!
        </PageHeaderDescription>
      </PageHeader>
      <div>
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.map((post) => (
            <li key={post.slugPath} className="py-4">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
        <PostPagination currentPage={currPage} totalPages={totalPages} />
      </div>
    </article>
  )
}
