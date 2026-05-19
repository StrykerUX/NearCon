'use client'

import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'

export function Statement2027() {
  return (
    <section className="bg-nearcon-cream px-[25px] md:px-[50px] py-[80px] md:py-[120px]">
      <div className="max-w-[1580px] mx-auto flex flex-col md:flex-row items-stretch gap-[50px] md:gap-[80px]">

        {/* Left — headline */}
        <motion.div
          className="relative w-full md:w-[55%] p-[30px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <FrameCorners size="w-10 h-10" />
          <h2 className="font-helvetica text-[28px] md:text-[48px] font-bold leading-tight mb-8" style={{ color: '#000000' }}>
            The agentic economy needs open infrastructure.{' '}
            <span style={{ backgroundColor: '#000000', color: '#65D56E', padding: '2px 8px' }}>
              NEARCON is where we build it.
            </span>
          </h2>
        </motion.div>

        {/* Right — body */}
        <motion.div
          className="w-full md:w-[45%] flex flex-col justify-center gap-[24px]"
          style={{ fontFamily: 'Poppins', fontSize: '18px', lineHeight: '1.75', fontWeight: 300, color: '#000000' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          <p>
            NEARCON is not a conference. It's a civic experiment — where builders, researchers, investors, and thought leaders come together to define how intelligence, ownership, and the open web reshape how we live, create, and govern.
          </p>
          <p>
            In 2027, the conversation moves forward. As AI systems evolve from assistants into autonomous market participants, they need monetary infrastructure that preserves user control. NEARCON is where we design that infrastructure — together.
          </p>
          <p style={{ fontWeight: 500 }}>
            Two days. One direction. Everyone welcome.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
