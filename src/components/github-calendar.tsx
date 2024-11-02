'use client'

import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'

export default function GithubCalendar({ username }: { username: string }) {
  const { resolvedTheme } = useTheme()

  const colorScheme = resolvedTheme !== 'dark' ? 'light' : 'dark'

  return (
    <div className="flex w-full items-center justify-center overflow-auto">
      <GitHubCalendar colorScheme={colorScheme} username={username} showWeekdayLabels={true} />
    </div>
  )
}
