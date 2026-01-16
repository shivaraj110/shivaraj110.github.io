import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  npmPackage?: string;
}

const projectsData: Project[] = [
  {
    name: "Postboy TUI",
    description:
      "Terminal-based API testing tool with beautiful TUI interface. Test REST APIs directly from your terminal.",
    tech: ["TypeScript", "Ink", "React"],
    github: "Postboy-tui/app",
    live: "https://www.npmjs.com/package/postboy-tui",
    npmPackage: "postboy-tui",
  },
  {
    name: "BlogStack",
    description:
      "Full-stack blogging platform with cross-posting support. Write once, publish everywhere.",
    tech: ["Remix", "TypeScript", "Prisma"],
    github: "shivaraj110/BlogStack-remix",
    live: "https://blogstack-ruby.vercel.app",
  },
  {
    name: "ShelfCook",
    description:
      "Mobile app for recipe management and meal planning with smart shopping lists.",
    tech: ["React Native", "Expo", "TypeScript"],
    github: "shivaraj110/sc-newui",
    live: "https://shelfcook.netlify.app/",
  },
  {
    name: "Flowro Landing",
    description:
      "SaaS agency landing page with modern animations and micro-interactions.",
    tech: ["React", "Tailwind", "TypeScript"],
    github: "shivaraj110/Flowro-landing",
    live: "https://flowro.netlify.app/",
  },
  {
    name: "FontAI",
    description:
      "AI-powered font picker with intelligent pairing suggestions based on your design context.",
    tech: ["TypeScript", "React", "Vite"],
    github: "shivaraj110/fontAI",
    live: "https://fontpickerai.netlify.app/",
  },
  {
    name: "Pomo TUI",
    description:
      "Minimalist terminal pomodoro timer for focused productivity sessions.",
    tech: ["TypeScript", "Ink"],
    github: "shivaraj110/pomo-tui",
    live: "https://www.npmjs.com/package/pomo-tui",
    npmPackage: "pomo-tui",
  },
  {
    name: "StoreLinks",
    description:
      "Browser extension for smart bookmark management and categorization.",
    tech: ["TypeScript", "Chrome API"],
    github: "shivaraj110/store-links",
  },
  {
    name: "WebRTC Signaling",
    description:
      "Real-time signaling server for peer-to-peer WebRTC connections.",
    tech: ["TypeScript", "WebSockets"],
    github: "shivaraj110/webRTC-signaling-server",
  },
];

export function Projects() {
  const [stars, setStars] = useState<Record<string, number>>({});
  const [downloads, setDownloads] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    const fetchStars = async () => {
      const results = await Promise.all(
        projectsData.map(async (project) => {
          try {
            const res = await fetch(
              `/api/stars/${encodeURIComponent(project.github)}`,
            );
            if (res.ok) {
              const data = await res.json();
              return { github: project.github, stars: data.stars ?? 0 };
            }
          } catch {
            // ignore
          }
          return { github: project.github, stars: 0 };
        }),
      );
      const starsMap: Record<string, number> = {};
      results.forEach((r) => (starsMap[r.github] = r.stars));
      setStars(starsMap);
    };

    const fetchDownloads = async () => {
      const results = await Promise.all(
        projectsData
          .filter((project) => project.npmPackage)
          .map(async (project) => {
            try {
              const res = await fetch(
                `/api/downloads/${encodeURIComponent(project.npmPackage!)}`,
              );
              if (res.ok) {
                const data = await res.json();
                return {
                  package: project.npmPackage!,
                  downloads: data.downloads ?? 0,
                };
              }
            } catch {
              // ignore
            }
            return { package: project.npmPackage!, downloads: 0 };
          }),
      );
      const downloadsMap: Record<string, number> = {};
      results.forEach((r) => (downloadsMap[r.package] = r.downloads));
      setDownloads(downloadsMap);
    };

    fetchStars();
    fetchDownloads();
  }, []);

  const selectedProject = projectsData[selected];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section header */}
      <div className="flex items-center gap-4 mb-10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-px bg-gradient-to-r from-emerald-500 to-transparent"
        />
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-[0.2em]">
          Projects
        </h2>
      </div>

      {/* Sidebar reveal layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8">
        {/* Left - project names */}
        <div className="space-y-1">
          {projectsData.map((project, index) => {
            const isSelected = selected === index;
            const starCount = stars[project.github] ?? 0;

            return (
              <motion.button
                key={project.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 * index, duration: 0.3 }}
                onClick={() => setSelected(index)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group ${isSelected
                  ? "bg-zinc-800/50 text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
                  }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${isSelected ? "bg-emerald-500" : "bg-zinc-700 group-hover:bg-zinc-600"}`}
                  />
                  {project.name}
                </span>
                {starCount > 0 && (
                  <span className="text-xs text-zinc-600">{starCount}</span>
                )}
              </motion.button>
            );
          })}

          {/* View all link */}
          <a
            href="https://github.com/shivaraj110?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-sm text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            View all →
          </a>
        </div>

        {/* Right - project details */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-8 md:p-10 rounded-2xl border border-zinc-800/30 bg-zinc-900/20"
              >
                {/* Project title */}
                <h3 className="text-2xl md:text-3xl text-zinc-100 font-semibold tracking-tight mb-6">
                  {selectedProject.name}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                  {selectedProject.description}
                </p>

                {/* Tech stack */}
                <div className="mb-10">
                  <span className="text-[11px] text-zinc-600 uppercase tracking-widest mb-3 block">
                    Built with
                  </span>
                  <div className="flex flex-wrap mb-3 gap-3">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="text-sm text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  {selectedProject.npmPackage && (
                    <span className="text-sm text-zinc-400">
                      {typeof downloads[selectedProject.npmPackage] === "number"
                        ? `${downloads[selectedProject.npmPackage]?.toLocaleString() ?? 0} downloads (last year)`
                        : "Loading downloads..."}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-6 border-t border-zinc-800/30">
                  <a
                    href={`https://github.com/${selectedProject.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
                  >
                    View Code
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
