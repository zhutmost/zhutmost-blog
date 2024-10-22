import { PageHeader, PageHeaderDescription } from '@/components/page-header'
import siteConfig from '@/lib/site-config'
import PostCard from '@/components/post-card'
import allPostsSorted from '@/lib/post-sort'
import PopularTags from '@/components/popular-tags'
import Timeline from '@/components/timeline'
import timelineNews from '@/data/timeline-news'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import HomepageIntro from '@/components/homepage-intro'

export default function HomePage() {
  const posts = allPostsSorted.slice(0, siteConfig.postPerPage)
  const recentNews = timelineNews.slice(0, 5)

  return (
    <div>
      <div className="px-4 pb-2 pt-8 md:pt-12 lg:pt-12">
        <h1 className="mb-8 text-5xl font-extrabold leading-[60px] tracking-tight text-foreground/70 lg:text-6xl lg:leading-[86px]">
          Hi, folks! I&apos;m{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-bold text-transparent">
            {siteConfig.author}
          </span>
          .
        </h1>
        <HomepageIntro />
      </div>

      {recentNews.length > 0 && (
        <div>
          <PageHeader>
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
              Latest News
            </h2>
            <PageHeaderDescription>
              Stay up-to-date with my latest accomplishments and endeavors.
            </PageHeaderDescription>
          </PageHeader>
          <Timeline timelineNews={recentNews} findMore />
        </div>
      )}

      <div>
        <PageHeader>
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Popular Tags
          </h2>
          <PageHeaderDescription>
            Popular tags feature the most widely favored topics.
          </PageHeaderDescription>
        </PageHeader>
        <PopularTags />
      </div>

      <div>
        <PageHeader>
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Recent Posts
          </h2>
          <PageHeaderDescription>
            My desire to share my acquired knowledge fuels my endeavors.
          </PageHeaderDescription>
        </PageHeader>
        <div>
          <ul>
            {!posts.length && 'No posts found.'}
            {posts.map((post) => (
              <li key={post.slugPath} className="py-4">
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
