import { motion } from "motion/react";
import { Globe, Share2, BarChart3, MessageSquare, ArrowUpRight, Search, Menu, ArrowLeft, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export default function MediaAgency({ onBack }: { onBack?: () => void }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-[#4f46e5] selection:text-white">
      {/* Back Button */}
      {onBack && (
        <button 
          onClick={onBack}
          className="fixed top-24 left-8 z-[60] bg-white text-black p-3 rounded-full hover:bg-[#4f46e5] hover:text-white transition-all group shadow-xl shadow-black/5 border border-gray-100"
          title="Back to Showcase"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      )}

      {/* Premium Header */}
      <header className="fixed top-0 left-0 w-full px-12 py-8 flex justify-between items-center z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#4f46e5] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#4f46e5]/20">M</div>
          <span className="text-2xl font-black tracking-tighter uppercase">Media<span className="text-[#4f46e5]">Lab</span></span>
        </div>
        
        <nav className="hidden lg:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
          <a href="#" className="hover:text-[#4f46e5] transition-colors">Home</a>
          <a href="#" className="hover:text-[#4f46e5] transition-colors">Photography</a>
          <a href="#" className="hover:text-[#4f46e5] transition-colors">Design</a>
          <a href="#" className="hover:text-[#4f46e5] transition-colors">Media</a>
          <a href="#" className="hover:text-[#4f46e5] transition-colors">Portfolio</a>
          <a href="#" className="hover:text-[#4f46e5] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-8">
          <button className="hidden md:block bg-[#1a1a1a] text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#4f46e5] hover:shadow-xl hover:shadow-[#4f46e5]/20 transition-all">
            Start Project
          </button>
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 inline-flex items-center gap-2 bg-[#4f46e5]/10 text-[#4f46e5] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />
          Next-Gen Media Solutions
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
        >
          Scale Your Brand <br />
          <span className="text-[#4f46e5]">Beyond Boundaries.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-xl text-gray-500 mb-12 leading-relaxed"
        >
          We combine data-driven strategies with creative excellence to help modern brands dominate the digital landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button className="w-full sm:w-auto bg-[#4f46e5] text-white px-10 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-[#4f46e5]/20 transition-all flex items-center justify-center gap-2">
            View Solutions <ArrowUpRight size={20} />
          </button>
          <button className="w-full sm:w-auto bg-white border border-gray-200 text-[#1a1a1a] px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
            Book a Demo
          </button>
        </motion.div>
      </section>

      {/* Grid Services */}
      <section className="px-8 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Digital Strategy", desc: "Comprehensive roadmaps for global brand presence.", color: "bg-blue-500" },
              { icon: Share2, title: "Social Growth", desc: "Organic and paid social media scaling strategies.", color: "bg-purple-500" },
              { icon: BarChart3, title: "Data Analytics", desc: "Deep insights into audience behavior and ROI.", color: "bg-indigo-500" },
              { icon: MessageSquare, title: "Content Creation", desc: "High-impact visual and written storytelling.", color: "bg-pink-500" },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-[#f8f9fa] border border-gray-100 hover:border-[#4f46e5]/20 hover:shadow-2xl hover:shadow-[#4f46e5]/5 transition-all group"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-${service.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Proven Results.</h2>
          <a href="#" className="text-[#4f46e5] font-bold flex items-center gap-2 hover:gap-4 transition-all">
            View All Case Studies <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[3rem] bg-gray-100 mb-8 relative">
                <img
                  src={`https://picsum.photos/seed/media${item}/1200/800`}
                  alt={`Case Study ${item}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  Growth • +240% ROI
                </div>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-[#4f46e5] transition-colors">Scaling a Global Tech Brand in 6 Months</h3>
              <p className="text-gray-500 leading-relaxed max-w-lg">How we helped a Silicon Valley startup reach 10M+ users through targeted media campaigns.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-32 bg-[#0a0a0a] text-white rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-[#4f46e5] rounded-xl flex items-center justify-center text-white font-bold">M</div>
                <span className="text-2xl font-bold tracking-tight uppercase">Media<span className="text-[#4f46e5]">Lab</span></span>
              </div>
              <p className="text-gray-400 max-w-sm mb-12 text-lg leading-relaxed">
                A premium creative media studio dedicated to visual storytelling and digital excellence. We build brands that matter.
              </p>
              <div className="flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4f46e5] transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4f46e5] transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4f46e5] transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4f46e5] transition-all"><Facebook size={18} /></a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10 text-[#4f46e5]">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Photography</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10 text-[#4f46e5]">Services</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Photography</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Video Production</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10 text-[#4f46e5]">Contact</h4>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Email</p>
                  <a href="mailto:hello@medialab.studio" className="text-lg font-medium hover:text-[#4f46e5] transition-colors">hello@medialab.studio</a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Phone</p>
                  <p className="text-lg font-medium">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Location</p>
                  <p className="text-lg font-medium">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">
            <p>© 2026 Creative Media Studio. All rights reserved.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
