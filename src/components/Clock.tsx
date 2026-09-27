import { useEffect, useState } from 'react'

const fmt = (d: Date) => d.toLocaleTimeString('en-GB', { hour12: false })

export function Clock() {
  const [now, setNow] = useState(() => fmt(new Date()))

  useEffect(() => {
    const id = setInterval(() => setNow(fmt(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  return <span className="clock">{now}</span>
}
