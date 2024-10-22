import * as React from 'react'
import SocialIcon from '@/components/social-icon'
import NextLink from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { IconArrowRight } from '@tabler/icons-react'

export interface TimelineItemProps {
  date: Date
  title: string
  description?: string
  icons?: Record<string, { icon: string; href: string }>
}

export interface TimelineProps {
  timelineNews: TimelineItemProps[]
  findMore?: boolean
}

function TimelineItem({ date, title, description, icons }: TimelineItemProps) {
  return (
    <li className="mb-6 ms-4">
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-border" />
      <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
        {date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </time>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mb-2 text-base font-normal text-muted-foreground">{description}</p>
      )}
      {icons && (
        <div className="flex gap-2">
          {Object.entries(icons).map(([key, item]) => (
            <SocialIcon key={key} name={key} icon={item.icon} href={item.href} size={6} />
          ))}
        </div>
      )}
    </li>
  )
}

export default function Timeline({ timelineNews, findMore = false }: TimelineProps) {
  if (timelineNews.length === 0) {
    return (
      <ol className="relative ml-5 border-s border-border md:ml-10">
        <TimelineItem
          date={new Date()}
          title={'Nothing happened yet'}
          description={'Always believe that something wonderful is about to happen.'}
        />
      </ol>
    )
  }

  return (
    <ol className="relative ml-5 border-s border-border md:ml-10">
      {timelineNews.map((news, index) => (
        <TimelineItem {...news} key={index} />
      ))}
      <li className="mb-6 ms-4">
        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-border" />
        {findMore ? (
          <NextLink href={'/news'} className={buttonVariants({ variant: 'outline' })}>
            Find more <IconArrowRight className={'ml-2 h-5 w-5'} />
          </NextLink>
        ) : (
          <p className="mb-2 text-base font-normal text-muted-foreground">That&apos;s all folks!</p>
        )}
      </li>
    </ol>
  )
}
