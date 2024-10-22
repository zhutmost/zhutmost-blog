import * as React from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'

export default function SmartLink({
  href,
  className,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternalPage = href && href.startsWith('/')
  const isInternalAnchor = href && href.startsWith('#')

  const inlineLinkStyles =
    'break-words text-primary no-underline hover:text-primary/80 hover:underline hover:underline-offset-2'

  if (isInternalPage) {
    return <NextLink className={cn(inlineLinkStyles, className)} href={href} {...rest} />
  }

  if (isInternalAnchor) {
    return <a className={cn(inlineLinkStyles, className)} href={href} {...rest} />
  }

  return (
    <a
      className={cn(inlineLinkStyles, className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  )
}
