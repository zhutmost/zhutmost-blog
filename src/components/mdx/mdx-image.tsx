import * as React from 'react'
import { cn } from '@/lib/utils'
import NextImage from 'next/image'

export default function MdxImage({
  src,
  alt,
  title,
  className,
  width,
  height,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!src) return null
  const imgPath = src.startsWith('http') ? src : `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`
  const imgTitle = title || alt || ''
  return (
    <figure className="relative mx-auto h-auto max-w-3xl">
      <NextImage
        className={cn('mx-auto h-auto max-w-full rounded-lg object-fill', className)}
        src={imgPath as string}
        alt={alt || 'image'}
        width={parseInt(width! as string)}
        height={parseInt(height! as string)}
        placeholder={'empty'}
        {...rest}
      />
      {imgTitle && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {imgTitle}
        </figcaption>
      )}
    </figure>
  )
}
