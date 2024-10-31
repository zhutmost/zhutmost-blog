'use client'

import * as React from 'react'
import Typed from 'typed.js'
import Twemojify from '@/components/twemoji'
import { HomepageGreetingsItem } from '@/components/homepage-intro'

export default function ScrolledGreetings({ greetings }: { greetings: HomepageGreetingsItem[] }) {
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.destroy()
  }, [])

  return (
    <div className="flex h-8 items-center">
      <div className="overflow-x-auto whitespace-nowrap text-nowrap">
        <ul id="bios" className="hidden">
          {greetings.map((item, index) => (
            <Twemojify key={index}>
              <li className="flex items-center">{item}</li>
            </Twemojify>
          ))}
        </ul>
        <span ref={el} />
      </div>
    </div>
  )
}
