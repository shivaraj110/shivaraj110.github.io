import { motion } from "motion/react";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Remix",
  "Node.js",
  "React Native",
  "Tailwind",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Docker",
  "AWS",
  "GraphQL",
  "Neovim",
  "Linux",
];

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      className="mb-20"
    >
      <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-5">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.02 }}
            className="px-3 py-1.5 text-sm text-zinc-400 bg-zinc-900/50 border border-zinc-800/50 rounded-md hover:text-zinc-300 hover:border-zinc-700/50 transition-colors duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
