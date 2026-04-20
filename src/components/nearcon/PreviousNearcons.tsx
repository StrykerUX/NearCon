'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'
import { PREVIOUS_NEARCON_IMAGES } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export function PreviousNearcons() {
  return (
    <section className="bg-black text-nearcon-cream py-[100px]">
      {/* Div 1: Title section */}
      <div className="w-full bg-cover bg-center" style={{ backgroundImage: 'url(/img/Group-3-1.png)' }}>
        <div className="max-w-[1580px] mx-auto px-[50px]">
          <motion.h2
            className="font-helvetica inline-block text-nearcon-cream"
            style={{ backgroundColor: '#000000', padding: '10px 40px', fontSize: '36px', fontWeight: 700 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Previous NEARCONS
          </motion.h2>
        </div>
      </div>

      {/* Div 2: Cards section */}
      <div className="max-w-[1580px] mx-auto px-[50px] py-[100px]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {PREVIOUS_NEARCON_IMAGES.map((imgUrl, idx) => (
            <motion.div key={idx} className="relative" variants={cardVariants}>
              <div className="group">
                <div className="p-[25px] relative overflow-hidden transition-transform duration-300 group-hover:scale-[0.92]" style={{ transformOrigin: 'center' }}>
                  <FrameCorners color="border-[#EBE3D3]" size="w-[40px] h-[40px]" />
                  <div
                    className="aspect-square overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.08]"
                    style={{ transformOrigin: 'center' }}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Previous Nearcon Event ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Div 3: Bottom bar image */}
      <div className="w-full" style={{ height: '65px' }}>
        <img src="/img/Group-3-1.png" alt="Bottom bar" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
