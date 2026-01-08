import { motion } from "motion/react";

interface Job {
  company: string;
  role: string;
  url: string;
  from: string;
  to: string | null;
}

const experience: Job[] = [
  {
    company: "emp0",
    role: "Software Engineer (contract)",
    url: "https://emp0.com",
    from: "Jan 2026",
    to: null,
  },
];

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      className="mb-12 sm:mb-16 md:mb-20"
    >
      <h2 className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4 sm:mb-5">
        Experience
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {experience.map((job) => (
          <div
            key={job.company}
            className="group p-4 sm:p-5 bg-zinc-900/30 border border-zinc-800/40 rounded-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                  <h3 className="font-medium text-sm sm:text-base text-zinc-200 break-words">
                    {job.role}
                  </h3>
                  {!job.to && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full shrink-0">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-300 transition-colors duration-200"
                >
                  {job.company}
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
              <span className="text-xs text-zinc-500 whitespace-nowrap shrink-0">
                {job.from} — {job.to ?? "Present"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
