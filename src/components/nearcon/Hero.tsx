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
      className="px-[50px] py-4 md:py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative w-full overflow-hidden flex items-center justify-center border border-text-primary">
        {/* Background Image */}
        <div className="relative w-full h-auto">
          <Image
            src="/img/nearcon-img-hero.png"
            alt="NearCon Hero Background"
            width={1550}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </motion.section>
  )
}
