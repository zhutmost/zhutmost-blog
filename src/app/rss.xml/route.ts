import generateRssFeed from '@/lib/rss'

// eslint-disable-next-line @typescript-eslint/require-await
export async function GET() {
  const feed = generateRssFeed()
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
