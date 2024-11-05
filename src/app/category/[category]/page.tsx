import { notFound, redirect } from 'next/navigation'
import categoryData from '@/data/category-data.json'
import { CategoryCounter } from '@/lib/content-collections/post-counter'
import slugify from '@sindresorhus/slugify'

export async function generateStaticParams(): Promise<{ category: string }[]> {
  const categoryCounter = categoryData as CategoryCounter
  return Object.keys(categoryCounter).map((category) => {
    return {
      category: encodeURI(slugify(category)),
    }
  })
}

export default function Page({ params }: { params: { category: string } }) {
  const categoryCounter = categoryData as CategoryCounter
  const category = Object.keys(categoryCounter).find(
    (t) => slugify(t) === decodeURI(params.category)
  )

  if (!category) return notFound()

  redirect(`/category/${params.category}/page/1`)
}
