import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NexDash Analytics",
    description:
      "A real-time analytics dashboard for SaaS companies, featuring live data visualization, custom reports, and AI-powered insights. Built with React, D3.js, and a Node.js backend.",
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjBVSXxlbnwxfHx8fDE3NzU4MTA4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    category: "Web App",
    featured: true,
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "ShopFlow Commerce",
    description:
      "A full-featured e-commerce platform with mobile-first design, real-time inventory management, and seamless Stripe payment integration.",
    image: "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBlY29tbWVyY2V8ZW58MXx8fHwxNzc1ODEwODM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    category: "E-Commerce",
    featured: true,
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "NeuralViz AI Platform",
    description:
      "An interactive platform for visualizing machine learning model training, featuring 3D neural network graphs, loss curves, and explainability tools.",
    image: "https://images.unsplash.com/photo-1761223976145-a85ffe11fc57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzc1NzQxODEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Three.js", "Python", "FastAPI", "TensorFlow"],
    category: "AI/ML",
    featured: false,
    live: "#",
    github: "#",
  },
];

const categories = ["All", "Web App", "E-Commerce", "AI/ML"];

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 bg-[#050510] relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8"
        >
          <div className="text-center lg:text-left">
            <p className="text-violet-400 mb-3" style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Portfolio
            </p>
            <h2 className="text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em" }}>
              Featured Projects
            </h2>
          </div>
          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-violet-600 border-violet-600 text-white"
                    : "border-white/10 text-white/50 hover:text-white hover:border-white/20 bg-transparent shadow-sm"
                }`}
                style={{ fontSize: "0.85rem", fontWeight: 500 }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/20 to-transparent" />
                {/* Category Badge */}
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full bg-violet-600/80 backdrop-blur-sm text-white"
                  style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em" }}
                >
                  {project.category}
                </span>
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href={project.live}
                    className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white mb-2 group-hover:text-violet-300 transition-colors duration-200" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p className="text-white/50 mb-5 leading-relaxed" style={{ fontSize: "0.875rem" }}>
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-white/40"
                      style={{ fontSize: "0.72rem", fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.live}
                  className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition-colors duration-200 group/link"
                  style={{ fontSize: "0.85rem", fontWeight: 600 }}
                >
                  View Project
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-200"
            style={{ fontWeight: 500, fontSize: "0.9rem" }}
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
