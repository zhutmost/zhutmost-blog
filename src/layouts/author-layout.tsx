import React from 'react'
import { Author } from '@/content-collections'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { IconMapPinFilled } from '@tabler/icons-react'
import siteConfig from '@/lib/site-config'
import SocialIcon from '@/components/social-icon'
import BackToTop from '@/components/back-to-top'
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/page-header'
import Twemojify from '@/components/twemoji'

export interface AuthorLayoutProps {
  children: React.ReactNode
  author: Author
}

export default function AuthorLayout({ children, author }: AuthorLayoutProps) {
  const { name, avatar, bio, affiliation, icons } = author

  return (
    <>
      <BackToTop />
      <div className="divide-y divide-border">
        <PageHeader>
          <PageHeaderHeading>About</PageHeaderHeading>
          <PageHeaderDescription>
            <Twemojify>{siteConfig.pageGreetings.about}</Twemojify>
          </PageHeaderDescription>
        </PageHeader>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Avatar className="h-48 w-48">
                <AvatarImage className="object-cover" src={avatar} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-muted-foreground">{bio}</div>
            <div className="flex items-center gap-1 pt-1 text-muted-foreground">
              <IconMapPinFilled />
              {affiliation}
            </div>
            <div className="flex space-x-3 pt-6">
              {icons &&
                Object.entries(icons).map(([key, item]) => (
                  <SocialIcon key={key} name={key} icon={item.icon} href={item.href} />
                ))}
            </div>
          </div>
          <div className="pb-8 pt-8 xl:col-span-2">
            <div className="prose prose-slate max-w-none dark:prose-invert prose-code:font-mono prose-pre:p-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
