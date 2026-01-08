import { useState } from "react";
import "./index.css";
import { Header } from "./components/Header";
import { ImageModal } from "./components/ImageModal";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export function App() {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 pointer-events-none" />

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageExpanded}
        onClose={() => setIsImageExpanded(false)}
      />

      {/* Main Content */}
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <Header onImageClick={() => setIsImageExpanded(true)} />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
