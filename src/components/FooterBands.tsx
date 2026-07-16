import { motion } from 'motion/react'

const pill: React.CSSProperties = {
  flex: 1,
  border: '1px solid #7ea6dd',
  borderRadius: 999,
  padding: '8px 20px',
  textAlign: 'center',
}

export function FooterBands() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="footer-bands" style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 44 }}>
        <div style={pill}>
          <div style={{ fontSize: 15, letterSpacing: '.35em', color: '#e6f1ff' }}>SHIVARAJ</div>
          <div style={{ fontSize: 9, letterSpacing: '.3em', color: '#5d7ba8' }}>SOFTWARE ENGINEER</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, minWidth: 220 }}>
          <div style={{ fontSize: 14, letterSpacing: '.3em', color: '#dcebff' }}>SR-110 PERSONNEL</div>
          <div
            style={{
              width: 190,
              height: 9,
              background:
                'repeating-linear-gradient(90deg,#7ea6dd 0 1px,transparent 1px 21px),repeating-linear-gradient(90deg,#3b5c8f 0 1px,transparent 1px 7px)',
              backgroundPosition: 'bottom',
            }}
          />
          <div style={{ width: 200, display: 'flex', justifyContent: 'space-between', fontSize: 9, color: '#5d7ba8' }}>
            {['0', '1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
        <div style={pill}>
          <div style={{ fontSize: 15, letterSpacing: '.35em', color: '#e6f1ff' }}>PORTFOLIO</div>
          <div style={{ fontSize: 9, letterSpacing: '.3em', color: '#5d7ba8' }}>FILE.2026</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 22, fontSize: 10, letterSpacing: '.2em', color: '#3f6296' }}>
        © 2026 SHIVARAJ — BUILT WITH PASSION // "THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO"
      </div>
    </motion.div>
  )
}
