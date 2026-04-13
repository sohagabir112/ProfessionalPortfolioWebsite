import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050510] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          className="text-white"
          style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          <span className="text-violet-400">&lt;</span>
          Sohag
          <span className="text-violet-400">.</span>
          <span className="text-violet-400">/&gt;</span>
        </a>

        {/* Copyright */}
        <p className="text-white/30 flex items-center justify-center gap-1.5 text-center" style={{ fontSize: "0.85rem" }}>
          Made with <Heart size={13} className="text-violet-400 fill-violet-400 flex-shrink-0" /> by Sohag Abir · {new Date().getFullYear()}
        </p>

        {/* Social */}
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/sohagabir112", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sohag-abir-624489392/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:sohagabir112@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-white/30 hover:text-violet-400 transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
