import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Download, Code2, Layers, Cpu, MapPin, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "figma:asset/b9a2393f0aa99cbf730448741e6dcafab1d2cb9d.png";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "80+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "12", label: "Awards Won" },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-[#050510] relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 to-blue-600/10 backdrop-blur-sm" />
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border border-violet-500/10" />
              <img
                src={profileImage}
                alt="Sohag Abir - Developer"
                className="relative z-10 w-full rounded-xl object-cover object-top"
                style={{ maxHeight: "520px" }}
              />
              {/* Location Badge */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-[#0d0d2b] border border-violet-500/30 rounded-2xl px-5 py-3 shadow-xl flex items-center gap-2">
                <MapPin size={14} className="text-violet-400" />
                <div>
                  <p className="text-violet-300" style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em" }}>BASED IN</p>
                  <p className="text-white" style={{ fontSize: "0.9rem", fontWeight: 600 }}>Bangladesh 🇧🇩</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-violet-400 mb-3" style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              About Me
            </p>
            <h2 className="text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Passionate about building things that matter
            </h2>
            <p className="text-white/60 mb-5 leading-relaxed" style={{ fontSize: "1rem" }}>
              Hi, I'm <span className="text-violet-300">Sohag Abir</span> — a full-stack developer based in Bangladesh with a passion for building
              modern web applications. I specialize in React, TypeScript, and Node.js, with a strong eye for design and UX.
            </p>
            <p className="text-white/50 mb-6 leading-relaxed" style={{ fontSize: "0.95rem" }}>
              When I'm not coding, I'm exploring new design trends, contributing to open source, or mentoring junior developers.
              I believe great software is both technically excellent and delightful to use.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 mb-7">
              <a
                href="mailto:sohagabir112@gmail.com"
                className="inline-flex items-center gap-2 text-white/50 hover:text-violet-300 transition-colors duration-200 group"
                style={{ fontSize: "0.875rem" }}
              >
                <Mail size={14} className="text-violet-400" />
                sohagabir112@gmail.com
              </a>
              <a
                href="https://github.com/sohagabir112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 hover:text-violet-300 transition-colors duration-200"
                style={{ fontSize: "0.875rem" }}
              >
                <Github size={14} className="text-violet-400" />
                github.com/sohagabir112
              </a>
              <a
                href="https://www.linkedin.com/in/sohag-abir-624489392/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 hover:text-violet-300 transition-colors duration-200"
                style={{ fontSize: "0.875rem" }}
              >
                <Linkedin size={14} className="text-violet-400" />
                linkedin.com/in/sohag-abir-624489392
              </a>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-3 mb-10">
              {[
                { icon: Code2, text: "Clean, maintainable code following best practices" },
                { icon: Layers, text: "End-to-end product development from idea to deployment" },
                { icon: Cpu, text: "Performance-focused architecture for scalable solutions" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-violet-400" />
                  </div>
                  <span className="text-white/60" style={{ fontSize: "0.9rem" }}>{text}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30"
              style={{ fontWeight: 600, fontSize: "0.9rem" }}
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div
                className="text-white mb-1"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/40" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}