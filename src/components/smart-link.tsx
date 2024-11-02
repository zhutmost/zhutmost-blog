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

  if (isInternalPage) {
    return <NextLink className={cn('break-words', className)} href={href} {...rest} />
  }

  if (isInternalAnchor) {
    return <a className={cn('break-words', className)} href={href} {...rest} />
  }

  return (
    <a
      className={cn('break-words', className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  )
}
