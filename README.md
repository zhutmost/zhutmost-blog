# Analog: Another (Academic) Blog Starter

![Analog screenshot](img/cover.png)

**Analog** is a out-of-the-box feature-rich blog template with [Next.js](https://nextjs.org).

It is easy to customize and reconfigure to suit your needs. It is perfect for individual blogs, especially **academic or technology blogs**.

Demo sites:
- [Analog Demo](https://analog-demo.zhutmost.com)
- [zhutmost.com](https://blog.zhutmost.com) - My personal blog.

Check out the documentation below to get started.

## 🚀 Quick Start

### Prerequisites

[Node.js](https://nodejs.org/en) and [Yarn v2](https://yarnpkg.com) are required to run this project.

```shell
# MacOS
brew install node # install Node.js > 20
corepack enable # enable corepack (which includes Yarn v2)
```

### Kickstart Your Blog

```shell
git clone git@github.com:zhutmost/analog-blog-starter.git my-blog
cd my-blog
yarn dev # start the development server
```

Then, open [http://localhost:3000](http://localhost:3000) to see your own blog.

### Begin Writing

Add your blog posts in Markdown in the `content/posts` directory. Note that the file extension should be `.mdx` (rather than `.md`).

Like other example posts, you have to add some metadata to the top of the file:

```markdown
---
title: Image Demo
datePublish: 2020-01-01
summary: This is a test post for images.
category: 'Lift Style'
banner: /images/posts/image-test/banner.jpg
tags: ['life', 'tech', 'javascript']
---
# Write your content here ...
```

### Customize Your Blog

See the [Documentation](https://analog-demo.zhutmost.com/category/docs) to learn how to customize your blog.

## 🎁 Features

Analog includes plentiful search, comment, sharing and other plugins out of the box that makes your blog feature-rich and powerful.

- [**Comment System**](https://analog-demo.zhutmost.com/post/docs/comment)

  Giscus · Utterances · Disqus
- [**Search**](https://analog-demo.zhutmost.com/post/docs/search)

  KBar (support Cmd+K shortcuts, including pages & posts)
- [**Analytics**](https://analog-demo.zhutmost.com/post/docs/analytics)

  Umami · Posthog · Google Analytics · Plausible · Simple Analytics
- **Style-rich Writing**

  MDX (Markdown + JSX) · Katex (math support) · Prism.js (code highlighting) · License
- **Other**

  Dark mode · Responsive Design · RSS · Sitemap · SEO (OpenGraph + Twitter Card)

### Dark & Light Mode

Make your blog more comfortable to read with the dark/light mode switching.

![Dark & Light Modes](img/dark-mode.png)

### Responsive Design

Give your audiences best viewing experience with the mobile-friendly responsive layout.

![Responsive Design](img/responsive-design.png)

### TODO List

- [ ] Code highlighting optimization
- [ ] GitHub contribution wall on Author Page

## 🎉 Issues & Feature Requests

If you find any bugs in my code or have any ideas to improve this, please feel free to open an [issue](https://github.com/zhutmost/analog-blog-starter). I will be glad to join the discussion.

## 💡 Inspiration

This project is on the shoulder of giants. I would like to thank the following projects for their inspiration:

- [Tailwind Nextjs Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)
- [Hexo Icarus](https://github.com/ppoffice/hexo-theme-icarus)

See [Tech Stack](https://analog-demo.zhutmost.com/posts/docs/tech-stack) for more details.
