'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-4 px-6 md:px-16 lg:px-24 transition-all duration-300">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Typographic logo - PROQRA in all-caps, tracking-tighter */}
        <Link href="/" className="font-black text-xl tracking-tighter text-slate-900 uppercase select-none flex items-center gap-2">
          PROQRA
          <span className="inline-block w-2 h-2 rounded-full bg-blue-600"></span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/how-we-source"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
          >
            How We Source
          </Link>
          <Link
            href="/quality"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
          >
            Quality
          </Link>
          <Link
            href="/capabilities"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
          >
            Capabilities
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/get-started"
            id="nav-cta"
            className="text-sm font-semibold bg-blue-600 text-white rounded-lg px-5 py-2.5 hover:bg-blue-700 transition-all duration-300 shadow-sm shadow-blue-500/20"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 text-slate-700 hover:text-slate-900 transition-colors duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          id="mobile-menu-toggle"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg mt-4 -mx-6 px-6 shadow-lg"
          >
            <div className="py-6 flex flex-col gap-4">
              <Link
                href="/how-we-source"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                How We Source
              </Link>
              <Link
                href="/quality"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Quality
              </Link>
              <Link
                href="/capabilities"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Capabilities
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/get-started"
                id="mobile-nav-cta"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold bg-blue-600 text-white rounded-lg px-5 py-3 text-center mt-2 hover:bg-blue-700 transition-all duration-300 shadow-sm shadow-blue-500/20"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

