'use client'

import { motion } from 'framer-motion'
import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { FrameCorners } from '../ui/FrameCorners'
import styles from '../nearcon/WhatToExpect.module.css'
import { Session as AirtableSession } from '@/lib/airtable'

interface Session {
  id: string
  time: string
  title: string
  description: string
  speaker: string
  role: string
  initials: string
  image?: string
}

interface DayGroup {
  day: number
  date: string
  stage: string
  sessions: Session[]
}

function mapSession(s: AirtableSession): Session {
  const first = s.speakerFirstName
  const last = s.speakerLastName
  const roleParts = [s.speakerRole, s.speakerCompany].filter(Boolean)
  return {
    id: s.id,
    time: s.startTime,
    title: s.sessionName,
    description: s.description,
    speaker: `${first} ${last}`.trim(),
    role: roleParts.join(' - '),
    initials: `${first[0] ?? ''}${last[0] ?? ''}`.toUpperCase(),
    image: s.speakerImage || undefined,
  }
}

const CAROUSEL_PHOTOS = [
  '/img/NEARCON_B-80.jpg',
  '/img/NEARCON_B-7.jpg',
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

const PhotoCard = ({ src }: { src: string }) => (
  <div
    data-card-type="photo"
    className="bg-black flex-shrink-0 relative w-[calc(100vw-50px)] md:w-[400px]"
    style={{ alignSelf: 'stretch' }}
  >
    {/* frame corners container — inset 20px from card edge */}
    <div className="absolute inset-[20px]">
      <FrameCorners color="border-[#EBE3D3]" size="w-[40px] h-[40px]" />
      {/* image — 25px inside from frame corners */}
      <div className="absolute inset-[25px] overflow-hidden">
        <Image
          src={src}
          alt="NEARCON 2026"
          fill
          className="object-cover"
          sizes="(max-width: 768px) calc(100vw - 50px), 400px"
        />
      </div>
    </div>
  </div>
)

const SessionCard = ({ session }: { session: Session }) => (
  <div
    data-card-type="session"
    className="bg-black text-nearcon-cream relative p-[50px] flex-shrink-0 w-[calc(100vw-50px)] md:w-[500px]"
    style={{ height: '350px' }}
  >
    {/* FrameCorners inset 25px from card edge, spanning full card height */}
    <div className="absolute inset-[25px] pointer-events-none">
      <FrameCorners color="border-[#EBE3D3]" size="w-[40px] h-[40px]" />
    </div>

      <div className="flex flex-col gap-3 h-full">
        {/* Time */}
        <div style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#EBE3D3', opacity: 0.6 }}>
          {session.time}
        </div>

        {/* Title + Description — flexible area */}
        <div className="flex flex-col flex-1 gap-1 min-h-0">
          <h3
            style={{ fontFamily: 'Helvetica', fontSize: '26px', fontWeight: 700, color: '#EBE3D3', lineHeight: '1.2' }}
          >
            {session.title}
          </h3>

          <p className="line-clamp-2" style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 300, color: '#EBE3D3', lineHeight: '1.5' }}>
            {session.description}
          </p>
        </div>

        {/* Speaker */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="w-10 h-10 overflow-hidden shrink-0 relative">
            {session.image ? (
              <Image src={session.image} alt={session.speaker} fill className="object-cover" sizes="40px" />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: '#444', fontFamily: 'Helvetica', fontSize: '13px', fontWeight: 700, color: '#000' }}
              >
                {session.initials}
              </div>
            )}
          </div>
          <div>
            <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#EBE3D3' }}>
              {session.speaker}
            </p>
            <p style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 300, color: '#EBE3D3', opacity: 0.6 }}>
              {session.role}
            </p>
          </div>
        </div>
      </div>
  </div>
)

const DaySection = ({ dayGroup, photos }: { dayGroup: DayGroup; photos: string[] }) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const interleaved: Array<{ type: 'session'; data: Session } | { type: 'photo'; src: string }> = []
  dayGroup.sessions.forEach((session, i) => {
    interleaved.push({ type: 'session', data: session })
    interleaved.push({ type: 'photo', src: photos[i % photos.length] })
  })
  const doubled = [...interleaved, ...interleaved]
  const isReverse = dayGroup.day > 1

  useLayoutEffect(() => {
    const track = trackRef.current
    const container = containerRef.current
    if (!track || !container) return

    const MOVE_DURATION = 3.0
    const PAUSE_DURATION = 5.0
    const GAP = 20

    const buildTimeline = () => {
      const isMobile = document.documentElement.clientWidth < 768
      const mobileWidth = container.clientWidth

      const items = Array.from(track.children) as HTMLElement[]

      // Set precise pixel widths so GSAP stops align exactly with the container edge
      items.forEach((item) => {
        if (isMobile) {
          item.style.width = `${mobileWidth}px`
        } else {
          item.style.width = item.dataset.cardType === 'photo' ? '400px' : '500px'
        }
      })

      const halfCount = items.length / 2
      const stops: number[] = [0]
      let acc = 0
      for (let i = 0; i < halfCount; i++) {
        acc += items[i].offsetWidth + GAP
        stops.push(acc)
      }
      const totalWidth = stops[halfCount]

      const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut' } })

      if (!isReverse) {
        gsap.set(track, { x: 0 })
        for (let i = 1; i <= halfCount; i++) {
          tl.to(track, { x: -stops[i], duration: MOVE_DURATION })
          tl.to(track, { duration: PAUSE_DURATION })
        }
        tl.set(track, { x: 0 })
      } else {
        gsap.set(track, { x: -totalWidth })
        for (let i = halfCount - 1; i >= 0; i--) {
          tl.to(track, { x: -stops[i], duration: MOVE_DURATION })
          tl.to(track, { duration: PAUSE_DURATION })
        }
        tl.set(track, { x: -totalWidth })
        tl.seek(MOVE_DURATION + PAUSE_DURATION, false)
      }

      return tl
    }

    let tl = buildTimeline()

    let resizeTimer: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        tl.kill()
        tl = buildTimeline()
      }, 150)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      tl.kill()
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
    }
  }, [isReverse])

  return (
    <div className={dayGroup.day > 1 ? 'mt-[40px]' : ''}>
      {/* Day header */}
      <motion.div
        className="bg-black text-nearcon-green px-[25px] md:px-8 py-3 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        style={{ fontFamily: 'Helvetica', fontSize: '14px', fontWeight: 700, letterSpacing: '1px' }}
      >
        DAY {String(dayGroup.day).padStart(2, '0')} — {dayGroup.date} · {dayGroup.stage}
      </motion.div>

      {/* Carousel */}
      <div ref={containerRef} className="overflow-hidden mt-[20px]">
        <div
          ref={trackRef}
          style={{ display: 'flex', gap: '20px', width: 'max-content' }}
        >
          {doubled.map((item, idx) =>
            item.type === 'session'
              ? <SessionCard key={idx} session={item.data} />
              : <PhotoCard key={idx} src={item.src} />
          )}
        </div>
      </div>
    </div>
  )
}

export function SessionHighlights({ sessions }: { sessions: AirtableSession[] }) {
  const days: DayGroup[] = [
    {
      day: 1,
      date: 'FEBRUARY 23, 2026',
      stage: 'SINGULARITY STAGE',
      sessions: sessions.filter(s => s.day === '2026-02-23').map(mapSession),
    },
    {
      day: 2,
      date: 'FEBRUARY 24, 2026',
      stage: 'SINGULARITY STAGE',
      sessions: sessions.filter(s => s.day === '2026-02-24').map(mapSession),
    },
  ].filter(d => d.sessions.length > 0)

  return (
    <section className="bg-nearcon-cream">
      {/* Title section */}
      <div className="w-full bg-cover bg-center px-[25px] md:px-[50px]" style={{ backgroundImage: 'url(/img/Group-43-3.png)' }}>
        <div className="max-w-[1580px] mx-auto">
          <motion.h2
            className="font-helvetica text-[30px] leading-[36px] md:text-[36px] md:leading-normal inline-block"
            style={{ backgroundColor: '#EBE3D3', padding: '10px 40px' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Session Highlights
          </motion.h2>
        </div>
      </div>

      {/* Content section */}
      <div className="px-[25px] md:px-[50px] pt-[50px] pb-[50px] md:pt-[100px] md:pb-[50px]">
        <div className="max-w-[1580px] mx-auto">
          {/* Days with sessions */}
          <div className="space-y-0">
            {days.map((dayGroup, i) => (
              <DaySection key={dayGroup.day} dayGroup={dayGroup} photos={CAROUSEL_PHOTOS.slice(i * 6, i * 6 + 6)} />
            ))}
          </div>

          {/* Button */}
          <motion.button
            className={`${styles.largeButton} mt-[50px]`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className={styles.largeButtonInner}>See All Sessions</span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}
