import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import "./index.css";
import { getStarsCount } from "./hooks/stars";

const projects: {
  name: string;
  description: string;
  tech: string;
  github: string;
  live?: string;
  stars?: number;
}[] = [
  {
    name: "Postboy TUI",
    description: "Terminal-based API testing tool with beautiful TUI interface",
    tech: "TypeScript, Ink, React",
    github: "Postboy-tui/app",
    live: "https://www.npmjs.com/package/postboy-tui",
    stars: await getStarsCount("https://api.github.com/repos/Postboy-tui/app"),
  },
  {
    name: "BlogStack",
    description: "Full-stack blogging platform with cross-posting support",
    tech: "Remix, TypeScript, Prisma, PostgreSQL",
    github: "shivaraj110/BlogStack-remix",
    live: "https://blogstack-ruby.vercel.app",
    stars: await getStarsCount(
      "https://api.github.com/repos/shivaraj110/BlogStack-remix"
    ),
  },
  {
    name: "ShelfCook",
    description: "Mobile app for recipe management and meal planning",
    tech: "React Native, Expo, TypeScript",
    github: "shivaraj110/sc-newui",
    live: "https://shelfcook.netlify.app/",
    stars: await getStarsCount(
      "https://api.github.com/repos/shivaraj110/sc-newui"
    ),
  },
  {
    name: "Flowro Landing",
    description: "SaaS agency landing page with modern animations",
    tech: "TypeScript, React, Tailwind",
    github: "shivaraj110/Flowro-landing",
    live: "https://flowro.netlify.app/",
    stars: await getStarsCount(
      "https://api.github.com/repos/shivaraj110/Flowro-landing"
    ),
  },
  {
    name: "FontAI",
    description: "AI-powered font picker for designers and developers",
    tech: "TypeScript, React, Vite, Tailwind",
    github: "shivaraj110/fontAI",
    live: "https://fontpickerai.netlify.app/",
    stars: await getStarsCount(
      "https://api.github.com/repos/shivaraj110/fontAI"
    ),
  },
  {
    name: "Pomo TUI",
    description: "Minimalist terminal pomodoro timer for productivity",
    tech: "TypeScript, Ink",
    github: "shivaraj110/pomo-tui",
    live: "https://www.npmjs.com/package/pomo-tui",
    stars: await getStarsCount(
      "https://api.github.com/repos/shivaraj110/pomo-tui"
    ),
  },
  {
    name: "StoreLinks",
    description: "Browser extension for managing categorized bookmarks",
    tech: "TypeScript, Chrome Extension API",
    github: "shivaraj110/store-links",
    stars: await getStarsCount(
      "https://api.github.com/repos/shivaraj110/store-links"
    ),
  },
  {
    name: "WebRTC Signaling Server",
    description: "Real-time signaling server for peer-to-peer connections",
    tech: "TypeScript, WebSockets",
    github: "shivaraj110/webRTC-signaling-server",
    stars: await getStarsCount(
      "https://api.github.com/repos/shivaraj110/webRTC-signaling-server"
    ),
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 pointer-events-none" />

      {/* Image Modal */}
      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsImageExpanded(false)}
            className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-50 flex items-center justify-center cursor-pointer"
          >
            <motion.img
              src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
              alt="Shivaraj"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative max-w-2xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-20"
        >
          <motion.img
            src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
            alt="Shivaraj"
            onClick={() => setIsImageExpanded(true)}
            className="w-16 h-16 rounded-xl object-cover mb-8 cursor-pointer ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          />

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            Shivaraj
          </h1>

          <p className="text-lg text-zinc-400 mb-4">Software Engineer</p>

          <p className="text-zinc-500 leading-relaxed max-w-lg">
            Building web apps, CLI tools, and mobile applications from Bagalkot,
            Karnataka. Primarily TypeScript. Neovim enthusiast.
          </p>

          <div className="flex gap-3 mt-8">
            <motion.a
              href="https://github.com/shivaraj110"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors duration-200"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </motion.a>
            <motion.a
              href="https://x.com/shivaraj_does"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors duration-200"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </motion.a>
          </div>
        </motion.header>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
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
                transition={{ duration: 0.3, delay: 0.15 + i * 0.02 }}
                className="px-3 py-1.5 text-sm text-zinc-400 bg-zinc-900/50 border border-zinc-800/50 rounded-md hover:text-zinc-300 hover:border-zinc-700/50 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-5">
            Projects
          </h2>
          <div className="space-y-3">
            {projects.map((project, i) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.25 + i * 0.05,
                  ease: "easeOut",
                }}
                className="group p-5 bg-zinc-900/30 hover:bg-zinc-900/50 border border-zinc-800/40 hover:border-zinc-700/50 rounded-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-medium text-zinc-200 group-hover:text-white transition-colors duration-200">
                    {project.name}
                  </h3>
                  {project.stars !== undefined && project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {project.stars}
                    </span>
                  )}
                </div>

                <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                  {project.description}
                </p>

                <p className="text-xs text-zinc-600 mb-4">{project.tech}</p>

                <div className="flex gap-2">
                  <a
                    href={"https://github.com/" + project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/30 hover:border-zinc-600/50 rounded-md transition-colors duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/30 hover:border-zinc-600/50 rounded-md transition-colors duration-200"
                    >
                      <svg
                        className="w-3.5 h-3.5"
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
                      Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 border-t border-zinc-800/50"
        >
          <p className="text-xs text-zinc-600 text-center">
            Built with React & Motion
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
