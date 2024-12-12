import { notFound, redirect } from 'next/navigation'
import categoryData from '@/data/category-data.json'
import { CategoryCounter } from '@/lib/content-collections/post-counter'
import slugify from '@sindresorhus/slugify'

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams(): Promise<{ category: string }[]> {
  const categoryCounter = categoryData as CategoryCounter
  return Object.keys(categoryCounter).map((category) => {
    return {
      category: encodeURI(slugify(category)),
    }
  })
}

export default async function Page(props: { params: Promise<{ category: string }> }) {
  const params = await props.params
  const categoryCounter = categoryData as CategoryCounter
  const category = Object.keys(categoryCounter).find(
    (t) => slugify(t) === decodeURI(params.category)
  )

  if (!category) return notFound()

  redirect(`/category/${params.category}/page/1`)
}
