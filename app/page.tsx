import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import WhatWeDo from '@/components/WhatWeDo'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'

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
