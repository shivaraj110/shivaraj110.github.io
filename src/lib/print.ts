// deterministic pseudo-random — same output every render, no hydration drift
function rnd(i: number): number {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

export function makeAscii(): string {
  const chars = '@#%&*+=~-:. '
  const rows: string[] = []
  for (let y = 0; y < 34; y++) {
    let line = ''
    for (let x = 0; x < 44; x++) {
      const dx = (x - 22) / 20
      const dy = (y - 17) / 16
      const d = Math.sqrt(dx * dx + dy * dy)
      const n = rnd(y * 44 + x)
      const v = Math.min(1, d * 0.85 + n * 0.4)
      line += chars[Math.floor(v * (chars.length - 1))]
    }
    rows.push(line)
  }
  return rows.join('\n')
}

export function makeHex(): string {
  const lines: string[] = []
  for (let r = 0; r < 3; r++) {
    let line = '0x' + (r * 16 + 2816).toString(16).toUpperCase().padStart(4, '0') + '  '
    for (let b = 0; b < 14; b++) {
      line += Math.floor(rnd(r * 31 + b * 7) * 256).toString(16).toUpperCase().padStart(2, '0') + ' '
    }
    lines.push(line)
  }
  return lines.join('\n')
}
