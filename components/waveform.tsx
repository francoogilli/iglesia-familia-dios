"use client"

import { useMemo } from "react"

export function Waveform() {
  const bars = useMemo(() => {
    const count = 200
    return Array.from({ length: count }, (_, i) => {
      const x = i / count
      const height =
        15 +
        Math.sin(x * Math.PI * 3) * 20 +
        Math.sin(x * Math.PI * 7) * 10 +
        Math.cos(x * Math.PI * 11) * 8 +
        Math.random() * 12
      return Math.max(5, Math.min(55, height))
    })
  }, [])

  return (
    <div className="flex items-end gap-px h-14 px-4 overflow-hidden" aria-hidden="true">
      {bars.map((height, i) => (
        <div
          key={i}
          className="flex-1 min-w-[2px] rounded-sm bg-primary/15"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  )
}
