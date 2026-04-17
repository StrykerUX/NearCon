interface FrameCornersProps {
  color?: string
  size?: string
}

export function FrameCorners({ color = "border-text-primary", size = "w-4 h-4" }: FrameCornersProps) {
  return (
    <>
      <div className={`absolute top-0 left-0 ${size} border-t border-l ${color}`} />
      <div className={`absolute top-0 right-0 ${size} border-t border-r ${color}`} />
      <div className={`absolute bottom-0 left-0 ${size} border-b border-l ${color}`} />
      <div className={`absolute bottom-0 right-0 ${size} border-b border-r ${color}`} />
    </>
  )
}
