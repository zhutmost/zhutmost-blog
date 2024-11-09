'use client'

import * as React from 'react'
import { TocItem } from 'remark-flexible-toc'
import { cn } from '@/lib/utils'

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

  return activeId
}

export interface PostTocProps {
  toc: TocItem[]
}

export default function PostToc({ toc }: PostTocProps) {
  // use .slice(1) to remove the leading '#'
  const activeHeading = useActiveItem(toc.map((item) => item.href.slice(1)))
  const activeHeadingNumbering = toc.find((item) => item.href.slice(1) === activeHeading)?.numbering

  return (
    <nav className="max-h-[85svh] overflow-auto py-2 leading-8">
      <ul>
        {toc.map((item) => (
          <li
            key={item.href}
            className={cn(
              'px-2 py-1 text-muted-foreground transition-colors hover:bg-accent',
              item.depth === 2
                ? 'text-base font-medium'
                : item.depth === 3
                  ? 'ml-5 text-sm font-normal'
                  : 'ml-8 text-xs font-normal',
              activeHeadingNumbering &&
                item.numbering.every((value, index) => value === activeHeadingNumbering[index]) &&
                'text-primary'
            )}
          >
            {item.depth === 2 && <span className="pr-2">{item.numbering.slice(1).join('.')}</span>}
            <a href={item.href} className="">
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
