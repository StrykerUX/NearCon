'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'

const COMMUNITY_PARTNER_LOGOS = [
  '/img/partners/Community Partners/nearcon-Community-Partner-logo.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logo-–-3.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logoo-–-2.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logoo-–-4.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logoo-–-5.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logoo-–-7.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logoo-–-8.png',
]

const MEDIA_PARTNER_LOGOS = [
  '/img/partners/Media Partners/nearcon-Media-Partner-logo-–-1.png',
  '/img/partners/Media Partners/nearcon-Media-Partner-logo-–-4.png',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const cellVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

function LogoCell({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="relative p-[20px] overflow-hidden group"
      variants={cellVariants}
    >
      <FrameCorners color="border-text-primary" size="w-[20px] h-[20px]" />
      <div className="relative h-[110px] transition-transform duration-300 group-hover:scale-[1.04]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
    </motion.div>
  )
}

export function Partners() {
  const firstRow = COMMUNITY_PARTNER_LOGOS.slice(0, 4)
  const secondRow = COMMUNITY_PARTNER_LOGOS.slice(4)

  return (
    <>
      {/* Community Partners */}
      <section>
        <div className="px-[50px] mb-12">
          <div className="max-w-[1580px] mx-auto">
            <div className="bg-black py-4 px-[40px]">
              <h2 className="font-helvetica text-[36px] text-nearcon-cream">Community Partners</h2>
            </div>
          </div>
        </div>
        <div className="px-[50px] mb-16">
          <div className="max-w-[1580px] mx-auto">
          {/* First row: 4 logos */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
          >
            {firstRow.map((src, idx) => (
              <LogoCell key={idx} src={src} alt={`Community Partner ${idx + 1}`} />
            ))}
          </motion.div>
          {/* Second row: 3 logos centered (same cell width as 4-col grid) */}
          <motion.div
            className="grid grid-cols-3 gap-0 w-3/4 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
          >
            {secondRow.map((src, idx) => (
              <LogoCell key={idx + 4} src={src} alt={`Community Partner ${idx + 5}`} />
            ))}
          </motion.div>
          </div>
        </div>

        {/* Media Partners */}
        <div className="px-[50px] mb-12">
          <div className="max-w-[1580px] mx-auto">
            <div className="bg-black py-4 px-[40px]">
              <h2 className="font-helvetica text-[36px] text-nearcon-cream">Media Partners</h2>
            </div>
          </div>
        </div>
        <div className="px-[50px] pb-[100px]">
          <div className="max-w-[1580px] mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {MEDIA_PARTNER_LOGOS.map((src, idx) => (
              <motion.div
                key={idx}
                className="relative p-[20px] overflow-hidden group"
                variants={cellVariants}
              >
                <FrameCorners color="border-text-primary" size="w-[20px] h-[20px]" />
                <div className="relative h-[110px] transition-transform duration-300 group-hover:scale-[1.04]">
                  <Image
                    src={src}
                    alt={`Media Partner ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
