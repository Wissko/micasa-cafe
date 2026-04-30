import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import MiCasaMenu from '@/components/MiCasaMenu'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-dmsans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mi Casa Café | Italian Soul, Australian Brunch',
  description: 'A premium Brisbane café with Italian warmth, bold brunch plates, specialty coffee, and a refined all-day house feeling.',
  openGraph: {
    title: 'Mi Casa Café | Italian Soul, Australian Brunch',
    description: 'Brutal brunch, fine produce, and a luxurious all-day house feeling in Brisbane.',
    siteName: 'Mi Casa Café',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <MiCasaMenu />
        <main>{children}</main>
      </body>
    </html>
  )
}
