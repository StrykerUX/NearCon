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

function LogoCell({ src, alt, centerOnMobile }: { src: string; alt: string; centerOnMobile?: boolean }) {
  return (
    <motion.div
      className={`relative group ${centerOnMobile ? 'col-span-2 md:col-span-1 flex justify-center' : ''}`}
      variants={cellVariants}
    >
      <div className={centerOnMobile ? 'w-1/2 md:w-full' : undefined}>
        <div
          className="p-[20px] relative overflow-hidden transition-transform duration-200 ease-out group-hover:scale-[0.97]"
          style={{ transformOrigin: 'center' }}
        >
          <FrameCorners color="border-text-primary" size="w-[25px] h-[25px] md:w-[35px] md:h-[35px]" />
          <div
            className="relative h-[70px] md:h-[110px] transition-transform duration-200 ease-out group-hover:scale-[1.03]"
            style={{ transformOrigin: 'center' }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-x-[20px] gap-y-[20px] md:gap-x-[40px] md:gap-y-[40px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
          >
            {firstRow.map((src, idx) => (
              <LogoCell key={idx} src={src} alt={`Community Partner ${idx + 1}`} />
            ))}
          </motion.div>
          {/* Second row: 3 logos, 2 por línea en mobile con la última centrada; 3 en una fila en desktop */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-x-[20px] gap-y-[20px] md:gap-x-[40px] md:gap-y-[40px] md:w-3/4 md:mx-auto mt-[20px] md:mt-[40px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
          >
            {secondRow.map((src, idx) => (
              <LogoCell
                key={idx + 4}
                src={src}
                alt={`Community Partner ${idx + 5}`}
                centerOnMobile={idx === secondRow.length - 1 && secondRow.length % 2 === 1}
              />
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
            className="grid grid-cols-2 gap-x-[20px] gap-y-[20px] md:gap-x-[40px] md:gap-y-[40px] md:w-1/2 md:mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {MEDIA_PARTNER_LOGOS.map((src, idx) => (
              <LogoCell key={idx} src={src} alt={`Media Partner ${idx + 1}`} />
            ))}
          </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
