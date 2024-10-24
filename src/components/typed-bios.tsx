'use client'

import * as React from 'react'
import Typed from 'typed.js'
import typedBios from '@/data/typed-bios'

export default function TypedBios() {
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
    <div className="hidden lg:block">
      <ul id="bios" className="hidden">
        {typedBios.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
      <span ref={el} />
    </div>
  )
}
