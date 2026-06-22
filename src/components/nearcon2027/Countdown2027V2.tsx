'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'
import styles from '../recap/RecapCTA.module.css'

const TARGET = new Date('2027-03-09T19:00:00Z').getTime()

function getDaysLeft() {
  const distance = TARGET - Date.now()
  if (distance <= 0) return 0
  return Math.floor(distance / (1000 * 60 * 60 * 24))
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Countdown2027V2() {
  const [display, setDisplay] = useState(1000)
  const sectionRef = useRef<HTMLElement>(null)
  const rafRef = useRef<number | null>(null)
  const hasAnimated = useRef(false)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const target = getDaysLeft()
    const duration = 2200
    const startTime = performance.now()

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(1000 - (1000 - target) * eased)
      setDisplay(current)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [isInView])

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden py-[100px] px-[25px] md:py-[125px] md:px-[50px] flex flex-col justify-center items-center bg-nearcon-cream"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      id="countdown"
    >
      <div className="relative z-10 w-full mx-auto flex justify-center">

        {/* Contenido centrado con FrameCorners */}
        <motion.div className="relative p-[25px] md:p-[50px]" variants={itemVariants}>
          <FrameCorners color="border-black" size="w-[30px] h-[30px]" />

          <div className="flex flex-col gap-[50px]">

            <div className="w-[50%] self-start">
              <Image src="/img/Group-3-1-1.png" alt="" width={800} height={600} sizes="30vw" className="w-full h-auto" />
            </div>

            <h2
              className="font-helvetica text-center text-[42px] md:text-[75px]"
              style={{ lineHeight: 1.05, color: '#000000' }}
            >
              The future is<br />
              <span className={styles.gradientDefault}>being written</span>
            </h2>

            <div className="w-[75%] self-end">
              <Image src="/img/Group-23-scaled.png" alt="" width={1200} height={900} sizes="30vw" className="w-full h-auto" />
            </div>

          </div>
        </motion.div>

        {/* Columna de días — oculta */}
        <motion.div className="hidden" variants={itemVariants}>
          <div className="relative flex flex-col items-start py-[50px] px-[65px]">
            <FrameCorners size="w-10 h-10" />
            <div className="flex items-center justify-center bg-nearcon-cream">
              <span className="font-light text-black" style={{ fontFamily: 'Roboto Mono', fontSize: '250px', lineHeight: 1 }}>
                {display}
              </span>
            </div>
            <span className="bg-nearcon-cream font-helvetica text-[29px] font-bold text-black w-full text-left pl-[20px]">
              DAYS
            </span>
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}
