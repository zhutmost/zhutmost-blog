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
  siteUrl: string
  siteTitle: string
  description: string
  locale: string
  author: string
  postPerPage: number
  multiCategories: boolean
  keywords: string[]
  popularTags: { tag: string; icon?: string; title?: string }[]
  header: {
    logo?: string
    title?: string
    // Whether to show the theme switching button on the navigation bar.
    themeSwitch: boolean
    // Navigation menu items. (Example: { Home: '/', Posts: '/posts' })
    menu: Record<string, string>
  }
  footer: {
    beian?: string
    icons?: Record<string, { icon: string; href: string }>
  }
  comment: {
    provider: CommentProviders | null
    giscusConfig?: GiscusProps
    utterancesConfig?: UtterancesProps
    disqusConfig?: DisqusProps
  }
  analytics: {
    umamiAnalytics?: UmamiProps
    posthogAnalytics?: PosthogProps
    googleAnalytics?: GoogleAnalyticsProps
    plausibleAnalytics?: PlausibleProps
    simpleAnalytics?: SimpleAnalyticsProps
  }
  seo: {
    socialBanner: string
    openGraph?: {
      title?: string
      description?: string
      siteName?: string
      locale?: string
      images?: string
    }
    twitter?: {
      title?: string
      description?: string
      images?: string
    }
  }
}

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
}

const siteConfig: SiteConfig = (() => {
  // Merge default config with user config
  const c = { ...defaultSiteConfig, ...userConfig }

  // Set default values for Open Graph and Twitter SEO
  c.seo.openGraph!.title = c.seo.openGraph!.title || c.siteTitle
  c.seo.openGraph!.description = c.seo.openGraph!.description || c.description
  c.seo.openGraph!.siteName = c.seo.openGraph!.siteName || c.siteTitle
  c.seo.openGraph!.locale = c.seo.openGraph!.locale || c.locale
  c.seo.openGraph!.images = new URL(
    c.seo.openGraph!.images || c.seo.socialBanner,
    c.siteUrl
  ).toString()
  c.seo.twitter!.title = c.seo.twitter!.title || c.siteTitle
  c.seo.twitter!.description = c.seo.twitter!.description || c.description
  c.seo.twitter!.images = new URL(c.seo.twitter!.images || c.seo.socialBanner, c.siteUrl).toString()

  return c
})()

export default siteConfig
