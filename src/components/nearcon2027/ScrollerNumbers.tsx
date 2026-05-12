'use client'

const TEXT = '352678901 | 601908113290485847 | 138597942865748 | 134545652364758 | 427654321827394    '

export function ScrollerNumbers() {
  return (
    <div
      className="w-full overflow-hidden bg-nearcon-green"
      style={{ height: '44px', display: 'flex', alignItems: 'center' }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'carousel-left 30s linear infinite',
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '1px',
              color: '#000000',
              paddingRight: '40px',
            }}
          >
            {TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}
