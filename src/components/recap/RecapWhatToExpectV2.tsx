'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FrameCorners } from '../ui/FrameCorners'

const allPhotos = [
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

const getRandomPhotos = () => {
  const shuffled = [...allPhotos].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 7)
}

// Bento layout — 4 cols, 3 rows de 280px cada una
// [  0 (2col 2row)  ] [ 1 (1col 1row) ] [ 2 (1col 1row) ]
// [  0 (2col 2row)  ] [   3 (2col 1row)                 ]
// [ 4 (1×1) ] [ 5 (1×1) ] [   6 (2col 1row)             ]

const layout = [
  { col: '1 / 3', row: '1 / 3' }, // grande izquierda
  { col: '3 / 4', row: '1 / 2' }, // pequeña
  { col: '4 / 5', row: '1 / 2' }, // pequeña
  { col: '3 / 5', row: '2 / 3' }, // ancha derecha
  { col: '1 / 2', row: '3 / 4' }, // pequeña abajo izquierda
  { col: '2 / 3', row: '3 / 4' }, // pequeña abajo centro
  { col: '3 / 5', row: '3 / 4' }, // ancha derecha
]

export function RecapWhatToExpectV2() {
  const [photos, setPhotos] = useState<string[]>(allPhotos.slice(0, 7))

  useEffect(() => {
    setPhotos(getRandomPhotos())
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

      {/* Bento gallery */}
      <div className="px-[50px] py-[100px]">
        <div className="max-w-[1580px] mx-auto">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(3, 280px)',
              gap: '50px',
            }}
          >
            {photos.map((imgUrl, idx) => (
              <motion.div
                key={idx}
                style={{ gridColumn: layout[idx].col, gridRow: layout[idx].row }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
              >
                <div className="group w-full h-full">
                  <div
                    className="relative w-full h-full p-[16px] overflow-hidden transition-transform duration-300 group-hover:scale-[0.97]"
                    style={{ transformOrigin: 'center' }}
                  >
                    <FrameCorners color="border-[#EBE3D3]" size="w-[32px] h-[32px]" />
                    <div
                      className="relative w-full h-full overflow-hidden transition-transform duration-300 group-hover:scale-[1.04]"
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
