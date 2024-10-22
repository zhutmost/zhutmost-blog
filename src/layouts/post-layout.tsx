import * as React from 'react'
import type { Author, Post } from '@/content-collections'
import BackToTop from '@/components/back-to-top'
import NextImage from 'next/image'
import siteConfig from '@/lib/site-config'
import NextLink from 'next/link'
import Tag from '@/components/tag'

export interface PostLayoutProps {
  children: React.ReactNode
  content: Post
  authors: Author[]
  postNext?: Post
  postPrev?: Post
}

export default function PostLayout({
  content,
  authors,
  postNext,
  postPrev,
  children,
}: PostLayoutProps) {
  const { title, datePublish, tags, slugPath, banner, toc } = content
  return (
    <>
      <BackToTop />
      <article>
        <div className="xl:divide-y xl:divide-border">
          <header className="pt-6 xl:pb-6">
            {banner && (
              <div className="w-full pb-10">
                {/*<Bleed>*/}
                <div className="relative aspect-[5/2] w-full">
                  <NextImage src={banner} alt={title} fill className="object-cover" />
                </div>
                {/*</Bleed>*/}
              </div>
            )}
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-muted-foreground">
                    <time dateTime={datePublish.toDateString()}>
                      {new Date(datePublish).toLocaleDateString(siteConfig.locale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </dd>
                </div>
              </dl>
              <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-5xl">
                {title}
              </h1>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-border pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-border xl:pt-11">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authors.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <NextLink href={`/about/${author.slugPath}`}>
                          <NextImage
                            src={author.avatar}
                            width={38}
                            height={38}
                            alt="avatar"
                            className="h-10 w-10 rounded-full"
                          />
                        </NextLink>
                      )}
                      <dl className="whitespace-nowrap indent-3 text-sm font-medium leading-5">
                        <NextLink href={`/about/${author.slugPath}`}>
                          <dt className="sr-only">Name</dt>
                          <dd className="text-foreground">{author.name}</dd>
                        </NextLink>
                        {author.bio && (
                          <div>
                            <dt className="sr-only">Bio</dt>
                            <dd className="text-sm text-muted-foreground">{author.bio}</dd>
                          </div>
                        )}
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-border text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y">
              {tags && (
                <div className="py-4 xl:py-8">
                  <h2 className="text-xs uppercase tracking-wide text-muted-foreground">Tags</h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
              {(postNext || postPrev) && (
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                  {postPrev && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-muted-foreground">
                        Previous Article
                      </h2>
                      <div className="text-primary hover:text-primary/80">
                        <NextLink href={`/post/${postPrev.slugPath}`}>{postPrev.title}</NextLink>
                      </div>
                    </div>
                  )}
                  {postNext && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-muted-foreground">
                        Next Article
                      </h2>
                      <div className="text-primary hover:text-primary/80">
                        <NextLink href={`/post/${postNext.slugPath}`}>{postNext.title}</NextLink>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            {/*<div className="divide-border text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y">*/}
            {/*  {toc && (*/}
            {/*    <div className="hidden xl:block">*/}
            {/*      <h2 className="text-xs uppercase tracking-wide text-muted-foreground">*/}
            {/*        Table of Contents*/}
            {/*      </h2>*/}
            {/*    </div>*/}
            {/*  )}*/}
            {/*</div>*/}
            <div className="divide-y divide-border xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              <div className="pb-6 pt-6 text-sm text-muted-foreground">
                {`License © `}
                <a
                  href={`https://creativecommons.org/licenses/by-nc-sa/4.0`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC BY-NC-SA 4.0
                </a>
              </div>
              {/*{siteConfig.comment.provider && (*/}
              {/*  <div className="pb-6 pt-6 text-center text-foreground" id="comment">*/}
              {/*    /!*<Comments slug={slugPath} />*!/*/}
              {/*  </div>*/}
              {/*)}*/}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
