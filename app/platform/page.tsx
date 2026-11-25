import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PlatformContent from '@/components/platform/PlatformContent'

export const metadata: Metadata = {
  title: 'Platform | PROQRA',
  description:
    'What PROQRA is building to take the manual work out of direct procurement, and where it stands today.',
  openGraph: {
    title: 'Platform | PROQRA',
    description:
      'What PROQRA is building to take the manual work out of direct procurement, and where it stands today.',
    type: 'website',
  },
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main>
        <PlatformContent />
      </main>
      <Footer />
    </div>
  )
}

