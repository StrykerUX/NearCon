'use client'

import { motion } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { FrameCorners } from '../ui/FrameCorners'
import styles from '../nearcon/WhatToExpect.module.css'

interface Session {
  id: string
  time: string
  title: string
  description: string
  speaker: string
  role: string
  initials: string
}

const SESSIONS: Record<number, Session[]> = {
  1: [
    {
      id: '1',
      time: '9:00 AM',
      title: 'Welcome Remarks',
      description: 'Opening NEARCON 2026 — Setting the tone for two days at the intersection of AI, privacy, and the open web.',
      speaker: 'Illia Polosukhun',
      role: 'CEO - NEAR Protocol',
      initials: 'IP'
    },
    {
      id: '2',
      time: '10:00 AM',
      title: 'DeFi Unbound: The Future of Finance',
      description: 'How agentic systems are rebuilding financial infrastructure from the ground up, enabling programmable, autonomous commerce.',
      speaker: 'Jessica Scrimale',
      role: 'Chief Operating Officer - NEAR Foundation',
      initials: 'JS'
    },
    {
      id: '3',
      time: '11:00 AM',
      title: 'The Unified Commerce Layer for the Agentic Era',
      description: 'A new primitives framework for agent-to-agent transactions, identity, and trust in a world where AI is the buyer and seller.',
      speaker: 'Lukasz Kaiser',
      role: 'Research Lead - Near AI',
      initials: 'LK'
    },
    {
      id: '4',
      time: '2:00 PM',
      title: 'Autonomous Systems in Practice',
      description: 'From research benchmarks to real-world deployment — what it actually takes to ship an autonomous system into production.',
      speaker: 'Ilya Polosukhun + Ashish Vaswani',
      role: 'Panel',
      initials: 'AV'
    },
    {
      id: '5',
      time: '4:00 PM',
      title: 'Scaling Intelligence and Generalization',
      description: 'What comes after scale? Reasoning, adaptation, and the architecture decisions that will define the next generation of models.',
      speaker: 'Lukasz Kaiser',
      role: 'Research Lead - Near AI',
      initials: 'LK'
    }
  ],
  2: [
    {
      id: '6',
      time: '9:00 AM',
      title: 'AI in Production: Where Automation Meets Reality',
      description: 'The gap between demos and deployment is real. A practical breakdown of what\'s working, what\'s not, and where the biggest leverage points are.',
      speaker: 'Anupam Datta',
      role: 'Founder - Airbus',
      initials: 'AD'
    },
    {
      id: '7',
      time: '11:00 AM',
      title: 'Why Agents Shouldn\'t Hold Their Own Keys',
      description: 'Introducing the Shade Agent Framework — a new model for secure, accountable agent execution that doesn\'t compromise autonomy.',
      speaker: 'Haseeb Qureshi',
      role: 'Managing Partner - Dragonfly',
      initials: 'HQ'
    },
    {
      id: '8',
      time: '2:00 PM',
      title: 'Privacy is Fundamental: Verifying Privacy and Transparency in the Age of AI',
      description: 'How zero-knowledge proofs, private cloud, and verifiable computation become the infrastructure of a trustworthy Internet.',
      speaker: 'Erik Voorhees',
      role: 'Founder - Vertec',
      initials: 'EV'
    },
    {
      id: '9',
      time: '3:00 PM',
      title: 'The Future of Stablecoin Swaps: NEAR Intents',
      description: 'A deep look at NEAR\'s intent-based transaction model and why it\'s the most promising path to real-world crypto utility.',
      speaker: 'Alex Skidanov',
      role: 'Co-Founder - NEAR Protocol',
      initials: 'AS'
    },
    {
      id: '10',
      time: '6:00 PM',
      title: 'Closing Remarks',
      description: 'Two days. Hundreds of conversations. One direction. What we build next, together.',
      speaker: 'Illia Polosukhun',
      role: 'CEO - NEAR Protocol',
      initials: 'IP'
    }
  ]
}

interface DayGroup {
  day: number
  date: string
  stage: string
  sessions: Session[]
}

const DAYS: DayGroup[] = [
  {
    day: 1,
    date: 'FEBRUARY 23, 2026',
    stage: 'SINGULARITY STAGE',
    sessions: SESSIONS[1]
  },
  {
    day: 2,
    date: 'FEBRUARY 24, 2026',
    stage: 'SINGULARITY STAGE',
    sessions: SESSIONS[2]
  }
]

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

      <div className="flex flex-col gap-4 h-full">
        {/* Time */}
        <div style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#EBE3D3', opacity: 0.6 }}>
          {session.time}
        </div>

        {/* Title */}
        <h3
          style={{ fontFamily: 'Helvetica', fontSize: '26px', fontWeight: 700, color: '#EBE3D3', lineHeight: '1.2' }}
        >
          {session.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-1" style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 300, color: '#EBE3D3', lineHeight: '1.5' }}>
          {session.description}
        </p>

        {/* Speaker */}
        <div className="flex items-center gap-3 mt-auto">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#444', fontFamily: 'Helvetica', fontSize: '13px', fontWeight: 700, color: '#000' }}
          >
            {session.initials}
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

export function SessionHighlights() {
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
      <div className="px-[25px] md:px-[50px] pt-[50px] pb-[75px] md:pt-[100px] md:pb-[100px]">
        <div className="max-w-[1580px] mx-auto">
          {/* Days with sessions */}
          <div className="space-y-0">
            {DAYS.map((dayGroup, i) => (
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
