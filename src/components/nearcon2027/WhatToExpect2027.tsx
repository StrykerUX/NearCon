'use client'

import { motion } from 'framer-motion'
import { Brain, Hammer, Globe, Lock, type LucideIcon } from 'lucide-react'

interface Card {
  num: string
  icon: LucideIcon
  titleA: string
  titleB: string
  description: string
}

const cards: Card[] = [
  {
    num: '01',
    icon: Brain,
    titleA: 'Thought',
    titleB: 'Leadership',
    description: 'Keynotes and panels from the builders defining the next decade of AI, privacy, and open infrastructure. No hype. No filler.',
  },
  {
    num: '02',
    icon: Hammer,
    titleA: 'Builder',
    titleB: 'Formats',
    description: 'Workshops, demos, hackathons, and sandbox environments where shipping matters more than slides.',
  },
  {
    num: '03',
    icon: Globe,
    titleA: 'Ecosystem',
    titleB: 'Gathering',
    description: 'The NEAR ecosystem — protocols, projects, partners — in one room. High-signal networking with a curated, relevant audience.',
  },
  {
    num: '04',
    icon: Lock,
    titleA: 'Private.',
    titleB: 'Intelligent. Yours.',
    description: 'Building an AI economy on users\' terms — where ownership, privacy, and open access are non-negotiable defaults.',
  },
]

export function WhatToExpect2027() {
  return (
    <section className="bg-black text-nearcon-cream">
      {/* Section header */}
      <div className="px-[25px] md:px-[50px] pt-[70px] md:pt-[100px]">
        <div className="max-w-[1580px] mx-auto">
          <div className="bg-nearcon-cream py-5 px-[25px] md:px-[40px] inline-block">
            <h2
              className="text-black text-[30px] leading-[36px] md:text-[36px] md:leading-normal"
              style={{ fontFamily: 'Helvetica', fontWeight: 700 }}
            >
              What to Expect
            </h2>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="px-[25px] md:px-[50px] pt-[50px] pb-[80px] md:pb-[120px]">
        <div className="max-w-[1580px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-nearcon-cream/10">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="relative bg-black p-[30px] md:p-[40px] flex flex-col gap-[20px] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Decorative number */}
              <span
                className="absolute top-[16px] right-[20px] select-none pointer-events-none"
                style={{
                  fontFamily: 'Helvetica',
                  fontSize: '100px',
                  fontWeight: 700,
                  lineHeight: 1,
                  color: 'rgba(255,255,255,0.04)',
                }}
              >
                {card.num}
              </span>

              {/* Icon */}
              <card.icon size={60} color="#65D56E" strokeWidth={1.2} />

              {/* Title */}
              <div>
                <p style={{ fontFamily: 'Helvetica', fontSize: '22px', fontWeight: 700, color: '#EBE3D3', lineHeight: 1.15 }}>
                  {card.titleA}
                </p>
                <p style={{ fontFamily: 'Helvetica', fontSize: '22px', fontWeight: 700, color: '#65D56E', lineHeight: 1.15 }}>
                  {card.titleB}
                </p>
              </div>

              {/* Description */}
              <p style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 300, color: 'rgba(235,227,211,0.65)', lineHeight: 1.65 }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
