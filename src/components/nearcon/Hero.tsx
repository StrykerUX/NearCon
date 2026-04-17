'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'

export function Hero() {
  const handleCTAClick = () => {
    sendGAEvent('event', 'cta_click', { cta_name: 'apply_to_attend_hero' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      className="p-4 md:p-12 border-b border-text-primary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden flex items-center justify-center border border-text-primary">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
            alt="NearCon Hero Background"
            fill
            className="object-cover opacity-60 mix-blend-screen"
            priority
            onError={(e) => {
              const img = e.target as HTMLImageElement
              img.src = 'https://via.placeholder.com/2000x1000/000000/333333?text=NearCon+Hero'
            }}
          />
        </div>

        {/* Content */}
        <motion.div className="absolute top-8 left-8 text-white font-helvetica text-5xl md:text-7xl tracking-tighter flex items-center gap-1 z-10" variants={itemVariants}>
          Near
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4v16l16-16v16" />
          </svg>
          Con
        </motion.div>

        <motion.div className="absolute top-8 right-8 text-white text-right space-y-1 z-10" variants={itemVariants}>
          <p className="font-helvetica text-xl md:text-2xl uppercase">Fort Mason Center</p>
          <p className="font-helvetica text-xl md:text-2xl uppercase">San Francisco, CA</p>
        </motion.div>

        <motion.div className="absolute top-24 right-8 text-white font-helvetica text-xl md:text-2xl z-10" variants={itemVariants}>
          FEB 23-24 2026
        </motion.div>
      </div>
    </motion.section>
  )
}
