import NextImage, { ImageProps } from 'next/image'

export default function SmartImage({ src, ...rest }: ImageProps) {
  const imgPath =
    typeof src === 'string' && !src.startsWith('http')
      ? `${process.env.BASE_PATH || ''}${src}`
      : src

  return <NextImage src={imgPath} {...rest} />
}
