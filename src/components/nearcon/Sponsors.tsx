'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'

const SPONSOR_LOGOS = [
  '/img/partners/sponsors/nearcon-sponsors-logo.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-1.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-2.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-3.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-4.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-5.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-6.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-7.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-8.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-9.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-10.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-11.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-12.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-13.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-14.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-16.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-17.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-18.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-19.png',
  '/img/partners/sponsors/nearcon-sponsors-logo-–-20.png',
]

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
    <section className="pb-12" id="sponsors">
      <div className="px-[50px] mb-12">
        <div className="max-w-[1580px] mx-auto">
          <div className="bg-black py-4 px-[40px]">
            <h2 className="font-helvetica text-[36px] text-nearcon-cream">Sponsors</h2>
          </div>
        </div>
      </div>

      <div className="px-[50px]">
        <div className="max-w-[1580px] mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {SPONSOR_LOGOS.map((src, idx) => (
            <motion.div
              key={idx}
              className="relative p-[20px] overflow-hidden group"
              variants={cellVariants}
            >
              <FrameCorners color="border-text-primary" size="w-[20px] h-[20px]" />
              <div className="relative h-[110px] transition-transform duration-300 group-hover:scale-[1.04]">
                <Image
                  src={src}
                  alt={`Sponsor ${idx + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}
