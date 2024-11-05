import tagData from '@/data/tag-data.json'
import { TagCounter } from '@/lib/content-collections/post-counter'
import slugify from '@sindresorhus/slugify'
import { notFound, redirect } from 'next/navigation'

export async function generateStaticParams(): Promise<{ tag: string }[]> {
  const tagCounter = tagData as TagCounter
  const tags = Object.keys(tagCounter)
  return tags.map((tag) => {
    return {
      tag: encodeURI(slugify(tag)),
    }
  })
}

export default function Page({ params }: { params: { tag: string } }) {
  const tagCounter = tagData as TagCounter
  const tag = Object.keys(tagCounter).find((t) => slugify(t) === decodeURI(params.tag))

  if (!tag) return notFound()

  redirect(`/tags/${params.tag}/page/1`)
}
