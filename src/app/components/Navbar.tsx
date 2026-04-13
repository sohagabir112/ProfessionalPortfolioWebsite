import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        scrolled
          ? "bg-[#050510]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-white relative group"
          style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          <span className="text-violet-400">&lt;</span>
          Sohag
          <span className="text-violet-400">.</span>
          <span className="text-violet-400">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-white/60 hover:text-white transition-colors duration-200 relative group cursor-pointer"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-violet-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 cursor-pointer"
            style={{ fontSize: "0.875rem", fontWeight: 600 }}
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#050510]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6 pt-2 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-white/70 hover:text-white text-left transition-colors duration-200 cursor-pointer py-1"
                style={{ fontSize: "1rem", fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 cursor-pointer w-full"
              style={{ fontWeight: 600 }}
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}