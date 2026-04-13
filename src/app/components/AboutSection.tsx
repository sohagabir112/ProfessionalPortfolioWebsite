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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative px-4 sm:px-0"
          >
            <div className="relative max-w-md mx-auto md:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 to-blue-600/10 backdrop-blur-sm" />
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border border-violet-500/10" />
              <img
                src={profileImage}
                alt="Sohag Abir - Developer"
                className="relative z-10 w-full rounded-xl object-cover object-top"
                style={{ maxHeight: "min(520px, 70vh)" }}
              />
              {/* Location Badge */}
              <div className="absolute -bottom-3 right-0 sm:-bottom-5 sm:-right-5 z-20 bg-[#0d0d2b]/90 backdrop-blur-md border border-violet-500/30 rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-xl flex items-center gap-2">
                <MapPin size={14} className="text-violet-400" />
                <div>
                  <p className="text-violet-300" style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em" }}>BASED IN</p>
                  <p className="text-white" style={{ fontSize: "0.85rem", fontWeight: 600 }}>Bangladesh 🇧🇩</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center md:text-left pt-8 md:pt-0 px-2 sm:px-0"
          >
            <p className="text-violet-400 mb-3" style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              About Me
            </p>
            <h2 className="text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
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
            <div className="flex flex-col items-center md:items-start gap-3 mb-7">
              <a
                href="mailto:sohagabir112@gmail.com"
                className="inline-flex items-center gap-2 text-white/50 hover:text-violet-300 transition-colors duration-200 group truncate max-w-full"
                style={{ fontSize: "0.875rem" }}
              >
                <Mail size={14} className="text-violet-400 flex-shrink-0" />
                <span className="truncate">sohagabir112@gmail.com</span>
              </a>
              <a
                href="https://github.com/sohagabir112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 hover:text-violet-300 transition-colors duration-200 truncate max-w-full"
                style={{ fontSize: "0.875rem" }}
              >
                <Github size={14} className="text-violet-400 flex-shrink-0" />
                <span className="truncate">github.com/sohagabir112</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sohag-abir-624489392/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 hover:text-violet-300 transition-colors duration-200 truncate max-w-full"
                style={{ fontSize: "0.875rem" }}
              >
                <Linkedin size={14} className="text-violet-400 flex-shrink-0" />
                <span className="truncate">linkedin.com/in/sohag-abir-624489392</span>
              </a>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-3 mb-10 max-w-sm mx-auto md:mx-0">
              {[
                { icon: Code2, text: "Clean, maintainable code following best practices" },
                { icon: Layers, text: "End-to-end product development from idea to deployment" },
                { icon: Cpu, text: "Performance-focused architecture for scalable solutions" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-4 text-left">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={15} className="text-violet-400" />
                  </div>
                  <span className="text-white/60" style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30"
                style={{ fontWeight: 600, fontSize: "0.95rem" }}
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-24"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div
                className="text-white mb-1"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/40" style={{ fontSize: "0.8rem", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}