'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


export function RecapHeroV4({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className={`bg-black ${className ?? ''}`} style={style} />

  return (
    <div
      className={`relative w-full bg-black overflow-hidden text-white flex items-center justify-center selection:bg-nearcon-green selection:text-black ${className ?? ''}`}
      style={style}
    >


      {/* Dashed circle izquierdo — 1/4 solapado con la imagen */}
      <svg
        className="absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none"
        style={{ left: 'calc(2% - 338px)', width: 450, height: 450 }}
        viewBox="0 0 450 450"
      >
        <circle cx="225" cy="225" r="222" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="10 12" />
      </svg>

      {/* Left circle image */}
      <motion.div
        className="absolute left-[2%] top-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
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

      {/* Dashed circle derecho — 1/4 solapado con la imagen */}
      <svg
        className="absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none"
        style={{ right: 'calc(2% - 338px)', width: 450, height: 450 }}
        viewBox="0 0 450 450"
      >
        <circle cx="225" cy="225" r="222" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="10 12" />
      </svg>

      {/* Right circle image */}
      <motion.div
        className="absolute right-[2%] top-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
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
          className="h-full w-auto -translate-x-[30px]"
          priority
        />
      </motion.div>
    </div>
  )
}
