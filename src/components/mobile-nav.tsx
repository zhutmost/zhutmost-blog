'use client'

import * as React from 'react'
import { IconChevronsUp, IconMenu2 } from '@tabler/icons-react'
import NextLink, { LinkProps } from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

import siteConfig from '@/lib/site-config'
import NextImage from 'next/image'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <IconMenu2 className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'top'}>
        <SheetHeader>
          <MobileLink href="/" onOpenChange={setOpen}>
            <div className="flex items-center justify-center gap-4">
              {siteConfig.header.logo && (
                <NextImage
                  src={siteConfig.header.logo}
                  alt={siteConfig.siteTitle}
                  width={30}
                  height={30}
                />
              )}
              {siteConfig.header.title && (
                <div className="text-lg font-semibold">{siteConfig.header.title}</div>
              )}
            </div>
          </MobileLink>
        </SheetHeader>
        <div className="flex flex-col gap-2 py-4">
          {Object.entries(siteConfig.header.menu).map(([name, href]) => (
            <MobileLink
              key={name}
              href={href}
              onOpenChange={setOpen}
              className={buttonVariants({ variant: 'ghost', size: 'lg' })}
            >
              {name}
            </MobileLink>
          ))}
        </div>
        <SheetFooter>
          <SheetClose>
            <span className="sr-only">Close</span>
            <Button variant="ghost" size="icon">
              <IconChevronsUp className="h-6 w-6" />
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const router = useRouter()
  return (
    <NextLink
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}
