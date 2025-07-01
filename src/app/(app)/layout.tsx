import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import './styles/globals.scss'
import BodyClassProvider from './providers/BodyClassProvider'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Alain Moratalla',
  description: "Let's turn brilliant ideas to income generation solutions",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <BodyClassProvider>{children}</BodyClassProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-7YB1VLV848" />
    </html>
  )
}
