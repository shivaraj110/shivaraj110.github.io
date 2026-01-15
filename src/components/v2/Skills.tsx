import { motion } from "motion/react";

interface SkillGroup {
  label: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    label: "Core",
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Remix", "React Native", "Tailwind"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "PostgreSQL", "Prisma", "Redis", "GraphQL"],
  },
  {
    label: "Tools",
    skills: ["Docker", "AWS", "n8n", "Neovim", "Linux"],
  },
];

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-px bg-gradient-to-r from-violet-500 to-transparent"
        />
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.2em]">
          Skills
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Horizontal line */}
        <div className="absolute top-3 left-0 right-0 h-px bg-zinc-800" />
        
        {/* Skill groups along the line */}
        <div className="flex justify-between">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + groupIndex * 0.1, duration: 0.4 }}
              className="relative flex flex-col items-center"
            >
              {/* Dot on line */}
              <div className="w-2 h-2 rounded-full bg-zinc-600 mb-4 relative z-10" />
              
              {/* Label */}
              <span className="text-xs text-zinc-500 font-medium mb-3">
                {group.label}
              </span>
              
              {/* Skills */}
              <div className="flex flex-col items-center gap-1.5">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + groupIndex * 0.1 + skillIndex * 0.03 }}
                    className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
