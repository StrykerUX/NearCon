'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../recap/RecapCTA.module.css'
import { FrameCorners } from '../ui/FrameCorners'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function CountdownRecapV2() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden py-[100px] px-[50px] flex flex-col justify-center items-center bg-nearcon-cream"
      style={{ isolation: 'isolate' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      id="countdown"
    >
      {/* Imágenes decorativas laterales */}
      <img src="/img/Group-41-7-left.png" alt="" aria-hidden="true" style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', height: '300px', width: 'auto', pointerEvents: 'none', zIndex: 0 }} />
      <img src="/img/Group-42-1-right.png" alt="" aria-hidden="true" style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', height: '300px', width: 'auto', pointerEvents: 'none', zIndex: 0 }} />

      <div className="relative z-10 w-full mx-auto flex flex-col items-center justify-center">

        {/* Columna centrada — imagen top, título, imagen bottom */}
        <motion.div className="relative flex flex-col items-center gap-[50px] p-[60px]" variants={itemVariants}>
          <FrameCorners color="border-black" size="w-[30px] h-[30px]" />

          <div className="w-[50%] self-start">
            <Image src="/img/Group-3-1-1.png" alt="" width={800} height={600} sizes="30vw" className="w-full h-auto" />
          </div>

          <h2
            className="font-helvetica text-center"
            style={{ fontSize: '115px', lineHeight: 1.05, color: '#000000' }}
          >
            <span className={styles.gradientHover}>NEARCON</span> 2027<br />
            <span className={styles.gradientDefault}>is coming</span>
          </h2>

          <div className="w-[50%] self-end">
            <Image src="/img/Group-3-1-1.png" alt="" width={800} height={600} sizes="30vw" className="w-full h-auto" />
          </div>

        </motion.div>

      </div>
    </motion.section>
  )
}
