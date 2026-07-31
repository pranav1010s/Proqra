import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import CapabilitiesHero from '@/components/capabilities/CapabilitiesHero'
import TechMarquee from '@/components/capabilities/TechMarquee'
import CapabilityPillars from '@/components/capabilities/CapabilityPillars'
import GlobalDelivery from '@/components/capabilities/GlobalDelivery'
import CapabilitiesCTA from '@/components/capabilities/CapabilitiesCTA'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Capabilities | PROQRA',
  description:
    'Explore PROQRA’s technical capabilities, ERP data management, daily order execution, and global delivery model.',
}

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CapabilitiesHero />
      <TechMarquee />
      <CapabilityPillars />
      <GlobalDelivery />
      <CapabilitiesCTA />
      <Footer />
    </main>
  )
}
