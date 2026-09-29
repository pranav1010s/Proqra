'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight, Check } from 'lucide-react'

const clusters = [
  {
    name: 'Pune',
    region: 'Maharashtra',
    tagline: 'Automotive & Heavy Precision Engineering',
    capabilities: ['Multi-axis CNC Turning & Milling', 'High-volume fabrication', 'Automotive-grade stamping'],
    description:
      'Home to India’s most developed engineering supply base, with advanced tooling, Japanese/German CNC centers, and established global automotive export standards.'
  },
  {
    name: 'Rajkot',
    region: 'Gujarat',
    tagline: 'Forging, Casting & Heavy Machining',
    capabilities: ['Investment & Sand Castings', 'Precision closed-die forgings', 'Heavy turned components'],
    description:
      'The premier hub for ferrous and non-ferrous metal casting, precision foundry operations, and high-strength forged machine parts.'
  },
  {
    name: 'Coimbatore',
    region: 'Tamil Nadu',
    tagline: 'Precision Tooling, Motors & Pumps',
    capabilities: ['Precision sub-assemblies', 'Micro-machining and tooling', 'Valve and pump fabrication'],
    description:
      'Known for its rigorous technical education, high-precision toolrooms, and disciplined engineering culture tailored for European export.'
  },
  {
    name: 'Chennai',
    region: 'Tamil Nadu',
    tagline: 'Sheet Metal, Presswork & Electronics Enclosures',
    capabilities: ['Laser cutting and CNC folding', 'Precision metal presswork', 'Certified TIG/MIG welding'],
    description:
      'Major coastal manufacturing hub with direct port infrastructure, specialized in complex fabricated enclosures, assemblies, and surface treatments.'
  }
]

export default function ClustersPreview() {
  const [selectedCluster, setSelectedCluster] = useState(0)
  const active = clusters[selectedCluster]

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 3xl:max-w-[1900px] 3xl:px-28 4xl:max-w-[2200px] 4xl:px-36">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              India’s premier engineering clusters.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We focus our on-the-ground presence in established manufacturing ecosystems where suppliers have the right machinery, skilled operators, and direct material access.
            </p>
          </div>

          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group transition-colors"
          >
            <span>View all manufacturing capabilities</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Interactive Cluster Selector & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Cluster List (Tabs with hover physics) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {clusters.map((cluster, idx) => {
              const isSelected = idx === selectedCluster
              return (
                <button
                  key={cluster.name}
                  onClick={() => setSelectedCluster(idx)}
                  onMouseEnter={() => setSelectedCluster(idx)}
                  className={`p-5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-slate-50 border-slate-200/90 text-slate-800 hover:bg-slate-100/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200/70 text-slate-600'
                    }`}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className={`text-base font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {cluster.name}
                      </p>
                      <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {cluster.region}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold ${isSelected ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-600'}`}>
                    {cluster.tagline.split('&')[0].trim()}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Cluster Showcase Panel */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl p-7 sm:p-10 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-baseline justify-between border-b border-slate-200/80 pb-4 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {active.name} Hub
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-1">
                      {active.region}, India
                    </p>
                  </div>
                  <span className="text-xs font-mono text-blue-600 font-semibold">
                    CLUSTER PROFILE
                  </span>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                  {active.tagline}
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  {active.description}
                </p>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                    Core Specialisms:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {active.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white border border-slate-200/80 rounded-lg p-3">
                        <Check size={14} className="text-blue-600 shrink-0" />
                        <span className="font-medium">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>On-the-ground resident engineering presence</span>
              <Link href="/capabilities" className="text-blue-600 font-bold hover:underline">
                Explore cluster specs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
