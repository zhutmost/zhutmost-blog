import * as React from 'react'

import HomepageIntro from '@/components/homepage/homepage-intro'
import { homepageSectionMap } from '@/components/homepage/homepage-section'
import siteConfig from '@/lib/site-config'

export default function HomePage() {
  return (
    <div>
      <div className="px-4 pb-2 pt-8 md:pt-12 lg:pt-12">
        <HomepageIntro />
      </div>

      {siteConfig.homepage.sections.map((s: keyof typeof homepageSectionMap) => {
        const Section = homepageSectionMap[s]
        return <Section key={s} />
      })}
    </div>
  )
}
