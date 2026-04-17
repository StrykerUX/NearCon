'use client'

import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'
import { Barcode } from '../ui/Barcode'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export function IntroText() {
  return (
    <motion.section
      className="px-6 py-16 md:px-12 md:py-24 border-b border-text-primary grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      {/* Left — text */}
      <motion.div className="relative p-6 max-w-2xl" variants={itemVariants}>
        <FrameCorners />
        <p className="text-xl md:text-3xl font-medium leading-snug mb-8">
          NEARCON is where intelligence, privacy, and the open web converge.
        </p>
        <p className="text-lg md:text-2xl font-light leading-snug mb-8 text-gray-800">
          An invite-only gathering shaping an AI economy built on trust, transparency, and user ownership.
        </p>
        <p className="text-lg md:text-2xl font-light leading-snug text-gray-800">
          Join founders, researchers, and builders redefining how intelligent systems run — private, open, and on your terms.
        </p>
      </motion.div>

      {/* Right — barcodes */}
      <motion.div className="flex flex-col items-end gap-6 text-xs text-gray-600 font-mono text-right" variants={itemVariants}>
        <Barcode className="w-64 justify-end" />
        <p className="max-w-md break-all">
          352678901 | 60190811329048584726 | 13859794286574829381 | 13454565236475800732 | 42765432182739425
          <br />
          8901 | 60190811329048584726 | 13859794286574829381 | 678958474564300263718 | 13847916745362117782 |
          <br />
          60190811329048584726 | 55459794286574829381 | 823958474564300263718 | 24847916745362117782 | 13847
        </p>
        <div className="flex items-center gap-4 mt-4">
          <span className="font-bold text-black">24556 DR</span>
          <Barcode className="w-48 justify-end" />
        </div>
      </motion.div>
    </motion.section>
  )
}
