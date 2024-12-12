import NextLink from 'next/link'

import SocialIcon from '@/components/social-icon'
import siteConfig from '@/lib/site-config'

function SiteFooter() {
  const thisYear = new Date().getFullYear()

  return (
    <footer className="flex h-auto w-full items-center justify-center bg-background px-6 xl:px-0">
      <div className="relative flex w-full max-w-5xl flex-col flex-nowrap items-center justify-between gap-3 py-5 md:flex-row">
        <div className="text-center text-sm text-muted-foreground md:mb-0 md:text-left">
          <p>
            Copyright &copy; {thisYear}{' '}
            <NextLink href="/about" className="underline-offset-2 hover:underline">
              {siteConfig.author}
            </NextLink>
          </p>
          <p>
            {`Powered by `}
            <a
              href="https://nextjs.org"
              className="underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'NextJS'}
            </a>
            {` & `}
            <a
              href="https://github.com/zhutmost/analog-blog-starter"
              className="underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Analog-Blog-Theme'}
            </a>
          </p>
          <p>
            {siteConfig.footer.beian && (
              <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
                {siteConfig.footer.beian}
              </a>
            )}
          </p>
        </div>
        <div className="order-first flex items-center gap-1 md:order-last">
          {siteConfig.footer.icons &&
            Object.entries(siteConfig.footer.icons).map(([key, item]) => (
              <SocialIcon key={key} name={key} icon={item.icon} href={item.href} />
            ))}
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
