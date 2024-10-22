import * as React from 'react'
import tagData from '@/data/tag-data.json'
import { type Metadata } from 'next'
import siteConfig from '@/lib/site-config'
import allPostsSorted from '@/lib/post-sort'
import slugify from '@sindresorhus/slugify'
import { notFound, redirect } from 'next/navigation'
import { TagCounter } from '@/lib/content-collections/post-counter'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import PostCard from '@/components/post-card'
import PostPagination from '@/components/post-pagination'

export const generateStaticParams = async () => {
  const tagCounter = tagData as TagCounter
  return Object.keys(tagCounter).map((tag) => {
    const totalPages = Math.ceil(tagCounter[tag] / siteConfig.postPerPage)
    Array.from({ length: totalPages }, (_, i) => ({
      tag: encodeURI(slugify(tag)),
      page: (i + 1).toString(),
    }))
  })
}

export async function generateMetadata({
  params,
}: {
  params: { tag: string; page: string }
}): Promise<Metadata | undefined> {
  const tagCounter = tagData as TagCounter
  const tags = Object.keys(tagCounter)
  const tag = tags.find((t) => slugify(t) === decodeURI(params.tag))

  if (!tag) return

  return {
    title: `Tag - ${tag}`,
    description: `${siteConfig.siteTitle} "${tag}" tagged content`,
  }
}

export default function Page({ params }: { params: { tag: string; page: string } }) {
  const tagCounter = tagData as TagCounter
  const tag = Object.keys(tagCounter).find((t) => slugify(t) === decodeURI(params.tag))

  if (!tag) return notFound()

  const totalPages = Math.ceil(tagCounter[tag] / siteConfig.postPerPage)
  const filteredPosts = allPostsSorted.filter((post) => post.tags?.includes(tag))

  if (filteredPosts.length != tagCounter[tag]) {
    console.error(
      `Tag "${tag}" should include ${tagCounter[tag]} posts but got ${filteredPosts.length}`
    )
    return notFound()
  }

  const currPage = parseInt(params.page)
  if (currPage < 1 || currPage > totalPages) {
    redirect(`/tags/${params.tag}/page/1`)
  }

  const posts = allPostsSorted.slice(
    siteConfig.postPerPage * (currPage - 1),
    siteConfig.postPerPage * currPage
  )

  const tagTitle = tag[0].toUpperCase() + tag.slice(1)

  return (
    <div className="divide-y divide-border">
      <PageHeader>
        <PageHeaderHeading>Tag - {tagTitle}</PageHeaderHeading>
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
        <PostPagination currentPage={currPage} totalPages={totalPages} parentPath={'/tags'} />
      </div>
    </div>
  )
}
