import { notFound, redirect } from 'next/navigation'
import categoryData from '@/data/category-data.json'
import { CategoryCounter } from '@/lib/content-collections/post-counter'
import slugify from '@sindresorhus/slugify'

export const generateStaticParams = async () => {
  const categoryCounter = categoryData as CategoryCounter
  return Object.keys(categoryCounter).map((t) => {
    encodeURI(slugify(t))
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
