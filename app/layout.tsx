import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'proqra | Build your global team.',
  description:
    'proqra helps you recruit, hire, and manage your global capability centers and international workforce seamlessly.',
  openGraph: {
    title: 'proqra | Build your global team.',
    description: 'We recruit, hire, and manage compliance for your international workforce.',
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
      <body>{children}</body>
    </html>
  )
}
