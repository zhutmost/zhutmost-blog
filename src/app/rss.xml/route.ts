import generateRssFeed from '@/lib/rss'

export async function GET() {
  const feed = generateRssFeed()
  console.log(feed.rss2())
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
