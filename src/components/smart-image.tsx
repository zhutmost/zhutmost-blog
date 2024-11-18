import NextImage, { ImageProps } from 'next/image'
import siteConfig from '@/lib/site-config'

export default function SmartImage({ src, ...rest }: ImageProps) {
  const imgPath =
    typeof src === 'string' && !src.startsWith('http') ? `${siteConfig.siteRoot || ''}${src}` : src

  return <NextImage src={imgPath} {...rest} />
}
