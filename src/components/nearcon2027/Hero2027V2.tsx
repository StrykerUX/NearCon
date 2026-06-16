'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import styles from '../recap/RecapCTA.module.css'

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

const metadata = [
  { label: 'Date', value: 'March 9–10, 2027' },
  { label: 'Location', value: 'San Francisco, CA' },
  { label: 'Venue', value: 'Fort Mason Center · Gateway Pavilion' },
  { label: 'Format', value: 'Two-Day Conference' },
]

export function Hero2027V2() {
  const canvasRef = useRef<HTMLPreElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef({ cols: 220, rows: 55 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

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

    const section = sectionRef.current
    if (!section) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const { cols, rows } = gridRef.current
      mouse.x = ((e.clientX - rect.left) / rect.width) * cols
      mouse.y = ((e.clientY - rect.top) / rect.height) * rows
    }
    const handleMouseLeave = () => { mouse.x = -100; mouse.y = -100 }

    section.addEventListener('mousemove', handleMouseMove)
    section.addEventListener('mouseleave', handleMouseLeave)

    function render() {
      const { cols, rows } = gridRef.current

      for (let i = floatingPhrases.length - 1; i >= 0; i--) {
        floatingPhrases[i].life -= 0.003
        if (floatingPhrases[i].life <= 0) floatingPhrases.splice(i, 1)
      }
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
      section.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
    >
      {/* ASCII background */}
      <div ref={containerRef} className={styles.asciiWrapper}>
        <div className={styles.scanlines} />
        <pre ref={canvasRef} className={styles.asciiContent} />
      </div>

      {/* Content bottom-left */}
      <div className="relative z-10 px-[25px] md:px-[50px] pb-[40px] md:pb-[60px]">
        <div className="max-w-[1580px] mx-auto">

          {/* H1 */}
          <motion.h1
            className="font-helvetica text-nearcon-cream mb-[50px] md:mb-[70px]"
            style={{ lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <span className="block mb-2" style={{ fontSize: 'clamp(72px, 12vw, 180px)' }}>
              <span className={styles.gradientDefault}>NEAR</span>
              <span style={{ color: '#EBE3D3' }}>CON</span>
            </span>
            <span className="block" style={{ fontSize: 'clamp(150px, 25vw, 375px)' }}>
              <span className={styles.gradientHover}>2027</span>
            </span>
          </motion.h1>

          {/* Metadata row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="border-t border-nearcon-cream/20 pt-[24px]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-0">
                {metadata.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${idx < metadata.length - 1 ? 'md:border-r md:border-nearcon-cream/20 md:pr-[40px]' : ''} ${idx > 0 ? 'md:pl-[40px]' : ''}`}
                  >
                    <p className="text-nearcon-cream/50 mb-[6px]" style={{ fontFamily: 'Poppins', fontSize: '10px', fontWeight: 400, letterSpacing: '2.5px' }}>
                      <span style={{ backgroundColor: '#000000', padding: '2px 8px', display: 'inline-block' }}>
                        {item.label.toUpperCase()}
                      </span>
                    </p>
                    <p className="text-nearcon-cream" style={{ fontFamily: 'Helvetica', fontSize: '18px', fontWeight: 700 }}>
                      <span style={{ backgroundColor: '#000000', padding: '2px 8px', display: 'inline-block' }}>
                        {item.value}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
