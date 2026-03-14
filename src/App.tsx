import { useState, useEffect, useRef } from "react";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { MobileThemeToggle } from "./components/MobileThemeToggle";
import { ThemeProvider } from "./ThemeContext";

interface WindowPosition {
  id: string;
  x: number;
  y: number;
  zIndex: number;
  width: number;
}

const WINDOW_IDS = ['about', 'experience', 'tools', 'theme', 'projects'] as const;

const WINDOW_SIZES: Record<string, number> = {
  about: 540,
  experience: 380,
  tools: 360,
  theme: 280,
  projects: 700,
};

function generateOrganizedPositions(width: number, _height: number): { positions: WindowPosition[]; isMobile: boolean } {
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1200;
  const padding = isMobile ? 15 : 30;
  const headerOffset = 40;
  const gap = isMobile ? 15 : 24;
  
  if (isMobile) {
    const screenWidth = width - padding * 2;
    return {
      isMobile: true,
      positions: [
        { id: 'about', x: padding, y: headerOffset, zIndex: 0, width: screenWidth },
        { id: 'theme', x: padding, y: headerOffset + 300 + gap, zIndex: 1, width: screenWidth },
        { id: 'experience', x: padding, y: headerOffset + 300 + gap + 140 + gap, zIndex: 2, width: screenWidth },
        { id: 'tools', x: padding, y: headerOffset + 300 + gap + 140 + gap + 260 + gap, zIndex: 3, width: screenWidth },
        { id: 'projects', x: padding, y: headerOffset + 300 + gap + 140 + gap + 260 + gap + 340 + gap, zIndex: 4, width: screenWidth },
      ]
    };
  }

  if (isTablet) {
    const totalWidth = 480 + gap + 250;
    const startX = (width - totalWidth) / 2;
    return {
      isMobile: false,
      positions: [
        { id: 'about', x: startX, y: headerOffset, zIndex: 0, width: 480 },
        { id: 'theme', x: startX + 480 + gap, y: headerOffset, zIndex: 1, width: 250 },
        { id: 'experience', x: startX, y: headerOffset + 300 + gap, zIndex: 2, width: 350 },
        { id: 'tools', x: startX + 350 + gap, y: headerOffset + 300 + gap, zIndex: 3, width: 380 },
        { id: 'projects', x: startX, y: headerOffset + 300 + gap + 280 + gap, zIndex: 4, width: 730 },
      ]
    };
  }

  const layout = [
    { row: 0, col: 0, w: WINDOW_SIZES.about, h: 280 },
    { row: 0, col: 1, w: WINDOW_SIZES.theme, h: 100 },
    { row: 1, col: 0, w: WINDOW_SIZES.experience, h: 260 },
    { row: 1, col: 1, w: WINDOW_SIZES.tools, h: 260 },
    { row: 2, col: 0, w: WINDOW_SIZES.projects, h: 320 },
  ];
  
  const totalWidth = Math.max(WINDOW_SIZES.about + gap + WINDOW_SIZES.theme, WINDOW_SIZES.experience + gap + WINDOW_SIZES.tools, WINDOW_SIZES.projects);
  const startX = (width - totalWidth) / 2;
  
  const rowHeights = [280, 260, 320];
  const totalHeight = rowHeights[0] + gap + rowHeights[1] + gap + rowHeights[2];
  const startY = (Math.max(_height - totalHeight - 100, 0)) / 2;
  
  const rowOffsets = [0, rowHeights[0] + gap, rowHeights[0] + gap + rowHeights[1] + gap];

  return {
    isMobile: false,
    positions: [
      { id: 'about', x: startX, y: startY + rowOffsets[0], zIndex: 0, width: layout[0].w },
      { id: 'theme', x: startX + WINDOW_SIZES.about + gap, y: startY + rowOffsets[0], zIndex: 1, width: WINDOW_SIZES.theme },
      { id: 'experience', x: startX, y: startY + rowOffsets[1], zIndex: 2, width: WINDOW_SIZES.experience },
      { id: 'tools', x: startX + WINDOW_SIZES.experience + gap, y: startY + rowOffsets[1], zIndex: 3, width: WINDOW_SIZES.tools },
      { id: 'projects', x: startX, y: startY + rowOffsets[2], zIndex: 4, width: WINDOW_SIZES.projects },
    ]
  };
}

export function App() {
  const [positions, setPositions] = useState<WindowPosition[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0 && !initialized.current) {
      initialized.current = true;
      const result = generateOrganizedPositions(dimensions.width, dimensions.height);
      setPositions(result.positions);
      setIsMobile(result.isMobile);
    }
  }, [dimensions]);

  const bringToFront = (id: string) => {
    setPositions(prev => {
      const maxZ = Math.max(...prev.map(p => p.zIndex));
      if (prev.find(p => p.id === id)?.zIndex === maxZ) return prev;
      return prev.map(p => 
        p.id === id ? { ...p, zIndex: maxZ + 1 } : p
      );
    });
  };

  const getWindow = (id: string) => positions.find(p => p.id === id);

  if (dimensions.width === 0) {
    return null;
  }

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] antialiased relative ${isMobile ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[var(--color-gradient-start)] via-[var(--color-bg)] to-[var(--color-bg)] pointer-events-none" />
        
        <div className="relative w-full" style={{ minHeight: isMobile ? '1400px' : dimensions.height + 200 }}>
          {positions.length > 0 && WINDOW_IDS.map(id => {
            const win = getWindow(id);
            if (!win) return null;
            
            return (
              <div 
                key={id}
                style={{ 
                  position: 'absolute', 
                  left: win.x, 
                  top: win.y, 
                  zIndex: win.zIndex 
                }}
              >
                {id === 'about' && <Header onBringToFront={() => bringToFront(id)} zIndex={win.zIndex} width={win.width} draggable={!isMobile} />}
                {id === 'experience' && <Experience onBringToFront={() => bringToFront(id)} zIndex={win.zIndex} width={win.width} draggable={!isMobile} />}
                {id === 'tools' && <Skills onBringToFront={() => bringToFront(id)} zIndex={win.zIndex} width={win.width} draggable={!isMobile} />}
                {id === 'theme' && !isMobile && <ThemeToggle onBringToFront={() => bringToFront(id)} zIndex={win.zIndex} width={win.width} draggable={!isMobile} />}
                {id === 'projects' && <Projects onBringToFront={() => bringToFront(id)} zIndex={win.zIndex} width={win.width} draggable={!isMobile} />}
              </div>
            );
          })}
        </div>
        
        {isMobile && <MobileThemeToggle />}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
