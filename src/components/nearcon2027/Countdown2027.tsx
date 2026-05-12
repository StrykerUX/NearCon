'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// March 9, 2027, 11:00 AM PST = 19:00 UTC
const TARGET = new Date('2027-03-09T19:00:00Z').getTime()

function getTimeLeft() {
  const distance = TARGET - Date.now()
  if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  }
}

export function Countdown2027() {
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    setMounted(true)
    setTime(getTimeLeft())
    const interval = setInterval(() => {
      setTime(getTimeLeft())
      setBlink((b) => !b)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad2 = (n: number) => n.toString().padStart(2, '0')
  const pad3 = (n: number) => n.toString().padStart(3, '0')

  const units = [
    { label: 'Days', value: mounted ? pad3(time.days) : '000' },
    { label: 'Hours', value: mounted ? pad2(time.hours) : '00' },
    { label: 'Minutes', value: mounted ? pad2(time.minutes) : '00' },
    { label: 'Seconds', value: mounted ? pad2(time.seconds) : '00' },
  ]

  return (
    <section className="bg-nearcon-cream py-[80px] md:py-[120px] px-[25px] md:px-[50px]" id="countdown">
      <div className="max-w-[1580px] mx-auto flex flex-col items-center text-center">

        {/* Eyebrow */}
        <motion.p
          className="text-black/50 mb-[16px]"
          style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 400, letterSpacing: '3px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          COUNTDOWN TO NEARCON 2027
        </motion.p>

        {/* Date */}
        <motion.h2
          className="mb-[8px]"
          style={{ fontFamily: 'Helvetica', fontWeight: 700, fontSize: 'clamp(42px, 7vw, 100px)', lineHeight: 1, color: '#000000' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          March 9–10
        </motion.h2>

        <motion.p
          className="text-black/50 mb-[60px]"
          style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 300 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Fort Mason Center · San Francisco
        </motion.p>

        {/* Timer */}
        <motion.div
          className="bg-black w-full max-w-[900px] px-[20px] md:px-[60px] py-[40px] md:py-[60px] flex items-center justify-center gap-0 mb-[50px]"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {units.map((unit, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col items-center px-[12px] md:px-[24px]">
                <span
                  style={{
                    fontFamily: 'Roboto Mono, monospace',
                    fontSize: 'clamp(36px, 6vw, 80px)',
                    fontWeight: 400,
                    color: '#65D56E',
                    lineHeight: 1,
                  }}
                >
                  {unit.value}
                </span>
                <span
                  className="mt-[10px]"
                  style={{ fontFamily: 'Poppins', fontSize: '10px', fontWeight: 400, letterSpacing: '2.5px', color: 'rgba(235,227,211,0.4)' }}
                >
                  {unit.label.toUpperCase()}
                </span>
              </div>
              {idx < units.length - 1 && (
                <span
                  style={{
                    fontFamily: 'Roboto Mono, monospace',
                    fontSize: 'clamp(28px, 5vw, 64px)',
                    fontWeight: 400,
                    color: '#65D56E',
                    opacity: blink ? 1 : 0.2,
                    transition: 'opacity 0.15s',
                    lineHeight: 1,
                    alignSelf: 'flex-start',
                    paddingTop: '4px',
                  }}
                >
                  :
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-[16px]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a
            href="#newsletter"
            className="inline-block px-[32px] py-[14px] text-black"
            style={{
              fontFamily: 'Helvetica',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '2px',
              backgroundColor: '#65D56E',
            }}
          >
            [ NOTIFY ME ]
          </a>
          <a
            href="/recap"
            className="inline-block px-[32px] py-[14px]"
            style={{
              fontFamily: 'Helvetica',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#000000',
              border: '1px solid #000000',
            }}
          >
            [ NEARCON 2026 RECAP ]
          </a>
        </motion.div>

      </div>
    </section>
  )
}
