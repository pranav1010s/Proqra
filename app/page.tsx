import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import WhatWeDo from '@/components/home/WhatWeDo'
import WhoDoesWhat from '@/components/home/WhoDoesWhat'
import WhereThisIsGoing from '@/components/home/WhereThisIsGoing'
import FinalCTASection from '@/components/home/FinalCTASection'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'PROQRA | Supplier Approvals for UK Manufacturers Buying from India',
  description:
    'If you buy parts from India, or want to, PROQRA handles supplier vetting, approval paperwork, ongoing follow-up, and organising your supplier quality data.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhoDoesWhat />
      <WhereThisIsGoing />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
