import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { RetroWindow } from "./RetroWindow";

interface ProjectsProps {
  onBringToFront?: () => void;
  zIndex?: number;
  width?: number;
  draggable?: boolean;
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  npmPackage?: string;
}

interface NpmDownloads {
  [key: string]: number;
}

const projectsData: Project[] = [
  {
    name: "Ikkii",
    description:
      "Crypto dueling arena for mobile gamers. Create or join 1v1 duels with stake, play matches in supported games, winner takes the pot via trustless Solana escrow.",
    tech: [
      "React Native",
      "Expo",
      "Solana",
      "Anchor",
      "Rust",
      "Bun",
      "Hono",
      "Drizzle",
      "PostgreSQL",
    ],
    github: "ikkii-org",
    live: "https://ikkii.app",
  },
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

export function Projects({
  onBringToFront,
  zIndex,
  width,
  draggable = true,
}: ProjectsProps) {
  const [selected, setSelected] = useState(0);
  const [npmDownloads, setNpmDownloads] = useState<NpmDownloads>({});

  useEffect(() => {
    const fetchNpmDownloads = async () => {
      const packages = ["postboy-tui", "pomo-tui"];
      const results: NpmDownloads = {};
      await Promise.all(
        packages.map(async (pkg) => {
          try {
            const res = await fetch(
              `https://api.npmjs.org/downloads/range/2010-01-01:2030-01-01/${pkg}`
            );
            const data = await res.json();
            const total = data.downloads.reduce(
              (sum: number, day: { downloads: number }) => sum + day.downloads,
              0
            );
            results[pkg] = total;
          } catch {
            results[pkg] = 0;
          }
        })
      );
      setNpmDownloads(results);
    };
    fetchNpmDownloads();
  }, []);

  const selectedProject = projectsData[selected];

  return (
    <RetroWindow
      title="projects.pdf"
      onBringToFront={onBringToFront}
      zIndex={zIndex}
      width={width}
      draggable={draggable}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-6">
        <div className="space-y-1">
          {projectsData.map((project, index) => {
            const isSelected = selected === index;

            return (
              <motion.button
                key={project.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 * index, duration: 0.3 }}
                onClick={() => setSelected(index)}
                className={`w-full text-left px-3 py-2 rounded font-mono text-sm transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-[var(--color-bg-secondary)] text-[var(--color-text)] border border-[var(--color-border)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]/50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected
                        ? "bg-[var(--color-terminal-green)]"
                        : "bg-[var(--color-border-strong)]"
                    }`}
                  />
                  {project.name}
                </span>
              </motion.button>
            );
          })}

          <a
            href="https://github.com/shivaraj110?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-sm font-mono text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors"
          >
            [view all →]
          </a>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-6 rounded border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/30"
              >
                <h3 className="text-xl font-serif font-semibold text-[var(--color-text)] mb-4">
                  {selectedProject.name}
                </h3>

                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs font-mono text-[var(--color-text-subtle)] uppercase tracking-wider mb-2">
                    Built with
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm font-mono text-[var(--color-text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.npmPackage && npmDownloads[selectedProject.npmPackage] !== undefined && (
                  <div className="mb-6">
                    <p className="text-xs font-mono text-[var(--color-text-subtle)] uppercase tracking-wider mb-2">
                      Total Downloads
                    </p>
                    <p className="text-2xl font-mono text-[var(--color-terminal-green)]">
                      {npmDownloads[selectedProject.npmPackage].toLocaleString()}
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-6 pt-4 border-t border-[var(--color-border)] font-mono text-sm">
                  <a
                    href={`https://github.com/${selectedProject.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                  >
                    [view code]
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                    >
                      [live demo]
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </RetroWindow>
  );
}
