import { motion } from "motion/react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-20 pt-10 border-t border-zinc-800/50"
    >
      {/* Main footer content */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
        {/* Brand / Logo area */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-300">Shivaraj</p>
            <p className="text-xs text-zinc-600">Software Engineer</p>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/shivaraj110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://x.com/shivaraj_does"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://blog.shivaraj110.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Blog
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-700">
        <p>&copy; {year} Shivaraj. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Built with
          <span className="inline-flex items-center gap-1 text-zinc-500">
            <ReactIcon /> React
          </span>
          <span className="text-zinc-800">&</span>
          <span className="inline-flex items-center gap-1 text-zinc-500">
            <MotionIcon /> Motion
          </span>
        </p>
      </div>

      {/* Decorative quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 text-center"
      >
        <p className="text-[11px] text-zinc-800 italic">
          "Simplicity is the ultimate sophistication."
        </p>
      </motion.div>
    </motion.footer>
  );
}

function ReactIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
    </svg>
  );
}

function MotionIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}
