import * as React from 'react'
import NextLink from 'next/link'

import { cn } from '@/lib/utils'

export default function SmartLink({
  href,
  className,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  // internal page
  if (href?.startsWith('/')) {
    return <NextLink className={cn('break-words', className)} href={href} {...rest} />
  }

  // internal anchor link
  if (href?.startsWith('#')) {
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
