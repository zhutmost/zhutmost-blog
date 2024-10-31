import * as React from 'react'
import { cn } from '@/lib/utils'
import Twemojify from '@/components/twemoji'

function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        'mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10',
        className
      )}
      {...props}
    >
      <Twemojify>{children}</Twemojify>
    </section>
  )
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]',
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-lg font-light leading-7 text-muted-foreground', className)} {...props} />
  )
}

export { PageHeader, PageHeaderDescription, PageHeaderHeading }
