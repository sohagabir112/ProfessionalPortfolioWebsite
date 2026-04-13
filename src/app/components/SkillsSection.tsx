import { useRef } from "react";
import { motion, useInView } from "motion/react";

const skillCategories = [
  {
    category: "Frontend",
    color: "#a78bfa",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Three.js / WebGL", level: 72 },
    ],
  },
  {
    category: "Backend",
    color: "#38bdf8",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "Python / FastAPI", level: 75 },
    ],
  },
  {
    category: "Tools & DevOps",
    color: "#34d399",
    skills: [
      { name: "Docker / Kubernetes", level: 80 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "AWS / GCP", level: 77 },
      { name: "Git & GitHub", level: 95 },
    ],
  },
];

const techStack = [
  "React", "TypeScript", "Node.js", "Next.js", "Python", "PostgreSQL",
  "Docker", "AWS", "GraphQL", "Tailwind", "Redis", "Figma",
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-white/70" style={{ fontSize: "0.875rem", fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: "0.8rem", fontWeight: 600, color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-[#06060f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-violet-400 mb-3" style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Technical Arsenal
          </p>
          <h2 className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em" }}>
            Skills & Expertise
          </h2>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIdx * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cat.color, boxShadow: `0 0 12px ${cat.color}` }}
                />
                <h3 className="text-white" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                  {cat.category}
                </h3>
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={catIdx * 0.1 + i * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Tag Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.04 }}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/50 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-200 cursor-default"
              style={{ fontSize: "0.85rem", fontWeight: 500 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
    </section>
  );
}
