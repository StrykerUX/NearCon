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
  const [showScroll, setShowScroll] = useState(false)

  // Reveal gradient and titles after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  // Show scroll indicator 500ms after content, hide on first scroll
  useEffect(() => {
    if (!showContent) return
    const timer = setTimeout(() => setShowScroll(true), 500)
    const handleScroll = () => setShowScroll(false)
    window.addEventListener('scroll', handleScroll, { once: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showContent])

  // Scroll-driven shrink: full-screen → exact original hero dimensions
  const stRef = useRef<ScrollTrigger | null>(null)

  useGSAP(() => {
    if (!triggerRef.current || !heroRef.current) return

    const hero = heroRef.current
    const trigger = triggerRef.current

    const setup = () => {
      if (stRef.current) { stRef.current.kill(); stRef.current = null }
      gsap.set(hero, { top: 0, right: 0, bottom: 0, left: 0 })

      // Use clientWidth to match CSS layout width (excludes scrollbar)
      // Match lateral padding: 25px on mobile (<768px), 50px on desktop
      const vw = document.documentElement.clientWidth
      const sidePadding = vw < 768 ? 25 : 50
      const containerWidth = Math.min(vw - sidePadding * 2, 1580)
      const hInset = (vw - containerWidth) / 2

      gsap.fromTo(
        hero,
        { top: 0, right: 0, bottom: 0, left: 0 },
        {
          top: 50,
          right: hInset,
          bottom: 0,
          left: hInset,
          ease: 'none',
          scrollTrigger: {
            trigger,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            onRefresh: (self) => { stRef.current = self },
          },
        }
      )
    }

    setup()

    let resizeTimer: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(setup, 150)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
      if (stRef.current) stRef.current.kill()
    }
  })

  return (
    // Trigger div: provides scroll distance for the animation (100vh hero + 600px to shrink)
    <div ref={triggerRef} style={{ height: 'calc(100vh + 600px)' }} className="bg-nearcon-cream">
      {/* Sticky viewport: stays at top while trigger scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden">
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

          {/* Titles — slide up and fade in after 5s */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                className="relative z-10 flex flex-col justify-end p-6 md:p-[60px] h-full"
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
                    className="text-nearcon-cream text-[46px] md:text-[75px]"
                  style={{ fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '1.1' }}
                  >
                    NEARCON 2026
                  </h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll indicator */}
          <AnimatePresence>
            {showScroll && (
              <motion.div
                className="absolute top-[30px] left-1/2 -translate-x-1/2 md:top-auto md:bottom-[40px] md:left-auto md:right-[50px] md:translate-x-0 z-20 flex flex-col items-center gap-[10px]"
                style={{ padding: '20px 24px 24px', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%, transparent 75%)' }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: 'Helvetica',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: 'rgba(235, 227, 211, 0.75)',
                  }}
                >
                  <motion.span
                    style={{ display: 'inline-block', originX: '100%', originY: '50%' }}
                    animate={{ scaleX: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    [
                  </motion.span>
                  <span>SCROLL</span>
                  <motion.span
                    style={{ display: 'inline-block', originX: '0%', originY: '50%' }}
                    animate={{ scaleX: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    ]
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
