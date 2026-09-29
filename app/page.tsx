import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import QuickOverview from '@/components/home/QuickOverview'
import InteractiveProcessSection from '@/components/home/InteractiveProcessSection'
import ClustersPreview from '@/components/home/ClustersPreview'
import FinalCTASection from '@/components/home/FinalCTASection'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <Hero />
      <QuickOverview />
      <InteractiveProcessSection />
      <ClustersPreview />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
