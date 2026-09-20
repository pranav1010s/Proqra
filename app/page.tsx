import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import ProblemSection from '@/components/home/ProblemSection'
import WhatWeDo from '@/components/home/WhatWeDo'
import WhyIndia from '@/components/home/WhyIndia'
import HowItWorks from '@/components/home/HowItWorks'
import ClosingCTA from '@/components/home/ClosingCTA'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <WhatWeDo />
      <WhyIndia />
      <HowItWorks />
      <ClosingCTA />
      <Footer />
    </main>
  )
}
