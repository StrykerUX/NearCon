'use client'

import { motion } from 'framer-motion'
import { LineChart, Crosshair, Layers, FileCode2 } from 'lucide-react'
import { FrameCorners } from '../ui/FrameCorners'
import type { LucideIcon } from 'lucide-react'

const challenges: { icon: LucideIcon; name: string; description: string; entries: string; color: string }[] = [
  { icon: LineChart, name: 'Oracle', description: 'Fetch NEAR price from 3+ APIs, return the median', entries: '24–25 entries', color: '#87CEEB' },
  { icon: Crosshair, name: 'Scavenger', description: 'Find 5 hidden fragments across chain, GitHub, IPFS & Twitter', entries: '21–23 entries', color: '#FF1493' },
  { icon: Layers, name: 'Pitch', description: '1-sentence idea → agent builds a working prototype', entries: '15–17 entries', color: '#90EE90' },
  { icon: FileCode2, name: 'Contract', description: 'Deploy a guestbook smart contract to NEAR testnet', entries: '19–20 entries', color: '#EDCC19' },
]

export function AgentWars() {
  return (
    <section className="bg-nearcon-cream pt-[125px] pb-[75px]">
      {/* Title stripe */}
      <div className="px-[25px] md:px-[50px]">
        <div className="max-w-[1580px] mx-auto">
          <div className="bg-black py-5 px-[25px] md:px-[40px]">
            <h2 className="text-nearcon-cream text-[30px] leading-[36px] md:text-[36px] md:leading-normal" style={{ fontFamily: 'Helvetica', fontWeight: 700 }}>NEARCON Agent Wars</h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[25px] md:px-[50px] pt-[70px] pb-0">
        <div className="max-w-[1580px] mx-auto flex flex-col md:flex-row gap-[40px] md:gap-[80px] items-start">

          {/* Left column */}
          <motion.div
            className="w-full md:w-[55%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="mb-3"
              style={{ fontFamily: 'Helvetica', fontSize: '14px', fontWeight: 400, letterSpacing: '2px', color: '#000000', opacity: 0.5 }}
            >
              THE FIRST HACKATHON WHERE
            </p>
            <h3
              className="mb-[40px] text-[32px] md:text-[46px]"
              style={{ fontFamily: 'Helvetica', fontWeight: 700, lineHeight: 1, color: '#000000' }}
            >
              HUMANS DON'T CODE.
            </h3>

            <div
              className="space-y-[20px] mb-0 text-[16px] leading-[22px] md:text-[18px] md:leading-[1.7]"
              style={{ fontFamily: 'Poppins', fontWeight: 300, color: '#000000' }}
            >
              <p>
                For four hours on February 24th, agents took over. Participants connected their AI agents to the NEAR AI Marketplace and watched them fetch, build, and submit — completely autonomously.
              </p>
              <p>
                The rules were clear: agents do the building, humans stay hands-off. No writing code, no making architectural decisions, no debugging. The mission was to benchmark what AI agents can truly ship with minimal human intervention.
              </p>
              <p>
                Four challenges. Thirty-minute windows. One leaderboard. The best agents won.
              </p>
            </div>

            {/* Stats */}
            <div className="pt-[30px] flex gap-[50px]">
              <div>
                <p style={{ fontFamily: 'Helvetica', fontSize: '42px', fontWeight: 700, color: '#000000', lineHeight: 1 }}>4,000</p>
                <p className="mt-1" style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 400, letterSpacing: '2px', color: '#000000', opacity: 0.5 }}>NEAR PRIZE POOL</p>
              </div>
              <div>
                <p style={{ fontFamily: 'Helvetica', fontSize: '42px', fontWeight: 700, color: '#000000', lineHeight: 1 }}>4</p>
                <p className="mt-1" style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 400, letterSpacing: '2px', color: '#000000', opacity: 0.5 }}>CHALLENGES</p>
              </div>
              <div>
                <p style={{ fontFamily: 'Helvetica', fontSize: '42px', fontWeight: 700, color: '#000000', lineHeight: 1 }}>4h</p>
                <p className="mt-1" style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 400, letterSpacing: '2px', color: '#000000', opacity: 0.5 }}>DURATION</p>
              </div>
            </div>
          </motion.div>

          {/* Right column — Challenge Winners */}
          <div className="w-full md:w-[45%]">
            <div className="bg-black p-[20px]">
              <div className="relative p-[20px]">
              <FrameCorners color="border-[#EBE3D3]" size="w-[40px] h-[40px]" />
              <p
                className="mb-[10px]"
                style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 400, letterSpacing: '2px', color: '#EBE3D3', opacity: 0.5 }}
              >
                THE 4 CHALLENGES
              </p>

              {challenges.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  className={`flex items-center gap-[16px] py-[22px] ${idx < challenges.length - 1 ? 'border-b border-white/10' : ''}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <span
                    className="shrink-0 w-[50px] h-[50px] flex items-center justify-center rounded"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <challenge.icon size={60} color={challenge.color} strokeWidth={1.5} />
                  </span>

                  <div className="flex-1">
                    <p style={{ fontFamily: 'Helvetica', fontSize: '24px', fontWeight: 700, color: challenge.color }}>
                      {challenge.name}
                    </p>
                    <p style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 300, color: '#EBE3D3', opacity: 0.5 }}>
                      {challenge.description}
                    </p>
                  </div>

                  <span
                    className="shrink-0 text-right"
                    style={{ fontFamily: 'Poppins', fontSize: '13px', fontWeight: 400, color: '#EBE3D3', opacity: 0.5 }}
                  >
                    {challenge.entries}
                  </span>
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
