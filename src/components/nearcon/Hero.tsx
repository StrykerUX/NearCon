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
      className="p-4 md:p-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden flex items-center justify-center border border-text-primary">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/img/nearcon-img-hero.png"
            alt="NearCon Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </motion.section>
  )
}
