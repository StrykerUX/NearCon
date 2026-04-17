'use client'

import { motion } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'
import { FrameCorners } from '../ui/FrameCorners'

const items = [
  { color: 'text-nearcon-blue', highlight: 'Visionary keynotes', rest: ' from global AI and open technology pioneers.' },
  { color: 'text-nearcon-coral', highlight: 'Live agent', rest: ' demos and hands-on workshops.' },
  { color: 'text-nearcon-amber', highlight: 'the key', prefix: 'Deep dives on why privacy is ', suffix: ' to user-owned AI at scale.' },
  { color: 'text-nearcon-green', highlight: 'industry leaders', prefix: 'Debates between ', suffix: ' on adoption, ethics, and billion-dollar use cases.' },
  { color: 'text-nearcon-blue', highlight: 'dedicated builders', prefix: 'Partner activations and a ', suffix: ' lounge.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
}

export function WhatToExpect() {
  return (
    <section className="bg-black text-nearcon-cream border-b border-text-primary" id="about">
      <div className="max-w-[1580px] mx-auto px-[50px] py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Binary decoration column */}
        <motion.div
          className="hidden lg:block lg:col-span-4 font-mono text-xs leading-none text-gray-500 overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FrameCorners color="border-nearcon-cream" />
          <div className="p-4 whitespace-pre">
{`0...1.1.1.1.0..1  AURTWMVGL
1..1...1...0..1.  AI SKXKDHF
0..1.0..1..1..0.  C \\ BPUIJRX
1..0..1...1.1.1.  KX \\ TDRK \\\\
.0.1.0...1..0.1.  IVI RTXGLY
1...1.0.1.1..0..  T \\ DOZTRDP
..0...1...1.1...  OM \\\\ POVXG
1...1.0.1.0..0..  GMTBFHE\\S
.1.0..1...0..1..  AOAMRZQSV
...1.0...1..1.0.  OXTXOWGVT
0..1.0.1.0.0.1.0  XCMZTS\\LL
..1..1...1...1..  V\\XKGXTI\\
0.1.0..1..0..1..  PXLT\\IYD\\
.1...1..1...0.1.  FTZ\\\\\\\\\\\\
1.0.0...1..1..1.  TOT\\\\\\\\\\
...1...1.0...1..  LH\\\\\\\\IG\\
0..0..1..1.0..1.  XG\\\\\\\\\\\\
...1.0.1...1...0  V\\\\A\\\\\\\\\\
..1..0..1.0...1.  Z\\\\\\\\\\\\\\
1.0..1...0..1..1  A\\\\\\\\D\\\\\\`}
          </div>
        </motion.div>

        {/* Content column */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.h2
            className="font-helvetica text-4xl md:text-5xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What to Expect?
          </motion.h2>

          <motion.ul
            className="space-y-6 text-lg md:text-xl font-light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
          >
            {items.map((item, idx) => (
              <motion.li key={idx} className="flex items-start gap-4" variants={listItemVariants}>
                <span className="mt-2 w-2 h-2 rounded-full bg-gray-500 shrink-0" />
                <p>
                  {item.prefix && item.prefix}
                  <span className={item.color}>{item.highlight}</span>
                  {item.rest || item.suffix}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* CTA Banner */}
      <button
        className="w-full bg-gradient-to-r from-nearcon-green to-nearcon-blue p-4 text-center hover:opacity-90 transition-opacity border-t border-b border-black"
        onClick={() => sendGAEvent('event', 'cta_click', { cta_name: 'apply_to_attend_what_to_expect' })}
      >
        <span className="text-black font-bold tracking-widest text-sm">APPLY TO ATTEND</span>
      </button>

      {/* Bottom row */}
      <div className="flex items-center justify-between p-6 border-b border-black">
        <div className="w-8 h-8 rounded-full border border-gray-500 relative">
          <div className="absolute inset-0 rounded-full border border-gray-600 scale-110" />
          <div className="absolute inset-0 rounded-full border border-gray-700 scale-125" />
        </div>
        <div className="flex items-center gap-1 font-helvetica text-xl text-nearcon-cream">
          Near
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4v16l16-16v16" />
          </svg>
          Con
          <span className="text-xs align-top ml-1 opacity-50">2026</span>
        </div>
      </div>
    </section>
  )
}
