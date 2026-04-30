'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import styles from './RecapCTA.module.css'
import btnStyles from '../nearcon/WhatToExpect.module.css'

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
  const gridRef = useRef({ cols: 220, rows: 55 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // Measure a single character to calculate grid dimensions
    const measureChar = () => {
      const testSpan = document.createElement('span')
      testSpan.style.cssText = `
        position: absolute; visibility: hidden; white-space: pre;
        font-family: 'Courier New', Courier, monospace;
        font-size: ${getComputedStyle(canvas).fontSize};
        letter-spacing: 0.15em;
        line-height: 1.1;
      `
      testSpan.textContent = 'X'
      document.body.appendChild(testSpan)
      const charW = testSpan.getBoundingClientRect().width
      const charH = testSpan.getBoundingClientRect().height
      document.body.removeChild(testSpan)
      return { charW, charH }
    }

    const recalcGrid = () => {
      const { charW, charH } = measureChar()
      const { width, height } = container.getBoundingClientRect()
      gridRef.current = {
        cols: Math.ceil(width / charW) + 2,
        rows: Math.ceil(height / charH) + 2,
      }
    }

    recalcGrid()
    const ro = new ResizeObserver(recalcGrid)
    ro.observe(container)

    let time = 0
    const speed = 0.005
    const mouse = { x: -100, y: -100 }
    const floatingPhrases: Array<{ x: number; y: number; life: number; text: string }> = []
    let animFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const { cols, rows } = gridRef.current
      mouse.x = ((e.clientX - rect.left) / rect.width) * cols
      mouse.y = ((e.clientY - rect.top) / rect.height) * rows
    }
    const handleMouseLeave = () => { mouse.x = -100; mouse.y = -100 }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    function render() {
      const { cols, rows } = gridRef.current

      // Fade out phrases
      for (let i = floatingPhrases.length - 1; i >= 0; i--) {
        floatingPhrases[i].life -= 0.003
        if (floatingPhrases[i].life <= 0) floatingPhrases.splice(i, 1)
      }
      // Spawn new phrase occasionally
      if (Math.random() < 0.015 && floatingPhrases.length < 5) {
        const text = PHRASES[Math.floor(Math.random() * PHRASES.length)]
        floatingPhrases.push({
          x: Math.floor(Math.random() * (cols - text.length - 2)),
          y: Math.floor(Math.random() * rows),
          life: 1.0,
          text,
        })
      }

      let frame = ''
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
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
      ro.disconnect()
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
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-[25px] md:px-[50px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ fontFamily: 'Helvetica', fontWeight: 700, lineHeight: 1.1 }}>
            <span className="block mb-2">
              <span className="text-[52px] md:text-[100px]" style={{ color: '#EBE3D3', backgroundColor: '#000000', padding: '4px 16px', display: 'inline-block' }}>
                See you at
              </span>
            </span>
            <span className="block">
              <span className="text-[52px] md:text-[100px]" style={{ backgroundColor: '#000000', padding: '4px 16px', display: 'inline-block' }}>
                <span className={styles.gradientDefault}>NEAR</span>
                <span style={{ color: '#EBE3D3' }}>CON </span>
                <span className={styles.gradientHover}>2027.</span>
              </span>
            </span>
          </h2>
        </motion.div>

        <motion.p
          className="mt-[50px] max-w-[500px] text-[16px] leading-[22px] md:text-[18px] md:leading-[1.7]"
          style={{
            fontFamily: 'Poppins',
            fontWeight: 300,
            color: '#EBE3D3',
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
          style={{ display: 'none' }}
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
