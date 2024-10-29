import { Feed, FeedOptions } from 'feed'
import siteConfig from '@/lib/site-config'
import { Post } from '@/content-collections'
import allPostsSorted from '@/lib/post-sort'

const isProduction: boolean = process.env.NODE_ENV === 'production'

export default function generateRssFeed(): Feed {
  const siteUrl = isProduction ? siteConfig.siteUrl : 'http://localhost:3000'

  const feedOptions: FeedOptions = {
    title: `RSS Feed | ${siteConfig.siteTitle}`,
    description: siteConfig.description,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}${siteConfig.seo.socialBanner}`,
    favicon: `${siteUrl}/favicon.ico`,
    language: siteConfig.locale,
    updated: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()} ${siteConfig.author}`,
    author: {
      name: siteConfig.author,
      link: `${siteUrl}/about`,
    },
  }

  const feed = new Feed(feedOptions)
  allPostsSorted.forEach((post: Post) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/post/${post.slugPath}`,
      link: `${siteUrl}/post/${post.slugPath}`,
      description: post.summary,
      content: post.content,
      author: post.authors.map((author) => ({
        name: author,
      })),
      date: post.datePublish,
      image: `${siteUrl}${post.banner}`,
    })
  })

  return feed
}
