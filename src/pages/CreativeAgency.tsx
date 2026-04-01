import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, LayoutGrid, Palette, Zap, Menu, X, ArrowLeft, Instagram, Twitter, Linkedin, Share2, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Vanguard Brand Identity",
    category: "Branding",
    description: "A complete visual overhaul for a leading fintech startup, focusing on trust and modern aesthetics. We developed a comprehensive design system that scales across all digital touchpoints.",
    image: "https://picsum.photos/seed/agency1/1200/1500",
    tags: ["Identity", "Strategy", "Print"]
  },
  {
    id: 2,
    title: "Ethereal E-commerce",
    category: "UI/UX Design",
    description: "An immersive shopping experience for a luxury fashion house. The project involved deep user research and high-fidelity prototyping to ensure a seamless path to purchase.",
    image: "https://picsum.photos/seed/agency2/1200/1500",
    tags: ["E-commerce", "Mobile", "Web"]
  },
  {
    id: 3,
    title: "Nexus Digital Platform",
    category: "Development",
    description: "A high-performance SaaS platform built for scale. We utilized the latest web technologies to deliver a lightning-fast user experience with complex data visualization.",
    image: "https://picsum.photos/seed/agency3/1200/1500",
    tags: ["React", "SaaS", "Dashboard"]
  },
  {
    id: 4,
    title: "Lumina Motion Series",
    category: "Video Production",
    description: "A series of high-impact brand films exploring the intersection of light and technology. These films were used as the centerpiece for the brand's global launch campaign.",
    image: "https://picsum.photos/seed/agency4/1200/1500",
    tags: ["Motion", "Film", "3D"]
  }
];

export default function CreativeAgency({ onBack }: { onBack?: () => void }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      {/* Back Button */}
      {onBack && (
        <button 
          onClick={onBack}
          className="fixed top-8 right-8 z-[60] bg-white text-black p-3 rounded-full hover:bg-[#ff4e00] hover:text-white transition-all group shadow-xl shadow-black/5 border border-white/10"
          title="Back to Showcase"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      )}

      {/* Sidebar Navigation */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -240 }}
        className="fixed left-0 top-0 h-full w-64 bg-[#111] border-r border-white/10 z-50 p-8 flex flex-col"
      >
        <div className="flex items-center justify-between mb-12">
          <span className="text-2xl font-black tracking-tighter italic">BOLD.</span>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-6">
          {["Work", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-lg font-medium opacity-50 hover:opacity-100 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/10">
          <p className="text-xs opacity-30 uppercase tracking-widest">© 2026 BOLD AGENCY</p>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={cn("flex-1 transition-all duration-300", isSidebarOpen ? "pl-64" : "pl-0")}>
        {/* Mobile Header */}
        {!isSidebarOpen && (
          <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 bg-[#0a0a0a]/80 backdrop-blur-md">
            <span className="text-xl font-black italic">BOLD.</span>
            <button onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
          </header>
        )}

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-8 lg:px-24 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12vw] lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-8"
          >
            We Build <br />
            <span className="text-transparent border-t-4 border-white inline-block mt-4 pt-4">Digital</span> <br />
            Impact.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <p className="max-w-md text-xl opacity-60">
              A boutique creative agency focused on high-performance digital experiences and brand identity.
            </p>
            <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#ff4e00] hover:text-white transition-colors">
              Start Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </section>

        {/* Services */}
        <section className="px-8 lg:px-24 py-24 border-t border-white/10">
          <h2 className="text-4xl font-bold uppercase mb-16 italic">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { icon: LayoutGrid, title: "UI/UX Design", desc: "Crafting intuitive interfaces that convert." },
              { icon: Palette, title: "Branding", desc: "Defining visual identities that stand out." },
              { icon: Zap, title: "Development", desc: "Building fast, scalable web applications." },
            ].map((service, i) => (
              <div key={i} className="bg-[#0a0a0a] p-12 hover:bg-[#111] transition-colors group">
                <service.icon className="mb-8 text-[#ff4e00]" size={40} />
                <h3 className="text-2xl font-bold mb-4 uppercase">{service.title}</h3>
                <p className="opacity-50 group-hover:opacity-100 transition-opacity">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-8 lg:px-24 py-24 border-t border-white/10">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold uppercase italic">Selected Work</h2>
            <a href="#" className="uppercase tracking-widest text-xs opacity-50 hover:opacity-100">View All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="aspect-[4/5] bg-[#111] relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                  <p className="text-xs uppercase tracking-widest opacity-50 mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold uppercase">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl bg-[#111] border border-white/10 overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 bg-white text-black p-2 rounded-full hover:bg-[#ff4e00] hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="lg:w-1/2 p-8 lg:p-16 overflow-y-auto">
                  <p className="text-[#ff4e00] font-bold uppercase tracking-[0.3em] text-xs mb-4">
                    {selectedProject.category}
                  </p>
                  <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xl opacity-60 leading-relaxed mb-12">
                    {selectedProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-12">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 text-xs uppercase tracking-widest font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-4 text-white font-bold uppercase tracking-widest hover:text-[#ff4e00] transition-colors group">
                    View Live Project <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="px-8 lg:px-24 py-24 border-t border-white/10 bg-black">
          <div className="flex flex-col lg:flex-row justify-between gap-24 mb-24">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-none">Let's <br /> Talk.</h2>
              <p className="text-2xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer">hello@boldagency.com</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
              <div>
                <h4 className="text-xs uppercase tracking-widest opacity-30 mb-8">Social</h4>
                <ul className="space-y-4 font-bold">
                  <li><a href="#" className="hover:text-[#ff4e00] transition-colors flex items-center gap-2"><Instagram size={14} /> Instagram</a></li>
                  <li><a href="#" className="hover:text-[#ff4e00] transition-colors flex items-center gap-2"><Twitter size={14} /> Twitter</a></li>
                  <li><a href="#" className="hover:text-[#ff4e00] transition-colors flex items-center gap-2"><Linkedin size={14} /> LinkedIn</a></li>
                  <li><a href="#" className="hover:text-[#ff4e00] transition-colors flex items-center gap-2"><Share2 size={14} /> Dribbble</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest opacity-30 mb-8">Agency</h4>
                <ul className="space-y-4 font-bold">
                  <li><a href="#" className="hover:text-[#ff4e00] transition-colors">Work</a></li>
                  <li><a href="#" className="hover:text-[#ff4e00] transition-colors">Services</a></li>
                  <li><a href="#" className="hover:text-[#ff4e00] transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-[#ff4e00] transition-colors">Careers</a></li>
                </ul>
              </div>
              <div className="hidden sm:block">
                <h4 className="text-xs uppercase tracking-widest opacity-30 mb-8">Office</h4>
                <p className="opacity-50 font-bold leading-loose">
                  New York, NY<br />
                  123 Creative St.<br />
                  Suite 404
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] opacity-30 font-bold">
            <p>© 2026 BOLD CREATIVE AGENCY. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
