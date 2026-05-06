'use client'

import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'

const tracks = [
  {
    icon: '🔒',
    name: 'The Private Web and Private Life',
    description: 'Consumer apps or Web3 widgets where privacy is the default across finance, identity, and user data',
    color: '#87CEEB',
  },
  {
    icon: '🤖',
    name: 'AI That Works for You',
    description: 'Private cloud, private chat, Shade Agents and agentic payments to build user-serving AI',
    color: '#FF1493',
  },
  {
    icon: '🌐',
    name: 'Open Society: From Finance to the Real World',
    description: 'Solutions integrating stablecoins, NEAR Intents, or products that turn real-world facts into reliable on-chain outcomes',
    color: '#4A9EFF',
  },
  {
    icon: '⭐',
    name: 'NEAR-Only Bonus Bounty',
    description: 'Additional recognition for teams that submitted to one of the above tracks using exclusively NEAR-native capabilities',
    color: '#EDCC19',
  },
]

export function InnovationSandbox() {
  return (
    <section className="bg-nearcon-cream">
      {/* Title stripe */}
      <div className="px-[25px] md:px-[50px]">
        <div className="max-w-[1580px] mx-auto">
          <div className="bg-black py-5 px-[25px] md:px-[40px]">
            <h2 className="text-nearcon-cream text-[30px] leading-[36px] md:text-[36px] md:leading-normal" style={{ fontFamily: 'Helvetica', fontWeight: 700 }}>Innovation Sandbox</h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[25px] md:px-[50px] py-[40px] md:py-[60px]">
        <div className="max-w-[1580px] mx-auto flex flex-col md:flex-row gap-[40px] md:gap-[80px] items-stretch">

          {/* Left column */}
          <motion.div
            className="w-full md:w-[50%] flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="mb-[36px] text-[32px] md:text-[46px]"
              style={{ fontFamily: 'Helvetica', fontWeight: 700, lineHeight: 1.05, color: '#000000' }}
            >
              Virtual-First. Execution-Driven.
            </h3>

            <div
              className="space-y-[20px] mb-[40px] text-[16px] leading-[22px] md:text-[18px] md:leading-[1.7]"
              style={{ fontFamily: 'Poppins', fontWeight: 300, color: '#000000' }}
            >
              <p>
                Starting January 26th, teams worldwide entered the NEARCON 2026 Innovation Sandbox — a fully virtual sprint to build real working demos showcasing NEAR's technical capabilities.
              </p>
              <p>
                After a global builder sprint, virtual judging, and winner selection, the Sandbox culminated at NEARCON itself — where finalist projects were showcased live in front of the entire ecosystem.
              </p>
            </div>

            {/* Prize badge */}
            <div
              className="self-start mb-[36px] px-[35px] py-[14px]"
              style={{ background: 'linear-gradient(90deg, #F98372 0%, #F1B139 100%)' }}
            >
              <p style={{ fontFamily: 'Helvetica', fontSize: '20px', fontWeight: 700, color: '#000000' }}>
                Up to $15,000 in prizes
              </p>
            </div>

            <p className="mt-auto" style={{ fontFamily: 'Poppins', fontSize: '13px', fontWeight: 300, color: '#000000', opacity: 0.5 }}>
              Across four prize tracks: The Private Web, AI That Works for You, Open Society, and Only on NEAR.
            </p>
          </motion.div>

          {/* Right column — Prize Track Winners */}
          <div className="w-full md:w-[50%]">
            <div className="bg-black p-[20px]">
              <div className="relative p-[20px]">
                <FrameCorners color="border-[#EBE3D3]" size="w-[40px] h-[40px]" />
                <p
                  className="mb-[10px]"
                  style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 400, letterSpacing: '2px', color: '#EBE3D3', opacity: 0.5 }}
                >
                  BOUNTY TRACKS
                </p>

                {tracks.map((track, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex items-center gap-[16px] py-[22px] ${idx < tracks.length - 1 ? 'border-b border-white/10' : ''}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <span
                      className="shrink-0 w-[50px] h-[50px] flex items-center justify-center rounded"
                      style={{ background: 'rgba(255,255,255,0.05)', fontSize: '35px' }}
                    >
                      {track.icon}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p style={{ fontFamily: 'Helvetica', fontSize: '17px', fontWeight: 700, color: track.color }}>
                        {track.name}
                      </p>
                      <p style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 300, color: '#EBE3D3', opacity: 0.5 }}>
                        {track.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
