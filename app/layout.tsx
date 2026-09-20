import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next" // Imported here
import './globals.css'

export const metadata: Metadata = {
  title: 'PROQRA | Fabricated Metalwork Sourcing from India for UK Manufacturers',
  description:
    'PROQRA helps UK engineering firms source sheet metal fabrication and welded assemblies from vetted Indian suppliers, with factory verification, inspection and full documentation on every order.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
  openGraph: {
    title: 'PROQRA | Fabricated Metalwork Sourcing from India for UK Manufacturers',
    description:
      'PROQRA helps UK engineering firms source sheet metal fabrication and welded assemblies from vetted Indian suppliers, with factory verification, inspection and full documentation on every order.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights /> {/* Added this line right here! */}
      </body>
    </html>
  )
}