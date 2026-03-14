import { motion } from "motion/react";
import { RetroWindow } from "./RetroWindow";
import { useState } from "react";

interface HeaderProps {
  onBringToFront?: () => void;
  zIndex?: number;
  width?: number;
  draggable?: boolean;
}

export function Header({ onBringToFront, zIndex, width, draggable = true }: HeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleDiscordClick = () => {
    navigator.clipboard.writeText("shivaraj_95951");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <RetroWindow title="about_me.pdf" onBringToFront={onBringToFront} zIndex={zIndex} width={width} draggable={draggable}>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <motion.img
          src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
          alt="Shivaraj"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="w-20 h-20 md:w-24 md:h-24 rounded object-cover border-2 border-[var(--color-border)] shadow-lg"
        />
        
        <div className="flex-1 min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text)] tracking-tight mb-1"
          >
            Shivaraj
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-sm text-[var(--color-text-muted)] font-mono mb-3"
          >
            Software Engineer
            <span className="inline-block w-2 h-2 ml-2 rounded-full bg-[var(--color-terminal-green)] animate-pulse" />
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4"
          >
            Building web apps, CLI tools, and mobile applications. I use <span className="text-[var(--color-text)]">Arch</span> btw. Primarily <span className="text-[var(--color-accent)]">TypeScript</span>. <span className="text-[var(--color-text)]">Neovim enthusiast</span>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-wrap gap-3 font-mono text-xs"
          >
            <SocialLink href="https://github.com/shivaraj110" label="GitHub" />
            <SocialLink href="https://x.com/shivaraj_does" label="Twitter" />
            <SocialLink href="https://blog.shivaraj110.com" label="Blog" />
            <button
              onClick={handleDiscordClick}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {copied ? "[copied!]" : "[discord]"}
            </button>
            <SocialLink href="https://github.com/sponsors/shivaraj110" label="Sponsor" />
          </motion.div>
        </div>
      </div>
    </RetroWindow>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
    >
      [{label}]
    </a>
  );
}
