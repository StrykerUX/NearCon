'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { sendGAEvent } from '@next/third-parties/google'
import { FrameCorners } from '../ui/FrameCorners'
import { Barcode } from '../ui/Barcode'
import { SPEAKERS, RUNNING_NUMBERS } from '@/lib/data'
import styles from './Speakers.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Speakers() {
  return (
    <>
      {/* Title section */}
      <div className="w-full bg-cover bg-center mt-[100px] px-[50px]" style={{ backgroundImage: 'url(/img/Group-43-3.png)' }}>
        <div className="max-w-[1580px] mx-auto">
          <motion.h2
            className="font-helvetica text-4xl md:text-5xl inline-block"
            style={{ backgroundColor: '#EBE3D3', padding: '10px 40px' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Speakers
          </motion.h2>
        </div>
      </div>

      {/* Cards section */}
      <section className="relative overflow-hidden" id="speakers">
      <div className="max-w-[1580px] mx-auto px-[50px] pt-20">

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        {SPEAKERS.map((speaker) => (
          <motion.div key={speaker.id} className="relative" variants={cardVariants}>
            <div className="group">
              <div className="p-[25px] relative mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-[0.92]" style={{ transformOrigin: 'center' }}>
                <FrameCorners size="w-[40px] h-[40px]" />
                <div
                  className="aspect-square overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.08]"
                  style={{ transformOrigin: 'center' }}
                >
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            </div>
            <h3 className="font-helvetica font-bold" style={{ fontSize: '36px', fontWeight: 700 }}>{speaker.name}</h3>
            <p className="text-gray-600" style={{ fontFamily: 'Helvetica', fontSize: '17px', fontWeight: 400 }}>
              {speaker.organization}
              <br />
              {speaker.title}
            </p>
          </motion.div>
        ))}

        {/* See More card */}
        <motion.div
          className="relative cursor-pointer"
          variants={cardVariants}
        >
          <div className="group">
            <div className="p-[25px] relative overflow-hidden mb-4 flex flex-col items-center justify-between w-full transition-transform duration-300 group-hover:scale-[0.92]" style={{ aspectRatio: '1', transformOrigin: 'center', backgroundColor: '#EBE3D3' }}>
              <FrameCorners size="w-[40px] h-[40px]" />
              <div className="transition-transform duration-300 group-hover:scale-[1.08]" style={{ transformOrigin: 'center' }}>
                <Image
                  src="/img/Group-35-2.png"
                  alt="See More top"
                  width={200}
                  height={200}
                  className="mb-4 w-auto h-auto max-w-[30%] self-end"
                />
              </div>
              <h3 style={{ fontFamily: 'Helvetica', fontSize: '36px', fontWeight: 700 }}>See More</h3>
              <div className="transition-transform duration-300 group-hover:scale-[1.08]" style={{ transformOrigin: 'center' }}>
                <Image
                  src="/img/Group-48.png"
                  alt="See More bottom"
                  width={200}
                  height={200}
                  className="mt-4 w-auto h-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        className={styles.applyButton}
        onClick={() => sendGAEvent('event', 'cta_click', { cta_name: 'apply_to_speak' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        APPLY TO SPEAK
      </motion.button>
      </div>
    </section>
    </>
  )
}
