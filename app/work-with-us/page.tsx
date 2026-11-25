import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WorkWithUsContent from '@/components/work-with-us/WorkWithUsContent'

export const metadata: Metadata = {
  title: 'Work With Us | PROQRA',
  description:
    'How early partners work with PROQRA: real supplier tasks, done by hand, at a fixed price.',
  openGraph: {
    title: 'Work With Us | PROQRA',
    description:
      'How early partners work with PROQRA: real supplier tasks, done by hand, at a fixed price.',
    type: 'website',
  },
}

export default function WorkWithUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main>
        <WorkWithUsContent />
      </main>
      <Footer />
    </div>
  )
}

