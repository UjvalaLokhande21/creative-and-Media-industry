import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          >
            <MessageSquare size={14} className="text-orange-500" />
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-none uppercase italic"
          >
            Let's <br />
            <span className="text-transparent stroke-black stroke-1" style={{ WebkitTextStroke: '1px black' }}>Connect.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl text-gray-500 leading-relaxed"
          >
            Have a project in mind? Or just want to say hello? We'd love to hear from you. 
            Our team is ready to transform your vision into digital reality.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500">Email Us</h3>
                <p className="text-2xl font-bold tracking-tight">hello@studio.design</p>
                <p className="text-gray-400 text-sm">For general inquiries and project proposals.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500">Call Us</h3>
                <p className="text-2xl font-bold tracking-tight">+1 (555) 000-1234</p>
                <p className="text-gray-400 text-sm">Mon - Fri, 9am - 6pm EST.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500">Visit Us</h3>
              <p className="text-2xl font-bold tracking-tight">
                123 Creative Ave, Suite 400<br />
                New York, NY 10001
              </p>
              <div className="aspect-video w-full rounded-[2rem] overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://picsum.photos/seed/map/1200/800" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500 mb-8">Follow Us</h3>
              <div className="flex gap-8">
                <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">
                  <Instagram size={18} /> Instagram
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">
                  <Twitter size={18} /> Twitter
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-12 md:p-16 rounded-[3rem] border border-gray-100">
            <h2 className="text-3xl font-bold mb-12 tracking-tight">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Subject</label>
                <select className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all">
                  <option>Project Inquiry</option>
                  <option>Partnership</option>
                  <option>Career</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Message</label>
                <textarea 
                  required
                  className="w-full bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all h-48 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full bg-black text-white py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-orange-500 transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
              >
                {formStatus === 'idle' && <>Send Message <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" /></>}
                {formStatus === 'sending' && <>Sending...</>}
                {formStatus === 'sent' && <>Message Sent Successfully!</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
