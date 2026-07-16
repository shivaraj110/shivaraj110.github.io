import { useEffect, useRef } from 'react'

export function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const ctx = el.getContext('2d')
    if (!ctx) return

    let raf = 0
    const draw = (t: number) => {
      const w = (el.width = el.clientWidth * 2)
      const h = (el.height = el.clientHeight * 2)
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = 'rgba(80,130,220,.22)'
      ctx.lineWidth = 1
      for (let x = 0; x < w; x += 36) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke()
      }
      for (let y = 0; y < h; y += 24) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }
      const trace = (freq: number, amp: number, phase: number, color: string, blur: number) => {
        ctx.beginPath()
        for (let x = 0; x <= w; x += 4) {
          const y = h / 2 + Math.sin(x / freq + t / 700 + phase) * amp * Math.sin(x / (freq * 3.7) + t / 1900)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = color
        ctx.lineWidth = 2.5
        ctx.shadowColor = color
        ctx.shadowBlur = blur
        ctx.stroke()
        ctx.shadowBlur = 0
      }
      trace(46, h * 0.3, 0, 'rgba(156,196,255,.9)', 14)
      trace(70, h * 0.22, 2.2, 'rgba(90,140,220,.45)', 8)
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
}
