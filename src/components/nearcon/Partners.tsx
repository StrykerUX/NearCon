'use client'

import { motion } from 'framer-motion'
import { GridCorners } from '../ui/GridCorners'
import { COMMUNITY_PARTNERS, MEDIA_PARTNERS } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const cellVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

function PartnerCell({ partner }: { partner: (typeof COMMUNITY_PARTNERS)[0] }) {
  if (!partner.name) return (
    <div className="relative h-24 flex items-center justify-center">
      <GridCorners />
    </div>
  )

  const renderContent = () => {
    if (partner.name === 'Mission Bit') {
      return <span className={partner.className}>{partner.name}</span>
    }
    if (partner.name === 'SVAI') {
      return (
        <div className="flex items-center gap-2">
          <span className="font-black text-xl">SVAI</span>
          <span className="text-[6px] font-bold leading-none text-blue-500 w-12">{partner.extra}</span>
        </div>
      )
    }
    if (partner.name === 'Cooperative Futures Institute') {
      return (
        <div className="flex flex-col items-center">
          <span className="text-2xl mb-1">🏛️</span>
          <span className="font-serif text-[8px] uppercase tracking-tighter w-20 text-center leading-tight">{partner.name}</span>
        </div>
      )
    }
    if (partner.name === 'frontiertower') {
      return (
        <div className="flex items-center gap-2">
          <span className="bg-purple-600 text-white px-1 font-serif text-xs">ft</span>
          <span className={partner.className}>{partner.name}</span>
        </div>
      )
    }
    if (partner.name === 'The AI Collective') {
      return (
        <div className="flex items-center gap-2">
          <span className="text-3xl text-orange-500 font-light">C</span>
          <span className={partner.className}>{partner.name}</span>
        </div>
      )
    }
    return <span className={partner.className}>{partner.name}</span>
  }

  return (
    <div className="flex items-center justify-center gap-2 grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100">
      {renderContent()}
    </div>
  )
}

export function Partners() {
  return (
    <>
      {/* Community Partners */}
      <section className="border-b border-text-primary pb-12">
        <div className="bg-black py-4 px-[50px] w-full mb-12">
          <h2 className="font-helvetica text-2xl text-nearcon-cream">Community Partners</h2>
        </div>
        <div className="px-[50px] max-w-6xl mx-auto mb-16">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-0 text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
          >
            {COMMUNITY_PARTNERS.map((partner, idx) => (
              <motion.div
                key={idx}
                className="relative h-24 flex items-center justify-center hover:bg-[#E0D6C8] transition-colors group"
                variants={cellVariants}
              >
                <GridCorners />
                <PartnerCell partner={partner} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Media Partners */}
        <div className="bg-black py-4 px-[50px] w-full mb-12">
          <h2 className="font-helvetica text-2xl text-nearcon-cream">Media Partners</h2>
        </div>
        <div className="px-[50px] max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {MEDIA_PARTNERS.map((partner, idx) => (
              <motion.div
                key={idx}
                className="relative h-24 flex items-center justify-center hover:bg-[#E0D6C8] transition-colors group"
                variants={cellVariants}
              >
                <GridCorners />
                <div className="flex items-center justify-center gap-2 grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100">
                  {partner.name === 'THE ROLLUP' ? (
                    <>
                      <span className="text-2xl">🌀</span>
                      <span className={partner.className}>{partner.name}</span>
                    </>
                  ) : (
                    <span className={partner.className}>
                      <span className="font-bold">YAP</span> GLOBAL
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
