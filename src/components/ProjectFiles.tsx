import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Corners } from './Corners'
import { projects } from '../data/projects'

export function ProjectFiles() {
  const [sel, setSel] = useState(0)
  const [npm, setNpm] = useState<Record<string, number>>({})

  useEffect(() => {
    projects
      .filter((p) => p.npm)
      .forEach(async (p) => {
        try {
          const res = await fetch('https://api.npmjs.org/downloads/range/2010-01-01:2030-01-01/' + p.npm)
          const data = await res.json()
          const total = data.downloads.reduce((s: number, d: { downloads: number }) => s + d.downloads, 0)
          setNpm((st) => ({ ...st, [p.npm!]: total }))
        } catch {
          /* count stays hidden */
        }
      })
  }, [])

  const project = projects[sel]
  const npmCount = project.npm ? npm[project.npm] : undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ position: 'relative', border: '1px solid #3b5c8f', marginTop: 34, boxShadow: '0 0 18px rgba(80,130,220,.14)' }}
    >
      <Corners />
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
          PROJECT FILES
        </div>
        <div style={{ fontSize: 11, color: '#5d7ba8', letterSpacing: '.15em' }}>
          {String(projects.length).padStart(2, '0')} RECORDS // DECLASSIFIED
        </div>
      </div>
      <div className="projects-grid">
        <div style={{ borderRight: '1px solid #3b5c8f', padding: '12px 0', display: 'flex', flexDirection: 'column' }}>
          {projects.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setSel(i)}
              style={{
                all: 'unset',
                boxSizing: 'border-box',
                cursor: 'pointer',
                display: 'block',
                width: '100%',
                padding: '9px 18px',
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: 13,
                letterSpacing: '.08em',
                color: i === sel ? '#e6f1ff' : '#6f8fbd',
                background: i === sel ? 'rgba(130,180,255,.12)' : 'transparent',
                borderLeft: i === sel ? '2px solid #9cc4ff' : '2px solid transparent',
                textShadow: i === sel ? '0 0 8px rgba(140,190,255,.7)' : 'none',
                transition: 'color .15s, background .15s',
              }}
            >
              <span style={{ color: '#5d7ba8', marginRight: 10 }}>{String(i + 1).padStart(2, '0')}</span>
              {p.name}
            </button>
          ))}
          <a
            href="https://github.com/shivaraj110?tab=repositories"
            target="_blank"
            rel="noopener"
            style={{ padding: '10px 18px', fontSize: 12, letterSpacing: '.1em', color: '#5d7ba8' }}
          >
            [VIEW ALL RECORDS →]
          </a>
        </div>
        <div style={{ padding: 22, minHeight: 300 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6, flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: "'VT323',monospace",
                    fontSize: 34,
                    letterSpacing: '.1em',
                    color: '#e6f1ff',
                    textShadow: '0 0 8px rgba(140,190,255,.55)',
                  }}
                >
                  {project.name}
                </span>
                <span style={{ background: '#dcebff', color: '#04060b', fontSize: 11, letterSpacing: '.18em', padding: '3px 9px' }}>
                  {project.tag}
                </span>
              </div>
              <div style={{ fontSize: 11, color: '#5d7ba8', letterSpacing: '.15em', marginBottom: 16 }}>
                FILE.{String(sel + 1).padStart(2, '0')} // CLEARANCE: PUBLIC
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: '#a9c9ff',
                  lineHeight: 1.8,
                  letterSpacing: '.03em',
                  maxWidth: 560,
                  marginBottom: 18,
                }}
              >
                {project.desc}
              </div>
              <div
                style={{
                  borderTop: '1px solid #22406e',
                  borderBottom: '1px solid #22406e',
                  padding: '10px 0',
                  marginBottom: 18,
                }}
              >
                <div style={{ fontSize: 10, color: '#5d7ba8', letterSpacing: '.2em', marginBottom: 6 }}>ARMAMENT</div>
                <div style={{ fontSize: 13, color: '#8fb2e6', letterSpacing: '.05em' }}>{project.tech}</div>
              </div>
              {npmCount !== undefined && (
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 10, color: '#5d7ba8', letterSpacing: '.2em', marginBottom: 4 }}>
                    CONFIRMED DEPLOYMENTS (NPM)
                  </div>
                  <div
                    style={{
                      fontFamily: "'VT323',monospace",
                      fontSize: 32,
                      color: '#e6f1ff',
                      textShadow: '0 0 10px rgba(140,190,255,.7)',
                    }}
                  >
                    {npmCount.toLocaleString()} DL
                  </div>
                </div>
              )}
              <div style={{ display: 'flex', gap: 24, fontSize: 13, letterSpacing: '.08em' }}>
                <a href={'https://github.com/' + project.github} target="_blank" rel="noopener">
                  [VIEW CODE]
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener">
                    [LIVE SIGNAL]
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
