'use client'

import * as React from 'react'
import { TocItem } from 'remark-flexible-toc'
import { cn } from '@/lib/utils'

export interface PostTocProps {
  toc: TocItem[]
  depth?: 1 | 2
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState(null as string | null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  console.log(activeId)
  return activeId
}

export default function PostToc({ toc, depth = 2 }: PostTocProps) {
  const activeHeading = useActiveItem(
    toc.filter((item) => item.depth === 3).map((item) => item.href.slice(1))
  )
  const activeHeadingNumbering = toc.find((item) => item.href.slice(1) === activeHeading)?.numbering

  const filteredToc = toc.filter((item) => item.depth <= depth + 1)

  return (
    <nav className="max-h-[85svh] overflow-auto py-2 text-sm font-normal leading-8">
      <ul>
        {filteredToc.map((item) => {
          const numbering = item.numbering.slice(1).join('.')
          if (item.depth === 2) {
            return (
              <li
                key={item.href}
                className={cn(
                  'px-2 py-1 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  activeHeadingNumbering &&
                    item.numbering[1] == activeHeadingNumbering[1] &&
                    'text-primary'
                )}
              >
                <span className="pr-2">{numbering}</span>
                <a href={item.href} className="">
                  {item.value}
                </a>
              </li>
            )
          } else if (item.depth === 3) {
            return (
              <li
                key={item.href}
                className={cn(
                  'ml-4 px-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  item.href.slice(1) === activeHeading && 'text-primary'
                )}
              >
                <span className="pr-2">{numbering}</span>
                <a href={item.href}>{item.value}</a>
              </li>
            )
          }
        })}
      </ul>
    </nav>
  )
}
