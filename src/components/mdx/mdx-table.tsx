import * as React from 'react'

import { cn } from '@/lib/utils'

export default function MdxTable({ className, ...rest }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="my-6 w-full overflow-y-auto rounded-lg">
      <table className={cn('w-full overflow-hidden rounded-lg', className)} {...rest} />
    </div>
  )
}
