import { motion } from "motion/react";
import "./index.css";

const projects = [
  {
    name: "Postboy",
    description: "Terminal-based API testing tool with TUI - 19 stars",
    tech: "TypeScript, Ink",
    github: "https://github.com/Postboy-tui/app",
    live: "https://www.npmjs.com/package/postboy-tui",
  },
  {
    name: "BlogStack",
    description: "Full-stack blogging platform for sharing knowledge",
    tech: "Next.js, TypeScript, Turborepo",
    github: "https://github.com/shivaraj110/BlogStack",
    live: "https://blogstack-ruby.vercel.app",
  },
  {
    name: "ShelfCook",
    description: "Mobile app for recipe management built with Expo",
    tech: "React Native, Expo, TypeScript",
    github: "https://github.com/shivaraj110/ShelfCook",
    live: "https://shelfcook.netlify.app/",
  },
  {
    name: "Flowro Landing",
    description: "SaaS agency landing page prototype",
    tech: "TypeScript, React",
    github: "https://github.com/shivaraj110/Flowro-landing",
    live: "https://flowro.netlify.app/",
  },
  {
    name: "Pomo TUI",
    description: "Terminal pomodoro timer",
    tech: "TypeScript",
    github: "https://github.com/shivaraj110/pomo-tui",
    live: "https://www.npmjs.com/package/pomo-tui",
  },
  {
    name: "FontAI",
    description: "AI-powered font picker for designers",
    tech: "TypeScript, React, Vite, Tailwind",
    github: "https://github.com/shivaraj110/font-ai",
    live: "https://fontpickerai.netlify.app/",
  },
  {
    name: "WayLink",
    description: "Ride pooling application for shared commutes",
    tech: "React Native, TypeScript",
    github: "https://github.com/ridePoolingApp",
    live: "https://waylink110.netlify.app/",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "AWS",
  "Neovim",
];

export function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Shivaraj</h1>
          <p className="text-xl text-neutral-400 mb-4">
            Full-stack developer from Bagalkot, Karnataka
          </p>
          <p className="text-neutral-500 mb-12">
            Building web apps, CLI tools, and mobile apps. Neovim enthusiast.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 text-neutral-200">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 text-neutral-200">Projects</h2>
          <div className="grid gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                className="p-6 bg-neutral-900 rounded-lg border border-neutral-800"
              >
                <h3 className="text-lg font-medium">{project.name}</h3>
                <p className="text-neutral-500 text-sm mt-1">{project.description}</p>
                <p className="text-neutral-600 text-xs mt-2">{project.tech}</p>
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-sm bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
                    >
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-neutral-200">Contact</h2>
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/shivaraj110"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://x.com/shivaraj_does"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              X / Twitter
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;
