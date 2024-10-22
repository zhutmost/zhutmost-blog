import { SiteConfig } from '@/lib/site-config'

const userConfig: Partial<SiteConfig> = {
  siteUrl: 'https://analog-demo.zhutmost.com',
  siteTitle: 'Analog Demo',
  description: 'Analog: Another Blog Template with Next.js',
  locale: 'en-US',
  author: 'John Doe',
  popularTags: [
    { tag: 'markdown', icon: 'IconMarkdown', title: 'Markdown' },
    { tag: 'mac', icon: 'IconCommand', title: 'MacOS' },
    { tag: 'shopping', icon: 'IconTag', title: 'Shopping' },
    { tag: 'writing', icon: 'IconNote', title: 'Writing' },
    { tag: 'windows', icon: 'IconBrandWindows', title: 'Windows' },
  ],
  header: {
    logo: '/favicons/favicon.svg',
    title: 'Analog Demo',
    themeSwitch: true,
    menu: {
      Home: '/',
      Blog: '/archive',
      Tags: '/tags',
      About: '/about',
    },
  },
  footer: {
    // beian: '粤ICP备2021******号',
    icons: {
      Facebook: { icon: 'IconBrandFacebook', href: 'https://facebook.com' },
      X: { icon: 'IconBrandX', href: 'https://x.com' },
    },
  },
  favicon: {
    appleTouchIcon: '/favicons/apple-touch-icon.png',
    icon16x16: '/favicons/favicon-16x16.png',
    icon32x32: '/favicons/favicon-32x32.png',
    iconSvg: '/favicons/favicon.svg',
    webManifest: '/favicons/site.webmanifest',
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: '/search-kbar.json',
    },
  },
  comment: {
    provider: null,
  },
  analytics: {},
}

export default userConfig
