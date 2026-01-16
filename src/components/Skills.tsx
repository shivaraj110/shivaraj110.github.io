import { motion } from "motion/react";

const skills = [
  "TypeScript",
  "JavaScript",
  "C",
  "Express",
  "Drizzle",
  "Python",
  "React",
  "Next.js",
  "Remix",
  "React Native",
  "Tailwind",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "GraphQL",
  "Docker",
  "AWS",
  "n8n",
  "Neovim",
  "Linux",
];

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 sm:mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
          Skills
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-zinc-800/50 to-transparent" />
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.02 }}
            className="px-3 py-1.5 text-sm text-zinc-400 bg-zinc-900/50 border border-zinc-800/50 rounded-lg hover:text-zinc-300 hover:border-zinc-700/50 transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
