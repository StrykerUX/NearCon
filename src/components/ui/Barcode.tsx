interface BarcodeProps {
  className?: string
}

export function Barcode({ className = "" }: BarcodeProps) {
  const widths = [2, 4, 1, 3, 2, 5, 1, 2, 4, 2, 1, 3, 2, 4, 1, 2, 5, 2, 1]

  return (
    <div className={`flex items-stretch h-12 gap-[2px] ${className}`}>
      {widths.map((w, i) => (
        <div key={i} className="bg-black" style={{ width: `${w}px` }} />
      ))}
    </div>
  )
}
