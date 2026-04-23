'use client'

import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const VIDEO_URL =
  'https://www.dropbox.com/scl/fi/jv8jljj1e8y3xnz3pwz8g/2026_NearCon_Sizzle.mp4?rlkey=xcrmj6o1gpv715zr3lwpgz7q6&st=dbjciyvz&dl=1'

export function RecapHeroV3() {
  const triggerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [showContent, setShowContent] = useState(false)

  // Reveal gradient and titles after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll-driven shrink: full-screen → exact original hero dimensions
  useGSAP(() => {
    if (!triggerRef.current || !heroRef.current) return

    const vw = window.innerWidth
    const vh = window.innerHeight

    // Match the original hero: px-[50px] pt-[50px] + max-w-[1580px] mx-auto + aspect-video
    const containerWidth = Math.min(vw - 100, 1580)
    const targetHeight = containerWidth * (9 / 16)
    const hInset = (vw - containerWidth) / 2  // centers max-w-[1580px] within px-[50px]
    const bottomInset = vh - 50 - targetHeight

    gsap.fromTo(
      heroRef.current,
      { top: 0, right: 0, bottom: 0, left: 0 },
      {
        top: 50,
        right: hInset,
        bottom: bottomInset,
        left: hInset,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      }
    )
  })

  return (
    // Trigger div: provides scroll distance for the animation (100vh hero + 600px to shrink)
    <div ref={triggerRef} style={{ height: 'calc(100vh + 600px)' }}>
      {/* Sticky viewport: stays at top while trigger scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden bg-nearcon-cream">
        {/* Hero: absolutely positioned, GSAP animates inset from 0 → 50px */}
        <div
          ref={heroRef}
          className="absolute bg-black overflow-hidden"
          style={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Gradient — fades in after 8s */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 20%, transparent 45%)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            )}
          </AnimatePresence>

          {/* Titles — slide up and fade in after 8s */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                className="relative z-10 flex flex-col justify-end p-[60px] h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-[20px]">
                  <p
                    className="text-nearcon-cream opacity-70"
                    style={{ fontFamily: 'Helvetica', fontSize: '18px', fontWeight: 400 }}
                  >
                    FORT MASON CENTER - SAN FRANCISCO - FEB 23-24, 2026
                  </p>
                  <h1
                    className="text-nearcon-cream"
                    style={{ fontFamily: 'Helvetica', fontSize: '75px', fontWeight: 700, lineHeight: '65px' }}
                  >
                    Last NEARCON 2026
                  </h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
