'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'
import { FrameCorners } from '../ui/FrameCorners'
import { Barcode } from '../ui/Barcode'
import { SPEAKERS, RUNNING_NUMBERS } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Speakers() {
  return (
    <section className="px-[50px] py-20 border-b border-text-primary relative overflow-hidden" id="speakers">
      {/* Running numbers background */}
      <div className="absolute top-10 left-0 w-full overflow-hidden text-xs font-mono text-gray-500 opacity-50 whitespace-nowrap pointer-events-none select-none">
        {RUNNING_NUMBERS}
      </div>

      <motion.h2
        className="font-helvetica text-4xl md:text-5xl mb-16 relative z-10 bg-nearcon-cream inline-block pr-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Speakers
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        {SPEAKERS.map((speaker) => (
          <motion.div key={speaker.id} className="relative group" variants={cardVariants}>
            <div className="p-4 relative">
              <FrameCorners />
              <div
                className="aspect-square mb-4 overflow-hidden relative"
                style={{ background: `linear-gradient(135deg, ${speaker.accentColor}, #F1B139)` }}
              >
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  fill
                  className="object-cover mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <h3 className="font-helvetica text-xl mb-1">{speaker.name}</h3>
              <p className="text-xs text-gray-600">
                {speaker.organization}
                <br />
                {speaker.title}
              </p>
            </div>
          </motion.div>
        ))}

        {/* See More card */}
        <motion.div
          className="relative group cursor-pointer"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="p-4 w-full h-full flex flex-col items-center justify-center bg-[#E0D6C8] hover:bg-[#d4c9b9] transition-colors relative min-h-[260px]">
            <FrameCorners />
            <Barcode className="w-24 mb-4 opacity-50" />
            <h3 className="font-helvetica text-2xl">See More</h3>
            <Barcode className="w-32 mt-4" />
            <span className="text-[10px] absolute bottom-6 left-6 font-mono">24556 DR 5</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        className="w-full bg-black text-nearcon-cream py-4 text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors"
        onClick={() => sendGAEvent('event', 'cta_click', { cta_name: 'apply_to_speak' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        APPLY TO SPEAK
      </motion.button>
    </section>
  )
}
