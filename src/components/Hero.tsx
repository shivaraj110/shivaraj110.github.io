import { motion } from 'motion/react'
import { FitText } from './FitText'
import { Clock } from './Clock'

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Hero() {
  return (
    <header className="hero">
      <h1 style={{ margin: 0 }}>
        <FitText text="Shivaraj" className="display hero-name" />
      </h1>
      <motion.div
        className="hero-info"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <p className="text-md" style={{ margin: 0, maxWidth: 400 }}>
            Shivaraj is a software engineer building web apps, CLI tools and mobile applications, mostly in TypeScript and
            Rust.
          </p>
          <Clock />
        </div>
        <nav className="hero-nav">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </header>
  )
}
