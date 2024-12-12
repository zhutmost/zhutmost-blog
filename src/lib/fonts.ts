import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { JetBrains_Mono, Noto_Sans_SC, Space_Grotesk } from 'next/font/google'

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const fontNotoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
})

const fontJetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

const customFontFamily = {
  sans: [fontNotoSansSC, fontSpaceGrotesk],
  mono: [fontJetBrainsMono],
  serif: [] as NextFontWithVariable[],
}

export default customFontFamily
