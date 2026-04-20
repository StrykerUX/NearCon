'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'
import { useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export function RecapIntro() {
  return (
    <motion.section
      className="px-[50px] py-16 md:py-24 flex items-stretch gap-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      {/* Left — title and text */}
      <motion.div className="w-[55%] text-[#000000]" variants={itemVariants}>
        <h2 className="font-helvetica text-[36px] font-bold mb-8 leading-tight">
          NEARCON 2026 proved that the future isn't coming — it's already building.
        </h2>
        <p className="leading-relaxed space-y-4" style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 300 }}>
          For two days in San Francisco's Fort Mason Center, NEARCON 2026 gathered the minds that will define the next decade of AI, privacy, and open infrastructure. Under the theme Private. Intelligent. Yours., the conversation shifted from speculation to execution.
          <br />
          <br />
          Builders shipped. Agents competed. Ideas became prototypes. And the NEAR ecosystem showed exactly what it means to build technology that serves people — not platforms.
          <br />
          <br />
          This is everything that happened. Every session, every stage, every breakthrough.
        </p>
      </motion.div>

      {/* Right — image with frame corners */}
      <motion.div className="w-[45%] flex items-center justify-center" variants={itemVariants}>
        <div className="group">
          <div className="relative p-[30px] overflow-hidden transition-transform duration-300 group-hover:scale-[0.92]" style={{ transformOrigin: 'center' }}>
            <FrameCorners size="w-10 h-10" />
            <div
              className="relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.08]"
              style={{ transformOrigin: 'center' }}
            >
              <Image
                src="/img/NEARCON_B-81.jpg"
                alt="NEARCON 2026"
                width={600}
                height={600}
                sizes="45vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
