import { buttonVariants } from '@/components/ui/button'
import { icons } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

interface SocialIconProps {
  name: string
  icon: string
  href: string
  size?: number
}

export default function SocialIcon({ name, icon, href, size = 6 }: SocialIconProps) {
  const IconSvg = icons[icon as keyof typeof icons] || icons.IconFileUnknown

  return (
    <a
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'text-accent-foreground/80'
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{name}</span>
      <IconSvg title={name} className={`h-${size} w-${size}`} />
    </a>
  )
}
