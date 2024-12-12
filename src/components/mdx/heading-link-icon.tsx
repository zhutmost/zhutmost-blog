import * as React from 'react'
import { IconLink } from '@tabler/icons-react'

import { cn } from '@/lib/utils'

interface HeadingLinkIconProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export default function HeadingLinkIcon({
  level,
  id,
  children,
  className,
  ...rest
}: HeadingLinkIconProps) {
  const Heading = `h${level.toString()}` as keyof React.JSX.IntrinsicElements
  if (id) {
    return React.createElement(
      Heading,
      { ...rest, id, className: cn('group relative', className) },
      <>
        {children}
        {id && (
          <a
            className="hidden px-2 align-middle text-primary no-underline hover:block hover:text-primary/80 group-hover:inline-block"
            href={'#' + id}
            tabIndex={-1}
            aria-hidden="true"
          >
            <IconLink />
          </a>
        )}
      </>
    )
  }
}
