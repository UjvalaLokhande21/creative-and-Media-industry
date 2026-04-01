import { motion } from "motion/react";
import { Play, Film, Camera, Monitor, ArrowRight, ChevronDown, ArrowLeft, Instagram, Twitter, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function VideoProduction({ onBack }: { onBack?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ff4e00] selection:text-white">
      {/* Back Button */}
      {onBack && (
        <button 
          onClick={onBack}
          className="fixed top-8 left-8 z-[60] bg-white text-black p-3 rounded-full hover:bg-[#ff4e00] hover:text-white transition-all group shadow-xl shadow-black/5 border border-white/10"
          title="Back to Showcase"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      )}

      {/* Cinematic Navbar */}
      <nav className={`fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 transition-all duration-500 ${isScrolled ? "bg-[#050505]/90 backdrop-blur-md py-6" : "bg-transparent"}`}>
        <span className="text-2xl font-black tracking-tighter flex items-center gap-2 ml-16 md:ml-0">
          <Film className="text-[#ff4e00]" /> CINEMA<span className="text-[#ff4e00]">X</span>
        </span>
        <div className="hidden md:flex gap-12 text-xs uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-[#ff4e00] transition-colors">Reel</a>
          <a href="#" className="hover:text-[#ff4e00] transition-colors">Films</a>
          <a href="#" className="hover:text-[#ff4e00] transition-colors">Studio</a>
          <a href="#" className="hover:text-[#ff4e00] transition-colors">Contact</a>
        </div>
        <button className="bg-[#ff4e00] px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all">
          Hire Us
        </button>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://picsum.photos/seed/videohero/1920/1080?blur=4"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff4e00] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-bold opacity-70">Now Available for 2026 Projects</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-[8rem] font-black leading-[0.9] tracking-tighter mb-12 uppercase"
          >
            We Tell Stories <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ffaa00]">That Move.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row justify-center items-center gap-8"
          >
            <button className="group flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#ff4e00] hover:text-white transition-all">
              Watch Reel <Play size={18} fill="currentColor" />
            </button>
            <a href="#" className="text-sm uppercase tracking-widest font-bold hover:text-[#ff4e00] transition-colors flex items-center gap-2">
              View Our Films <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Projects Showcase */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <p className="text-[#ff4e00] text-xs uppercase tracking-widest font-bold mb-4">Portfolio</p>
            <h2 className="text-5xl font-black uppercase tracking-tighter">Selected Projects</h2>
          </div>
          <p className="max-w-md opacity-50 text-lg">
            From commercial campaigns to cinematic documentaries, we push the boundaries of visual storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "The Urban Jungle", category: "Documentary", img: "video1" },
            { title: "Neon Dreams", category: "Music Video", img: "video2" },
            { title: "Future Tech", category: "Commercial", img: "video3" },
            { title: "Wild Spirit", category: "Short Film", img: "video4" },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden rounded-2xl bg-white/5 relative mb-8">
                <img
                  src={`https://picsum.photos/seed/${project.img}/1200/675`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-[#ff4e00] flex items-center justify-center">
                    <Play size={24} fill="white" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">{project.title}</h3>
                  <p className="text-xs uppercase tracking-widest opacity-50 font-bold">{project.category}</p>
                </div>
                <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#ff4e00]" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-8 py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            { icon: Camera, title: "Production", desc: "Full-scale film production from concept to final cut." },
            { icon: Monitor, title: "Post-Production", desc: "Expert editing, color grading, and sound design." },
            { icon: Film, title: "Creative Direction", desc: "Conceptualizing stories that resonate with audiences." },
          ].map((service, i) => (
            <div key={i} className="bg-[#050505] p-16 hover:bg-[#0a0a0a] transition-colors group">
              <service.icon className="mb-8 text-[#ff4e00] group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="opacity-50 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-32 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-32">
            <div className="max-w-md">
              <span className="text-4xl font-black tracking-tighter flex items-center gap-2 mb-8">
                <Film className="text-[#ff4e00]" /> CINEMA<span className="text-[#ff4e00]">X</span>
              </span>
              <p className="opacity-50 text-lg leading-relaxed mb-12">Creating cinematic experiences for brands that want to be remembered. We push the boundaries of visual storytelling.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-[#ff4e00] transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-[#ff4e00] transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-[#ff4e00] transition-colors"><Mail size={20} /></a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-[#ff4e00]">Studio</h4>
                <ul className="space-y-4 text-sm font-bold opacity-50">
                  <li><a href="#" className="hover:text-white transition-colors">Our Reel</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Films</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Equipment</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-[#ff4e00]">Services</h4>
                <ul className="space-y-4 text-sm font-bold opacity-50">
                  <li><a href="#" className="hover:text-white transition-colors">Production</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Post-Production</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">VFX</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Color Grading</a></li>
                </ul>
              </div>
              <div className="hidden sm:block">
                <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-[#ff4e00]">Location</h4>
                <p className="text-sm font-bold opacity-50 leading-loose">
                  456 Sunset Blvd<br />
                  Los Angeles, CA 90028<br />
                  United States
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] opacity-30">
            <p>© 2026 CINEMAX PRODUCTION STUDIO. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
