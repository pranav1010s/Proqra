import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HowWeWorkContent from '@/components/how-we-work/HowWeWorkContent'

export const metadata: Metadata = {
  title: 'How We Work | PROQRA',
  description:
    'How PROQRA helps UK manufacturers find, check and approve suppliers in India, from the first drawing to the approval pack.',
  openGraph: {
    title: 'How We Work | PROQRA',
    description:
      'How PROQRA helps UK manufacturers find, check and approve suppliers in India, from the first drawing to the approval pack.',
    type: 'website',
  },
}

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <HowWeWorkContent />
      <Footer />
    </main>
  )
}
