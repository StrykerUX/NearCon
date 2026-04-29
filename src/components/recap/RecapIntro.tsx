'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'
import { useState, useEffect, useRef } from 'react'

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

const STRIPS = 10

function generateDelays(): number[] {
  const order = Array.from({ length: STRIPS }, (_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  const delays = new Array<number>(STRIPS)
  order.forEach((stripIdx, pos) => {
    delays[stripIdx] = (pos / (STRIPS - 1)) * 0.3
  })
  return delays
}

function GlitchImage({ src }: { src: string }) {
  const delays = useRef(generateDelays()).current

  return (
    <div className="absolute inset-0">
      {Array.from({ length: STRIPS }, (_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 bottom-0 overflow-hidden"
          style={{ left: `${(i / STRIPS) * 100}%`, width: `${100 / STRIPS}%` }}
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 0.18, delay: delays[i], ease: 'linear' }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: `${STRIPS * 100}%`,
              left: `${-i * 100}%`,
            }}
          >
            <Image src={src} alt="NEARCON 2026" fill className="object-cover" sizes="45vw" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const getRandomStart = () => Math.floor(Math.random() * PHOTOS.length)

// max delay (0.3s) + strip duration (0.18s) + buffer
const GLITCH_DURATION = 560

export function RecapIntro() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [glitchKey, setGlitchKey] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    const start = getRandomStart()
    setIndex(start)
    setPrevIndex(start)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % PHOTOS.length
        setPrevIndex(prev)
        return next
      })
      setGlitchKey((k) => k + 1)
      setTransitioning(true)
      setZoomed(true)
      setTimeout(() => setZoomed(false), 250)
      setTimeout(() => setTransitioning(false), GLITCH_DURATION)
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
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                {transitioning ? (
                  <>
                    {/* Imagen anterior de fondo — nunca hay blanco */}
                    <div className="absolute inset-0">
                      <Image src={PHOTOS[prevIndex]} alt="NEARCON 2026" fill className="object-cover" sizes="45vw" />
                    </div>
                    {/* Franjas glitch encima — solo durante la transición */}
                    <GlitchImage key={glitchKey} src={PHOTOS[index]} />
                  </>
                ) : (
                  <div className="absolute inset-0">
                    <Image src={PHOTOS[index]} alt="NEARCON 2026" fill className="object-cover" sizes="45vw" />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
