'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FrameCorners } from '../ui/FrameCorners'

const PHOTOS = [
  '/img/NEARCON_B-80.jpg',
  '/img/NEARCON_B-85.jpg',
  '/img/NEARCON_C-105.jpg',
  '/img/NEARCON_B-15.jpg',
  '/img/NEARCON_B-94.jpg',
  '/img/NEARCON_C-106.jpg',
  '/img/NEARCON_C-129.jpg',
  '/img/NEARCON_A-28.jpg',
  '/img/NEARCON_A-9.jpg',
  '/img/NEARCON_B-88.jpg',
  '/img/NEARCON_C-123.jpg',
]

const GAP = 30

function PhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const doubled = [...PHOTOS, ...PHOTOS]
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    const track = trackRef.current
    const container = containerRef.current
    if (!track || !container) return

    const build = () => {
      const h = container.offsetHeight
      if (!h) return
      const photoSize = h
      const totalWidth = PHOTOS.length * (photoSize + GAP)

      // aplica tamaño exacto a cada foto
      Array.from(track.children).forEach((el) => {
        const div = el as HTMLElement
        div.style.width = `${photoSize}px`
        div.style.height = `${photoSize}px`
      })

      tlRef.current?.kill()
      gsap.set(track, { x: 0 })
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'none' } })
      tl.to(track, { x: -totalWidth, duration: 28 })
      tlRef.current = tl
    }

    build()
    const ro = new ResizeObserver(build)
    ro.observe(container)

    return () => { tlRef.current?.kill(); ro.disconnect() }
  }, [])

  return (
    <div ref={containerRef} className="overflow-hidden w-full h-full">
      <div
        ref={trackRef}
        style={{ display: 'flex', gap: `${GAP}px`, width: 'max-content' }}
      >
        {doubled.map((src, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 p-[12px]"
          >
            <FrameCorners color="border-[#EBE3D3]" size="w-[40px] h-[40px]" />
            <div className="absolute inset-[12px] overflow-hidden">
              <Image
                src={src}
                alt={`NEARCON 2026 photo ${(idx % PHOTOS.length) + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function RecapCTA2027V2() {
  return (
    <section className="bg-black overflow-hidden pt-[100px] pb-[100px] md:pt-[125px] md:pb-[125px]">

      {/* Top banner */}
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: 'url(/img/Group-3-1.png)', height: '55px' }} />

      {/* Main content */}
      <div className="px-[25px] md:px-[50px] py-[60px] md:py-[80px]">
      <div className="max-w-[1580px] mx-auto flex flex-col md:flex-row gap-[50px] md:gap-[80px] items-stretch">

        {/* Left — texto */}
        <motion.div
          className="w-full md:w-[55%] flex flex-col justify-between gap-[40px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-[24px]">
            <h2
              style={{ fontFamily: 'Helvetica', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 60px)', lineHeight: 1.1 }}
            >
              <span className="text-nearcon-cream block">Missed NEARCON 2026?</span>
              <span style={{ background: 'linear-gradient(90deg, #65D56E, #59C2E8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>We got you</span>
            </h2>

            <p style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 300, color: 'rgba(235,227,211,0.7)', lineHeight: 1.7 }}>
              85+ speakers. 48 sessions. Fort Mason Center, San Francisco. Two days at the intersection of AI, privacy, and the open web — all recapped in one page.
            </p>
          </div>

          <a
            href="/recap"
            className="inline-block self-start px-[18px] md:px-[28px] py-[13px] whitespace-nowrap text-[13px] md:text-[14px]"
            style={{
              fontFamily: 'Helvetica',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#000000',
              background: 'linear-gradient(90deg, #F98372, #F1B139)',
            }}
          >
            VIEW THE NEARCON 2026 RECAP
          </a>
        </motion.div>

        {/* Right — carrusel horizontal de fotos cuadradas */}
        <motion.div
          className="w-full md:w-[45%] h-[280px] md:h-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <PhotoCarousel />
        </motion.div>

      </div>
      </div>

      {/* Bottom banner */}
      <div className="w-full" style={{ height: '55px' }}>
        <img src="/img/Group-3-1.png" alt="" className="w-full h-full object-cover" />
      </div>

    </section>
  )
}
