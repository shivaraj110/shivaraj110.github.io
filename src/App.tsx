import { useState } from 'react'
import { motion } from 'motion/react'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const BLINDS = 5

// page-enter transition: vertical blinds that fold away to reveal the page
function Blinds() {
  const [done, setDone] = useState(false)
  if (done) return null

  return (
    <div className="blinds" aria-hidden>
      {Array.from({ length: BLINDS }, (_, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: [0.27, 0, 0.51, 1] }}
          onAnimationComplete={i === BLINDS - 1 ? () => setDone(true) : undefined}
        />
      ))}
    </div>
  )
}

export function App() {
  return (
    <div id="top" className="page">
      <Hero />
      <main>
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
      <Blinds />
    </div>
  )
}
