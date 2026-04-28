'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'
import { useState, useEffect } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

const PHOTOS = [
  '/img/NEARCON_B-52.jpg',
  '/img/NEARCON_B-54.jpg',
  '/img/NEARCON_B-36.jpg',
  '/img/NEARCON_B-20.jpg',
  '/img/NEARCON_A-14.jpg',
  '/img/NEARCON_B-81.jpg',
]

const getRandomStart = () => Math.floor(Math.random() * PHOTOS.length)

export function RecapIntro() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(getRandomStart())
  }, [])
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHOTOS.length)
      setZoomed(true)
      setTimeout(() => setZoomed(false), 250)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section
      className="px-[25px] md:px-[50px] pt-[100px] pb-[100px] flex flex-col md:flex-row items-stretch gap-[40px] md:gap-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      {/* Left — title and text */}
      <motion.div className="w-full md:w-[55%] text-[#000000] flex flex-col justify-center" variants={itemVariants}>
        <h2 className="font-helvetica text-[24px] md:text-[36px] font-bold mb-8 leading-tight">
          NEARCON 2026 proved that the future isn't coming — it's already building.
        </h2>
        <p className="text-[16px] leading-[22px] md:text-[18px] md:leading-relaxed space-y-4" style={{ fontFamily: 'Poppins', fontWeight: 300 }}>
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
      <motion.div className="w-full md:w-[45%] flex items-center justify-center" variants={itemVariants}>
        <div className="w-full">
          <motion.div
            className="relative p-[30px] overflow-hidden"
            style={{ transformOrigin: 'center' }}
            animate={{ scale: zoomed ? 0.92 : 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <FrameCorners size="w-10 h-10" />
            <motion.div
              className="relative overflow-hidden"
              style={{ transformOrigin: 'center' }}
              animate={{ scale: zoomed ? 1.08 : 1 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {/* Fixed aspect-ratio container — height never collapses during AnimatePresence transition */}
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ clipPath: 'inset(0 0 100% 0)' }}
                    animate={{ clipPath: 'inset(0 0 0% 0)' }}
                    exit={{ clipPath: 'inset(100% 0 0 0)' }}
                    transition={{ duration: 0.275, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={PHOTOS[index]}
                      alt="NEARCON 2026"
                      fill
                      className="object-cover"
                      sizes="45vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
