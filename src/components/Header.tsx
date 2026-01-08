import { motion } from "motion/react";

interface HeaderProps {
  onImageClick: () => void;
}

export function Header({ onImageClick }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12 sm:mb-16 md:mb-20"
    >
      <motion.img
        src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
        alt="Shivaraj"
        onClick={onImageClick}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover mb-6 sm:mb-8 cursor-pointer ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-2 sm:mb-3">
        Shivaraj
      </h1>

      <p className="text-base sm:text-lg text-zinc-400 mb-3 sm:mb-4">
        Software Engineer
      </p>

      <p className="text-sm sm:text-base text-zinc-500 leading-relaxed max-w-lg">
        Building web apps, CLI tools, and mobile applications from Bagalkot,
        Karnataka. Primarily TypeScript. Neovim enthusiast.
      </p>

      <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
        <motion.a
          href="https://github.com/shivaraj110"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors duration-200"
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors duration-200"
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Twitter
        </motion.a>
      </div>
    </motion.header>
  );
}
