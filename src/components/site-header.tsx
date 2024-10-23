'use client'

import NextLink from 'next/link'
import NextImage from 'next/image'

import { buttonVariants } from '@/components/ui/button'
import siteConfig from '@/lib/site-config'
import { cn } from '@/lib/utils'
import MobileNav from '@/components/mobile-nav'
import ThemeSwitch from '@/components/theme-switch'

export default function SiteHeader() {
  const isBlurred = true
  const isSticky = true

  return (
    <header
      className={cn(
        'z-50 flex h-auto w-full items-center justify-center',
        isSticky ? 'sticky inset-x-0 top-0' : 'static',
        isBlurred ? 'bg-background/70 backdrop-blur-lg backdrop-saturate-150' : 'bg-background'
      )}
    >
      <nav className="relative flex h-14 w-full max-w-5xl flex-row flex-nowrap items-center justify-between gap-4 px-3">
        <NextLink href="/" className="flex items-center gap-4">
          {siteConfig.header.logo && (
            <NextImage
              src={siteConfig.header.logo}
              alt={siteConfig.siteTitle}
              width={30}
              height={30}
            />
          )}
          {siteConfig.header.title && (
            <div className="text-xl font-bold">{siteConfig.header.title}</div>
          )}
        </NextLink>
        <ul className="flex h-full flex-grow basis-0 flex-row flex-nowrap items-center justify-end gap-1">
          {Object.entries(siteConfig.header.menu).map(([label, href]) => (
            <li
              key={label}
              className="box-border hidden list-none whitespace-nowrap font-medium sm:block"
            >
              <NextLink className={buttonVariants({ variant: 'ghost' })} href={href}>
                {label}
              </NextLink>
            </li>
          ))}
          <li>
            <ThemeSwitch />
          </li>
          <li className="sm:hidden">
            <MobileNav />
          </li>
        </ul>
      </nav>
    </header>
  )
}
