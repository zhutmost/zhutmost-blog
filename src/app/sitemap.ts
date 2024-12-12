import { MetadataRoute } from 'next'

import { allAuthors } from '@/content-collections'
import allPostsSorted from '@/lib/post-sort'
import siteConfig from '@/lib/site-config'

type Sitemap = MetadataRoute.Sitemap
type SitemapSingleFile = MetadataRoute.Sitemap[number]

export default function sitemap(): Sitemap {
  const homeRoute: SitemapSingleFile = {
    url: new URL(siteConfig.siteUrl).toString(),
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: 'monthly',
  }

  const postRoutes: Sitemap = allPostsSorted
    .filter((post) => !post.draft)
    .map((post) => ({
      url: new URL(`/post/${post.slug}`, siteConfig.siteUrl).toString(),
      lastModified: post.dateUpdate.toISOString(),
      priority: 1,
      changeFrequency: 'monthly',
    }))

  const authorRoutes: Sitemap = allAuthors.map((author) => ({
    url: new URL(`/about/${author.slug}`, siteConfig.siteUrl).toString(),
    lastModified: author.dateUpdate.toISOString(),
    priority: 0.5,
    changeFrequency: 'monthly',
  }))

  const pages = ['news', 'tags']
  if (siteConfig.teamPage) {
    pages.push('team')
  }

  const pageRoutes: Sitemap = pages.map((route) => ({
    url: new URL(route, siteConfig.siteUrl).toString(),
    lastModified: new Date().toISOString(),
    priority: 0.5,
    changeFrequency: 'monthly',
  }))

  return [homeRoute, ...postRoutes, ...authorRoutes, ...pageRoutes]
}
