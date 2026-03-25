import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Revolution",
    description: "A high-performance headless commerce platform built with React and Node.js.",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://picsum.photos/seed/shop/1200/800",
    link: "#"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Real-time visualization of complex datasets for a fintech startup.",
    tags: ["D3.js", "TypeScript", "Tailwind"],
    image: "https://picsum.photos/seed/data/1200/800",
    link: "#"
  },
  {
    title: "AI Content Generator",
    description: "Leveraging Gemini API to create marketing copy and social media posts.",
    tags: ["Gemini API", "Next.js", "AI"],
    image: "https://picsum.photos/seed/ai/1200/800",
    link: "#"
  },
  {
    title: "Web3 NFT Marketplace",
    description: "A decentralized platform for trading digital assets with low gas fees.",
    tags: ["Solidity", "Ether.js", "React"],
    image: "https://picsum.photos/seed/crypto/1200/800",
    link: "#"
  }
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="works" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-6xl font-bold tracking-tighter mb-4">SELECTED WORKS</h2>
            <div className="h-1 w-24 bg-cyan-400 rounded-full" />
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="p-4 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all bg-zinc-900/50 backdrop-blur-md"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-4 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all bg-zinc-900/50 backdrop-blur-md"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </motion.div>

        <div className="relative h-[600px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto h-full border border-white/10 shadow-2xl shadow-cyan-500/10">
                <img 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-3 mb-8">
                  {projects[currentIndex].tags.map(tag => (
                    <span key={tag} className="text-xs uppercase tracking-[0.2em] font-bold px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-none">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-zinc-400 text-xl mb-12 leading-relaxed max-w-xl">
                  {projects[currentIndex].description}
                </p>
                <div className="flex items-center gap-8">
                  <motion.a 
                    href={projects[currentIndex].link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-white transition-colors"
                  >
                    View Case Study <ArrowRight size={20} />
                  </motion.a>
                  <div className="text-zinc-500 font-mono text-lg">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
