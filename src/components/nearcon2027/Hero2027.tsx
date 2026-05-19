'use client'

import { motion } from 'framer-motion'

const metadata = [
  { label: 'Date', value: 'March 9–10, 2027' },
  { label: 'Location', value: 'San Francisco, CA' },
  { label: 'Venue', value: 'Fort Mason Center · Gateway Pavilion' },
  { label: 'Format', value: 'Two-Day Conference' },
]

export function Hero2027() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
    >
      {/* Content bottom-left */}
      <div className="relative z-10 px-[25px] md:px-[50px] pb-[40px] md:pb-[60px]">
        <div className="max-w-[1580px] mx-auto">

          {/* Eyebrow */}
          <motion.p
            className="text-nearcon-cream opacity-60 mb-[30px] md:mb-[40px]"
            style={{ fontFamily: 'Helvetica', fontSize: '13px', fontWeight: 400, letterSpacing: '3px' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            FORT MASON CENTER · GATEWAY PAVILION · SAN FRANCISCO
          </motion.p>

          {/* H1 */}
          <motion.h1
            className="text-nearcon-cream mb-[50px] md:mb-[70px]"
            style={{ fontFamily: 'Helvetica', fontWeight: 700, lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <span className="block" style={{ fontSize: 'clamp(72px, 12vw, 180px)' }}>
              NEAR
              <span style={{ color: '#65D56E' }}>N</span>
              CON
            </span>
            <span className="block" style={{ fontSize: 'clamp(72px, 12vw, 180px)' }}>
              2027.
            </span>
          </motion.h1>

          {/* Metadata row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="border-t border-nearcon-cream/20 pt-[24px]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-0">
                {metadata.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${idx < metadata.length - 1 ? 'md:border-r md:border-nearcon-cream/20 md:pr-[40px]' : ''} ${idx > 0 ? 'md:pl-[40px]' : ''}`}
                  >
                    <p
                      className="text-nearcon-cream/50 mb-[6px]"
                      style={{ fontFamily: 'Poppins', fontSize: '10px', fontWeight: 400, letterSpacing: '2.5px' }}
                    >
                      {item.label.toUpperCase()}
                    </p>
                    <p
                      className="text-nearcon-cream"
                      style={{ fontFamily: 'Helvetica', fontSize: '14px', fontWeight: 700 }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
