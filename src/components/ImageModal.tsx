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
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-50 flex items-center justify-center cursor-pointer"
        >
          <motion.img
            src="https://1d6kykqofq.ufs.sh/f/fVvo0hHNtQOLCf0Acwq5yAXNESIdiU7ftTq3e1wl2s4Lamp8"
            alt="Shivaraj"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
