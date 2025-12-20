import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import "./index.css";

const projects = [
  {
    name: "Postboy TUI",
    description: "Terminal-based API testing tool with beautiful TUI interface",
    tech: "TypeScript, Ink, React",
    github: "https://github.com/Postboy-tui/app",
    live: "https://www.npmjs.com/package/postboy-tui",
    stars: 19,
  },
  {
    name: "BlogStack",
    description: "Full-stack blogging platform with cross-posting support",
    tech: "Remix, TypeScript, Prisma, PostgreSQL",
    github: "https://github.com/BlogStack110/app",
    live: "https://blogstack-ruby.vercel.app",
    stars: 1,
  },
  {
    name: "ShelfCook",
    description: "Mobile app for recipe management and meal planning",
    tech: "React Native, Expo, TypeScript",
    github: "https://github.com/shivaraj110/ShelfCook",
    live: "https://shelfcook.netlify.app/",
  },
  {
    name: "Flowro Landing",
    description: "SaaS agency landing page with modern animations",
    tech: "TypeScript, React, Tailwind",
    github: "https://github.com/shivaraj110/Flowro-landing",
    live: "https://flowro.netlify.app/",
    stars: 2,
  },
  {
    name: "FontAI",
    description: "AI-powered font picker for designers and developers",
    tech: "TypeScript, React, Vite, Tailwind",
    github: "https://github.com/shivaraj110/fontAI",
    live: "https://fontpickerai.netlify.app/",
  },
  {
    name: "Pomo TUI",
    description: "Minimalist terminal pomodoro timer for productivity",
    tech: "TypeScript, Ink",
    github: "https://github.com/shivaraj110/pomo-tui",
    live: "https://www.npmjs.com/package/pomo-tui",
    stars: 1,
  },
  {
    name: "StoreLinks",
    description: "Browser extension for managing categorized bookmarks",
    tech: "TypeScript, Chrome Extension API",
    github: "https://github.com/shivaraj110/store-links",
  },
  {
    name: "WebRTC Signaling Server",
    description: "Real-time signaling server for peer-to-peer connections",
    tech: "TypeScript, WebSockets",
    github: "https://github.com/shivaraj110/webRTC-signaling-server",
  },
];

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

export function App() {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-20">
      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageExpanded(false)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-pointer"
          >
            <motion.img
              src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
              alt="Shivaraj"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-80 h-80 rounded-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-3xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.img
            src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
            alt="Shivaraj"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsImageExpanded(true)}
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full object-cover mb-6 cursor-pointer"
          />
          <h1 className="text-5xl font-bold mb-4">Shivaraj</h1>
          <p className="text-xl text-neutral-400 mb-4">
            Software Engineer
          </p>
          <p className="text-neutral-500 leading-relaxed">
            Building web apps, CLI tools, and mobile applications from Bagalkot, Karnataka.
            36 repositories, primarily TypeScript. Neovim enthusiast.
          </p>
          <div className="flex gap-4 mt-6">
            <motion.a
              href="https://github.com/shivaraj110"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://x.com/shivaraj_does"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm transition-colors"
            >
              Twitter
            </motion.a>
          </div>
        </motion.header>

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
                transition={{ duration: 0.3, delay: 0.2 + i * 0.03 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgb(64 64 64)" }}
                className="px-3 py-1.5 bg-neutral-800 rounded-full text-sm text-neutral-300 cursor-default"
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
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgb(32 32 32)" }}
                className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  {project.stars && (
                    <span className="text-xs text-yellow-500 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {project.stars}
                    </span>
                  )}
                </div>
                <p className="text-neutral-500 text-sm">{project.description}</p>
                <p className="text-neutral-600 text-xs mt-2">{project.tech}</p>
                <div className="flex gap-3 mt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 text-sm bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                  >
                    GitHub
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
                    >
                      Live
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-neutral-600 text-sm pt-8 border-t border-neutral-800"
        >
          Built with React & Motion
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
