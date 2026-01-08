import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { getStarsCount } from "../hooks/stars";

interface Project {
  name: string;
  description: string;
  tech: string;
  github: string;
  live?: string;
  stars?: number;
}

const projects: Project[] = [
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

export function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="mb-12 sm:mb-16 md:mb-20"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group mb-4 sm:mb-5"
      >
        <h2 className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-wider">
          Projects
          <span className="ml-2 text-zinc-600">({projects.length})</span>
        </h2>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="p-1 sm:p-1.5 rounded-md text-zinc-500 hover:text-zinc-400 hover:bg-zinc-800/50 transition-colors duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>

      {/* Collapsed Preview */}
      <AnimatePresence mode="wait">
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {projects.slice(0, 3).map((project) => (
                <span
                  key={project.name}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-zinc-400 bg-zinc-900/50 border border-zinc-800/50 rounded-md"
                >
                  {project.name}
                </span>
              ))}
              {projects.length > 3 && (
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-zinc-500 bg-zinc-900/30 border border-zinc-800/30 rounded-md">
                  +{projects.length - 3} more
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Projects */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-2 sm:space-y-3">
              {projects.map((project, i) => (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.04,
                    ease: "easeOut",
                  }}
                  className="group p-4 sm:p-5 bg-zinc-900/30 hover:bg-zinc-900/50 border border-zinc-800/40 hover:border-zinc-700/50 rounded-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2">
                    <h3 className="font-medium text-sm sm:text-base text-zinc-200 group-hover:text-white transition-colors duration-200">
                      {project.name}
                    </h3>
                    {project.stars !== undefined && project.stars > 0 && (
                      <span className="flex items-center gap-1 text-xs text-zinc-500 shrink-0">
                        <svg
                          className="w-3 sm:w-3.5 h-3 sm:h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {project.stars}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-2 sm:mb-3">
                    {project.description}
                  </p>

                  <p className="text-xs text-zinc-600 mb-3 sm:mb-4">
                    {project.tech}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={"https://github.com/" + project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs text-zinc-400 hover:text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/30 hover:border-zinc-600/50 rounded-md transition-colors duration-200"
                    >
                      <svg
                        className="w-3 sm:w-3.5 h-3 sm:h-3.5"
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
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs text-zinc-400 hover:text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/30 hover:border-zinc-600/50 rounded-md transition-colors duration-200"
                      >
                        <svg
                          className="w-3 sm:w-3.5 h-3 sm:h-3.5"
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
