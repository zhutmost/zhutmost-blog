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
    id: '/',
    link: siteUrl,
    image: new URL(siteConfig.seo.socialBanner, siteUrl).toString(),
    favicon: new URL('favicon.ico', siteUrl).toString(),
    language: siteConfig.locale,
    updated: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()} ${siteConfig.author}`,
    author: {
      name: siteConfig.author,
      link: new URL('about', siteUrl).toString(),
    },
  }

  const feed = new Feed(feedOptions)
  allPostsSorted.forEach((post: Post) => {
    feed.addItem({
      title: post.title,
      id: `/post/${post.slugPath}`,
      link: new URL(`post/${post.slugPath}`, siteUrl).toString(),
      image: new URL(post.banner || siteConfig.seo.socialBanner, siteUrl).toString(),
      description: post.summary,
      content: post.content,
      author: post.authors.map((author) => ({
        name: author,
      })),
      date: post.datePublish,
    })
  })

  return feed
}
