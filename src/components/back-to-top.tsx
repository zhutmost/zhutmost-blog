'use client'

import { useEffect, useState } from 'react'
import { IconArrowUp } from '@tabler/icons-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <div className={`fixed bottom-8 right-8 z-50 hidden ${show ? 'md:block' : 'md:hidden'}`}>
      <button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="rounded-full border border-border bg-accent p-2 text-accent-foreground shadow shadow-lg transition-all hover:text-accent-foreground/60"
      >
        <IconArrowUp />
      </button>
    </div>
  )
}
