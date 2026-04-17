'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const targetDate = new Date('2026-02-23T09:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  const items = [
    { label: 'DAYS', value: formatNumber(timeLeft.days) },
    { label: 'HOURS', value: formatNumber(timeLeft.hours) },
    { label: 'MINUTES', value: formatNumber(timeLeft.minutes) },
    { label: 'SECONDS', value: formatNumber(timeLeft.seconds) },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  if (!mounted) return null

  return (
    <motion.section
      className="relative overflow-hidden py-20 px-[50px] flex justify-center items-center bg-nearcon-cream min-h-[750px] mt-4 md:mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Background Image */}
      <Image
        src="/img/Mask-group.png"
        alt="Background"
        fill
        className="absolute inset-0 object-cover pointer-events-none"
        sizes="100vw"
      />

      {/* Grid Items */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-[4em] max-w-[1580px] w-full relative z-10 mx-auto px-[50px]" variants={containerVariants}>
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center gap-[25px] relative"
            variants={itemVariants}
          >
            {/* Number Display */}
            <div className="flex items-center justify-center bg-nearcon-cream w-full">
              <span className="text-[178px] font-light text-black" style={{ fontFamily: 'Roboto Mono' }}>{item.value}</span>
            </div>

            {/* Label */}
            <span className="bg-nearcon-cream font-helvetica text-[29px] font-bold text-black w-full text-left pl-[20px]">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
