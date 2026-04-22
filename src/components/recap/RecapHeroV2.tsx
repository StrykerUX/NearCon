'use client'

import { motion } from 'framer-motion'

const VIDEO_URL =
  'https://www.dropbox.com/scl/fi/jv8jljj1e8y3xnz3pwz8g/2026_NearCon_Sizzle.mp4?rlkey=xcrmj6o1gpv715zr3lwpgz7q6&st=dbjciyvz&dl=1'

export function RecapHeroV2() {
  return (
    <section className="px-[50px] pt-[50px] pb-[50px] bg-nearcon-cream">
      <div className="max-w-[1580px] mx-auto w-full relative overflow-hidden bg-black aspect-video">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Gradient — bottom-left only to make text legible */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 20%, transparent 45%)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end p-[60px] h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-[20px]"
          >
            {/* Location and Date */}
            <p className="text-nearcon-cream opacity-70" style={{ fontFamily: 'Helvetica', fontSize: '18px', fontWeight: 400 }}>
              FORT MASON CENTER - SAN FRANCISCO - FEB 23-24, 2026
            </p>

            {/* Main Title */}
            <h1 className="text-nearcon-cream" style={{ fontFamily: 'Helvetica', fontSize: '75px', fontWeight: 700, lineHeight: '65px' }}>
              Last NEARCON 2026
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
