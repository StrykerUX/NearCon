'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import styles from './RecapCTA.module.css'
import btnStyles from '../nearcon/WhatToExpect.module.css'

const COLS = 160
const ROWS = 55
const CHARS = [
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  '.', ':', '-', '+', '=', '<', '>', '/', '*', ';',
  '0', '1', '(', ')', '[', ']', '{', '}',
]
const PHRASES = [
  'NEAR', 'NEAR',
  '>_ /imagine prompt:',
  'system.init(AI)',
  'awaiting_input...',
  'generating_response()',
  '01001110 01000101',
  'neural_network_active',
  'prompt_injection',
  'temperature: 0.7',
  'AI_MODEL_READY',
]

export function RecapCTA() {
  const canvasRef = useRef<HTMLPreElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    let time = 0
    const speed = 0.005
    const mouse = { x: -100, y: -100 }
    const floatingPhrases: Array<{ x: number; y: number; life: number; text: string }> = []
    let animFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * COLS
      mouse.y = ((e.clientY - rect.top) / rect.height) * ROWS
    }
    const handleMouseLeave = () => { mouse.x = -100; mouse.y = -100 }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    function render() {
      // Fade out phrases
      for (let i = floatingPhrases.length - 1; i >= 0; i--) {
        floatingPhrases[i].life -= 0.003
        if (floatingPhrases[i].life <= 0) floatingPhrases.splice(i, 1)
      }
      // Spawn new phrase occasionally
      if (Math.random() < 0.015 && floatingPhrases.length < 5) {
        const text = PHRASES[Math.floor(Math.random() * PHRASES.length)]
        floatingPhrases.push({
          x: Math.floor(Math.random() * (COLS - text.length - 2)),
          y: Math.floor(Math.random() * ROWS),
          life: 1.0,
          text,
        })
      }

      let frame = ''
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          let v = Math.sin(x * 0.06 + time) + Math.cos(y * 0.08 + time * 0.4)
          v += Math.sin(x * 0.03 - time * 0.6) * 0.5
          let index = Math.floor(((v + 2.5) / 5) * CHARS.length)

          const dx = x - mouse.x
          const dy = (y - mouse.y) * 2
          const dist = Math.sqrt(dx * dx + dy * dy)
          const repelRadius = 24

          if (dist < repelRadius) {
            const force = (repelRadius - dist) / repelRadius
            index = force > 0.5 ? 0 : CHARS.length - 1 - Math.floor(Math.random() * 4)
          }

          index = Math.max(0, Math.min(index, CHARS.length - 1))
          let charToDraw = CHARS[index]

          for (const p of floatingPhrases) {
            if (y === p.y && x >= p.x && x < p.x + p.text.length) {
              if (dist > repelRadius * 0.5 && Math.random() < p.life) {
                charToDraw = p.text[x - p.x]
              }
            }
          }
          frame += charToDraw
        }
        frame += '\n'
      }

      canvas!.innerText = frame
      time += speed
      animFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animFrameId)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="bg-black relative overflow-hidden" style={{ minHeight: '640px' }}>

      {/* ASCII background */}
      <div ref={containerRef} className={styles.asciiWrapper}>
        <div className={styles.scanlines} />
        <pre ref={canvasRef} className={styles.asciiContent} />
      </div>

      {/* Content overlay */}
      <div className="relative z-20 flex flex-col items-center text-center py-[100px] px-[50px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ fontFamily: 'Helvetica', fontWeight: 700, lineHeight: 1.1 }}>
            <span className="block mb-2">
              <span style={{ fontSize: '100px', color: '#EBE3D3', backgroundColor: '#000000', padding: '4px 16px', display: 'inline-block' }}>
                See you at
              </span>
            </span>
            <span className="block">
              <span style={{ fontSize: '100px', backgroundColor: '#000000', padding: '4px 16px', display: 'inline-block' }}>
                <span style={{ color: '#EBE3D3' }}>NEAR</span>
                <span style={{
                  background: 'linear-gradient(90deg, #87CEEB, #FF1493, #90EE90, #EDCC19)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>CON </span>
                <span style={{
                  background: 'linear-gradient(90deg, #87CEEB, #FF1493, #90EE90, #EDCC19)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>2027.</span>
              </span>
            </span>
          </h2>
        </motion.div>

        <motion.p
          className="mt-[50px] max-w-[500px]"
          style={{
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: 300,
            color: '#EBE3D3',
            lineHeight: 1.7,
            backgroundColor: '#000000',
            padding: '12px 24px',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The story doesn't end here. The next chapter of open, intelligent, and private technology is already being written.
        </motion.p>

        <motion.div
          className={`${btnStyles.largeButton} mt-[50px] max-w-[400px] w-full`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className={btnStyles.largeButtonInner}>[ STAY IN THE LOOP ]</span>
        </motion.div>
      </div>

    </section>
  )
}
