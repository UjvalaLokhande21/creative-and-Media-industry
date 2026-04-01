import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Layout, Camera, Film, Globe, User, Palette, X, ExternalLink, Sparkles, Twitter, Linkedin, Github, Instagram, Info, ShieldCheck, Mail, Briefcase } from "lucide-react";
import CreativeAgency from "./pages/CreativeAgency";
import PhotographerPortfolio from "./pages/PhotographerPortfolio";
import VideoProduction from "./pages/VideoProduction";
import MediaAgency from "./pages/MediaAgency";
import PersonalBrand from "./pages/PersonalBrand";
import ArtStudio from "./pages/ArtStudio";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { cn } from "./lib/utils";

type PageId = "home" | "agency" | "photo" | "video" | "media" | "brand" | "art" | "about" | "admin" | "contact" | "services";

const PAGES = [
  { id: "agency", name: "Creative Agency", icon: Layout, component: CreativeAgency, color: "bg-orange-500" },
  { id: "photo", name: "Photographer Portfolio", icon: Camera, component: PhotographerPortfolio, color: "bg-zinc-800" },
  { id: "video", name: "Video Production", icon: Film, component: VideoProduction, color: "bg-red-600" },
  { id: "media", name: "MediaLab Studio", icon: Globe, component: MediaAgency, color: "bg-indigo-600" },
  { id: "brand", name: "Personal Brand", icon: User, component: PersonalBrand, color: "bg-pink-500" },
  { id: "art", name: "Art Studio", icon: Palette, component: ArtStudio, color: "bg-stone-900" },
] as const;

const GLOBAL_NAV = [
  { id: "home", name: "Home", icon: Layout },
  { id: "about", name: "About", icon: Info },
  { id: "services", name: "Services", icon: Briefcase },
  { id: "contact", name: "Contact", icon: Mail },
  { id: "admin", name: "Admin", icon: ShieldCheck },
] as const;

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [showNav, setShowNav] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const ActivePage = [
    ...PAGES, 
    { id: "about", component: About }, 
    { id: "admin", component: Admin },
    { id: "contact", component: Contact },
    { id: "services", component: Services }
  ].find((p) => p.id === currentPage)?.component;

  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-[120] bg-white/80 backdrop-blur-xl border-b border-gray-100 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            onClick={() => setCurrentPage("home")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-black text-white font-bold px-2 py-1 rounded group-hover:rotate-12 transition-transform">D</div>
            <span className="text-xl font-bold tracking-tighter">STUDIO.</span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {GLOBAL_NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as PageId)}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-orange-500 relative py-2",
                  currentPage === item.id ? "text-orange-500" : "text-gray-400"
                )}
              >
                {item.name}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowNav(true)}
            className="p-3 bg-gray-50 rounded-2xl hover:bg-black hover:text-white transition-all"
          >
            <Layout size={20} />
          </button>
        </div>
      </nav>

      {/* Global Navigation Overlay */}
      <AnimatePresence>
        {currentPage !== "home" && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setShowNav(true)}
            className="fixed bottom-8 right-8 z-[100] bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
          >
            <Layout size={20} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-xs uppercase tracking-widest">
              Switch Design
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation Modal */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-xl p-8 flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setShowNav(false)}
              className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform"
            >
              <X size={32} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setCurrentPage("home");
                  setShowNav(false);
                }}
                className="p-8 rounded-3xl bg-white/10 border border-white/10 text-white cursor-pointer hover:bg-white/20 transition-colors flex flex-col justify-between aspect-square"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center">
                  <Layout size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Back to Home</h3>
                  <p className="opacity-50 text-sm">View all design showcases</p>
                </div>
              </motion.div>

              {PAGES.map((page) => (
                <motion.div
                  key={page.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setCurrentPage(page.id as PageId);
                    setShowNav(false);
                  }}
                  className={cn(
                    "p-8 rounded-3xl border border-white/10 text-white cursor-pointer transition-all flex flex-col justify-between aspect-square",
                    currentPage === page.id ? "bg-white text-black border-white" : "bg-white/5 hover:bg-white/10"
                  )}
                >
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", page.color)}>
                    <page.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{page.name}</h3>
                    <p className="opacity-50 text-sm">Explore this unique layout</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Rendering */}
      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-32 pb-0 px-8"
          >
            <div className="max-w-7xl mx-auto">
              <header className="mb-32 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                >
                  <Sparkles size={14} className="text-yellow-400" />
                  Premium Digital Experiences
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-none"
                >
                  Digital <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500">Excellence.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed"
                >
                  Premium digital solutions for modern brands. Our bespoke landing pages are 
                  designed to elevate your brand and drive results through creative excellence.
                </motion.p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PAGES.map((page, i) => (
                  <motion.div
                    key={page.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ y: -10 }}
                    onClick={() => setCurrentPage(page.id as PageId)}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-100 mb-8 relative shadow-2xl shadow-black/5">
                      <img
                        src={`https://picsum.photos/seed/${page.id}preview/800/1000`}
                        alt={page.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", page.color)}>
                          <page.icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">{page.name}</h3>
                        <p className="text-white/60 text-sm flex items-center gap-2">
                          View Design <ArrowRight size={16} />
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-4">
                      <h3 className="text-xl font-bold tracking-tight">{page.name}</h3>
                      <ExternalLink size={18} className="text-gray-300 group-hover:text-black transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <footer className="mt-32 -mx-8 bg-black text-white py-24 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                  
                  {/* Brand Section */}
                  <div className="col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="bg-white text-black font-bold px-2 py-1 rounded">D</div>
                      <span className="text-xl font-bold tracking-tighter">STUDIO.</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Crafting digital experiences that blend art with high-performance technology.
                    </p>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
                    <ul className="text-gray-400 space-y-4 text-sm">
                      <li className="hover:text-white cursor-pointer transition-colors">Modern Media Agency</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Personal Branding</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Art Studio</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Video Production</li>
                    </ul>
                  </div>

                  {/* Company */}
                  <div>
                    <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
                    <ul className="text-gray-400 space-y-4 text-sm">
                      <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Our Projects</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                    </ul>
                  </div>

                  {/* Social */}
                  <div>
                    <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Stay Connected</h4>
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Twitter size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Linkedin size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Github size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Instagram size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="max-w-7xl mx-auto border-t border-white/10 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[10px] uppercase tracking-[0.2em]">
                  <p>© 2026 DIGITAL DESIGN STUDIO. ALL RIGHTS RESERVED.</p>
                  <div className="flex gap-8">
                    <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                  </div>
                </div>
              </footer>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {ActivePage && <ActivePage onBack={() => setCurrentPage("home")} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


