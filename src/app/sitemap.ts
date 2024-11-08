import { MetadataRoute } from 'next'
import siteConfig from '@/lib/site-config'
import allPostsSorted from '@/lib/post-sort'
import { allAuthors } from '@/content-collections'

type Sitemap = MetadataRoute.Sitemap
type SitemapSingleFile = MetadataRoute.Sitemap[number]

export default function sitemap(): Sitemap {
  const siteUrl = siteConfig.siteUrl

  const homeRoute: SitemapSingleFile = {
    url: new URL(siteUrl).toString(),
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: 'monthly',
  }

  const postRoutes: Sitemap = allPostsSorted
    .filter((post) => !post.draft)
    .map((post) => ({
      url: new URL(`/post/${post.slugPath}`, siteUrl).toString(),
      lastModified: (post.dateUpdate || post.datePublish).toISOString(),
      priority: 1,
      changeFrequency: 'monthly',
    }))

  const authorRoutes: Sitemap = allAuthors.map((author) => ({
    url: new URL(`/about/${author.slugPath}`, siteUrl).toString(),
    lastModified: author.dateUpdate.toISOString(),
    priority: 0.5,
    changeFrequency: 'monthly',
  }))

  const pages = ['news', 'tags']
  if (siteConfig.teamPage) {
    pages.push('team')
  }

  const pageRoutes: Sitemap = pages.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date().toISOString(),
    priority: 0.5,
    changeFrequency: 'monthly',
  }))

  return [homeRoute, ...postRoutes, ...authorRoutes, ...pageRoutes]
}
