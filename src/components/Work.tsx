import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { projects, type Project } from '../data/projects'

function Card({ project, index, downloads }: { project: Project; index: number; downloads?: number }) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
    >
      <div className="card-top text-sm">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{project.tag}</span>
      </div>
      <h3 className="display h2 card-name">{project.name}</h3>
      <p className="text-md" style={{ margin: 0 }}>
        {project.desc}
      </p>
      <div className="card-meta">
        <div>
          <div className="label">Stack</div>
          <div className="value text-sm">{project.tech}</div>
        </div>
        {downloads !== undefined && (
          <div>
            <div className="label">npm downloads</div>
            <div className="value text-sm">{downloads.toLocaleString()}</div>
          </div>
        )}
      </div>
      <div className="card-links text-sm">
        <a href={'https://github.com/' + project.github} target="_blank" rel="noopener">
          Source ↗
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener">
            Live ↗
          </a>
        )}
      </div>
    </motion.article>
  )
}

export function Work() {
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

  return (
    <section id="work" className="section">
      <div className="section-head">
        <h2 className="display h1-white" style={{ margin: 0 }}>
          Work
        </h2>
        <span className="text-sm">{String(projects.length).padStart(2, '0')} projects</span>
      </div>
      <div className="cards">
        {projects.map((p, i) => (
          <Card key={p.name} project={p} index={i} downloads={p.npm ? npm[p.npm] : undefined} />
        ))}
      </div>
      <a
        href="https://github.com/shivaraj110?tab=repositories"
        target="_blank"
        rel="noopener"
        className="nav-link text-md"
        style={{ display: 'inline-block', marginTop: 40 }}
      >
        All repositories →
      </a>
    </section>
  )
}
