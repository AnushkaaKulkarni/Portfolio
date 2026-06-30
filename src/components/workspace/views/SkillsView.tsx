import { motion } from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Languages,
  type LucideIcon,
  Sparkles,
  Users,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: Languages,
    accent: "from-cyan-400 to-blue-500",
    skills: ["C", "Java", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Web Development",
    icon: Code2,
    accent: "from-fuchsia-400 to-purple-500",
    skills: ["Next.js", "Tailwind CSS", "Express.js", "REST APIs"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    accent: "from-emerald-400 to-cyan-500",
    skills: ["Node.js", "Express.js", "MongoDB Atlas", "MySQL"],
  },
  {
    title: "Tools & DevOps",
    icon: GitBranch,
    accent: "from-amber-300 to-orange-500",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "AI & Core Concepts",
    icon: BrainCircuit,
    accent: "from-violet-400 to-cyan-500",
    skills: ["JWT Authentication", "ML Basics", "System Design", "OCR", "XGBoost"],
  },
  {
    title: "Collaboration",
    icon: Users,
    accent: "from-rose-400 to-fuchsia-500",
    skills: ["Leadership", "Teamwork", "Communication", "Problem Solving"],
  },
];

const highlights = ["Full-stack builds", "Hackathon ready", "AI-assisted products"];

export function SkillsView() {
  return (
    <div className="h-full overflow-hidden bg-space px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Technical toolkit
            </div>
            <h2 className="text-4xl font-bold text-white md:text-5xl">Skills & Expertise</h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-300">
              A practical stack for building polished web apps, AI-enabled workflows, and team projects that move quickly from idea to demo.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-xs font-semibold text-slate-200 shadow-lg shadow-black/10 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillsData.map((category, idx) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur transition-all hover:border-cyan-300/40 hover:shadow-cyan-500/20"
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.accent}`} />
                <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition-opacity group-hover:opacity-90" />

                <div className="relative mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${category.accent} text-slate-950 shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>
                  <BadgeCheck className="h-5 w-5 text-cyan-300 opacity-70" />
                </div>

                <div className="relative flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.18 + idx * 0.05 + skillIdx * 0.04 }}
                      className="rounded-full border border-slate-600/80 bg-slate-800/80 px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
