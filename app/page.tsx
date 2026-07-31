import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import Manifesto from '@/components/home/Manifesto'
import WhatWeDo from '@/components/home/WhatWeDo'
import ContactInfo from '@/components/home/ContactInfo'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="noise">
      <Navbar />
      <Hero />
      <Manifesto />
      <WhatWeDo />
      <ContactInfo />
      <Footer />
    </main>
  )
}
