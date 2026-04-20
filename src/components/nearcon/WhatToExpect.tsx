'use client'

import { motion } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'
import { FrameCorners } from '../ui/FrameCorners'
import styles from './WhatToExpect.module.css'

const items = [
  { color: '#87CEEB', highlight: 'Visionary keynotes', rest: ' from global AI and open technology pioneers.' },
  { color: '#FF1493', highlight: 'Live agent', rest: ' demos and hands-on workshops.' },
  { color: '#FFD700', highlight: 'the key', prefix: 'Deep dives on why privacy is ', suffix: ' to user-owned AI at scale.' },
  { color: '#90EE90', highlight: 'industry leaders', prefix: 'Debates between ', suffix: ' on adoption, ethics, and billion-dollar use cases.' },
  { color: '#87CEEB', highlight: 'dedicated builders', prefix: 'Partner activations and a ', suffix: ' lounge.' },
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
    <section className="bg-black text-nearcon-cream border-b border-text-primary px-[50px] py-[100px]" id="about">
      <div className="max-w-[1580px] mx-auto px-[50px] py-[50px] flex flex-col lg:flex-row gap-12 overflow-hidden relative mb-[50px]">
        <FrameCorners color="border-nearcon-cream" size="w-[70px] h-[70px]" />
        {/* Binary decoration column */}
        <motion.div
          className="hidden lg:flex lg:w-[35%] items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <video
            className="w-full h-full object-cover -mb-[50px]"
            autoPlay
            muted
            loop
            src="/img/CODE.mp4"
          />
        </motion.div>

        {/* Divider image */}
        <img src="/img/path806.png" alt="divider" className="hidden lg:block -mr-[56px]" />

        {/* Content column */}
        <div className="lg:w-[65%] flex flex-col justify-center">
          <motion.h2
            className="font-helvetica text-4xl md:text-5xl mb-12 ml-[50px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What to Expect?
          </motion.h2>

          <motion.ul
            className="space-y-[15px]"
            style={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 300 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
          >
            {items.map((item, idx) => (
              <motion.li key={idx} className="flex items-start gap-4" variants={listItemVariants}>
                <span className="mt-2 w-[14px] h-[14px] rounded-full shrink-0" style={{ backgroundColor: '#EBE3D3' }} />
                <p>
                  {item.prefix && item.prefix}
                  <span style={{ color: item.color }}>{item.highlight}</span>
                  {item.rest || item.suffix}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <img src="/img/text787-2.png" alt="text decoration" className="mt-12 ml-[50px] w-[70px]" />
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-[1580px] mx-auto w-full mb-[50px]">
        <button
          className={styles.largeButton}
          onClick={() => sendGAEvent('event', 'cta_click', { cta_name: 'apply_to_attend_what_to_expect' })}
        >
          <span className={styles.largeButtonInner}>APPLY TO ATTEND</span>
        </button>
      </div>

      {/* Bottom row */}
      <div className="max-w-[1580px] mx-auto w-full">
        <img src="/img/Group-41.png" alt="NearCon decoration" className="w-full h-auto border-b border-black" />
      </div>
    </section>
  )
}
