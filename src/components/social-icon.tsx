import { buttonVariants } from '@/components/ui/button'
import { icons } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import SmartLink from '@/components/smart-link'

interface SocialIconProps {
  name: string
  icon: string
  href: string
  size?: number
}

export default function SocialIcon({ name, icon, href, size = 6 }: SocialIconProps) {
  const IconSvg = icons[icon as keyof typeof icons] || icons.IconFileUnknown

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <SmartLink
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'text-accent-foreground/80'
            )}
            href={href}
          >
            <span className="sr-only">{name}</span>
            <IconSvg title={name} className={`h-${size} w-${size}`} />
          </SmartLink>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
