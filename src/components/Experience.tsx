import { motion } from "motion/react";

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
    description: "Building scalable web applications and developer tools",
  },
];

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 sm:mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
          Experience
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-zinc-800/50 to-transparent" />
      </div>
      
      <div className="space-y-4">
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
            className="group relative p-5 sm:p-6 bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700/60 rounded-2xl transition-all duration-400 card-glow"
          >
            {/* Current indicator line */}
            {!job.to && (
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-400 to-emerald-400/20 rounded-full" />
            )}
            
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
              <div className="flex-1 min-w-0 pl-3 sm:pl-4">
                {/* Role & Status */}
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <h3 className="font-semibold text-base sm:text-lg text-zinc-200 group-hover:text-white transition-colors duration-300">
                    {job.role}
                  </h3>
                  {!job.to && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      Current
                    </span>
                  )}
                </div>
                
                {/* Company */}
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-violet-400 transition-colors duration-300 link-underline mb-2"
                >
                  <BuildingIcon />
                  {job.company}
                  <ExternalLinkIcon />
                </a>
                
                {/* Description */}
                {job.description && (
                  <p className="text-sm text-zinc-500 leading-relaxed mt-2">
                    {job.description}
                  </p>
                )}
              </div>
              
              {/* Date */}
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-500 bg-zinc-800/40 rounded-lg whitespace-nowrap shrink-0 self-start sm:self-auto">
                <CalendarIcon />
                {job.from} — {job.to ?? "Present"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// Icons
function BuildingIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
