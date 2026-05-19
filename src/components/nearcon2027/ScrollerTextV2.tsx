'use client'

const TEXT = 'MARCH · 09 · 2027 · FORT MASON CENTER · SAN FRANCISCO · NEARCON · '

export function ScrollerTextV2() {
  return (
    <div
      className="w-full overflow-hidden border-t border-b border-text-primary"
      style={{ height: '50px', display: 'flex', alignItems: 'center', background: '#000000' }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'carousel-left 24s linear infinite',
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Helvetica',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '3px',
              color: '#F1B139',
              paddingRight: '20px',
            }}
          >
            {TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}
