import { useState } from "react";
import "../styles-v2.css";
import { Header } from "./Header";
import { ImageModal } from "./ImageModal";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

export function App() {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      {/* Image Modal */}
      <ImageModal
        isOpen={isImageExpanded}
        onClose={() => setIsImageExpanded(false)}
      />

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 sm:px-8 py-16 sm:py-20 md:py-28">
        <Header onImageClick={() => setIsImageExpanded(true)} />

        <div className="my-16 sm:my-20 h-px bg-zinc-900" />

        <Experience />

        <div className="my-16 sm:my-20 h-px bg-zinc-900" />

        <Skills />

        <div className="my-16 sm:my-20 h-px bg-zinc-900" />

        <Projects />

        <Footer />
      </main>
    </div>
  );
}

export default App;
