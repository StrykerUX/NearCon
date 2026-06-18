'use client'

const COLORS = ['#65D56E', '#59C2E8', '#F98372', '#F1B139']
const CYCLE = 4 // segundos por ciclo completo de color
const COUNT = 40 // suficiente para llenar cualquier pantalla en loop

export function ScrollerTextV2() {
  return (
    <div
      className="w-full overflow-hidden border-t border-b border-text-primary"
      style={{ height: '50px', display: 'flex', alignItems: 'center', background: '#000000' }}
    >
      <style>{`
        @keyframes nearcon-rainbow {
          0%   { color: #65D56E; }
          25%  { color: #59C2E8; }
          50%  { color: #F98372; }
          75%  { color: #F1B139; }
          100% { color: #65D56E; }
        }
        .nearcon-scroll-track {
          display: flex;
          white-space: nowrap;
          animation: carousel-left 28s linear infinite;
        }
        .nearcon-word {
          font-family: Helvetica, Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          padding-right: 32px;
          animation: nearcon-rainbow ${CYCLE}s linear infinite;
        }
      `}</style>
      <div className="nearcon-scroll-track">
        {Array.from({ length: COUNT }).map((_, i) => (
          <span
            key={i}
            className="nearcon-word"
            style={{ animationDelay: `${-(i % COLORS.length) * (CYCLE / COLORS.length)}s` }}
          >
            NEARCON
          </span>
        ))}
      </div>
    </div>
  )
}
