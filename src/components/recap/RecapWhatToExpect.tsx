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
          <div className="columns-1 md:columns-2 lg:columns-3 gap-[20px]">
            {galleryImages.map((imgUrl, idx) => (
              <motion.div
                key={idx}
                className="break-inside-avoid mb-[20px]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
              >
                <div className="group">
                  <div className="p-[20px] relative overflow-hidden transition-transform duration-300 group-hover:scale-[0.93]" style={{ transformOrigin: 'center' }}>
                    <FrameCorners color="border-[#EBE3D3]" size="w-[32px] h-[32px]" />
                    <div
                      className="overflow-hidden transition-transform duration-300 group-hover:scale-[1.07]"
                      style={{ transformOrigin: 'center' }}
                    >
                      <Image
                        src={imgUrl}
                        alt={`Event Photo ${idx + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto block"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
