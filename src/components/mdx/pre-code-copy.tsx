'use client'

import * as React from 'react'
import { IconCopy, IconCopyCheck } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

export default function PreCodeCopy({ children, ...rest }: React.HTMLAttributes<HTMLElement>) {
  const textInput = React.useRef<HTMLDivElement | null>(null)
  const [hovered, setHovered] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const onEnter = () => {
    setHovered(true)
  }
  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }
  const onCopy = () => {
    if (textInput.current) {
      setCopied(true)
      navigator.clipboard.writeText(textInput.current.textContent!)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      {hovered && (
        <Button
          aria-label="Copy code"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-transparent text-slate-200 hover:bg-transparent hover:text-slate-50"
          onClick={onCopy}
        >
          {copied ? <IconCopyCheck /> : <IconCopy />}
        </Button>
      )}
      <pre {...rest}>{children}</pre>
    </div>
  )
}
