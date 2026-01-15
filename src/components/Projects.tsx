import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

type ProjectCategory = "Web App" | "Mobile App" | "CLI Tool" | "Browser Extension" | "Backend" | "AI/ML" | "SaaS";

interface Project {
  name: string;
  description: string;
  tech: string;
  github: string;
  live?: string;
  category: ProjectCategory;
  experience: string; // e.g., "3 months", "6 months", "1 year"
}

const categoryColors: Record<ProjectCategory, { bg: string; text: string; border: string }> = {
  "Web App": { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  "Mobile App": { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  "CLI Tool": { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
  "Browser Extension": { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  "Backend": { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20" },
  "AI/ML": { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
  "SaaS": { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
};

const projectsData: Project[] = [
  {
    name: "Postboy TUI",
    description: "Terminal-based API testing tool with beautiful TUI interface. Test REST APIs directly from your terminal with an intuitive interface.",
    tech: "TypeScript, Ink, React",
    github: "Postboy-tui/app",
    live: "https://www.npmjs.com/package/postboy-tui",
    category: "CLI Tool",
    experience: "2 months",
  },
  {
    name: "BlogStack",
    description: "Full-stack blogging platform with cross-posting support. Write once, publish everywhere with seamless integration.",
    tech: "Remix, TypeScript, Prisma, PostgreSQL",
    github: "shivaraj110/BlogStack-remix",
    live: "https://blogstack-ruby.vercel.app",
    category: "Web App",
    experience: "4 months",
  },
  {
    name: "ShelfCook",
    description: "Mobile app for recipe management and meal planning. Organize your recipes, plan meals, and generate shopping lists effortlessly.",
    tech: "React Native, Expo, TypeScript",
    github: "shivaraj110/sc-newui",
    live: "https://shelfcook.netlify.app/",
    category: "Mobile App",
    experience: "3 months",
  },
  {
    name: "Flowro Landing",
    description: "SaaS agency landing page with modern animations. Showcasing smooth transitions and elegant micro-interactions.",
    tech: "TypeScript, React, Tailwind",
    github: "shivaraj110/Flowro-landing",
    live: "https://flowro.netlify.app/",
    category: "SaaS",
    experience: "2 weeks",
  },
  {
    name: "FontAI",
    description: "AI-powered font picker for designers and developers. Get intelligent font pairing suggestions using machine learning.",
    tech: "TypeScript, React, Vite, Tailwind",
    github: "shivaraj110/fontAI",
    live: "https://fontpickerai.netlify.app/",
    category: "AI/ML",
    experience: "1 month",
  },
  {
    name: "Pomo TUI",
    description: "Minimalist terminal pomodoro timer for productivity. Stay focused with customizable work sessions and breaks.",
    tech: "TypeScript, Ink",
    github: "shivaraj110/pomo-tui",
    live: "https://www.npmjs.com/package/pomo-tui",
    category: "CLI Tool",
    experience: "2 weeks",
  },
  {
    name: "StoreLinks",
    description: "Browser extension for managing categorized bookmarks. Organize your web with smart categorization and quick access.",
    tech: "TypeScript, Chrome Extension API",
    github: "shivaraj110/store-links",
    category: "Browser Extension",
    experience: "1 month",
  },
  {
    name: "WebRTC Signaling Server",
    description: "Real-time signaling server for peer-to-peer connections. Enable seamless video calls and data streaming.",
    tech: "TypeScript, WebSockets",
    github: "shivaraj110/webRTC-signaling-server",
    category: "Backend",
    experience: "3 weeks",
  },
];

export function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [stars, setStars] = useState<Record<string, number | null>>({});

  useEffect(() => {
    const fetchStars = async () => {
      const results = await Promise.all(
        projectsData.map(async (project) => {
          try {
            const res = await fetch(
              `/api/stars/${encodeURIComponent(project.github)}`
            );
            if (res.ok) {
              const data = await res.json();
              return { github: project.github, stars: data.stars ?? 0 };
            }
          } catch {
            // Silently fail
          }
          return { github: project.github, stars: 0 };
        })
      );

      const starsMap: Record<string, number> = {};
      results.forEach((r) => {
        starsMap[r.github] = r.stars;
      });
      setStars(starsMap);
    };

    fetchStars();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 sm:mb-16"
    >
      {/* Section Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group mb-6"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
            Projects
          </h2>
          <span className="px-2 py-0.5 text-xs font-medium text-zinc-500 bg-zinc-800/50 rounded-full">
            {projectsData.length}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2">
              {projectsData.slice(0, 3).map((project, i) => (
                <motion.span
                  key={project.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-3 py-1.5 text-sm text-zinc-400 bg-zinc-900/60 border border-zinc-800/50 rounded-lg hover:border-violet-500/30 transition-all duration-300"
                >
                  {project.name}
                </motion.span>
              ))}
              {projectsData.length > 3 && (
                <span className="px-3 py-1.5 text-sm text-zinc-500 bg-zinc-900/30 border border-zinc-800/30 rounded-lg">
                  +{projectsData.length - 3} more
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-4">
              {projectsData.map((project, i) => (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative p-5 sm:p-6 bg-zinc-900/40 hover:bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700/60 rounded-2xl transition-all duration-400 card-glow"
                >
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base sm:text-lg text-zinc-200 group-hover:text-white transition-colors duration-300 mb-2">
                        {project.name}
                      </h3>
                      {/* Category & Experience Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-lg category-badge ${categoryColors[project.category].bg} ${categoryColors[project.category].text} border ${categoryColors[project.category].border}`}
                        >
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 border border-zinc-700/30 rounded-lg experience-tag">
                          <ClockIcon />
                          {project.experience}
                        </span>
                      </div>
                    </div>
                    {/* Stars */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/40 rounded-lg shrink-0">
                      <StarIcon />
                      <span>{stars[project.github] !== undefined ? stars[project.github] : "—"}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.split(", ").map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-800/30 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={"https://github.com/" + project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-700/60 border border-zinc-700/40 hover:border-zinc-600/60 rounded-lg transition-all duration-300"
                    >
                      <GitHubIcon />
                      View Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-violet-500/20 border border-zinc-700/40 hover:border-violet-500/40 rounded-lg transition-all duration-300"
                      >
                        <ExternalLinkIcon />
                        Live Demo
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

// Icons
function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
