'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'

const SPONSORS = [
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

const COMMUNITY_PARTNERS = [
  '/img/partners/Community Partners/nearcon-Community-Partner-logo.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logo-–-3.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logoo-–-2.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logoo-–-4.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logoo-–-5.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logoo-–-7.png',
  '/img/partners/Community Partners/nearcon-Community-Partner-logoo-–-8.png',
]

const MEDIA_PARTNERS = [
  '/img/partners/Media Partners/nearcon-Media-Partner-logo-–-1.png',
  '/img/partners/Media Partners/nearcon-Media-Partner-logo-–-4.png',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
}

const cellVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p
      className="text-[#000000] mb-[24px]"
      style={{ fontFamily: 'Helvetica', fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em' }}
    >
      {label}
    </p>
  )
}

function LogoGrid({ logos, cols, className, altPrefix, centerLastOnMobile }: {
  logos: string[]
  cols: string
  className?: string
  altPrefix: string
  centerLastOnMobile?: boolean
}) {
  return (
    <motion.div
      className={`grid ${cols} gap-x-[20px] gap-y-[20px] md:gap-x-[40px] md:gap-y-[40px] ${className ?? ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={containerVariants}
    >
      {logos.map((src, idx) => {
        const isCenteredLast = centerLastOnMobile && idx === logos.length - 1 && logos.length % 2 === 1
        return (
          <motion.div
            key={idx}
            className={`relative group ${isCenteredLast ? 'col-span-2 md:col-span-1 flex justify-center' : ''}`}
            variants={cellVariants}
          >
            <div className={isCenteredLast ? 'w-1/2 md:w-full' : undefined}>
              <div
                className="p-[20px] relative overflow-hidden transition-transform duration-200 ease-out group-hover:scale-[0.97]"
                style={{ transformOrigin: 'center' }}
              >
                <FrameCorners color="border-text-primary" size="w-[25px] h-[25px] md:w-[35px] md:h-[35px]" />
                <div
                  className="relative h-[60px] md:h-[93px] transition-transform duration-200 ease-out group-hover:scale-[1.03]"
                  style={{ transformOrigin: 'center' }}
                >
                  <Image
                    src={src}
                    alt={`${altPrefix} ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export function ThankYouSponsors() {
  const communityFirst = COMMUNITY_PARTNERS.slice(0, 4)
  const communitySecond = COMMUNITY_PARTNERS.slice(4)

  return (
    <section className="bg-nearcon-cream pt-[75px] pb-[125px]">
      {/* Title stripe */}
      <div className="px-[25px] md:px-[50px] mb-[125px]">
        <div className="max-w-[1580px] mx-auto">
          <div className="bg-black py-5 px-[25px] md:px-[40px]">
            <h2 className="text-nearcon-cream text-[30px] leading-[36px] md:text-[36px] md:leading-normal" style={{ fontFamily: 'Helvetica', fontWeight: 700 }}>
              Thank You to Our Sponsors
            </h2>
          </div>
        </div>
      </div>

      <div className="px-[25px] md:px-[50px]">
        <div className="max-w-[1580px] mx-auto flex flex-col gap-[60px]">

          {/* Sponsors */}
          <div>
            <SectionLabel label="SPONSORS" />
            <LogoGrid logos={SPONSORS} cols="grid-cols-2 md:grid-cols-4" altPrefix="Sponsor" />
          </div>

          {/* Community Partners */}
          <div>
            <SectionLabel label="COMMUNITY PARTNERS" />
            <LogoGrid logos={communityFirst} cols="grid-cols-2 md:grid-cols-4" altPrefix="Community Partner" />
            <LogoGrid logos={communitySecond} cols="grid-cols-2 md:grid-cols-3" className="md:w-3/4 md:mx-auto mt-[20px] md:mt-[40px]" altPrefix="Community Partner" centerLastOnMobile />
          </div>

          {/* Media Partners */}
          <div>
            <SectionLabel label="MEDIA PARTNERS" />
            <LogoGrid logos={MEDIA_PARTNERS} cols="grid-cols-2" className="md:w-1/2 md:mx-auto" altPrefix="Media Partner" />
          </div>

        </div>
      </div>
    </section>
  )
}
