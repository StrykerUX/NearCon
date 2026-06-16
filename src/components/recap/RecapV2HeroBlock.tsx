'use client'

import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { CountdownRecapV2 } from '../nearcon2027/CountdownRecapV2'
import { TickerBanner } from '../ui/TickerBanner'
import { RecapHeroV3 } from './RecapHeroV3'
import { FrameCorners } from '../ui/FrameCorners'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const TARGET = new Date('2027-03-09T19:00:00Z').getTime()

function getDaysLeft() {
  const distance = TARGET - Date.now()
  if (distance <= 0) return 0
  return Math.floor(distance / (1000 * 60 * 60 * 24))
}

export function RecapV2HeroBlock() {
  const firstSectionRef = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const widgetRef = useRef<HTMLDivElement>(null)
  const stRef = useRef<ScrollTrigger | null>(null)
  const widgetStRef = useRef<ScrollTrigger | null>(null)
  const [days] = useState(getDaysLeft)

  useGSAP(() => {
    if (!firstSectionRef.current || !videoWrapperRef.current || !widgetRef.current) return

    // — Fade out primera sección sincronizado con expansión del video —
    if (stRef.current) { stRef.current.kill(); stRef.current = null }

    gsap.set(firstSectionRef.current, { opacity: 1 })

    const tl = gsap.timeline({ defaults: { ease: 'none' } })
    tl.to(firstSectionRef.current, { opacity: 1, duration: 0.3 })
    tl.to(firstSectionRef.current, { opacity: 0, duration: 0.2 })
    tl.to(firstSectionRef.current, { opacity: 0, duration: 0.5 })

    stRef.current = ScrollTrigger.create({
      animation: tl,
      trigger: videoWrapperRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    })

    // — Widget flotante: aparece al pasar la sección del video, desaparece al volver —
    if (widgetStRef.current) { widgetStRef.current.kill(); widgetStRef.current = null }

    gsap.set(widgetRef.current, { opacity: 0, y: 16 })

    widgetStRef.current = ScrollTrigger.create({
      trigger: videoWrapperRef.current,
      start: 'bottom 70%',
      onEnter: () => gsap.to(widgetRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }),
      onLeaveBack: () => gsap.to(widgetRef.current, { opacity: 0, y: 16, duration: 0.3, ease: 'power2.in' }),
    })

    return () => {
      if (stRef.current) { stRef.current.kill(); stRef.current = null }
      if (widgetStRef.current) { widgetStRef.current.kill(); widgetStRef.current = null }
    }
  })

  return (
    <>
      {/* Primera sección: sticky, z-index bajo */}
      <div
        ref={firstSectionRef}
        style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#EBE3D3' }}
      >
        <div style={{ paddingTop: '50px' }}>
          <TickerBanner />
        </div>
        <CountdownRecapV2 />
        <TickerBanner />
        <div style={{ height: '80px' }} />
      </div>

      {/* Video: z-index superior, se superpone sobre la primera sección al expandirse */}
      <div ref={videoWrapperRef} style={{ position: 'relative', zIndex: 2 }}>
        <RecapHeroV3 mode="expand-shrink" />
      </div>

      {/* Widget flotante — aparece al pasar la sección del video */}
      <div
        ref={widgetRef}
        style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 100, opacity: 0 }}
      >
        <Link href="/2027-v2" className="group block cursor-pointer">
          <div
            className="transition-transform duration-300 group-hover:scale-[0.92]"
            style={{ position: 'relative', backgroundColor: '#000000', padding: '40px', minWidth: '180px' }}
          >
            {/* Corners inset 20px — mismo espacio borde↔corner que corner↔contenido */}
            <div style={{ position: 'absolute', inset: '20px' }}>
              <FrameCorners color="border-white" size="w-[14px] h-[14px]" />
            </div>

            <div className="transition-transform duration-300 group-hover:scale-[1.08]" style={{ transformOrigin: 'center' }}>
              <p style={{ fontFamily: 'Helvetica', fontSize: '18px', lineHeight: '22px', fontWeight: 700, background: 'linear-gradient(90deg, #65D56E, #59C2E8, #F98372, #F1B139)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                NEARCON 2027
              </p>
              <p style={{ fontFamily: 'Helvetica', fontSize: '18px', lineHeight: '22px', fontWeight: 400, color: '#EBE3D3', marginBottom: '10px' }}>
                is coming
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontFamily: 'Roboto Mono', fontSize: '48px', fontWeight: 300, lineHeight: 1, color: '#EBE3D3' }}>
                  {days}
                </span>
                <span style={{ fontFamily: 'Helvetica', fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: 'rgba(235,227,211,0.5)' }}>
                  DAYS
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
