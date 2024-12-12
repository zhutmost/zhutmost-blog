import { Feed, FeedOptions } from 'feed'

import { Post } from '@/content-collections'
import allPostsSorted from '@/lib/post-sort'
import siteConfig from '@/lib/site-config'

export default function generateRssFeed(): Feed {
  const siteUrl = siteConfig.siteUrl

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
      id: `/post/${post.slug}`,
      link: new URL(`post/${post.slug}`, siteUrl).toString(),
      image: new URL(post.banner ?? siteConfig.seo.socialBanner, siteUrl).toString(),
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
