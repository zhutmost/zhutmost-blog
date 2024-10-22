import * as React from 'react'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import siteConfig from '@/lib/site-config'
import Timeline from '@/components/timeline'
import timelineNews from '@/data/timeline-news'

export default function Page() {
  return (
    <div className="divide-y divide-border">
      <PageHeader>
        <PageHeaderHeading>News</PageHeaderHeading>
        <PageHeaderDescription>
          Hello, Bonjour, こんにちは, 你好! Welcome to {siteConfig.siteTitle}!
        </PageHeaderDescription>
      </PageHeader>
      <div className="py-10">
        <Timeline timelineNews={timelineNews} />
      </div>
    </div>
  )
}
