'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FrameCorners } from '../ui/FrameCorners'

const allPhotos = [
  '/img/NEARCON_B-80.jpg',
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

const getRandomPhotos = () => {
  const shuffled = [...allPhotos].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 6)
}

// Bento layout — 4 cols, 3 rows de 280px cada una
// [  0 (2col 2row)  ] [ 1 (1×1) ] [ 2 (1×1) ]
// [  0 (2col 2row)  ] [  3 (2col 2row)       ]
// [ 4 (1×1) ] [ 5 (1×1) ] [  3 (2col 2row)   ]

const layout = [
  { col: '1 / 3', row: '1 / 3' }, // 0: grande izquierda (2×2)
  { col: '3 / 4', row: '1 / 2' }, // 1: pequeña
  { col: '4 / 5', row: '1 / 2' }, // 2: pequeña
  { col: '3 / 5', row: '2 / 4' }, // 3: grande derecha (2×2) — fusión de las 2 anchas
  { col: '1 / 2', row: '3 / 4' }, // 4: pequeña abajo izquierda
  { col: '2 / 3', row: '3 / 4' }, // 5: pequeña abajo centro
]

export function RecapWhatToExpectV2() {
  const [photos, setPhotos] = useState<string[]>(allPhotos.slice(0, 6))

  useEffect(() => {
    setPhotos(getRandomPhotos())
  }, [])

  return (
    <section className="bg-black text-nearcon-cream pt-[125px] pb-[125px]">
      {/* Title section */}
      <div className="w-full bg-cover bg-center px-[25px] md:px-[50px]" style={{ backgroundImage: 'url(/img/Group-3-1.png)' }}>
        <div className="max-w-[1580px] mx-auto">
          <motion.h2
            className="font-helvetica inline-block text-nearcon-cream in-photos-title px-[25px] md:px-[40px] py-[10px]"
            style={{ backgroundColor: '#000000', fontSize: '36px', fontWeight: 700, lineHeight: '40px' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            In Photos
          </motion.h2>
        </div>
      </div>

      {/* Bento gallery */}
      <div className="px-[25px] md:px-[50px] pt-[125px] pb-0">
        <div className="max-w-[1580px] mx-auto">
          <div
            className="bento-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(3, 280px)',
              gap: '50px',
            }}
          >
            {photos.map((imgUrl, idx) => {
              const isLarge = idx === 0 || idx === 3
              return (
                <motion.div
                  key={idx}
                  className="bento-cell"
                  style={{ gridColumn: layout[idx].col, gridRow: layout[idx].row }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                >
                  <div className="group w-full h-full">
                    <div
                      className={`relative w-full h-full p-[25px] overflow-hidden transition-transform duration-300 ${isLarge ? 'group-hover:scale-[0.96]' : 'group-hover:scale-[0.92]'}`}
                      style={{ transformOrigin: 'center' }}
                    >
                      <div
                        className={`relative w-full h-full overflow-hidden transition-transform duration-300 ${isLarge ? 'group-hover:scale-[1.04]' : 'group-hover:scale-[1.08]'}`}
                        style={{ transformOrigin: 'center' }}
                      >
                        <Image
                          src={imgUrl}
                          alt={`Event Photo ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="absolute inset-0 z-10 pointer-events-none">
                        <FrameCorners color="border-[#EBE3D3]" size="w-[32px] h-[32px]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Banner section */}
      <div className="px-[25px] md:px-[50px] mt-[50px]">
        <div className="max-w-[1580px] mx-auto">
          <img src="/img/Group-35.png" alt="NearCon decoration" className="w-full h-auto border-b border-black md:hidden" />
          <img src="/img/Group-41.png" alt="NearCon decoration" className="w-full h-auto border-b border-black hidden md:block" />
        </div>
      </div>
    </section>
  )
}
