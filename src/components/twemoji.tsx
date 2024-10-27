'use client'

import * as React from 'react'
import Twemoji, { TwemojiProps } from 'react-twemoji'
import { parse } from '@twemoji/parser'

function StringTwemojify({
  text,
  className,
}: {
  text: string
  className: string
}): React.ReactNode[] {
  const emojiEntities = parse(text)
  let currentIndex = 0
  const result = emojiEntities.flatMap((entity) => {
    const textBeforeEmoji = text.slice(currentIndex, entity.indices[0])
    currentIndex = entity.indices[1]
    const svgEmoji = <img src={entity.url} alt={entity.text} className={className} />
    return textBeforeEmoji ? [textBeforeEmoji, svgEmoji] : [svgEmoji]
  })

  if (currentIndex < text.length) {
    result.push(text.slice(currentIndex))
  }

  return result
}

export interface TwemojifyProps {
  children: React.ReactNode
  size?: 'default' | 'lg' | '2x' | '3x' | '4x' | '5x'
}

export default function Twemojify({ children, size = 'default' }: TwemojifyProps) {
  const className = `inline-block twemoji-${size}`
  if (typeof children === 'string') {
    return <StringTwemojify text={children} className={className} />
  } else {
    const mergedOptions = {
      folder: 'svg',
      ext: '.svg',
      className: className,
    }
    return (
      <Twemoji noWrapper={true} options={mergedOptions}>
        {children as TwemojiProps['children']}
      </Twemoji>
    )
  }
}
