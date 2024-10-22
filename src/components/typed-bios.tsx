'use client'

import * as React from 'react'
import Typed from 'typed.js'

// import Twemoji from '@/components/Twemoji'

export default function TypedBios() {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I am aliased as <b className="font-medium">Karhdo</b> at work.
        </li>
        <li>
          I live in <b className="font-medium">Ho Chi Minh, Viet Nam</b>.
        </li>
        <li>
          I was born in the beautiful <b className="font-medium">Quang Ngai</b> city.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C++</b>.
        </li>
        <li>I love web development.</li>
        <li>
          I am focusing on building <b className="font-medium">Social Analytics Software</b>.
        </li>
        <li>
          I work mostly with <b className="font-medium">Javascript/Typescript</b> technologies.
        </li>
        <li>I am a dog-person.</li>
        <li>I am a sporty-guy. I love tennis and soccer.</li>
        <li>I love listening piano and rap music.</li>
        <li>I love playing video game, LoL is my favorite one.</li>
      </ul>
      <span ref={el} />
    </div>
  )
}
