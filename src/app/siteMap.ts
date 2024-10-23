import { MetadataRoute } from 'next'
import siteConfig from '@/lib/site-config'
import allPostsSorted from '@/lib/post-sort'
import { allAuthors } from '@/content-collections'

type SiteMap = MetadataRoute.Sitemap
type SiteMapSingleFile = MetadataRoute.Sitemap[number]

export default function sitemap(): SiteMap {
  const siteUrl = siteConfig.siteUrl

  const homeRoute: SiteMapSingleFile = {
    url: siteUrl,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: 'monthly',
  }

  const postRoutes: SiteMap = allPostsSorted
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/posts/${post.slugPath}`,
      lastModified: (post.dateUpdate || post.datePublish).toISOString(),
      changeFrequency: 'monthly',
    }))

  const authorRoutes: SiteMap = allAuthors.map((author) => ({
    url: `${siteUrl}/about/${author.slugPath}`,
    lastModified: author.dateUpdate.toISOString(),
    priority: 0.5,
    changeFrequency: 'monthly',
  }))

  const pages = ['news', 'archive', 'tags']

  const pageRoutes: SiteMap = pages.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString(),
    priority: 0.5,
    changeFrequency: 'monthly',
  }))

  return [homeRoute, ...postRoutes, ...authorRoutes, ...pageRoutes]
}
