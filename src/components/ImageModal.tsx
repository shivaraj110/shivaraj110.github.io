import { motion, AnimatePresence } from "motion/react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ isOpen, onClose }: ImageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/95 backdrop-blur-xl z-50 flex items-center justify-center cursor-pointer p-4"
        >
          {/* Decorative gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-60" />
            
            <motion.img
              src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
              alt="Shivaraj"
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10 max-w-[85vw] max-h-[85vw]"
            />
            
            {/* Close hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-zinc-500 whitespace-nowrap"
            >
              Click anywhere to close
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
