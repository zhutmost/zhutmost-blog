'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { IconSun, IconMoon, IconSunMoon } from '@tabler/icons-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import SmartLink from '@/components/smart-link'
import { cn } from '@/lib/utils'

const IconLight = () => <IconSun className="h-6 w-6" />
const IconDark = () => <IconMoon className="h-6 w-6" />
const IconBlank = () => <IconSunMoon className="h-6 w-6" />

export default function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  React.useEffect(() => setMounted(true), [])

  const toggle = () => {
    if (resolvedTheme !== 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            id="themeSwitch"
            aria-label="Theme Switch"
            onClick={toggle}
            variant="ghost"
            size="icon"
          >
            {mounted ? resolvedTheme === 'dark' ? <IconDark /> : <IconLight /> : <IconBlank />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Toggle theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
