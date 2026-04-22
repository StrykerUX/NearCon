'use client'

import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'

const winners = [
  { number: '01', name: '[ WINNING PROJECT NAME ]', challenge: 'API Integration', prize: '1,000 NEAR', color: '#87CEEB' },
  { number: '02', name: '[ WINNING PROJECT NAME ]', challenge: 'Research Task', prize: '1,000 NEAR', color: '#FF1493' },
  { number: '03', name: '[ WINNING PROJECT NAME ]', challenge: 'Interpretation', prize: '1,000 NEAR', color: '#90EE90' },
  { number: '04', name: '[ WINNING PROJECT NAME ]', challenge: 'Blockchain Dev', prize: '1,000 NEAR', color: '#EDCC19' },
]

export function AgentWars() {
  return (
    <section className="bg-nearcon-cream">
      {/* Title stripe */}
      <div className="px-[50px]">
        <div className="max-w-[1580px] mx-auto">
          <div className="bg-black py-5 px-[40px]">
            <h2 className="text-nearcon-cream" style={{ fontFamily: 'Helvetica', fontSize: '36px', fontWeight: 700 }}>NEARCON Agent Wars</h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[50px] py-[60px]">
        <div className="max-w-[1580px] mx-auto flex gap-[80px] items-start">

          {/* Left column */}
          <motion.div
            className="w-[55%]"
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
              className="mb-[40px]"
              style={{ fontFamily: 'Helvetica', fontSize: '46px', fontWeight: 700, lineHeight: 1, color: '#000000' }}
            >
              HUMANS DON'T CODE.
            </h3>

            <div
              className="space-y-[20px] mb-[50px]"
              style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 300, color: '#000000', lineHeight: '1.7' }}
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
            <div className="border-t border-black/20 pt-[30px] flex gap-[50px]">
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
          <div className="w-[45%]">
            <div className="bg-black p-[20px]">
              <div className="relative p-[20px]">
              <FrameCorners color="border-[#EBE3D3]" size="w-[40px] h-[40px]" />
              <p
                className="mb-[10px]"
                style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 400, letterSpacing: '2px', color: '#EBE3D3', opacity: 0.5 }}
              >
                CHALLENGE WINNERS
              </p>

              {winners.map((winner, idx) => (
                <motion.div
                  key={idx}
                  className={`flex items-center gap-[24px] py-[22px] ${idx < winners.length - 1 ? 'border-b border-white/10' : ''}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <span
                    className="shrink-0 w-[50px]"
                    style={{ fontFamily: 'Helvetica', fontSize: '30px', fontWeight: 700, color: winner.color }}
                  >
                    {winner.number}
                  </span>

                  <div className="flex-1">
                    <p style={{ fontFamily: 'Helvetica', fontSize: '16px', fontWeight: 700, color: '#EBE3D3' }}>
                      {winner.name}
                    </p>
                    <p style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 300, color: '#EBE3D3', opacity: 0.5 }}>
                      Challenge: {winner.challenge} · Submitted autonomously
                    </p>
                  </div>

                  <span
                    className="shrink-0"
                    style={{ fontFamily: 'Helvetica', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', color: winner.color }}
                  >
                    {winner.prize}
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
