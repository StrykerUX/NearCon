'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FrameCorners } from '../ui/FrameCorners'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

const galleryImagesOriginal = [
  '/img/NEARCON_B-80.jpg',
  '/img/NEARCON_B-7.jpg',
  '/img/NEARCON_B-85.jpg',
  '/img/NEARCON_C-105.jpg',
  '/img/NEARCON_B-15.jpg',
  '/img/NEARCON_B-94.jpg',
  '/img/NEARCON_C-106.jpg',
  '/img/NEARCON_C-129.jpg',
  '/img/NEARCON_A-28.jpg',
  '/img/NEARCON_A-9.jpg',
  '/img/NEARCON_B-88.jpg',
  '/img/NEARCON_C-123.jpg',
]

const shuffleArray = (array: string[]) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function RecapWhatToExpect() {
  const [galleryImages, setGalleryImages] = useState<string[]>(galleryImagesOriginal)

  useEffect(() => {
    setGalleryImages(shuffleArray(galleryImagesOriginal))
  }, [])

  return (
    <section className="bg-black text-nearcon-cream py-[100px]">
      {/* Title section */}
      <div className="w-full bg-cover bg-center px-[50px]" style={{ backgroundImage: 'url(/img/Group-3-1.png)' }}>
        <div className="max-w-[1580px] mx-auto">
          <motion.h2
            className="font-helvetica inline-block text-nearcon-cream"
            style={{ backgroundColor: '#000000', padding: '12px 40px', fontSize: '36px', fontWeight: 700, lineHeight: '40px' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            In Photos
          </motion.h2>
        </div>
      </div>

      {/* Gallery section */}
      <div className="px-[50px] py-[100px]">
        <div className="max-w-[1580px] mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {galleryImages.map((imgUrl, idx) => (
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
                      alt={`Event Photo ${idx + 1}`}
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
      </div>

      {/* Banner section */}
      <div className="px-[50px]">
        <div className="max-w-[1580px] mx-auto">
          <img src="/img/Group-41.png" alt="NearCon decoration" className="w-full h-auto border-b border-black" />
        </div>
      </div>
    </section>
  )
}
