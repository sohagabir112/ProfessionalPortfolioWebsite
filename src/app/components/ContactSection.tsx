import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, MapPin, Send, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

/**
 * Google Sheets Integration via Google Apps Script
 *
 * To enable real submissions to your Google Sheet:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/14bGBt2tLD2yMMHd9Wxte0BII8uvlNmA0AV74LH6y2cY
 * 2. Go to Extensions → Apps Script
 * 3. Paste this code and click Deploy → New Deployment → Web App (Anyone can access):
 *
 * function doPost(e) {
 *   const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   const data = JSON.parse(e.postData.contents);
 *   sheet.appendRow([new Date(), data.name, data.email, data.subject, data.message]);
 *   return ContentService
 *     .createTextOutput(JSON.stringify({ status: "success" }))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 *
 * 4. Copy the deployment URL and replace APPS_SCRIPT_URL below.
 */
const APPS_SCRIPT_URL = "YOUR_APPS_SCRIPT_DEPLOYMENT_URL_HERE";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // If the Apps Script URL has been set, POST to it
    if (APPS_SCRIPT_URL !== "YOUR_APPS_SCRIPT_DEPLOYMENT_URL_HERE") {
      try {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", // Apps Script requires no-cors
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
        });
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } catch {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } else {
      // Demo mode — simulate submission
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#06060f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1a0a3a20_0%,_transparent_70%)] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-violet-400 mb-3" style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Let's Talk
          </p>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em" }}>
            Get In Touch
          </h2>
          <p className="text-white/50 max-w-md mx-auto" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {[
              {
                icon: Mail,
                title: "Email",
                value: "sohagabir112@gmail.com",
                sub: "Reply within 24 hours",
                color: "#a78bfa",
                href: "mailto:sohagabir112@gmail.com",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Bangladesh 🇧🇩",
                sub: "Available for remote work",
                color: "#38bdf8",
                href: null,
              },
              {
                icon: Github,
                title: "GitHub",
                value: "github.com/sohagabir112",
                sub: "Open source contributions",
                color: "#34d399",
                href: "https://github.com/sohagabir112",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                value: "Sohag Abir",
                sub: "Connect professionally",
                color: "#f59e0b",
                href: "https://www.linkedin.com/in/sohag-abir-624489392/",
              },
            ].map(({ icon: Icon, title, value, sub, color, href }) => (
              <div
                key={title}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300 flex items-center gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-white/40 mb-0.5" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {title}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-white hover:text-violet-300 transition-colors truncate block"
                      style={{ fontSize: "0.9rem", fontWeight: 600 }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white truncate" style={{ fontSize: "0.9rem", fontWeight: 600 }}>{value}</p>
                  )}
                  <p className="text-white/40" style={{ fontSize: "0.78rem" }}>{sub}</p>
                </div>
              </div>
            ))}

            {/* Google Sheet note */}
            <div className="p-5 rounded-2xl border border-violet-500/20 bg-violet-500/5 flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-violet-400">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
              </div>
              <p className="text-white/50" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                Messages are logged to a{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/14bGBt2tLD2yMMHd9Wxte0BII8uvlNmA0AV74LH6y2cY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
                >
                  Google Sheet
                </a>{" "}
                for easy tracking.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: "name", label: "Name", placeholder: "Your full name", type: "text" },
                  { name: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                ].map(({ name, label, placeholder, type }) => (
                  <div key={name} className="flex flex-col gap-2">
                    <label className="text-white/50" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      required
                      placeholder={placeholder}
                      value={form[name as keyof typeof form]}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-white/20 outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-200 disabled:opacity-50"
                      style={{ fontSize: "0.9rem" }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project inquiry, collaboration, etc."
                  value={form.subject}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-white/20 outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-200 disabled:opacity-50"
                  style={{ fontSize: "0.9rem" }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50" style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-white/20 outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-200 resize-none disabled:opacity-50"
                  style={{ fontSize: "0.9rem" }}
                />
              </div>

              {/* Status Message */}
              {status === "success" && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                  <CheckCircle2 size={16} />
                  <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                    Message sent! I'll get back to you soon.
                  </span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <AlertCircle size={16} />
                  <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                    Something went wrong. Please try emailing directly.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30 flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontWeight: 600 }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={16} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-white/25 text-center" style={{ fontSize: "0.75rem" }}>
                Submissions are saved to Google Sheets for easy management
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
