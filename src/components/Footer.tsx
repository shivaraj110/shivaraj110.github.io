import { Clock } from './Clock'
import { nav } from './Hero'
import { links } from '../data/profile'

export function Footer() {
  const socials = [links.github, links.x, links.blog, links.sponsor]

  return (
    <footer className="footer">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <a href="#top" className="display h1" style={{ lineHeight: 1 }}>
          Shivaraj
        </a>
        <Clock />
        <div className="text-lg">©{new Date().getFullYear()} Shivaraj</div>
      </div>
      <div className="footer-cols">
        <div className="footer-col">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
        </div>
        <div className="footer-col">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener" className="nav-link">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
