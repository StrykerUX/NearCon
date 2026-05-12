'use client'

import { motion } from 'framer-motion'

const rows = [
  { label: 'Theme', value: 'Private. Intelligent. Yours.' },
  { label: 'Date', value: 'February 23–24, 2026' },
  { label: 'Location', value: 'Fort Mason Center · San Francisco' },
]

export function RecapCTA2027() {
  return (
    <section className="bg-black px-[25px] md:px-[50px] py-[80px] md:py-[120px]">
      <div className="max-w-[1580px] mx-auto flex flex-col md:flex-row gap-[50px] md:gap-[80px] items-stretch">

        {/* Left */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-between gap-[40px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p
              className="mb-[20px]"
              style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 400, letterSpacing: '2.5px', color: 'rgba(235,227,211,0.45)' }}
            >
              BEFORE NEARCON 2027
            </p>

            <h2
              className="mb-[30px]"
              style={{ fontFamily: 'Helvetica', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 60px)', lineHeight: 1.1 }}
            >
              <span className="text-nearcon-cream block">Missed NEARCON 2026?</span>
              <span style={{ color: '#65D56E' }}>We got you.</span>
            </h2>

            <p style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 300, color: 'rgba(235,227,211,0.7)', lineHeight: 1.7 }}>
              85+ speakers. 48 sessions. Fort Mason Center, San Francisco. Two days at the intersection of AI, privacy, and the open web — all recapped in one page.
            </p>
          </div>

          <a
            href="/recap"
            className="inline-block self-start px-[28px] py-[13px]"
            style={{
              fontFamily: 'Helvetica',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#000000',
              backgroundColor: '#65D56E',
            }}
          >
            [ VIEW THE NEARCON 2026 RECAP ]
          </a>
        </motion.div>

        {/* Right — data rows */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-[2px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-[24px] py-[22px]"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              <div>
                <p style={{ fontFamily: 'Poppins', fontSize: '10px', fontWeight: 400, letterSpacing: '2px', color: 'rgba(235,227,211,0.45)', marginBottom: '4px' }}>
                  {row.label.toUpperCase()}
                </p>
                <p style={{ fontFamily: 'Helvetica', fontSize: '16px', fontWeight: 700, color: '#EBE3D3' }}>
                  {row.value}
                </p>
              </div>
              <span style={{ color: '#65D56E', fontSize: '20px', fontWeight: 700 }}>→</span>
            </div>
          ))}

          {/* Green CTA row */}
          <a
            href="/recap"
            className="flex items-center justify-between px-[24px] py-[22px] transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#65D56E' }}
          >
            <p style={{ fontFamily: 'Helvetica', fontSize: '16px', fontWeight: 700, color: '#000000' }}>
              See the full recap
            </p>
            <span style={{ color: '#000000', fontSize: '20px', fontWeight: 700 }}>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
