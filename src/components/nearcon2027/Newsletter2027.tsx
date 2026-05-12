'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function Newsletter2027() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section
      className="bg-nearcon-cream px-[25px] md:px-[50px] py-[80px] md:py-[120px]"
      id="newsletter"
    >
      <div className="max-w-[1580px] mx-auto flex flex-col md:flex-row gap-[50px] md:gap-[100px] items-center">

        {/* Left — headline */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontFamily: 'Helvetica', fontWeight: 700, fontSize: 'clamp(42px, 6vw, 90px)', lineHeight: 1, color: '#000000' }}>
            <span className="block">Be the first to</span>
            <span className="block" style={{ color: '#65D56E' }}>know.</span>
          </h2>
        </motion.div>

        {/* Right — form */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-[20px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <p style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 300, color: '#000000', lineHeight: 1.7 }}>
            Speakers, agenda, and registration open soon. Leave your email and we'll reach out the moment details drop.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex w-full">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 min-w-0 bg-transparent border border-black border-r-0 px-[16px] py-[12px] outline-none"
                style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 300 }}
              />
              <button
                type="submit"
                className="shrink-0 px-[20px] py-[12px] bg-black text-nearcon-cream border border-black hover:bg-nearcon-green hover:text-black hover:border-nearcon-green transition-colors"
                style={{ fontFamily: 'Helvetica', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', whiteSpace: 'nowrap' }}
              >
                SIGN UP
              </button>
            </form>
          ) : (
            <motion.p
              style={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 400, color: '#65D56E' }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              ✓ You're on the list. See you in March.
            </motion.p>
          )}

          {!submitted && (
            <p style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 300, color: 'rgba(0,0,0,0.45)' }}>
              No spam. Unsubscribe anytime.
            </p>
          )}
        </motion.div>

      </div>
    </section>
  )
}
