import { motion } from "motion/react";
import { Layout, Camera, Film, Globe, User, Palette, ArrowRight, CheckCircle2, Sparkles, Zap, Target, BarChart } from "lucide-react";

const SERVICES = [
  {
    id: "agency",
    name: "Creative Agency",
    icon: Layout,
    color: "bg-orange-500",
    description: "Bespoke digital solutions that blend art with high-performance technology. We build brands that resonate.",
    features: ["Brand Identity", "UI/UX Design", "Digital Strategy", "Web Development"]
  },
  {
    id: "photo",
    name: "Photography",
    icon: Camera,
    color: "bg-zinc-800",
    description: "Capturing the essence of your brand through high-end commercial and lifestyle photography.",
    features: ["Product Shoots", "Lifestyle", "Editorial", "Post-Production"]
  },
  {
    id: "video",
    name: "Video Production",
    icon: Film,
    color: "bg-red-600",
    description: "Cinematic storytelling that engages your audience and elevates your brand's narrative.",
    features: ["Commercials", "Documentaries", "Social Content", "Motion Graphics"]
  },
  {
    id: "media",
    name: "MediaLab Studio",
    icon: Globe,
    color: "bg-indigo-600",
    description: "Experimental digital experiences that push the boundaries of modern media and technology.",
    features: ["Interactive Design", "AR/VR", "Creative Coding", "New Media"]
  },
  {
    id: "brand",
    name: "Personal Brand",
    icon: User,
    color: "bg-pink-500",
    description: "Strategic positioning and visual identity for visionaries, founders, and creative leaders.",
    features: ["Visual Identity", "Content Strategy", "Public Relations", "Digital Presence"]
  },
  {
    id: "art",
    name: "Art Studio",
    icon: Palette,
    color: "bg-stone-900",
    description: "Where raw creativity meets digital precision. We create art that inspires and challenges.",
    features: ["Digital Art", "Exhibitions", "Installations", "Creative Direction"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles size={14} className="text-yellow-400" />
            Our Expertise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-none uppercase italic"
          >
            Digital <br />
            <span className="text-transparent stroke-black stroke-1" style={{ WebkitTextStroke: '1px black' }}>Services.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed"
          >
            We offer a comprehensive suite of digital services designed to help modern brands 
            thrive in an ever-evolving digital landscape.
          </motion.p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-12 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-black hover:text-white transition-all duration-500"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-12 transition-transform group-hover:rotate-12`}>
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">{service.name}</h3>
              <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed mb-12">
                {service.description}
              </p>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                    <CheckCircle2 size={16} className="text-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Our Process.</h2>
              <p className="text-gray-500 mt-4 uppercase tracking-widest text-xs font-bold">How we bring your vision to life</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", name: "Discovery", icon: Target, desc: "We dive deep into your brand, goals, and audience." },
              { step: "02", name: "Strategy", icon: Zap, desc: "Crafting a bespoke roadmap for your digital success." },
              { step: "03", name: "Design", icon: Palette, desc: "Transforming strategy into high-end visual experiences." },
              { step: "04", name: "Launch", icon: BarChart, desc: "Deploying and optimizing for maximum impact." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <item.icon size={120} />
                </div>
                <span className="text-5xl font-black italic text-gray-100 mb-8 block">{item.step}</span>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-orange-500 text-white p-16 md:p-32 rounded-[4rem] text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-none uppercase italic">
              Let's Build <br /> Something.
            </h2>
            <button className="bg-white text-black px-12 py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all flex items-center gap-4 mx-auto group">
              Start a Project <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
