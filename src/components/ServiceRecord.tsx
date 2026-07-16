import { motion } from 'motion/react'

const cellLabel: React.CSSProperties = {
  background: 'rgba(130,180,255,.1)',
  border: '1px solid #22406e',
  padding: '5px 12px',
  minWidth: 130,
  color: '#8fb2e6',
}

const cellValue: React.CSSProperties = {
  border: '1px solid #22406e',
  borderLeft: 'none',
  padding: '5px 12px',
  flex: 1,
  color: '#e6f1ff',
}

export function ServiceRecord() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ position: 'relative', border: '1px solid #3b5c8f', marginTop: 34, boxShadow: '0 0 18px rgba(80,130,220,.14)' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          borderBottom: '1px solid #3b5c8f',
        }}
      >
        <div
          style={{
            fontFamily: "'VT323',monospace",
            fontSize: 28,
            letterSpacing: '.14em',
            color: '#dcebff',
            textShadow: '0 0 8px rgba(140,190,255,.6)',
          }}
        >
          SERVICE RECORD
        </div>
        <div style={{ fontSize: 11, color: '#5d7ba8', letterSpacing: '.15em' }}>01 ENTRY // ACTIVE DUTY</div>
      </div>
      <div className="service-grid" style={{ padding: '20px 22px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'VT323',monospace", fontSize: 28, letterSpacing: '.1em', color: '#e6f1ff' }}>EMP0</span>
            <span
              style={{
                background: '#dcebff',
                color: '#04060b',
                fontSize: 12,
                letterSpacing: '.18em',
                padding: '3px 10px',
                boxShadow: '0 0 10px rgba(140,190,255,.5)',
              }}
            >
              SOFTWARE ENGINEER
            </span>
          </div>
          <div style={{ fontSize: 13, color: '#8fb2e6', letterSpacing: '.05em', lineHeight: 1.7 }}>
            MISSION BRIEF: BUILDING AGENTIC WORKFLOWS. WEB APPS, CLI TOOLS, MOBILE APPLICATIONS.
          </div>
          <a
            href="https://emp0.com"
            target="_blank"
            rel="noopener"
            style={{ display: 'inline-block', marginTop: 10, fontSize: 12, letterSpacing: '.1em' }}
          >
            [ACCESS EMP0.COM →]
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
          <div style={{ display: 'flex', fontSize: 13, letterSpacing: '.08em' }}>
            <span style={cellLabel}>TOUR START:</span>
            <span style={cellValue}>JAN 2026</span>
          </div>
          <div style={{ display: 'flex', fontSize: 13, letterSpacing: '.08em' }}>
            <span style={cellLabel}>TOUR END:</span>
            <span style={cellValue}>
              EXTEND <span className="blink-fast">_</span>
            </span>
          </div>
          <div style={{ display: 'flex', fontSize: 13, letterSpacing: '.08em' }}>
            <span style={cellLabel}>STATUS:</span>
            <span style={{ ...cellValue, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                className="pulse-dot-fast"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#9cc4ff',
                  boxShadow: '0 0 7px rgba(140,190,255,.9)',
                }}
              />
              CURRENT
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
