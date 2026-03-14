import { motion } from "motion/react";
import { RetroWindow } from "./RetroWindow";

interface ExperienceProps {
  onBringToFront?: () => void;
  zIndex?: number;
  width?: number;
  draggable?: boolean;
}

interface Job {
  company: string;
  role: string;
  url: string;
  from: string;
  to: string | null;
  description?: string;
}

const experience: Job[] = [
  {
    company: "emp0",
    role: "Software Engineer",
    url: "https://emp0.com",
    from: "Jan 2026",
    to: null,
    description: "Building agentic workflows",
  },
];

export function Experience({ onBringToFront, zIndex, width, draggable = true }: ExperienceProps) {
  return (
    <RetroWindow title="experience.pdf" onBringToFront={onBringToFront} zIndex={zIndex} width={width} draggable={draggable}>
      <div className="space-y-6">
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
            className="relative pl-6 border-l-2 border-[var(--color-border)]"
          >
            {!job.to && (
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-terminal-green)] border-4 border-[var(--color-window-bg)]" />
            )}
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="text-lg font-serif font-semibold text-[var(--color-text)]">
                {job.role}
              </h3>
              {!job.to && (
                <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[var(--color-terminal-green-dark)] bg-[var(--color-terminal-green)]/10 border border-[var(--color-terminal-green)]/30 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-terminal-green)] animate-pulse" />
                  Current
                </span>
              )}
            </div>
            
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-terminal-amber)] transition-colors font-mono text-sm mb-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {job.company}
              <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            {job.description && (
              <p className="text-[var(--color-text-muted)] text-sm mt-2">
                {job.description}
              </p>
            )}
            
            <div className="flex items-center gap-2 mt-3 text-xs font-mono text-[var(--color-text-subtle)]">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {job.from} — {job.to ?? "Present"}
            </div>
          </motion.div>
        ))}
      </div>
    </RetroWindow>
  );
}
