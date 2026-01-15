import { motion } from "motion/react";
import { useState } from "react";

interface HeaderProps {
  onImageClick: () => void;
}

export function Header({ onImageClick }: HeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleDiscordClick = () => {
    navigator.clipboard.writeText("shivaraj_95951");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left-aligned stack */}
      <div className="flex items-start gap-5 mb-6">
        {/* Profile image */}
        <motion.button
          onClick={onImageClick}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="shrink-0"
        >
          <img
            src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
            alt="Shivaraj"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-zinc-800 hover:border-zinc-700 transition-colors"
          />
        </motion.button>

        {/* Name and title */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-2xl sm:text-3xl font-semibold text-zinc-100 tracking-tight mb-1"
          >
            Shivaraj
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-zinc-500"
          >
            Software Engineer
          </motion.p>
        </div>

        {/* Availability - pushed to right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="hidden sm:flex items-center gap-2 ml-auto"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-zinc-600">Available</span>
        </motion.div>
      </div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="text-zinc-400 leading-relaxed max-w-lg mb-8"
      >
        Building web applications, CLI tools, and mobile experiences.
        Passionate about <span className="text-violet-400">TypeScript</span> and open source.
      </motion.p>

      {/* Social links - horizontal */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex items-center gap-5 text-sm"
      >
        <a
          href="https://github.com/shivaraj110"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://x.com/shivaraj_does"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://blog.shivaraj110.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          Blog
        </a>
        <button
          onClick={handleDiscordClick}
          className="text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          {copied ? "Copied!" : "Discord"}
        </button>
      </motion.div>
    </motion.header>
  );
}
