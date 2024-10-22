import * as React from 'react'
import NextLink from 'next/link'
import slugify from '@sindresorhus/slugify'
import { icons } from '@tabler/icons-react'
import siteConfig from '@/lib/site-config'
import { Button, buttonVariants } from '@/components/ui/button'
import tagData from '@/data/tag-data.json'
import { TagCounter } from '@/lib/content-collections/post-counter'
import { cn } from '@/lib/utils'

export default function PopularTags() {
  let popularTags: { tag: string; icon?: string; title?: string }[]
  if (siteConfig.popularTags) {
    popularTags = siteConfig.popularTags
  } else {
    const tagCounter = tagData as TagCounter
    const tagsSorted = Object.keys(tagCounter).sort((a, b) => tagCounter[b] - tagCounter[a])
    popularTags = tagsSorted.slice(0, 5).map((tag) => ({
      tag,
    }))
  }

  return (
    <div className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-3 lg:grid-cols-5">
      {popularTags.map((popularTag, index) => {
        const { tag, icon, title } = popularTag
        const tagSlug = slugify(tag)

        const IconSvg = icons[icon as keyof typeof icons] || icons.IconTag
        const bgColor = `bg-chart-${index + 1} hover:bg-chart-${index + 1}/80`

        return (
          <NextLink
            key={tag}
            href={`/tags/${tagSlug}`}
            className={cn(
              buttonVariants({ size: 'lg', variant: 'default' }),
              `mx-auto w-[160px] space-x-2 ${bgColor} px-3`
            )}
          >
            <IconSvg className="h-6 w-6" />
            <div className="my-auto overflow-hidden text-base text-white">{title || tag}</div>
          </NextLink>
        )
      })}
    </div>
  )
}
