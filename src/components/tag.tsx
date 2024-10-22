import NextLink from 'next/link'
import slugify from '@sindresorhus/slugify'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <NextLink
      href={`/tags/${slugify(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary hover:text-primary/80"
    >
      {text.split(' ').join('-')}
    </NextLink>
  )
}

export default Tag
