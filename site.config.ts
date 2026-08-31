import { type InputSiteConfig } from "@/lib/config"

import { news } from "./src/news"

const config: InputSiteConfig = {
  siteUrl: "https://zhutmost.com",
  siteTitle: "Haozhe's Blog",
  description:
    "This is Haozhe Zhu (@zhutmost)'s personal blog. I write about my research, thoughts, and life.",
  author: "Haozhe Zhu",
  locale: "en-US",
  favicon: {
    ico: "/favicon/favicon.ico",
    svg: "/favicon/favicon.svg",
    png96x96: "/favicon/favicon-96x96.png",
    apple: "/favicon/apple-touch-icon.png",
    manifest192x192: "/favicon/web-app-manifest-192x192.png",
    manifest512x512: "/favicon/web-app-manifest-512x512.png",
  },
  header: {
    logo: "/favicon/favicon.svg",
    title: "Haozhe's Blog",
    nav: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/posts" },
      { label: "News", href: "/news" },
      { label: "Publication", href: "/publication" },
      { label: "Team", href: "/people" },
      { label: "About", href: "/author/haozhe-zhu" },
    ],
  },
  home: {
    hero: {
      greeting: "Hi, I am",
      name: "Haozhe Zhu",
      actions: [
        { label: "Articles", href: "/posts", primary: true },
        { label: "About", href: "/about" },
        { label: "GitHub", href: "https://github.com/zhutmost" },
      ],
    },
    sections: [
      {
        type: "news",
        href: "/news",
        summary: "Recent publications, awards, and other updates.",
        items: news,
        limit: 5,
      },
      {
        type: "research",
        href: "/publication",
        actionLabel: "Explore research",
        summary: "Selected areas of my current research.",
        areas: [
          {
            title: "AI Accelerators",
            description:
              "Domain-specific processors and systems for large models, embodied intelligence, robotics, and 3D scene representation.",
            keywords: ["AI Accelerators", "Embodied AI", "3D Gaussian Splatting"],
          },
          {
            title: "Processing in/near Memory",
            description:
              "Memory-centric architectures that reduce data movement for efficient machine learning and scientific workloads.",
            keywords: ["Compute-in-Memory", "SRAM", "RRAM"],
          },
          {
            title: "Chiplet & 3D Integration",
            description:
              "Interconnects, active interposers, and heterogeneous integration for scalable multi-chiplet computing systems.",
            keywords: ["Chiplet", "3D Integration", "Active Interposer"],
          },
        ],
      },
      {
        type: "posts",
        summary: "My digital garden, where I share my thoughts and ideas.",
        limit: 4,
      },
    ],
  },
  footer: {
    socialIcons: [
      {
        label: "GitHub",
        icon: "IconBrandGithub",
        href: "https://github.com/zhutmost",
      },
      {
        label: "Web Analytics",
        icon: "IconChartBarPopular",
        href: "https://cloud.umami.is/share/Xhuqb7y5CtlUaz3U",
      },
      {
        label: "RSS Feed",
        icon: "IconRss",
        href: "/rss.xml",
      },
    ],
  },
  analytics: {
    umami: {
      websiteId: "d4fee704-edd5-4eee-bc79-5dd8fa412c2b",
    },
  },
  comment: {
    provider: "giscus",
    repo: "zhutmost/zhutmost-blog",
    repoId: "R_kgDONUD9-A",
    category: "Announcements",
    categoryId: "DIC_kwDONUD9-M4Ckkm1",
  },
  socialShare: {
    defaultImages: ["/banner-zhutmost-com.png"],
    twitterSite: "@zhutmost",
  },
}

export default config
