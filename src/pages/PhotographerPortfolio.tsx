import { motion } from "motion/react";
import { Instagram, Twitter, Mail, ArrowUpRight, ArrowLeft, Facebook, Linkedin, Zap, Phone, MapPin, Dribbble, Github } from "lucide-react";

export default function PhotographerPortfolio({ onBack }: { onBack?: () => void }) {
  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-serif selection:bg-[#1a1a1a] selection:text-white">
      {/* Back Button */}
      {onBack && (
        <button 
          onClick={onBack}
          className="fixed top-8 left-8 z-[60] bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-white hover:text-black transition-all group"
          title="Back to Showcase"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 bg-black backdrop-blur-3xl border-b border-white/5 text-white">
        <span className="text-2xl font-light tracking-widest uppercase ml-16 md:ml-0 w-[145px] h-[120px] pt-0 flex items-center">Elias Thorne</span>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-sans">
          {[
            { name: "Home", href: "#home" },
            { name: "Photography", href: "#photography" },
            { name: "Design", href: "#design" },
            { name: "Media", href: "#media" },
            { name: "Portfolio", href: "#portfolio" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ opacity: 0.5, y: -2 }}
              whileTap={{ scale: 0.9, y: 0 }}
              className="transition-opacity"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        <div className="flex gap-6">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Instagram size={18} className="cursor-pointer hover:opacity-50 transition-opacity" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Twitter size={18} className="cursor-pointer hover:opacity-50 transition-opacity" />
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-start items-center px-8 relative overflow-hidden bg-[#0a0a0a]">
        {/* Vibrant Background Effects */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 -left-1/4 w-[80%] h-[80%] bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-transparent rounded-full blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 -right-1/4 w-[80%] h-[80%] bg-gradient-to-tl from-blue-600/30 via-cyan-500/20 to-transparent rounded-full blur-[150px]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80"
            alt="Hero"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </motion.div>
        
        <div className="relative z-10 text-center max-w-6xl pt-64 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-[10px] uppercase tracking-[0.8em] mb-12 text-white/60 font-sans">
              Visual Storyteller • Based in London
            </p>
            <h1 className="text-4xl md:text-[121px] font-light leading-[0.85] tracking-tighter mb-16 text-white h-[290.6px]">
              Capturing the <br />
              <span className="italic font-serif bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Unseen</span> Moments.
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 h-[73px]">
              <p className="max-w-xs text-[10px] uppercase tracking-[0.3em] leading-relaxed text-white/40 font-sans text-center md:text-left">
                Exploring the intersection of light, shadow, and human emotion through a vibrant lens.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-6 border border-white/20 px-16 py-6 rounded-full transition-all font-sans text-[10px] uppercase tracking-[0.4em] text-white"
              >
                View Portfolio <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
          <span className="text-[8px] uppercase tracking-[0.5em] text-white/20">Scroll</span>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="aspect-[4/5] overflow-hidden bg-white group cursor-pointer relative"
            >
              <img
                src="https://picsum.photos/seed/vibrant-fashion/1200/1500"
                alt="Work 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            <div className="mt-6 flex justify-between items-start">
              <h3 className="text-2xl italic">The Quiet Morning</h3>
              <p className="text-xs uppercase tracking-widest opacity-50 font-sans">2025 • Portrait</p>
            </div>
          </div>
          
          <div className="md:col-span-5 md:mt-32">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="aspect-[3/4] overflow-hidden bg-white group cursor-pointer relative"
            >
              <img
                src="https://picsum.photos/seed/colorful-street/1000/1333"
                alt="Work 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-red-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            <div className="mt-6 flex justify-between items-start">
              <h3 className="text-2xl italic">Urban Solitude</h3>
              <p className="text-xs uppercase tracking-widest opacity-50 font-sans">2024 • Street</p>
            </div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="aspect-[3/4] overflow-hidden bg-white group cursor-pointer relative"
            >
              <img
                src="https://picsum.photos/seed/vibrant-nature/1000/1333"
                alt="Work 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-teal-500/20 via-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            <div className="mt-6 flex justify-between items-start">
              <h3 className="text-2xl italic">Ethereal Light</h3>
              <p className="text-xs uppercase tracking-widest opacity-50 font-sans">2025 • Fine Art</p>
            </div>
          </div>

          <div className="md:col-span-7 md:-mt-32">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="aspect-[4/5] overflow-hidden bg-white group cursor-pointer relative"
            >
              <img
                src="https://picsum.photos/seed/colorful-abstract/1200/1500"
                alt="Work 4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            <div className="mt-6 flex justify-between items-start">
              <h3 className="text-2xl italic">Shadow Play</h3>
              <p className="text-xs uppercase tracking-widest opacity-50 font-sans">2024 • Abstract</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-32 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/colorful-portrait/800/1067" 
                alt="Elias Thorne" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Colorful accent behind image */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-2xl blur-3xl -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light italic mb-12">The Visionary <br /> Behind the Lens.</h2>
            <p className="text-lg opacity-60 leading-relaxed mb-8 font-sans">
              I am Elias Thorne, a visual storyteller dedicated to capturing the raw, 
              unfiltered beauty of the world. My work is a exploration of light, 
              shadow, and the human experience.
            </p>
            <p className="text-lg opacity-60 leading-relaxed mb-12 font-sans">
              With over a decade of experience in editorial and commercial photography, 
              I bring a unique perspective to every project, blending technical 
              precision with artistic intuition.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-4xl font-light mb-2">10+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40 font-sans">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light mb-2">200+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40 font-sans">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light mb-2">15</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40 font-sans">Awards</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 py-32 bg-[#f0ede8] relative overflow-hidden">
        {/* Colorful Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px] -ml-48 -mb-48" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24">
            <h2 className="text-4xl md:text-6xl font-light italic mb-8 md:mb-0">Our Services.</h2>
            <p className="max-w-md text-sm opacity-60 leading-relaxed font-sans">
              We offer a range of professional photography services tailored to your unique needs, 
              from high-end editorial shoots to intimate portrait sessions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Editorial", desc: "High-concept visual storytelling for magazines and digital publications." },
              { title: "Commercial", desc: "Elevating brands through striking product and lifestyle photography." },
              { title: "Portraiture", desc: "Capturing the authentic essence of individuals in timeless frames." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-12 border border-[#1a1a1a]/10 hover:border-[#1a1a1a] transition-colors group"
              >
                <div className="text-[10px] uppercase tracking-widest opacity-30 mb-8 font-sans">0{i + 1}</div>
                <h3 className="text-3xl italic mb-6">{service.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed font-sans mb-8">{service.desc}</p>
                <div className="w-10 h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-32 max-w-3xl mx-auto border-t border-gray-100">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-light italic mb-8">Get in Touch.</h2>
          <p className="text-sm opacity-60 leading-relaxed font-sans">
            Have a project in mind or just want to say hello? <br />
            Fill out the form below and I'll get back to you shortly.
          </p>
        </div>
        
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest opacity-40 font-sans">Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-4 focus:border-[#1a1a1a] outline-none transition-colors font-sans"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest opacity-40 font-sans">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-4 focus:border-[#1a1a1a] outline-none transition-colors font-sans"
                placeholder="hello@example.com"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest opacity-40 font-sans">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-4 focus:border-[#1a1a1a] outline-none transition-colors font-sans resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="flex justify-center pt-8">
            <button className="group flex items-center gap-4 border border-[#1a1a1a] px-16 py-6 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all font-sans text-sm uppercase tracking-widest">
              Send Message <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-8 bg-black text-white ml-[-35px] mr-[-30px] mt-32 pb-[127px] pt-[130px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-24">
            {/* Brand Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Zap size={18} className="text-white fill-white" />
                </div>
                <span className="text-xl font-bold tracking-tight uppercase">Medialab</span>
              </div>
              <p className="text-sm opacity-60 leading-relaxed font-sans max-w-xs">
                A premium creative media studio dedicated to visual storytelling and digital excellence. We build brands that matter.
              </p>
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-sans font-bold">
                Creative Media Studio
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-10 font-sans">Quick Links</h4>
              <ul className="space-y-5 font-sans text-sm opacity-60">
                <li><a href="#home" className="hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="#photography" className="hover:opacity-100 transition-opacity">Photography</a></li>
                <li><a href="#design" className="hover:opacity-100 transition-opacity">Design</a></li>
                <li><a href="#media" className="hover:opacity-100 transition-opacity">Media</a></li>
                <li><a href="#portfolio" className="hover:opacity-100 transition-opacity">Portfolio</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-10 font-sans">Services</h4>
              <ul className="space-y-5 font-sans text-sm opacity-60">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Photography</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">UI Design</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Video Production</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Branding</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-10 font-sans">Contact</h4>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Mail size={18} className="text-purple-500 mt-1" />
                  <div>
                    <p className="text-sm font-bold font-sans">Email</p>
                    <a href="mailto:hello@medialab.studio" className="text-sm opacity-60 font-sans">hello@medialab.studio</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={18} className="text-blue-500 mt-1" />
                  <div>
                    <p className="text-sm font-bold font-sans">Phone</p>
                    <p className="text-sm opacity-60 font-sans">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin size={18} className="text-pink-500 mt-1" />
                  <div>
                    <p className="text-sm font-bold font-sans">Location</p>
                    <p className="text-sm opacity-60 font-sans">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest font-sans font-bold">
            <div className="flex gap-8 opacity-60">
              <Instagram size={18} className="hover:opacity-100 cursor-pointer transition-opacity" />
              <Dribbble size={18} className="hover:opacity-100 cursor-pointer transition-opacity" />
              <Github size={18} className="hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
            <p className="opacity-40">© 2026 Creative Media Studio. All Rights Reserved.</p>
            <div className="flex gap-12 opacity-40">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
