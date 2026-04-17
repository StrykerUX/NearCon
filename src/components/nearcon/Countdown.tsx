'use client'

import { useState, useEffect } from 'react'
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
      className="relative overflow-hidden border-b border-text-primary py-20 px-6 md:px-12 flex justify-center bg-nearcon-cream"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* SVG Matrix Background */}
      <svg className="absolute inset-0 w-full h-full text-black pointer-events-none opacity-80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="slash-bg" width="320" height="160" patternUnits="userSpaceOnUse">
            <text x="0" y="0" fontFamily="monospace" fontSize="14" fill="currentColor" style={{ letterSpacing: '0.15em' }}>
              <tspan x="0" dy="16">
                \\\\\\\\\\\\\\\\A\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
              </tspan>
              <tspan x="0" dy="16">
                \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\B\\\\\\\\\\\\\\
              </tspan>
              <tspan x="0" dy="16">
                \\\\\\\\E\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
              </tspan>
              <tspan x="0" dy="16">
                \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\C
              </tspan>
              <tspan x="0" dy="16">
                \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
              </tspan>
              <tspan x="0" dy="16">
                \\\\H\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
              </tspan>
              <tspan x="0" dy="16">
                \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\G\\\\\\\\\\\\\\
              </tspan>
              <tspan x="0" dy="16">
                \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
              </tspan>
              <tspan x="0" dy="16">
                \\\\\\\\\\\\1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
              </tspan>
              <tspan x="0" dy="16">
                \\\\\\\\\\\\\\\\\\\\\\\\\\\\2\\\\\\\\3\\\\\\\\\\\\
              </tspan>
            </text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#slash-bg)" />
      </svg>

      {/* Grid Items */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl w-full relative z-10" variants={containerVariants}>
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-nearcon-cream p-6 md:p-8 flex flex-col items-center justify-center relative border border-text-primary"
            variants={itemVariants}
          >
            <FrameCorners color="border-text-primary" size="w-3 h-3" />

            {/* Number Display */}
            <div className="flex-1 flex items-center justify-center py-6 md:py-10">
              <span className="text-6xl md:text-8xl font-helvetica tracking-tighter">{item.value}</span>
            </div>

            {/* Separator Line */}
            <div className="w-full overflow-hidden text-black font-mono text-[10px] tracking-[0.3em] mb-3 whitespace-nowrap opacity-80">
              \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            </div>

            {/* Label */}
            <span className="text-xs md:text-sm font-bold tracking-widest w-full text-left">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
