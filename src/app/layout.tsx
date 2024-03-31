import './globals.css'

import type { Metadata } from 'next'
import { Public_Sans as PublicSans } from 'next/font/google'

const publicSans = PublicSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: {
    template: '%s - Sneat',
    default: 'sneat',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${publicSans.className} dark`}>
      <body>{children}</body>
    </html>
  )
}
