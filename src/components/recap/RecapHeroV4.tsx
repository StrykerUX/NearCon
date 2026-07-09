'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'


export function RecapHeroV4({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const [mounted, setMounted] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setMounted(true)
    const onResize = () => setWidth(window.innerWidth)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  if (!mounted) return <div className={`bg-black ${className ?? ''}`} style={style} />

  const showSideImages = width >= 1650
  const showCircles = width >= 900
  const showMobileDecor = width > 0 && width < 900
  const MOBILE_SIZE = Math.round(150 * 1.35 * 1.15)
  const MOBILE_OFFSET = Math.round(MOBILE_SIZE * (338 / 450)) // misma proporción de solape 1/4 que en desktop

  return (
    <div
      className={`relative w-full bg-black overflow-hidden text-white flex items-center justify-center selection:bg-nearcon-green selection:text-black ${className ?? ''}`}
      style={style}
    >


      <AnimatePresence>
        {showCircles && (
          <>
            {/* Dashed circle izquierdo — 1/4 solapado con la imagen */}
            <motion.svg
              key="circle-left"
              className="absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none"
              style={{ left: 'calc(2% - 338px)', width: 450, height: 450 }}
              viewBox="0 0 450 450"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80, transition: { duration: 0.5, ease: 'easeIn' } }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            >
              <circle cx="225" cy="225" r="222" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="10 12" />
            </motion.svg>

            {/* Dashed circle derecho — 1/4 solapado con la imagen */}
            <motion.svg
              key="circle-right"
              className="absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none"
              style={{ right: 'calc(2% - 338px)', width: 450, height: 450 }}
              viewBox="0 0 450 450"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80, transition: { duration: 0.5, ease: 'easeIn' } }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            >
              <circle cx="225" cy="225" r="222" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="10 12" />
            </motion.svg>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSideImages && (
          <>
            {/* Left circle image */}
            <motion.div
              key="side-image-left"
              className="absolute left-[2%] top-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -150, transition: { duration: 0.5, ease: 'easeIn' } }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            >
              <Image
                src="/img/Group.png"
                alt=""
                width={450}
                height={450}
                className="w-[450px] h-[450px]"
              />
            </motion.div>

            {/* Right circle image */}
            <motion.div
              key="side-image-right"
              className="absolute right-[2%] top-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 150, transition: { duration: 0.5, ease: 'easeIn' } }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            >
              <Image
                src="/img/Group (1).png"
                alt=""
                width={450}
                height={450}
                className="w-[450px] h-[450px]"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMobileDecor && (
          <>
            {/* Dashed circle superior — mobile, hero de desktop en vertical */}
            <div
              key="circle-top-mobile"
              className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
              style={{ top: `calc(2% - ${MOBILE_OFFSET}px)`, width: MOBILE_SIZE, height: MOBILE_SIZE }}
            >
              <motion.svg
                width={MOBILE_SIZE}
                height={MOBILE_SIZE}
                viewBox="0 0 450 450"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40, transition: { duration: 0.5, ease: 'easeIn' } }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
              >
                <circle cx="225" cy="225" r="222" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="10 12" />
              </motion.svg>
            </div>

            {/* Dashed circle inferior — mobile */}
            <div
              key="circle-bottom-mobile"
              className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
              style={{ bottom: `calc(2% - ${MOBILE_OFFSET}px)`, width: MOBILE_SIZE, height: MOBILE_SIZE }}
            >
              <motion.svg
                width={MOBILE_SIZE}
                height={MOBILE_SIZE}
                viewBox="0 0 450 450"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40, transition: { duration: 0.5, ease: 'easeIn' } }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              >
                <circle cx="225" cy="225" r="222" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="10 12" />
              </motion.svg>
            </div>

            {/* Imagen superior — mobile */}
            <div
              key="image-top-mobile"
              className="absolute top-[2%] left-1/2 -translate-x-1/2 z-20"
              style={{ width: MOBILE_SIZE, height: MOBILE_SIZE }}
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -150, transition: { duration: 0.5, ease: 'easeIn' } }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
              >
                <Image
                  src="/img/Group.png"
                  alt=""
                  width={450}
                  height={450}
                  style={{ width: MOBILE_SIZE, height: MOBILE_SIZE, maxWidth: 'none' }}
                />
              </motion.div>
            </div>

            {/* Imagen inferior — mobile */}
            <div
              key="image-bottom-mobile"
              className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-20"
              style={{ width: MOBILE_SIZE, height: MOBILE_SIZE }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 150, transition: { duration: 0.5, ease: 'easeIn' } }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              >
                <Image
                  src="/img/Group (1).png"
                  alt=""
                  width={450}
                  height={450}
                  style={{ width: MOBILE_SIZE, height: MOBILE_SIZE, maxWidth: 'none' }}
                />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Central image */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="/img/Group 9.png"
          alt="NEARCON 2027"
          width={1198}
          height={1198}
          className={showSideImages ? '-translate-x-[30px]' : ''}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: showMobileDecor ? 'calc(100% + 15px)' : '100%',
            maxHeight: '100%',
            transform: showMobileDecor ? 'translate(-15px, -15px)' : undefined,
          }}
          priority
        />
      </motion.div>
    </div>
  )
}
