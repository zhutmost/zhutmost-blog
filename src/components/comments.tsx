import * as React from 'react'
import { CommentsConfig, Comments as PlinyComments } from 'pliny/comments/index.js'

import GiscusComments from '@/components/comment/giscus-comments'
import siteConfig from '@/lib/site-config'

export default function Comments({ slug }: { slug: string }) {
  if (siteConfig.comment.provider === 'giscus') {
    return <GiscusComments {...siteConfig.comment.giscusConfig!} />
  } else {
    return <PlinyComments commentsConfig={siteConfig.comment as CommentsConfig} slug={slug} />
  }
}
