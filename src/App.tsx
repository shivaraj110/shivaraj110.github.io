import { Wordmark } from './components/Wordmark'
import { SubjectDossier } from './components/SubjectDossier'
import { ServiceRecord } from './components/ServiceRecord'
import { ProjectFiles } from './components/ProjectFiles'
import { FooterBands } from './components/FooterBands'

export function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#04060b', position: 'relative', overflowX: 'hidden' }}>
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: '44px 28px 60px',
          fontFamily: "'Share Tech Mono',monospace",
          color: '#b8d4ff',
        }}
      >
        <Wordmark />
        <SubjectDossier />
        <ServiceRecord />
        <ProjectFiles />
        <FooterBands />
      </div>

      {/* CRT scanlines */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          background: 'repeating-linear-gradient(0deg,rgba(0,0,0,.22) 0 1px,transparent 1px 3px)',
          zIndex: 50,
        }}
      />
      {/* vignette */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,.5) 100%)',
          zIndex: 51,
        }}
      />
    </div>
  )
}
