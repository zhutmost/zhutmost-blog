import categoryData from '@/data/category-data.json'
import { type CategoryCounter, TagCounter } from '@/lib/content-collections/post-counter'
import siteConfig from '@/lib/site-config'
import slugify from '@sindresorhus/slugify'
import type { Metadata } from 'next'
import tagData from '@/data/tag-data.json'
import allPostsSorted from '@/lib/post-sort'
import { notFound, redirect } from 'next/navigation'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import PostCard from '@/components/post-card'
import PostPagination from '@/components/post-pagination'
import * as React from 'react'

export const generateStaticParams = async () => {
  const categoryCounter = categoryData as CategoryCounter
  return Object.keys(categoryCounter).map((category) => {
    const totalPages = Math.ceil(categoryCounter[category] / siteConfig.postPerPage)
    return Array.from({ length: totalPages }, (_, i) => ({
      category: encodeURI(slugify(category)),
      page: (i + 1).toString(),
    }))
  })
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; page: string }
}): Promise<Metadata | undefined> {
  const categoryCounter = tagData as TagCounter
  const category = Object.keys(categoryCounter).find(
    (t) => slugify(t) === decodeURI(params.category)
  )

  if (!category) return

  return {
    title: `Category - ${category}`,
    description: `${siteConfig.siteTitle} "${category}" category content`,
  }
}

export default function Page({ params }: { params: { category: string; page: string } }) {
  const categoryCounter = categoryData as CategoryCounter
  const category = Object.keys(categoryCounter).find(
    (t) => slugify(t) === decodeURI(params.category)
  )

  if (!category) return notFound()

  const totalPages = Math.ceil(categoryCounter[category] / siteConfig.postPerPage)
  const filteredPosts = allPostsSorted.filter((post) => post.category === category)

  if (filteredPosts.length != categoryCounter[category]) {
    console.error(
      `Category "${category}" should include ${categoryCounter[category]} posts but got ${filteredPosts.length}`
    )
    return notFound()
  }

  const currPage = parseInt(params.page)
  if (currPage < 1 || currPage > totalPages) {
    redirect(`/category/${params.category}/page/1`)
  }

  const posts = allPostsSorted.slice(
    siteConfig.postPerPage * (currPage - 1),
    siteConfig.postPerPage * currPage
  )

  return (
    <div className="divide-y divide-border">
      <PageHeader>
        <PageHeaderHeading>Category - {category}</PageHeaderHeading>
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
        <PostPagination currentPage={currPage} totalPages={totalPages} parentPath={'/category'} />
      </div>
    </div>
  )
}
