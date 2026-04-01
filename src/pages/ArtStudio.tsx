import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Plus, Instagram, Twitter, Mail, ArrowLeft, Maximize2, Play, Pause, Volume2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ArtStudio({ onBack }: { onBack?: () => void }) {
  const [activeItem, setActiveItem] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#080808] text-[#f0f0f0] font-sans selection:bg-[#ff3e00] selection:text-white overflow-x-hidden">
      {/* Custom Cursor Effect (Simplified for performance) */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(255,62,0,0.15)_0%,_transparent_50%)]" />
      </div>

      {/* Back Button */}
      {onBack && (
        <motion.button 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          onClick={onBack}
          className="fixed top-12 left-12 z-[110] bg-white text-black p-4 rounded-full hover:bg-[#ff3e00] hover:text-white transition-all group border border-white/10"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </motion.button>
      )}

      {/* Brutalist Header */}
      <header className="fixed top-0 left-0 w-full p-12 flex justify-between items-end z-[90] pointer-events-none">
        <div className="pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <span className="text-6xl font-black tracking-tighter leading-none uppercase italic">Thorne.</span>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#ff3e00] font-mono font-bold mt-2">Experimental Art Unit // v2.0</span>
          </motion.div>
        </div>
        
        <nav className="hidden lg:flex gap-24 pointer-events-auto">
          {["Archive", "Process", "Lab", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] uppercase tracking-[0.4em] font-bold hover:text-[#ff3e00] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#ff3e00] group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </nav>

        <div className="flex gap-8 pointer-events-auto">
          <motion.div whileHover={{ scale: 1.2, rotate: 90 }} className="cursor-pointer">
            <Instagram size={20} className="hover:text-[#ff3e00] transition-colors" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -90 }} className="cursor-pointer">
            <Twitter size={20} className="hover:text-[#ff3e00] transition-colors" />
          </motion.div>
        </div>
      </header>

      {/* Hero Section - Atmospheric & Brutalist */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-[#ff3e00]/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 w-full max-w-[1800px] px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[12vw] lg:text-[14vw] font-black leading-[0.8] tracking-tighter uppercase italic mb-12">
                Digital <br />
                <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Anarchy.</span>
              </h1>
              <div className="flex items-center gap-12">
                <div className="h-[1px] w-32 bg-[#ff3e00]" />
                <p className="text-sm uppercase tracking-[0.3em] font-bold opacity-60 max-w-md leading-relaxed">
                  Pushing the boundaries of visual perception through generative algorithms and raw human emotion.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative aspect-square lg:aspect-[3/4] group cursor-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-[#111] border border-white/10 overflow-hidden relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80" 
                alt="Featured Art" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              
              {/* Overlay Info */}
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#ff3e00] font-mono">Current Project</span>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight">Kinetic Void // 001</h3>
                </div>
                <motion.div 
                  style={{ rotate }}
                  className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center"
                >
                  <ArrowRight size={24} className="-rotate-45" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-12 flex items-center gap-4">
          <div className="w-1 h-12 bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute top-0 left-0 w-full h-1/3 bg-[#ff3e00]"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Scroll to explore</span>
        </div>
      </section>

      {/* Split Gallery Section */}
      <section className="py-64 px-12 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-32">
            <div className="sticky top-64">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#ff3e00] font-mono font-bold block mb-8">// Selected Works</span>
              <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase italic leading-none mb-12">
                The <br /> Archive.
              </h2>
              <div className="space-y-12 max-w-md">
                {[
                  { id: "01", title: "Neural Landscapes", tags: ["Generative", "AI", "2026"] },
                  { id: "02", title: "Static Motion", tags: ["Installation", "Light", "2025"] },
                  { id: "03", title: "Digital Decay", tags: ["Glitch", "Video", "2024"] },
                ].map((item, i) => (
                  <motion.div 
                    key={item.id}
                    onMouseEnter={() => setActiveItem(i)}
                    className={`group cursor-pointer border-b border-white/10 pb-8 transition-all duration-500 ${activeItem === i ? "border-[#ff3e00]" : "opacity-30 hover:opacity-100"}`}
                  >
                    <div className="flex justify-between items-end">
                      <div className="space-y-4">
                        <span className="text-xs font-mono text-[#ff3e00]">{item.id}</span>
                        <h3 className="text-4xl font-black uppercase italic tracking-tight">{item.title}</h3>
                      </div>
                      <div className="flex gap-4 text-[9px] uppercase tracking-widest font-bold opacity-40">
                        {item.tags.map(tag => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-32 aspect-[3/4] bg-[#111] border border-white/10 overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={`https://picsum.photos/seed/art-archive-${activeItem}/1200/1600`}
                  alt="Archive Piece"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-[#ff3e00]/5 mix-blend-overlay" />
              <div className="absolute top-8 right-8">
                <Maximize2 size={24} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Section - Technical/Brutalist */}
      <section className="bg-white text-black py-48 px-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-black h-full" />
            ))}
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
            <h2 className="text-8xl lg:text-[12vw] font-black tracking-tighter uppercase italic leading-[0.8]">
              The <br /> Laboratory.
            </h2>
            <div className="max-w-sm space-y-8">
              <p className="text-sm uppercase tracking-widest font-bold leading-relaxed">
                Where code meets canvas. Our experimental wing focused on R&D in creative technology and interactive media.
              </p>
              <button className="bg-black text-white px-12 py-6 rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#ff3e00] transition-colors flex items-center gap-4 group">
                Enter the Lab <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { title: "Motion Tracking", status: "Active", desc: "Real-time human movement translation." },
              { title: "Generative Audio", status: "Stable", desc: "Soundscapes driven by environmental data." },
              { title: "VR Sculpting", status: "Beta", desc: "Manipulating 3D form in virtual space." },
            ].map((item, i) => (
              <div key={i} className="border border-black/10 p-12 group hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
                <div className="flex justify-between items-start mb-24">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-40 group-hover:text-[#ff3e00]">Lab_Unit_{i + 1}</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'}`} />
                    <span className="text-[9px] uppercase tracking-widest font-bold">{item.status}</span>
                  </div>
                </div>
                <h3 className="text-4xl font-black uppercase italic tracking-tight mb-8">{item.title}</h3>
                <p className="text-xs uppercase tracking-widest font-bold opacity-40 group-hover:opacity-60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee - Brutalist Style */}
      <div className="bg-[#ff3e00] py-8 overflow-hidden border-y border-black">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex whitespace-nowrap gap-24 text-4xl font-black uppercase italic tracking-tighter text-black"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-24">
              Experimental Unit // Thorne Studio // Berlin 2026 <Plus size={32} strokeWidth={3} />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Footer - Immersive Glassmorphism */}
      <footer className="relative pt-64 pb-24 px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,_rgba(255,62,0,0.1)_0%,_transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-48">
            <div className="lg:col-span-6 space-y-12">
              <h2 className="text-8xl lg:text-[10vw] font-black tracking-tighter uppercase italic leading-[0.8]">
                Let's <br /> <span className="text-[#ff3e00]">Collide.</span>
              </h2>
              <div className="flex flex-wrap gap-8">
                <a href="mailto:hello@thorne.art" className="text-2xl font-black uppercase italic tracking-tight border-b-2 border-[#ff3e00] hover:text-[#ff3e00] transition-colors">
                  hello@thorne.art
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#ff3e00] font-mono font-bold">Navigation</h4>
              <ul className="space-y-4">
                {["Archive", "Process", "Laboratory", "Shop", "Archive"].map(item => (
                  <li key={item}>
                    <a href="#" className="text-lg font-bold uppercase tracking-widest hover:text-[#ff3e00] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#ff3e00] font-mono font-bold">Studio</h4>
              <p className="text-lg font-bold uppercase tracking-widest leading-relaxed opacity-60">
                Brunnenstraße 123<br />
                10115 Berlin<br />
                Germany
              </p>
              <div className="flex gap-6 pt-8">
                <Instagram size={24} className="hover:text-[#ff3e00] cursor-pointer transition-colors" />
                <Twitter size={24} className="hover:text-[#ff3e00] cursor-pointer transition-colors" />
                <Mail size={24} className="hover:text-[#ff3e00] cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
            <p>© 2026 Thorne Experimental Unit // All Rights Reserved</p>
            <div className="flex gap-12">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
