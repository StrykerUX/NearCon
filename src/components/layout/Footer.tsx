'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'

const orbs = [
  { size: 'w-32 h-32', bg: 'border border-black', zIndex: 'z-10', offset: '-mr-16' },
  { size: 'w-32 h-32', bg: 'border border-black bg-nearcon-green mix-blend-multiply', zIndex: 'z-20', offset: '-mr-16' },
  { size: 'w-32 h-32', bg: 'border border-black', zIndex: 'z-10', offset: '-mr-16' },
  { size: 'w-32 h-32', bg: 'border border-black', zIndex: 'z-10', offset: '-mr-16' },
]

const orbsRight = [
  { size: 'w-32 h-32', bg: 'border border-black', zIndex: 'z-10', offset: '-ml-16' },
  { size: 'w-32 h-32', bg: 'border border-black bg-nearcon-blue mix-blend-multiply', zIndex: 'z-20', offset: '-ml-16' },
  { size: 'w-32 h-32', bg: 'border border-black', zIndex: 'z-10', offset: '-ml-16' },
  { size: 'w-32 h-32', bg: 'border border-black bg-gradient-to-tr from-nearcon-coral to-nearcon-amber mix-blend-multiply', zIndex: 'z-20', offset: '' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    sendGAEvent('event', 'cta_click', { cta_name: 'newsletter_signup', email_domain: email.split('@')[1] })
    setEmail('')
  }

  return (
    <footer className="bg-nearcon-cream text-black pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        {/* Left — newsletter + links */}
        <div className="flex flex-col gap-6">
          <form onSubmit={handleNewsletter} className="flex gap-4 max-w-md">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border border-gray-400 px-4 py-2 w-full outline-none focus:border-black transition-colors font-light text-sm"
            />
            <button
              type="submit"
              className="bg-transparent text-black border border-black px-4 py-2 text-sm font-medium whitespace-nowrap hover:bg-black hover:text-nearcon-cream transition-colors"
            >
              Newsletter Sign Up
            </button>
          </form>

          <div className="flex flex-col gap-2 mt-4 text-sm font-medium">
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Follow us</p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:opacity-70" aria-label="Website">🌐</a>
              <a href="#" className="hover:opacity-70 font-bold" aria-label="X/Twitter">X</a>
              <a href="#" className="hover:opacity-70" aria-label="YouTube">▶</a>
              <a href="#" className="hover:opacity-70 font-bold" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>

        {/* Right — branding */}
        <div className="flex flex-col items-end justify-start gap-12">
          <h2 className="font-helvetica text-4xl">See you there!</h2>
          <div className="flex flex-col items-end font-helvetica text-3xl">
            <div className="flex items-center gap-1">
              Near
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4v16l16-16v16" />
              </svg>
              Con
            </div>
            <span className="text-xl font-light">2026</span>
          </div>
        </div>
      </motion.div>

      {/* Intersecting Orbs */}
      <motion.div
        className="w-full border border-black h-48 relative flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Dashed center line */}
        <div className="absolute w-full h-px border-t border-black border-dashed top-1/2 -translate-y-1/2" />

        <div className="relative w-full max-w-5xl h-full flex items-center justify-between px-8">
          {/* Left cluster */}
          {orbs.map((orb, i) => (
            <div key={i} className={`${orb.size} rounded-full ${orb.bg} shrink-0 relative ${orb.zIndex} ${orb.offset}`} />
          ))}

          {/* Center anchor */}
          <div className="w-2 h-2 bg-black rounded-full shrink-0 relative z-30 ml-4 mr-4" />

          {/* Center NEAR orb */}
          <div className="w-32 h-32 rounded-full border border-black bg-gradient-to-r from-nearcon-green to-nearcon-blue shrink-0 relative z-30 flex items-center justify-center shadow-lg">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M4 4v16l16-16v16" />
            </svg>
          </div>

          {/* Center anchor */}
          <div className="w-2 h-2 bg-black rounded-full shrink-0 relative z-30 ml-4 mr-4" />

          {/* Right cluster */}
          {orbsRight.map((orb, i) => (
            <div key={i} className={`${orb.size} rounded-full ${orb.bg} shrink-0 relative ${orb.zIndex} ${orb.offset}`} />
          ))}
        </div>

        <div className="absolute bottom-2 left-1/3 text-[8px] font-mono font-bold">9627170 | 14157999</div>
        <div className="absolute bottom-2 right-1/3 text-[8px] font-mono tracking-widest text-gray-500">-------------|</div>
      </motion.div>
    </footer>
  )
}
