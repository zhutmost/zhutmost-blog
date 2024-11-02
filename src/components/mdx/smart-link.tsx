import * as React from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'
import { IconExternalLink } from '@tabler/icons-react'

export default function SmartLink({
  href,
  className,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternalPage = href && href.startsWith('/')
  const isInternalAnchor = href && href.startsWith('#')

  const inlineLinkStyles =
    'break-words text-primary no-underline hover:text-primary/80 hover:underline hover:underline-offset-2'

  if (isInternalPage) {
    return (
      <NextLink className={cn(inlineLinkStyles, className)} href={href} {...rest}>
        {children}
      </NextLink>
    )
  }

  if (isInternalAnchor) {
    return (
      <a className={cn(inlineLinkStyles, className)} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a
      className={cn('inline-flex items-center', inlineLinkStyles, className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {children}
      <IconExternalLink className="ml-1 inline h-[1em] w-[1em]" />
    </a>
  )
}
