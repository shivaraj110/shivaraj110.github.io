import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 h-[60px] py-4 px-8 bg-[var(--color-bg)]/90 backdrop-blur-sm border-t border-[var(--color-border)] z-0"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <p className="flex items-center gap-3 text-xs font-mono text-[var(--color-text-subtle)]">
          <span>Built with</span>
          <span className="text-[var(--color-text-muted)]">React</span>
          <span className="text-[var(--color-border-strong)]">+</span>
          <span className="text-[var(--color-text-muted)]">Tailwind</span>
          <span className="text-[var(--color-border-strong)]">+</span>
          <span className="text-[var(--color-text-muted)]">Motion</span>
        </p>

        <p className="text-xs font-mono text-[var(--color-text-subtle)]">
          © {currentYear} SHIVARAJ — BUILT WITH PASSION
        </p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-center text-xs font-serif text-[var(--color-text-subtle)] mt-3 italic"
      >
        "The only way to do great work is to love what you do"
      </motion.p>
    </motion.footer>
  );
}
