'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FrameCorners } from '../ui/FrameCorners'
import { YTVideo } from '@/lib/youtube'
import styles from '../nearcon/WhatToExpect.module.css'

export function SessionVideos({ videos }: { videos: YTVideo[] }) {
  const [selectedId, setSelectedId] = useState(videos[0]?.id ?? '')

  return (
    <section className="bg-nearcon-cream pt-[100px] pb-[100px]">
      <style>{`
        .videos-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .videos-grid {
            display: grid;
            grid-template-columns: 60fr 40fr;
            gap: 60px;
            align-items: stretch;
          }
        }
        /* Columna derecha: altura fija en mobile, iguala video en desktop */
        .videos-right-col {
          display: flex;
          flex-direction: column;
          max-height: 360px;
        }
        @media (min-width: 768px) {
          .videos-right-col {
            height: 0;
            min-height: 100%;
            max-height: none;
          }
        }
        .video-item {
          border-left: 3px solid transparent;
          transition: border-color 0.15s;
        }
        .video-item:hover,
        .video-item.active {
          border-left-color: #65D56E;
        }
        .video-list {
          scrollbar-width: thin;
          scrollbar-color: #1a1a1a transparent;
          padding-right: 10px;
        }
        .video-list::-webkit-scrollbar { width: 4px; transition: width 0.2s; }
        .video-list::-webkit-scrollbar-track { background: transparent; }
        .video-list::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 2px; }
        .video-list:hover::-webkit-scrollbar { width: 8px; }
        .video-list:hover::-webkit-scrollbar-thumb { background: #444; }
      `}</style>

      {/* Title */}
      <div
        className="w-full bg-cover bg-center px-[25px] md:px-[50px]"
        style={{ backgroundImage: 'url(/img/Group-43-3.png)' }}
      >
        <div className="max-w-[1580px] mx-auto">
          <motion.h2
            className="font-helvetica text-[30px] leading-[36px] md:text-[36px] md:leading-normal inline-block"
            style={{ backgroundColor: '#EBE3D3', padding: '10px 40px' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Session Videos
          </motion.h2>
        </div>
      </div>

      {/* Content */}
      <div className="px-[25px] md:px-[50px] pt-[40px]">
        <div className="max-w-[1580px] mx-auto">

          <div className="videos-grid">

            {/* Left: iframe player */}
            <div className="relative p-[20px]">
              <FrameCorners color="border-text-primary" size="w-[40px] h-[40px]" />
              <div style={{ position: 'relative', aspectRatio: '16/9', width: '100%' }}>
                <iframe
                  key={selectedId}
                  src={`https://www.youtube.com/embed/${selectedId}?rel=0`}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Session Video"
                />
              </div>
            </div>

            {/* Right: list + button */}
            <div className="videos-right-col">

              {/* Scrollable list — fills remaining space */}
              <div
                className="video-list"
                style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}
              >
                {videos.map((video) => {
                  const isActive = video.id === selectedId
                  return (
                    <button
                      key={video.id}
                      onClick={() => setSelectedId(video.id)}
                      className={`video-item${isActive ? ' active' : ''}`}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        width: '100%',
                        textAlign: 'left',
                        background: '#000',
                        padding: '13px',
                        marginBottom: '8px',
                      }}
                    >
                      <img
                        src={video.thumbnail}
                        alt=""
                        style={{ width: '100px', height: '56px', objectFit: 'cover', flexShrink: 0 }}
                      />
                      <p
                        className="line-clamp-2"
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '18px',
                          fontWeight: isActive ? 600 : 300,
                          color: '#EBE3D3',
                          lineHeight: '1.4',
                        }}
                      >
                        {video.title}
                      </p>
                    </button>
                  )
                })}
              </div>

              {/* CTA button */}
              <motion.a
                href="https://www.youtube.com/playlist?list=PL9tzQn_TEuFUvCYDl-fDmFTiOUEwZ6jj5"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.largeButton} block`}
                style={{ marginTop: '30px', flexShrink: 0 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className={styles.largeButtonInner}>VIEW FULL PLAYLIST</span>
              </motion.a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
