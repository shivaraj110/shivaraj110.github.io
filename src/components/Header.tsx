import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface HeaderProps {
  onImageClick: () => void;
}

export function Header({ onImageClick }: HeaderProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDiscordClick = () => {
    navigator.clipboard.writeText("shivaraj_95951");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 sm:mb-12"
    >
      {/* Profile Image with elegant ring */}
      <motion.div
        className="relative w-fit mb-8 sm:mb-10"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.img
          src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
          alt="Shivaraj"
          onClick={onImageClick}
          className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover cursor-pointer ring-1 ring-zinc-700/50 hover:ring-violet-500/30 transition-all duration-500 shadow-xl shadow-black/20"
        />
        {/* Subtle glow behind image */}
        <div className="absolute inset-0 -z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Name with gradient */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4"
      >
        <span className="gradient-text">Shivaraj</span>
      </motion.h1>

      {/* Title with accent */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-lg sm:text-xl text-zinc-400 mb-4 sm:mb-5 font-medium"
      >
        Software Engineer
        <span className="inline-block w-2 h-2 ml-2 rounded-full bg-emerald-400 animate-pulse" />
      </motion.p>

      {/* Bio with better typography */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm sm:text-base text-zinc-500 leading-relaxed max-w-lg"
      >
        Building web apps, CLI tools, and mobile applications from{" "}
        <span className="text-zinc-400">Bagalkot, Karnataka</span>. Primarily{" "}
        <span className="text-violet-400/90">TypeScript</span>.{" "}
        <span className="text-zinc-400">Neovim enthusiast</span>.
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-wrap gap-2.5 sm:gap-3 mt-8 sm:mt-10"
      >
        <SocialButton
          href="https://github.com/shivaraj110"
          icon={<GitHubIcon />}
          label="GitHub"
        />
        <SocialButton
          href="https://x.com/shivaraj_does"
          icon={<TwitterIcon />}
          label="Twitter"
        />
        <SocialButton
          href="https://blog.shivaraj110.com"
          icon={<BlogIcon />}
          label="Blog"
        />

        {/* Discord Button with Tooltip */}
        <div className="relative">
          <motion.button
            onClick={handleDiscordClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="group inline-flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-zinc-300 bg-zinc-900/50 hover:bg-zinc-800/70 border border-zinc-800/60 hover:border-violet-500/30 rounded-xl transition-all duration-300 glass"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ y: 0, scale: 0.99 }}
          >
            <DiscordIcon />
            <span className="hidden sm:inline">Discord</span>
          </motion.button>
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 px-3 py-3 text-xs font-medium text-zinc-200 bg-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-lg whitespace-nowrap shadow-xl"
              >
                {copied ? (
                  <span className="text-emerald-400">Copied!</span>
                ) : (
                  "Click to copy username"
                )}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-zinc-700/50" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <SocialButton
          href="https://github.com/sponsors/shivaraj110"
          icon={<SponsorIcon />}
          label="Sponsor"
        />
      </motion.div>
    </motion.header>
  );
}

// Social Button Component
function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-zinc-300 bg-zinc-900/50 hover:bg-zinc-800/70 border border-zinc-800/60 hover:border-violet-500/30 rounded-xl transition-all duration-300 glass"
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.99 }}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </motion.a>
  );
}

// Icons
function GitHubIcon() {
  return (
    <svg
      className="w-4 h-4 transition-colors duration-300 group-hover:text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SponsorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FF99CC"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="fill-[#FF99CC]"
    >
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      className="w-4 h-4 transition-colors duration-300 group-hover:text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg
      className="w-4 h-4 transition-colors duration-300 group-hover:text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      className="w-4 h-4 transition-colors duration-300 group-hover:text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
