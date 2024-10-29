import * as React from 'react'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import siteConfig from '@/lib/site-config'
import Timeline from '@/components/timeline'
import timelineNews from '@/data/timeline-news'
import Twemojify from '@/components/twemoji'
import { generatePageMetadata } from '@/lib/page-metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'News',
})

export default function Page() {
  return (
    <div className="divide-y divide-border">
      <PageHeader>
        <PageHeaderHeading>News</PageHeaderHeading>
        <PageHeaderDescription>
          <Twemojify>{siteConfig.pageGreetings.news}</Twemojify>
        </PageHeaderDescription>
      </PageHeader>
      <div className="py-10">
        <Timeline timelineNews={timelineNews} />
      </div>
    </div>
  )
}
