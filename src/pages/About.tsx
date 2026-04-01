import { motion } from "motion/react";
import { ArrowRight, Sparkles, Target, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <header className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles size={14} className="text-yellow-400" />
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-none"
          >
            Crafting <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500">Excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl text-gray-500 leading-relaxed"
          >
            We are a collective of designers, developers, and visionaries dedicated to pushing the boundaries of what's possible in the digital realm.
          </motion.p>
        </header>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100"
          >
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-8">
              <Target size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Our Mission</h2>
            <p className="text-gray-500 leading-relaxed">
              To empower brands with cutting-edge digital solutions that combine artistic vision with high-performance technology. We don't just build websites; we create digital legacies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100"
          >
            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-8">
              <Zap size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Our Vision</h2>
            <p className="text-gray-500 leading-relaxed">
              To be the world's leading creative studio, recognized for our ability to transform complex challenges into elegant, intuitive, and impactful digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">The Team.</h2>
              <p className="text-gray-500 mt-4 uppercase tracking-widest text-xs font-bold">The minds behind the magic</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <Users size={16} />
              <span>12+ Creative Minds</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Thorne", role: "Creative Director", img: "https://picsum.photos/seed/alex/600/800" },
              { name: "Sarah Chen", role: "Lead Developer", img: "https://picsum.photos/seed/sarah/600/800" },
              { name: "Marcus Vane", role: "Brand Strategist", img: "https://picsum.photos/seed/marcus/600/800" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-gray-100 mb-6 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <p className="text-white font-bold text-xl">{member.name}</p>
                    <p className="text-white/60 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="px-4">
                  <h3 className="text-xl font-bold tracking-tight">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-black text-white p-16 md:p-32 rounded-[4rem] text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/seed/cta/1920/1080" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-none uppercase italic">
              Ready to <br /> Start?
            </h2>
            <button className="bg-white text-black px-12 py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-orange-500 hover:text-white transition-all flex items-center gap-4 mx-auto group">
              Get in Touch <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
