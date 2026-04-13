import { useEffect, useRef, useState, memo } from "react";
import UnicornScene from "unicornstudio-react";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const MemoizedUnicornScene = memo(() => (
  <UnicornScene
    projectId="4AovqpOSEDMwmL3MY7Jc"
    width="100%"
    height="100%"
    scale={1}
    dpi={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1}
    sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.6/dist/unicornStudio.umd.js"
  />
));

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050510]">
      {/* UnicornScene Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full flex items-center justify-center">
          <MemoizedUnicornScene />
        </div>
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/30 via-transparent to-[#050510]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050510]/60 via-transparent to-[#050510]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-violet-300" style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.05em" }}>
            AVAILABLE FOR HIRE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-white mt-4 mb-6 px-4 md:px-0"
          style={{
            fontSize: "clamp(2.5rem, 10vw, 6rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Creative{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Full-Stack
          </span>
          <br />
          Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/60 max-w-xl mb-10 px-4 md:px-0"
          style={{ fontSize: "clamp(1rem, 4vw, 1.125rem)", lineHeight: 1.7 }}
        >
          I craft exceptional digital experiences that live at the intersection of design and technology. 
          Turning complex ideas into elegant, scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 sm:px-0"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5 cursor-pointer"
            style={{ fontWeight: 600, fontSize: "0.95rem" }}
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{ fontWeight: 500, fontSize: "0.95rem" }}
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-5 mt-12 px-6"
        >
          {[
            { icon: Github, href: "https://github.com/sohagabir112", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sohag-abir-624489392/", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 hover:border-violet-400/40 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}