'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export function IntroText() {
  return (
    <motion.section
      className="px-[50px] py-16 md:py-24 flex items-stretch gap-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      {/* Left — text */}
      <motion.div className="relative p-[30px] w-[55%] text-[#000000]" variants={itemVariants}>
        <FrameCorners size="w-10 h-10" />
        <p className="font-helvetica text-[27px] font-light leading-snug mb-8">
          NEARCON is where intelligence, privacy, and the open web converge.
        </p>
        <p className="font-helvetica text-[27px] font-light leading-snug mb-8">
          An invite-only gathering shaping an AI economy built on trust, transparency, and user ownership.
        </p>
        <p className="font-helvetica text-[27px] font-light leading-snug">
          Join founders, researchers, and builders redefining how intelligent systems run — private, open, and on your terms.
        </p>
      </motion.div>

      {/* Right — images */}
      <motion.div className="flex flex-col justify-between w-[45%]" variants={itemVariants}>
        <div className="w-[60%]">
          <Image
            src="/img/Group-3-1-1.png"
            alt="Group 3"
            width={800}
            height={600}
            sizes="60vw"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full">
          <Image
            src="/img/Group-46.png"
            alt="Group 46"
            width={1200}
            height={900}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
