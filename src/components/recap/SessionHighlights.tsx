'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
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

const eventVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export function SessionHighlights() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1)
  const sessions = SESSIONS[activeDay]

  return (
    <section className="bg-nearcon-cream">
      {/* Title section */}
      <div className="w-full bg-cover bg-center mt-[100px] px-[50px]" style={{ backgroundImage: 'url(/img/Group-43-3.png)' }}>
        <div className="max-w-[1580px] mx-auto">
          <motion.h2
            className="font-helvetica text-4xl md:text-5xl inline-block"
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
      <div className="px-[50px] py-[100px]">
      <div className="max-w-[1580px] mx-auto">

        {/* Day tabs */}
        <div className="flex gap-4 mb-12 mt-12">
          {([1, 2] as const).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-2 font-bold border border-black transition-colors ${
                activeDay === day ? 'bg-black text-nearcon-cream' : 'bg-transparent text-black hover:bg-gray-200'
              }`}
              style={{ fontFamily: 'Helvetica', fontSize: '20px', fontWeight: 700 }}
            >
              {day === 1 ? 'February 23, 2026' : 'February 24, 2026'}
            </button>
          ))}
        </div>

        {/* Sessions list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={listVariants}
          >
            {sessions.map((session) => (
              <motion.div
                key={session.id}
                className="bg-black text-nearcon-cream relative p-[30px]"
                variants={eventVariants}
              >
                <div className="relative p-[30px]">
                  <FrameCorners color="border-[#EBE3D3]" size="w-[40px] h-[40px]" />

                  <div className="flex items-start justify-between gap-8">
                    {/* Left — time */}
                    <div
                      className="shrink-0"
                      style={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, color: '#EBE3D3', minWidth: '70px' }}
                    >
                      {session.time}
                    </div>

                    {/* Center — content */}
                    <div className="flex-1">
                      <h3
                        className="mb-2"
                        style={{ fontFamily: 'Helvetica', fontSize: '26px', fontWeight: 700, color: '#EBE3D3' }}
                      >
                        {session.title}
                      </h3>
                      <p
                        style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 300, color: '#EBE3D3', lineHeight: '1.5' }}
                      >
                        {session.description}
                      </p>
                    </div>

                    {/* Right — speaker */}
                    <div className="shrink-0 flex flex-col items-end gap-3 ml-8">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: '#444', fontFamily: 'Helvetica', fontSize: '14px', fontWeight: 700, color: '#000' }}
                      >
                        {session.initials}
                      </div>

                      <div className="text-right">
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
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

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
