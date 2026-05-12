'use client'

import { motion } from 'framer-motion'

export function Statement2027() {
  return (
    <section className="bg-nearcon-cream px-[25px] md:px-[50px] py-[80px] md:py-[120px]">
      <div className="max-w-[1580px] mx-auto flex flex-col md:flex-row gap-[50px] md:gap-[100px] items-start">

        {/* Left — headline */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <h2 style={{ fontFamily: 'Helvetica', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 52px)', lineHeight: 1.1, color: '#000000' }}>
            The agentic economy needs open infrastructure.{' '}
            <span style={{ backgroundColor: '#000000', color: '#65D56E', padding: '2px 8px' }}>
              NEARCON is where we build it.
            </span>
          </h2>
        </motion.div>

        {/* Right — body */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-[24px]"
          style={{ fontFamily: 'Poppins', fontSize: '16px', lineHeight: '1.75', fontWeight: 300, color: '#000000' }}
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
