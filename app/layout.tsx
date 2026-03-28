import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import MiCasaMenu from '@/components/MiCasaMenu'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mi Casa Café — Brisbane',
  description: 'All-day brunch café in Southbank & Underwood, Brisbane. Gourmet food, specialty coffee, 100% Halal.',
  openGraph: {
    title: 'Mi Casa Café',
    description: 'Come home. All-day brunch in Brisbane.',
    siteName: 'Mi Casa Café',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <MiCasaMenu />
        <main>{children}</main>
      </body>
    </html>
  )
}
