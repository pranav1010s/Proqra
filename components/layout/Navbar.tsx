'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { href: '/platform', label: 'Platform' },
  { href: '/work-with-us', label: 'Work With Us' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Talk to us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-4 px-5 sm:px-8 lg:px-12 transition-all duration-300 3xl:py-5 3xl:px-28 4xl:py-6 4xl:px-36">
      <nav
        aria-label="Main navigation"
        className="max-w-[1440px] mx-auto flex items-center justify-between 3xl:max-w-[1900px] 4xl:max-w-[2200px]"
      >
        <Link
          href="/"
          className="font-black text-xl tracking-tighter text-slate-900 uppercase select-none flex items-center gap-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 3xl:text-2xl 4xl:text-3xl"
        >
          PROQRA
          <span className="inline-block w-2 h-2 rounded-sm bg-blue-600 3xl:w-2.5 3xl:h-2.5" aria-hidden="true" />
        </Link>

        <div className="hidden md:flex items-center gap-7 3xl:gap-9 4xl:gap-11">
          {navLinks.map((item) => {
            const active = pathname === item.href
            const isContact = item.href === '/contact'
            return (
              <Link
                key={item.href}
                href={item.href}
                id={isContact ? 'nav-cta' : undefined}
                className={`text-sm font-semibold transition-colors duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 3xl:text-base 4xl:text-lg ${
                  active
                    ? 'text-blue-600'
                    : isContact
                    ? 'text-slate-900 hover:text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded text-slate-700 hover:text-slate-900 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          id="mobile-menu-toggle"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-slate-200 bg-white mt-4 -mx-6 px-6 shadow-lg"
          >
            <div className="py-4 flex flex-col gap-1">
              {navLinks.map((item) => {
                const active = pathname === item.href
                const isContact = item.href === '/contact'
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    id={isContact ? 'mobile-nav-cta' : undefined}
                    onClick={() => setOpen(false)}
                    className={`min-h-[44px] flex items-center text-sm font-semibold transition-colors duration-200 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                      active
                        ? 'text-blue-600'
                        : isContact
                        ? 'text-slate-900 hover:text-blue-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
