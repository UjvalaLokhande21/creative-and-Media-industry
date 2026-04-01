import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Layout, Palette, Code, ArrowRight, Star, Heart, MessageCircle, X, Send, CheckCircle2, ChevronLeft, ChevronRight, ArrowLeft, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export default function PersonalBrand({ onBack }: { onBack?: () => void }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setIsContactOpen(false);
        setFormStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-[#ff6b6b] selection:text-white">
      {/* Back Button */}
      {onBack && (
        <button 
          onClick={onBack}
          className="fixed top-8 left-8 z-[60] bg-white text-black p-3 rounded-full hover:bg-[#ff6b6b] hover:text-white transition-all group shadow-xl shadow-black/5 border border-gray-100"
          title="Back to Showcase"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      )}

      {/* Floating Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/70 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full shadow-2xl shadow-black/5 flex items-center gap-12 text-sm font-bold text-gray-500">
        <a href="#" className="text-black hover:text-[#ff6b6b] transition-colors">Home</a>
        <a href="#" className="hover:text-[#ff6b6b] transition-colors">Work</a>
        <div className="w-10 h-10 bg-gradient-to-br from-[#ff6b6b] to-[#ff9f43] rounded-full flex items-center justify-center text-white text-xl font-black">S</div>
        <a href="#" className="hover:text-[#ff6b6b] transition-colors">About</a>
        <button onClick={() => setIsContactOpen(true)} className="hover:text-[#ff6b6b] transition-colors">Contact</button>
      </nav>

      {/* Hero Section */}
      <section className="pt-64 pb-32 px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-[#ff6b6b]/10 via-transparent to-transparent rounded-full blur-3xl -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white border border-gray-100 px-6 py-2 rounded-full shadow-sm mb-12"
        >
          <Sparkles size={16} className="text-[#ff6b6b]" />
          <span className="text-sm font-bold text-gray-600">Available for Freelance Projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-9xl font-black tracking-tight mb-12 leading-[0.9]"
        >
          I Design <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#ff9f43]">Experiences</span> <br />
          That People Love.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl mx-auto text-xl text-gray-500 mb-16 leading-relaxed"
        >
          Hi, I'm Sarah. A multi-disciplinary designer focused on creating beautiful, functional, and human-centered digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <button 
            onClick={() => setIsContactOpen(true)}
            className="group bg-[#1a1a1a] text-white px-12 py-5 rounded-2xl font-bold hover:bg-[#ff6b6b] transition-all flex items-center gap-4 shadow-xl shadow-black/10"
          >
            Let's Work Together <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#1a1a1a] text-white p-12 flex flex-col justify-between min-h-[400px]">
                  <div>
                    <h2 className="text-4xl font-black tracking-tight mb-6">Let's start <br /> something.</h2>
                    <p className="text-gray-400 leading-relaxed">
                      I'm always open to new projects, collaborations, or just a friendly chat about design.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#ff6b6b]">Contact Info</p>
                    <p className="text-lg font-medium">hello@sarahdesign.com</p>
                    <p className="text-lg font-medium">+1 (555) 000-1234</p>
                  </div>
                </div>

                <div className="p-12">
                  <AnimatePresence mode="wait">
                    {formStatus === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center"
                      >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-gray-500">I'll get back to you as soon as possible.</p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe"
                            className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#ff6b6b] transition-all outline-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                          <input 
                            required
                            type="email" 
                            placeholder="john@example.com"
                            className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#ff6b6b] transition-all outline-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                          <textarea 
                            required
                            rows={4}
                            placeholder="Tell me about your project..."
                            className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#ff6b6b] transition-all outline-none resize-none"
                          />
                        </div>
                        <button 
                          disabled={formStatus === 'sending'}
                          className="w-full bg-[#1a1a1a] text-white py-5 rounded-2xl font-bold hover:bg-[#ff6b6b] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                          {formStatus === 'sending' ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>Send Message <Send size={18} /></>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Services Cards */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Layout, title: "UI/UX Design", desc: "Creating intuitive and engaging user interfaces for web and mobile.", color: "bg-[#ff6b6b]" },
            { icon: Palette, title: "Visual Identity", desc: "Building unique brand identities that resonate with your audience.", color: "bg-[#ff9f43]" },
            { icon: Code, title: "Web Development", desc: "Turning designs into high-performance, responsive websites.", color: "bg-[#4834d4]" },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3rem] bg-white border border-gray-100 hover:shadow-2xl hover:shadow-black/5 transition-all group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-3xl flex items-center justify-center text-white mb-10 shadow-lg shadow-black/5 group-hover:rotate-6 transition-transform`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="px-8 py-32 bg-[#1a1a1a] text-white rounded-[4rem] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Selected Work.</h2>
              <p className="max-w-md text-gray-400 text-lg">A collection of projects that define my creative journey and technical expertise.</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollCarousel('left')}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <motion.div 
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-12"
            whileTap={{ cursor: "grabbing" }}
          >
            {[
              { title: "Eco-Friendly App", category: "UI/UX Design", img: "personal1" },
              { title: "Modern Brand Identity", category: "Branding", img: "personal2" },
              { title: "Creative Portfolio", category: "Web Design", img: "personal3" },
              { title: "Digital Magazine", category: "Editorial", img: "personal4" },
              { title: "Smart Home UI", category: "Mobile App", img: "personal5" },
              { title: "Minimalist Poster", category: "Graphic Design", img: "personal6" },
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="min-w-[300px] md:min-w-[450px] group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[3rem] bg-white/5 mb-8 relative">
                  <img
                    src={`https://picsum.photos/seed/${project.img}/1200/900`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b6b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h3>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{project.category}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-32 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-24">Kind Words.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col items-center">
              <div className="flex gap-1 text-[#ff6b6b] mb-8">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-2xl font-medium leading-relaxed mb-12 italic">
                "Sarah is an exceptional designer. Her attention to detail and creative vision transformed our project into something truly special."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${item}`} alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div className="text-left">
                  <p className="font-bold">Alex Johnson</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">CEO, TechFlow</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-32">
            <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b6b] to-[#ff9f43] rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-black mb-12 shadow-2xl shadow-[#ff6b6b]/20">S</div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tight mb-12">Let's create something <br /> amazing together.</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-24">
              <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6b6b] transition-all"><Instagram size={24} /></a>
              <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6b6b] transition-all"><Twitter size={24} /></a>
              <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6b6b] transition-all"><Linkedin size={24} /></a>
              <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6b6b] transition-all"><Facebook size={24} /></a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pt-32 border-t border-white/10">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black tracking-tight mb-8">SARAH DESIGN STUDIO.</h3>
              <p className="text-gray-400 max-w-sm leading-relaxed text-lg">
                Independent designer and developer helping startups build memorable digital experiences through strategy and design.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#ff6b6b] mb-8">Quick Links</h4>
              <ul className="space-y-4 font-bold text-gray-400">
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">Selected Work</a></li>
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">About Me</a></li>
                <li><a href="#" className="hover:text-[#ff6b6b] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#ff6b6b] mb-8">Contact</h4>
              <p className="font-bold text-gray-400 leading-loose">
                Brooklyn, New York<br />
                hello@sarahdesign.com<br />
                +1 (555) 000-1234
              </p>
            </div>
          </div>
          
          <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">
            <p>© 2026 SARAH DESIGN STUDIO. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#ff6b6b] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#ff6b6b] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
