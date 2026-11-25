import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import WhatWeDo from '@/components/home/WhatWeDo'
import WhoDoesWhat from '@/components/home/WhoDoesWhat'
import WhereThisIsGoing from '@/components/home/WhereThisIsGoing'
import FinalCTASection from '@/components/home/FinalCTASection'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'PROQRA | Taking the manual work out of direct procurement',
  description:
    'PROQRA is building a platform to automate the documents, supplier chasing and data work in direct procurement. We work with early partners on real supplier tasks, starting with sourcing from India.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <WhoDoesWhat />
        <WhereThisIsGoing />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
