'use client'

import { useEffect, useRef, useState } from 'react'

const ROWS = 4
const FONT_SIZE = 18
const LETTERS = ['A', 'B', 'C']

export function TickerBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [rows, setRows] = useState<Map<number, { letter: string; color: string }>[]>(
    Array.from({ length: ROWS }, () => new Map())
  )

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return
      const span = document.createElement('span')
      span.style.cssText = `position:absolute;visibility:hidden;white-space:pre;font-family:Helvetica,Arial,sans-serif;font-weight:700;font-size:${FONT_SIZE}px;`
      span.textContent = '/'
      document.body.appendChild(span)
      const charWidth = span.getBoundingClientRect().width
      document.body.removeChild(span)
      const width = containerRef.current.offsetWidth
      // Estimate count assuming ~10px gap between chars
      setCount(Math.max(1, Math.floor((width + 10) / (charWidth + 10))))
    }

    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (count === 0) return

    const interval = setInterval(() => {
      setRows(prev => prev.map(row => {
        const next = new Map(row)
        for (const [idx] of next) {
          if (Math.random() < 0.45) next.delete(idx)
        }
        const toAdd = Math.floor(Math.random() * 2) + 1
        for (let i = 0; i < toAdd; i++) {
          const idx = Math.floor(Math.random() * count)
          if (!next.has(idx)) {
            next.set(idx, {
              letter: LETTERS[Math.floor(Math.random() * LETTERS.length)],
              color: '#000000',
            })
          }
        }
        return next
      }))
    }, 550)

    return () => clearInterval(interval)
  }, [count])

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: '#EBE3D3',
        width: '100%',
        overflow: 'hidden',
        padding: '10px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}
    >
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {Array.from({ length: count }, (_, i) => {
            const cell = row.get(i)
            return (
              <span
                key={i}
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: `${FONT_SIZE}px`,
                  lineHeight: 1,
                  color: '#000000',
                  userSelect: 'none',
                }}
              >
                {cell ? cell.letter : '/'}
              </span>
            )
          })}
        </div>
      ))}
    </div>
  )
}
