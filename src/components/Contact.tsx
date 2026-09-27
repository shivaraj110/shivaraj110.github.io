import { useState } from 'react'
import { motion } from 'motion/react'
import { discord, links } from '../data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyDiscord = () => {
    navigator.clipboard.writeText(discord)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const rows = [links.email, links.github, links.x, links.blog, links.sponsor]

  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="display h1-white" style={{ margin: 0 }}>
        Contact
      </h2>
      <p className="text-lg" style={{ margin: '40px 0 0', maxWidth: 560 }}>
        Get in touch. Always happy to talk about tools, side projects, or new work.
      </p>
      <div className="contact-rows">
        {rows.map((r) => (
          <a key={r.label} href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="row">
            <span>{r.label}</span>
            <span className="value">{r.value}</span>
          </a>
        ))}
        <button onClick={copyDiscord} className="row">
          <span>Discord</span>
          <span className="value">{copied ? 'Copied!' : discord}</span>
        </button>
      </div>
    </motion.section>
  )
}
