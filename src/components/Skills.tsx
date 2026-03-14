import { motion } from "motion/react";
import { RetroWindow } from "./RetroWindow";

interface SkillsProps {
  onBringToFront?: () => void;
  zIndex?: number;
  width?: number;
  draggable?: boolean;
}

const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "C",
  "React",
  "Next.js",
  "Remix",
  "React Native",
  "Tailwind",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Drizzle",
  "Redis",
  "GraphQL",
  "Docker",
  "AWS",
  "n8n",
  "Neovim",
  "Linux",
];

export function Skills({ onBringToFront, zIndex, width, draggable = true }: SkillsProps) {
  return (
    <RetroWindow title="tools.pdf" onBringToFront={onBringToFront} zIndex={zIndex} width={width} draggable={draggable}>
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="p-4 bg-[#3178C6]/10 rounded-lg border-2 border-[#3178C6]/30"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#3178C6] flex items-center justify-center">
              <span className="text-white font-mono text-sm font-bold">TS</span>
            </div>
            <div>
              <span className="font-mono text-base text-[var(--color-text)] font-semibold">TypeScript</span>
              <p className="text-xs text-[var(--color-text-subtle)] font-mono">Primary language</p>
            </div>
          </div>
        </motion.div>
        
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.02, duration: 0.3 }}
              className="px-2 py-1 text-xs font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border)]/50 rounded hover:border-[var(--color-border-strong)] transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </RetroWindow>
  );
}
