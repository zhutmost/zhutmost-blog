import { SiteConfig } from '@/lib/site-config'

const userConfig: Partial<SiteConfig> = {
  siteUrl: 'https://blog.zhutmost.com',
  siteTitle: "Haozhe's Blog",
  description:
    "This is Haozhe Zhu (@zhutmost)'s personal blog. I write about my research, thoughts, and life.",
  locale: 'en-US',
  author: 'Haozhe Zhu',
  teamPage: false,
  popularTags: [
    { tag: 'markdown', icon: 'IconMarkdown', title: 'Markdown' },
    { tag: 'mac', icon: 'IconCommand', title: 'MacOS' },
    { tag: 'shopping', icon: 'IconTag', title: 'Shopping' },
    { tag: 'writing', icon: 'IconNote', title: 'Writing' },
    { tag: 'windows', icon: 'IconBrandWindows', title: 'Windows' },
  ],
  githubCalendar: 'zhutmost',
  header: {
    logo: '/favicons/favicon.svg',
    title: "Haozhe's Blog",
    themeSwitch: true,
    menu: {
      Home: '/',
      Blog: '/archive',
      Tags: '/tags',
      News: '/news',
      About: '/about',
    },
  },
  footer: {
    icons: {
      GitHub: { icon: 'IconBrandGithub', href: 'https://github.com/zhutmost' },
      RSS: { icon: 'IconRss', href: '/rss.xml' },
      Analytics: {
        icon: 'IconChartDots',
        href: 'https://cloud.umami.is/share/Xhuqb7y5CtlUaz3U/blog.zhutmost.com',
      },
    },
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: 'd4fee704-edd5-4eee-bc79-5dd8fa412c2b',
    },
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: 'zhutmost/analog-blog-starter',
      repoId: 'R_kgDONEFqpw',
      category: 'Announcements',
      categoryId: 'DIC_kwDONEFqp84CjmEV',
    },
  },
  license: 'cc-by-nc-sa',
}

export default userConfig
