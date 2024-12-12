import '@/styles/globals.css'
import '@/styles/github-alert.css'

import * as React from 'react'
import type { Metadata } from 'next'
import siteConfig from '@/lib/site-config'
import customFontFamily from '@/lib/fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { Analytics } from 'pliny/analytics/index.js'
import SearchProvider from '@/components/search/search-provider'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.siteTitle}`,
  },
  description: siteConfig.description,
  authors: { name: siteConfig.author },
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.seo.openGraph!.title,
    description: siteConfig.seo.openGraph!.description,
    url: new URL(siteConfig.siteUrl),
    siteName: siteConfig.seo.openGraph!.siteName,
    images: siteConfig.seo.openGraph!.images,
    locale: siteConfig.seo.openGraph!.locale,
    type: 'website',
  },
  alternates: {
    canonical: new URL(siteConfig.siteUrl),
    types: {
      'application/rss+xml': new URL('rss.xml', siteConfig.siteUrl),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteConfig.seo.twitter!.title,
    description: siteConfig.seo.twitter!.description,
    card: 'summary_large_image',
    images: siteConfig.seo.twitter!.images,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const customFontVariables: string[] = Object.values(customFontFamily)
    .flat()
    .map((font) => font.variable)

  return (
    <html lang={siteConfig.locale} suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          customFontVariables
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics analyticsConfig={siteConfig.analytics} />
          <SearchProvider>
            <div className="flex min-h-screen flex-col items-center">
              <SiteHeader />
              <main className="w-full max-w-5xl flex-1 px-6 xl:px-0">{children}</main>
              <SiteFooter />
            </div>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
