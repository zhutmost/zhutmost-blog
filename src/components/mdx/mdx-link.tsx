import * as React from 'react'
import { cn } from '@/lib/utils'
import { IconExternalLink } from '@tabler/icons-react'
import SmartLink from '@/components/smart-link'

export default function MdxLink({
  href,
  className,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href && !(href.startsWith('/') || href.startsWith('#'))

  const inlineLinkStyles =
    'break-words text-primary no-underline hover:text-primary/80 hover:underline hover:underline-offset-2'

  return (
    <SmartLink
      className={cn(isExternal && 'inline-flex items-center', inlineLinkStyles, className)}
      href={href}
      {...rest}
    >
      {children}
      {isExternal && <IconExternalLink className="ml-1 inline h-[1em] w-[1em]" />}
    </SmartLink>
  )
}
