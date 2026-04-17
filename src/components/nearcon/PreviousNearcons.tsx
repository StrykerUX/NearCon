'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'
import { PREVIOUS_NEARCON_IMAGES, RUNNING_NUMBERS } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export function PreviousNearcons() {
  return (
    <section className="bg-black text-nearcon-cream relative overflow-hidden py-16 md:py-24">
      {/* Running numbers top */}
      <div className="absolute top-4 left-0 w-full overflow-hidden text-[10px] font-mono text-gray-400 opacity-60 whitespace-nowrap tracking-wider pointer-events-none select-none">
        {RUNNING_NUMBERS}
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <motion.h2
          className="font-helvetica text-xl text-nearcon-cream mb-12 relative z-10"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          Previous NEARCONS
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {PREVIOUS_NEARCON_IMAGES.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              className="relative p-2 aspect-square"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <FrameCorners color="border-gray-500" size="w-6 h-6" />
              <div className="w-full h-full p-2 relative">
                <Image
                  src={imgUrl}
                  alt={`Previous Nearcon Event ${idx + 1}`}
                  fill
                  className="object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Running numbers bottom */}
      <div className="absolute bottom-4 left-0 w-full overflow-hidden text-[10px] font-mono text-gray-400 opacity-60 whitespace-nowrap tracking-wider pointer-events-none select-none">
        {RUNNING_NUMBERS}
      </div>
    </section>
  )
}
