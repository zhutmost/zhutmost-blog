import { withContentCollections } from '@content-collections/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
}

const plugins = [withContentCollections]

export default plugins.reduce((acc, next) => next(acc), nextConfig)
