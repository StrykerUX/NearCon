'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'
import { FrameCorners } from '../ui/FrameCorners'
import { SCHEDULE_EVENTS } from '@/lib/data'
import type { Speaker } from '@/lib/types'

function SpeakerAvatar({ speaker, size = 'md' }: { speaker: Speaker; size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'w-10 h-10' : 'w-12 h-12'
  return (
    <div className="flex items-center gap-4">
      <div className={`${dim} overflow-hidden shrink-0 relative`} style={{ background: speaker.accentColor }}>
        <Image
          src={speaker.imageUrl}
          alt={speaker.name}
          fill
          className="object-cover mix-blend-multiply"
          sizes="48px"
        />
      </div>
      <div className="text-sm leading-tight">
        <p className="font-bold">{speaker.name}</p>
        <p className="text-[10px] text-gray-400">
          {speaker.organization} — {speaker.title}
        </p>
      </div>
    </div>
  )
}

const eventVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1)

  const filtered = SCHEDULE_EVENTS.filter((e) => e.day === activeDay)

  return (
    <section className="px-[50px] py-16 border-b border-text-primary" id="schedule">
      <motion.h2
        className="font-helvetica text-3xl mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        Live Schedule
      </motion.h2>

      {/* Day tabs */}
      <div className="flex gap-4 mb-8">
        {([1, 2] as const).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-6 py-2 text-sm font-bold border border-black transition-colors ${
              activeDay === day ? 'bg-black text-nearcon-cream' : 'bg-transparent text-black hover:bg-gray-200'
            }`}
          >
            {day === 1 ? 'February 23, 2026' : 'February 24, 2026'}
          </button>
        ))}
      </div>

      {/* Events list */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          {filtered.length === 0 ? (
            <motion.p className="text-gray-500 py-12 text-center" variants={eventVariants}>
              Schedule for Day {activeDay} coming soon.
            </motion.p>
          ) : (
            filtered.map((event) => (
              <motion.div
                key={event.id}
                className="bg-black text-nearcon-cream p-6 relative flex flex-col md:flex-row gap-8"
                variants={eventVariants}
              >
                <FrameCorners color="border-gray-600" size="w-6 h-6" />

                {/* Left — event info */}
                <div className="flex-1 md:pr-8">
                  <div className="flex items-center gap-4 text-sm font-mono text-gray-300 mb-4">
                    <span>{event.startTime}</span>
                    <div className="h-px bg-gray-600 flex-1" />
                    <span>{event.endTime}</span>
                  </div>
                  <p className="text-sm font-light text-gray-300 mb-2">Location: {event.location}</p>
                  <h3 className="font-helvetica text-2xl md:text-3xl mb-3">{event.title}</h3>
                  {event.description && (
                    <p className="text-sm font-light text-gray-400 leading-relaxed max-w-3xl">{event.description}</p>
                  )}
                </div>

                {/* Right — speakers */}
                <div className="md:w-[300px] md:border-l md:border-dotted md:border-gray-600 md:pl-8 flex flex-col justify-center">
                  <span className="text-xl font-helvetica mb-4">Speakers</span>
                  <div className="space-y-4">
                    {event.speakers.map((s, i) => (
                      <div
                        key={s.id}
                        className={`${i < event.speakers.length - 1 ? 'pb-4 border-b border-gray-800' : ''}`}
                      >
                        <SpeakerAvatar speaker={s} size={event.speakers.length > 1 ? 'sm' : 'md'} />
                      </div>
                    ))}
                  </div>

                  {event.moderator && (
                    <>
                      <span className="text-xl font-helvetica mt-6 mb-4">Moderator</span>
                      <SpeakerAvatar speaker={event.moderator} size="sm" />
                    </>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </AnimatePresence>

      {/* See all sessions CTA */}
      <motion.button
        className="w-full bg-gradient-to-r from-nearcon-green to-nearcon-blue p-4 text-center hover:opacity-90 transition-opacity mt-8"
        onClick={() => sendGAEvent('event', 'cta_click', { cta_name: 'see_all_sessions' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span className="text-black font-bold tracking-widest text-sm uppercase">See All Sessions</span>
      </motion.button>
    </section>
  )
}
