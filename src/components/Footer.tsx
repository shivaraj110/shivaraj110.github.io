import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="pt-6 sm:pt-8 border-t border-zinc-800/50"
    >
      <p className="text-xs text-zinc-600 text-center">
        Built with React & Motion
      </p>
    </motion.footer>
  );
}
