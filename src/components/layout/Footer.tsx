'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    sendGAEvent('event', 'cta_click', { cta_name: 'newsletter_signup', email_domain: email.split('@')[1] })
    setEmail('')
  }

  return (
    <footer className="bg-nearcon-cream text-black pt-16 pb-8 px-[50px] relative overflow-hidden">
      <motion.div
        className="max-w-[1580px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 relative z-10 items-stretch"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        {/* Left — newsletter + links */}
        <div className="flex flex-col gap-[15px]">
          <form onSubmit={handleNewsletter} className="flex gap-4 max-w-md">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ fontFamily: 'Poppins', fontSize: '17px', fontWeight: 300, lineHeight: '32px', minWidth: '400px' }}
              className="bg-transparent border border-black px-6 py-2 outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              style={{ fontFamily: 'Helvetica', fontSize: '17px', fontWeight: 400, padding: '10px' }}
              className="bg-transparent text-black border border-black whitespace-nowrap hover:bg-black hover:text-nearcon-cream transition-colors"
            >
              Newsletter Sign Up
            </button>
          </form>

          <div className="flex flex-col gap-[15px]">
            <a href="#" style={{ fontFamily: 'Poppins', fontSize: '17px', fontWeight: 400 }}>Contact Us</a>
            <a href="#" style={{ fontFamily: 'Poppins', fontSize: '17px', fontWeight: 400 }}>Terms &amp; Conditions</a>
          </div>

          <div>
            <p style={{ fontFamily: 'Poppins', fontSize: '17px', fontWeight: 400, marginBottom: '8px' }}>Follow us</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70" aria-label="Website">
                <img src="/img/world-svgrepo-com-1.svg" alt="Website" style={{ width: '24px', height: '24px' }} />
              </a>
              <a href="#" className="hover:opacity-70" aria-label="X/Twitter">
                <img src="/img/twitter-social-logotype-svgrepo-com.svg" alt="X/Twitter" style={{ width: '24px', height: '24px' }} />
              </a>
              <a href="#" className="hover:opacity-70" aria-label="YouTube">
                <img src="/img/youtube-168-svgrepo-com.svg" alt="YouTube" style={{ width: '24px', height: '24px' }} />
              </a>
              <a href="#" className="hover:opacity-70" aria-label="LinkedIn">
                <img src="/img/linkedin-fill-svgrepo-com.svg" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Right — branding */}
        <div className="flex flex-col items-end justify-between">
          <h2 className="font-helvetica text-4xl">See you there!</h2>
          <img src="/img/Group-34.png" alt="NearCon 2026" className="h-auto" style={{ width: 'auto', maxHeight: '200px' }} />
        </div>
      </motion.div>

      {/* Footer graphic */}
      <motion.div
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: 'url(/img/Group-40-1.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '200px'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
    </footer>
  )
}
