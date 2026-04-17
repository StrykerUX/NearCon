'use client'

import { motion } from 'framer-motion'
import { GridCorners } from '../ui/GridCorners'
import { SPONSORS } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
}

const cellVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export function Sponsors() {
  return (
    <section className="border-b border-text-primary pb-12" id="sponsors">
      <div className="bg-black py-4 px-[50px] w-full mb-12">
        <h2 className="font-helvetica text-2xl text-nearcon-cream">Sponsors</h2>
      </div>

      <div className="px-[50px] max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {SPONSORS.map((sponsor, idx) => (
            <motion.div
              key={idx}
              className="relative h-32 flex items-center justify-center hover:bg-[#E0D6C8] transition-colors group"
              variants={cellVariants}
            >
              <GridCorners />
              {sponsor.displayType !== 'empty' && (
                <div className="flex flex-col items-center justify-center gap-2 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100">
                  {sponsor.displayType === 'box' ? (
                    <div className={`${sponsor.bg} ${sponsor.textColor} px-4 py-1 font-bold`}>{sponsor.name}</div>
                  ) : sponsor.iconText && sponsor.name === 'PANTERA' ? (
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-black mb-1">|||</span>
                      <span className={sponsor.className}>{sponsor.name}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      {sponsor.iconText && sponsor.name !== 'PANTERA' && (
                        <span className="text-xl">{sponsor.iconText}</span>
                      )}
                      <span className={`${sponsor.className || 'font-helvetica text-lg'}`}>{sponsor.name}</span>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
