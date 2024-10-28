import { DisqusProps, GiscusProps, UtterancesProps } from 'pliny/comments/index.js'
import {
  GoogleAnalyticsProps,
  PlausibleProps,
  PosthogProps,
  SimpleAnalyticsProps,
  UmamiProps,
} from 'pliny/analytics/index.js'
import userConfig from '@/data/site-config'

type CommentProviders = 'giscus' | 'utterances' | 'disqus'

export interface SiteConfig {
  // The URL of your site, without trailing slash.
  siteUrl: string
  // The title of your site, such as "John's Blog".
  siteTitle: string
  // A short description used for SEO and social media.
  description: string
  // The locale for your site. (Default: en-US)
  locale: string
  // The author of the site.
  author: string
  // The number of posts per page in the pagination.
  postPerPage: number
  // Whether to use multiple categories to classify posts. (Default: true)
  multiCategories: boolean
  // Keywords used for SEO and social media. It is unnecessary for most modern sites.
  keywords: string[]
  // Popular tags displayed on the homepage. If blank, tags with the most posts will be used.
  popularTags: { tag: string; icon?: string; title?: string }[]

  header: {
    // The path to the logo image. (Example: '/logo.svg')
    logo?: string
    // The site title displayed on the navigation bar.
    title?: string
    // Whether to show the theme switching button on the navigation bar.
    themeSwitch: boolean
    // Navigation menu items. (Example: { Home: '/', Posts: '/posts' })
    menu: Record<string, string>
  }

  footer: {
    // Social icons displayed at the footer.
    icons?: Record<string, { icon: string; href: string }>
    // The Beian number of your site (which is needed for websites deployed in China).
    beian?: string
  }

  // Comment support (provided by Pliny)
  // See https://github.com/timlrx/pliny for more details.
  comment: {
    // The comment provider you want to use. (Options: 'giscus', 'utterances', 'disqus')
    // Keep it null to disable comment support.
    provider: CommentProviders | null
    giscusConfig?: GiscusProps
    utterancesConfig?: UtterancesProps
    disqusConfig?: DisqusProps
  }

  // Analytics support (provided by Pliny)
  // See https://github.com/timlrx/pliny for more details.
  analytics: {
    umamiAnalytics?: UmamiProps
    posthogAnalytics?: PosthogProps
    googleAnalytics?: GoogleAnalyticsProps
    plausibleAnalytics?: PlausibleProps
    simpleAnalytics?: SimpleAnalyticsProps
  }

  // SEO settings (OpenGraph & Twitter card)
  seo: {
    // The path to the default social banner image. (Example: '/banner.png')
    socialBanner: string
    // OpenGraph settings. Keep them blank to use the default values.
    openGraph?: {
      title?: string
      description?: string
      siteName?: string
      locale?: string
      images?: string
    }
    // OpenGraph settings. Keep them blank to use the default values.
    twitter?: {
      title?: string
      description?: string
      images?: string
    }
  }

  // Set the greetings (displayed under the page header) for different pages.
  pageGreetings: {
    // Greetings for 'Authors'(/about/[...]) pages.
    about?: string
    // Greetings for 'All Posts'(/archive & /category/... & /tags/...) pages.
    archive?: string
    // Greetings for 'News'(/news) pages
    news?: string
    // Greetings for the 'Popular Tags' section on the homepage.
    tags?: string
  }
}

// Default site config. You can override it in the user config (/data/site-config.ts).
export const defaultSiteConfig: SiteConfig = {
  siteUrl: 'https://example.com',
  siteTitle: 'Example Site',
  description: 'This is an example site',
  locale: 'en-US',
  author: 'John Doe',
  postPerPage: 10,
  multiCategories: true,
  keywords: [],
  popularTags: [],
  header: {
    logo: '/favicons/favicon.svg',
    title: 'Analog Demo',
    themeSwitch: true,
    menu: {
      Home: '/',
      Blog: '/posts',
    },
  },
  footer: {
    beian: undefined,
  },
  comment: {
    provider: null,
  },
  analytics: {},
  seo: {
    socialBanner: '/banner.png',
    openGraph: {},
    twitter: {},
  },
  pageGreetings: {
    about: 'Hello, Bonjour, こんにちは, 你好! Glad to see you!',
    archive: 'My digital garden, where I share my thoughts and ideas.',
    news: 'Stay up-to-date with the latest happenings.',
    tags: 'Popular tags feature the most widely favored topics.',
  },
}

const siteConfig: SiteConfig = (() => {
  // Merge default config with user config
  const c = { ...defaultSiteConfig, ...userConfig }

  // Set default values for Open Graph and Twitter SEO
  c.seo.openGraph = {
    title: c.seo.openGraph?.title || c.siteTitle,
    description: c.seo.openGraph?.description || c.description,
    siteName: c.seo.openGraph?.siteName || c.siteTitle,
    locale: c.seo.openGraph?.locale || c.locale,
    images: new URL(c.seo.openGraph?.images || c.seo.socialBanner, c.siteUrl).toString(),
  }
  c.seo.twitter = {
    title: c.seo.twitter?.title || c.siteTitle,
    description: c.seo.twitter?.description || c.description,
    images: new URL(c.seo.twitter?.images || c.seo.socialBanner, c.siteUrl).toString(),
  }

  return c
})()

export default siteConfig
