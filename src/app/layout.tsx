import './globals.css'

import type { Metadata } from 'next'
// import { Public_Sans as PublicSans } from 'next/font/google'

// const publicSans = PublicSans({
//   subsets: ['latin'],
//   variable: '--font-publicSans',
//   weight: ['400', '300', '500', '600', '700', '800', '900'],
// })

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
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
