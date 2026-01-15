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
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl cursor-pointer"
        >
          {/* Decorative gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
            />
          </div>

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-violet-500/30 via-transparent to-amber-500/30 rounded-3xl blur-xl" />
            
            {/* Main image */}
            <img
              src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
              alt="Shivaraj"
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-2xl object-cover ring-1 ring-white/10"
            />

            {/* Name tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-lg font-medium text-zinc-200 mb-1">Shivaraj</p>
              <p className="text-xs text-zinc-600">Click anywhere to close</p>
            </motion.div>
          </motion.div>

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
