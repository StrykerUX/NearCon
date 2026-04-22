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

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4 }}
      className="relative p-[20px]"
    >
      <FrameCorners color="border-[#000000]" size="w-[25px] h-[25px]" />
      <div className="relative h-[110px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 20vw"
        />
      </div>
    </motion.div>
  )
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

export function ThankYouSponsors() {
  return (
    <section className="bg-nearcon-cream py-[100px]">
      {/* Title stripe */}
      <div
        className="w-full bg-cover bg-center px-[50px] mb-[80px]"
        style={{ backgroundImage: 'url(/img/Group-3-1.png)' }}
      >
        <div className="max-w-[1580px] mx-auto">
          <motion.h2
            className="font-helvetica inline-block text-nearcon-cream"
            style={{ backgroundColor: '#000000', padding: '12px 40px', fontSize: '36px', fontWeight: 700, lineHeight: '40px' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Thank You to Our Sponsors
          </motion.h2>
        </div>
      </div>

      <div className="px-[50px]">
        <div className="max-w-[1580px] mx-auto flex flex-col gap-[60px]">

          {/* Sponsors */}
          <div>
            <SectionLabel label="SPONSORS" />
            <div className="grid grid-cols-5 gap-[0px]">
              {SPONSORS.map((src, i) => (
                <LogoCard key={i} src={src} alt={`Sponsor ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Community Partners */}
          <div>
            <SectionLabel label="COMMUNITY PARTNERS" />
            <div className="grid grid-cols-7 gap-[0px]">
              {COMMUNITY_PARTNERS.map((src, i) => (
                <LogoCard key={i} src={src} alt={`Community Partner ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Media Partners */}
          <div>
            <SectionLabel label="MEDIA PARTNERS" />
            <div className="grid grid-cols-5 gap-[0px]">
              {MEDIA_PARTNERS.map((src, i) => (
                <LogoCard key={i} src={src} alt={`Media Partner ${i + 1}`} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
