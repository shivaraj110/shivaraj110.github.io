import { motion } from 'motion/react'

const hex: React.CSSProperties = {
  width: 26,
  height: 23,
  background: '#7ea6dd',
  clipPath: 'polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)',
  display: 'grid',
  placeItems: 'center',
}

const hexInner: React.CSSProperties = {
  width: 22,
  height: 19,
  background: '#04060b',
  clipPath: 'polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)',
}

export function Wordmark() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 30 }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: '26px solid #dcebff',
            borderTop: '30px solid transparent',
            filter: 'drop-shadow(0 0 6px rgba(140,190,255,.7))',
          }}
        />
        <div
          className="wordmark-title"
          style={{
            fontSize: 52,
            letterSpacing: '.32em',
            color: '#e6f1ff',
            textShadow: '0 0 10px rgba(140,190,255,.65)',
            lineHeight: 1,
          }}
        >
          SHIVARAJ
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, minWidth: 60 }}>
        <div style={{ height: 1, background: '#3b5c8f' }} />
        <div style={{ height: 1, background: '#1d3050', width: '60%' }} />
      </div>
      <div className="wordmark-hexes" style={{ display: 'flex', gap: 10 }}>
        <div style={hex}>
          <div style={hexInner} />
        </div>
        <div style={hex}>
          <div style={hexInner} />
        </div>
        <div style={hex} />
      </div>
    </motion.div>
  )
}
