'use client'

import { motion } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'

export function GetInvolved() {
  return (
    <section className="bg-nearcon-cream pb-8 md:pb-16">
      <div className="px-[50px] mb-8">
        <div className="max-w-[1580px] mx-auto">
          <div className="bg-black py-5 px-[40px]">
            <h2 className="font-helvetica text-[36px] text-nearcon-cream">Other Ways to Get Involved</h2>
          </div>
        </div>
      </div>

      <div className="px-[50px]">
      <div className="max-w-[1580px] mx-auto">
      <motion.div
        className="relative w-full aspect-[2/1] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 1000 500" fill="none" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="gradSponsor" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#65D56E" />
              <stop offset="100%" stopColor="#45B84E" />
            </linearGradient>
            <linearGradient id="gradPress" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B8B" />
              <stop offset="100%" stopColor="#F1B139" />
            </linearGradient>
            <linearGradient id="gradCenterOrb" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#59C2E8" />
              <stop offset="100%" stopColor="#65D56E" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <rect x="50" y="50" width="900" height="400" stroke="#000000" strokeWidth="0.5" />
          <line x1="500" y1="50" x2="500" y2="450" stroke="#000000" strokeWidth="0.5" />
          <line x1="50" y1="250" x2="950" y2="250" stroke="#000000" strokeWidth="0.5" />
          <line x1="250" y1="50" x2="250" y2="450" stroke="#000000" strokeWidth="0.5" />
          <line x1="750" y1="50" x2="750" y2="450" stroke="#000000" strokeWidth="0.5" />

          {/* Diamond */}
          <polygon points="500,50 950,250 500,450 50,250" stroke="#000000" strokeWidth="0.5" fill="none" />

          {/* Dashed Diagonals */}
          <line x1="50" y1="50" x2="950" y2="450" stroke="#000000" strokeWidth="0.5" strokeDasharray="6 6" />
          <line x1="50" y1="450" x2="950" y2="50" stroke="#000000" strokeWidth="0.5" strokeDasharray="6 6" />

          {/* Central Large Background Circle */}
          <circle cx="500" cy="250" r="200" stroke="#000000" strokeWidth="0.5" fill="none" />

          {/* CENTER NODE: Gradient Orb */}
          <circle cx="500" cy="250" r="110" fill="url(#gradCenterOrb)" />
          {[90, 122, 154, 186, 218, 250, 282, 314, 346, 378, 410].map((y, i) => {
            const rx = [55, 48, 41, 34, 27, 20, 27, 34, 41, 48, 55][i]
            const ry = [15, 13, 11, 9, 7, 5, 7, 9, 11, 13, 15][i]
            return <ellipse key={i} cx="500" cy={y} rx={rx} ry={ry} stroke="#000000" strokeWidth="0.5" fill="none" />
          })}

          {/* Grid Dots */}
          {[
            [50, 50], [500, 50], [950, 50],
            [50, 250], [950, 250],
            [50, 450], [500, 450], [950, 450],
            [275, 150], [725, 150], [275, 350], [725, 350],
          ].map((pt, i) => (
            <circle key={'dot' + i} cx={pt[0]} cy={pt[1]} r="5" fill="#000000" />
          ))}

          {/* LEFT NODE: Sponsor */}
          <g className="cursor-pointer" onClick={() => sendGAEvent('event', 'cta_click', { cta_name: 'become_a_sponsor_svg' })}>
            <circle cx="250" cy="250" r="90" stroke="#000000" strokeWidth="0.5" fill="none" />
            <ellipse cx="250" cy="250" rx="90" ry="30" stroke="#000000" strokeWidth="0.5" fill="none" />
            <ellipse cx="250" cy="250" rx="90" ry="60" stroke="#000000" strokeWidth="0.5" fill="none" />
            <ellipse cx="250" cy="250" rx="85" ry="25" fill="url(#gradSponsor)" stroke="#000000" strokeWidth="1" />
            <text x="250" y="256" textAnchor="middle" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="20" fill="#000000">
              Sponsor
            </text>
            <rect x="150" y="360" width="200" height="36" fill="#000000" />
            <text x="250" y="382" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="9" letterSpacing="2" fill="#65D56E">
              BECOME A SPONSOR
            </text>
          </g>

          {/* RIGHT NODE: Press */}
          <g className="cursor-pointer" onClick={() => sendGAEvent('event', 'cta_click', { cta_name: 'apply_for_press_svg' })}>
            <circle cx="750" cy="250" r="90" stroke="#000000" strokeWidth="0.5" fill="none" />
            <ellipse cx="750" cy="250" rx="90" ry="30" stroke="#000000" strokeWidth="0.5" fill="none" />
            <ellipse cx="750" cy="250" rx="90" ry="60" stroke="#000000" strokeWidth="0.5" fill="none" />
            <ellipse cx="750" cy="250" rx="85" ry="25" fill="url(#gradPress)" stroke="#000000" strokeWidth="1" />
            <text x="750" y="256" textAnchor="middle" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="20" fill="#000000">
              Press
            </text>
            <rect x="650" y="360" width="200" height="36" fill="#000000" />
            <text x="750" y="382" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="9" letterSpacing="2" fill="#FF6B8B">
              APPLY FOR PRESS
            </text>
          </g>
        </svg>
      </motion.div>
      </div>
      </div>
    </section>
  )
}
