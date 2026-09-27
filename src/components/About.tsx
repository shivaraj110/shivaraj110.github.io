import { useState } from 'react'
import { motion } from 'motion/react'
import { photo, setup, skills } from '../data/profile'

const facts: [string, React.ReactNode][] = [
  [
    'Role',
    <>
      Software Engineer,{' '}
      <a href="https://emp0.com" target="_blank" rel="noopener">
        EMP0
      </a>
    </>,
  ],
  ['Since', 'Jan 2026 – present'],
  ...setup,
]

export function About() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="display h1-white" style={{ margin: 0 }}>
        About
      </h2>
      <div className="about">
        <div className="about-intro">
          {!imgFailed && <img src={photo} alt="Shivaraj" className="portrait" onError={() => setImgFailed(true)} />}
          <p className="text-lg" style={{ margin: 0 }}>
            Software engineer at EMP0, building agentic workflows. Outside of work I make web apps, CLI tools and mobile
            applications — primarily in TypeScript, increasingly in Rust. Neovim enthusiast.
          </p>
        </div>
        <div>
          <dl className="facts">
            {facts.map(([k, v]) => (
              <div key={k} className="fact">
                <dt className="label">{k}</dt>
                <dd className="value">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="stack">
            <div className="label">Stack</div>
            <p className="value text-md" style={{ margin: '8px 0 0' }}>
              {skills.join(', ')}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
