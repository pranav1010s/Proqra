'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techItems = [
  { name: 'SAP S/4HANA & ECC', src: '/logos/sap.svg', width: 90, height: 40 },
  { name: 'Oracle', src: '/logos/oracle.svg', width: 75, height: 40 },
  { name: 'Power BI', src: '/logos/powerbi.svg', width: 40, height: 40 },
  { name: 'Tableau', src: '/logos/tableau.svg', width: 40, height: 40 },
  { name: 'Snowflake', src: '/logos/snowflake.svg', width: 40, height: 40 },
  { name: 'PostgreSQL', src: '/logos/postgresql.svg', width: 40, height: 40 },
  { name: 'MongoDB', src: '/logos/mongodb.svg', width: 40, height: 40 },
  { name: 'Vercel', src: '/logos/vercel.svg', width: 40, height: 40 },
  { name: 'n8n', src: '/logos/n8n.svg', width: 40, height: 40 },
  { name: 'Python', src: '/logos/python.svg', width: 40, height: 40 },
  { name: 'Streamlit', src: '/logos/streamlit.svg', width: 40, height: 40 },
]

export default function TechMarquee() {
  const duplicatedTech = [...techItems, ...techItems, ...techItems, ...techItems]

  return (
    <section className="py-10 bg-white border-y border-slate-200/60 overflow-hidden relative">
      {/* Subtle fade edge gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ['0%', '-25%'] }}
          transition={{
            ease: 'linear',
            duration: 28,
            repeat: Infinity,
          }}
          className="flex items-center gap-14 sm:gap-20 md:gap-24 whitespace-nowrap"
        >
          {duplicatedTech.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex flex-col items-center justify-center text-center group hover:scale-105 transition-all duration-300 cursor-pointer px-2"
            >
              <div className="h-11 flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="h-10 max-h-10 w-auto object-contain shrink-0"
                />
              </div>
              <span className="text-slate-600 font-semibold text-xs tracking-tight mt-2.5 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
