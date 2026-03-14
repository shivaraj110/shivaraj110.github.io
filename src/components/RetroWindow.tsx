import { motion } from "motion/react";
import { useState } from "react";

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  zIndex?: number;
  onBringToFront?: () => void;
  width?: number;
  draggable?: boolean;
}

export function RetroWindow({ 
  title, 
  children, 
  className = "", 
  zIndex = 0,
  onBringToFront,
  width = 400,
  draggable = true,
}: RetroWindowProps) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag={draggable}
      dragMomentum={false}
      dragElastic={0.1}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileDrag={draggable ? { scale: 1.02, cursor: "grabbing" } : undefined}
      onDragStart={() => draggable && setIsDragging(true)}
      onDragEnd={() => draggable && setIsDragging(false)}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ zIndex, width }}
      onMouseDown={draggable ? onBringToFront : undefined}
      onTouchStart={draggable ? onBringToFront : undefined}
      className={`absolute ${draggable ? 'cursor-grab' : ''} pointer-events-auto ${className}`}
    >
      <div className={`relative bg-[var(--color-window-bg)] window-scattered rounded-lg overflow-hidden transition-all duration-200 ${isDragging ? 'shadow-2xl ring-2 ring-[var(--color-accent)]/50' : ''}`}>
        <div className="relative">
          <div className={`flex items-center justify-between px-4 py-2.5 bg-[var(--color-window-header)] border-b border-[var(--color-border)] ${draggable ? 'cursor-grab' : ''} select-none`}>
            <span className="font-mono text-xs text-[var(--color-text-muted)] tracking-wider pointer-events-none">{title}</span>
            <button 
              onClick={(e) => e.stopPropagation()}
              className="text-[var(--color-text-muted)] hover:text-red-500 transition-colors text-xl leading-none font-mono px-2"
            >
              ×
            </button>
          </div>
          <div className="p-6 bg-[var(--color-window-bg)] paper-texture pointer-events-auto">
            {children}
          </div>
        </div>
        <div className="absolute inset-0 crt-lines pointer-events-none" />
      </div>
    </motion.div>
  );
}
