import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PROQRA | Flawless Procurement Data Managed For You',
  description:
    'PROQRA helps mid-market companies automate and maintain clean ERP procurement data, PO follow-ups, and live MI reporting.',
  openGraph: {
    title: 'PROQRA | Flawless Procurement Data Managed For You',
    description: 'We manage repetitive supply chain tasks and ERP data hygiene for your team.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

