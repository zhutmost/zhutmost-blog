import slugify from '@sindresorhus/slugify'
import { notFound, redirect } from 'next/navigation'

import tagData from '@/data/tag-data.json'
import { TagCounter } from '@/lib/content-collections/post-counter'

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams(): Promise<{ tag: string }[]> {
  const tagCounter = tagData as TagCounter
  const tags = Object.keys(tagCounter)
  return tags.map((tag) => {
    return {
      tag: encodeURI(slugify(tag)),
    }
  })
}

export default async function Page(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  const tagCounter = tagData as TagCounter
  const tag = Object.keys(tagCounter).find((t) => slugify(t) === decodeURI(params.tag))

  if (!tag) return notFound()

  redirect(`/tags/${params.tag}/page/1`)
}
