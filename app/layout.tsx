import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Dancing_Script } from 'next/font/google'
import './globals.css'
import MiCasaMenu from '@/components/MiCasaMenu'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dmsans',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mi Casa Café — Brisbane',
  description: 'All-day brunch café in Southbank & Underwood, Brisbane. Fresh, gourmet food made to satisfy — pancakes, açaï bowls, waffles & more.',
  openGraph: {
    title: 'Mi Casa Café',
    description: 'Come home. All-day brunch in Brisbane.',
    siteName: 'Mi Casa Café',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${dancing.variable}`}>
      <body>
        <MiCasaMenu />
        <main>{children}</main>
      </body>
    </html>
  )
}
