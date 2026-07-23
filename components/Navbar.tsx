'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10 py-4 px-6 md:px-12 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Typographic logo - PROQRA in all-caps, tracking-tighter */}
        <Link href="/" className="font-black text-xl tracking-tighter text-white uppercase select-none">
          PROQRA
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <Link
            href="/get-started"
            id="nav-cta"
            className="text-sm font-bold uppercase tracking-wide bg-blue-600 text-white rounded-none px-6 py-3 hover:bg-blue-500 transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-white transition-colors duration-300"
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
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-lg mt-4 -mx-6 px-6"
          >
            <div className="py-6 flex flex-col gap-5">
              {['Services', 'Contact'].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
              <Link
                href="/get-started"
                id="mobile-nav-cta"
                onClick={() => setOpen(false)}
                className="text-sm font-bold uppercase tracking-wide bg-blue-600 text-white rounded-none px-6 py-3.5 text-center mt-2 hover:bg-blue-500 transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
