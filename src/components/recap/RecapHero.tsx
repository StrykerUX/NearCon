'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const IMAGES = [
  '/img/NEARCON_C-114.jpg',
  '/img/NEARCON_A-5.jpg',
  '/img/NEARCON_B-111.jpg',
]

export function RecapHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-[50px] pt-[50px] pb-[50px] bg-nearcon-cream">
      <div className="max-w-[1580px] mx-auto w-full relative overflow-hidden bg-nearcon-cream">
        {/* Background Images with Fade Transition */}
        {IMAGES.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}

        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end p-[60px] aspect-video max-h-[750px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-[20px]"
          >
            {/* Location and Date */}
            <p className="text-nearcon-cream opacity-70" style={{ fontFamily: 'Helvetica', fontSize: '18px', fontWeight: 400 }}>
              FORT MASON CENTER - SAN FRANCISCO - FEB 23-24, 2026
            </p>

            {/* Main Title */}
            <h1 className="text-nearcon-cream" style={{ fontFamily: 'Helvetica', fontSize: '75px', fontWeight: 700, lineHeight: '65px' }}>
              Last NEARCON 2026
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
