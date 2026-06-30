import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FolderGit2, Github, Sparkles, Trophy } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  impact: string;
  status: string;
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    title: "SkillifyAI",
    description:
      "AI-powered educational platform for learning, evaluation, and academic management across students, faculty, parents, and administrators.",
    technologies: ["Next.js", "Node.js", "MongoDB", "AI/ML", "JWT Auth"],
    githubUrl: "https://github.com/AnushkaaKulkarni/Logic_Legends.git",
    liveUrl: "https://skillify-ai-project.vercel.app/",
    impact: "AI quizzes, proctoring, analytics",
    status: "EdTech platform",
    featured: true,
  },
  {
    title: "Udyogini",
    description:
      "Hackathon-winning platform helping women entrepreneurs showcase services, manage bookings, collect reviews, and connect with nearby customers.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/moana-pri/Udyogini-she-solves-2.0.git",
    liveUrl: "https://udyogini-she-solves-2-0-y53e.vercel.app/",
    impact: "Bookings, reviews, multilingual UX",
    status: "Hackathon winner",
    featured: true,
  },
  {
    title: "FiscalCare",
    description:
      "Invoice-driven FinTech platform that automates GST workflows with OCR invoice processing and AI-assisted validation.",
    technologies: ["Next.js", "Node.js", "MongoDB", "OCR", "AI/ML"],
    githubUrl: "https://github.com/AnushkaaKulkarni/FiscalCare.git",
    liveUrl: "https://fiscal-care.vercel.app/",
    impact: "GSTR automation, audit-ready data",
    status: "FinTech build",
  },
  {
    title: "PredictCare",
    description:
      "Healthcare AI platform for disease risk prediction using XGBoost, CatBoost, Random Forest, and NLP, published in IEEE proceedings.",
    technologies: ["Python", "XGBoost", "CatBoost", "Random Forest", "NLP"],
    githubUrl: "https://github.com/AnushkaaKulkarni/predictcare",
    impact: "IEEE research project",
    status: "Healthcare AI",
  },
];

export function ProjectsView() {
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-300/30 bg-purple-300/10 px-3 py-1 text-sm font-semibold text-purple-100">
              <FolderGit2 className="h-4 w-4" />
              Project archive
            </div>
            <h2 className="text-4xl font-bold text-white md:text-5xl">Selected Projects</h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-300">
              Full-stack, AI, and research work built for real use cases, hackathons, and publication-ready outcomes.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              ["4", "Major builds"],
              ["3", "Live demos"],
              ["1", "IEEE paper"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur">
                <div className="text-2xl font-bold text-cyan-300">{value}</div>
                <div className="text-xs font-medium text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projectsData.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-xl border bg-slate-900/75 p-6 shadow-xl shadow-black/20 backdrop-blur transition-all ${
                project.featured
                  ? "border-cyan-300/35 hover:shadow-cyan-500/20"
                  : "border-white/10 hover:border-purple-300/35 hover:shadow-purple-500/20"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-slate-600 bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-300">
                        {project.status}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                          <Trophy className="h-3.5 w-3.5" />
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-200">
                      {project.title}
                    </h3>
                  </div>
                  <Sparkles className="h-5 w-5 shrink-0 text-cyan-300 opacity-70" />
                </div>

                <p className="mb-5 leading-relaxed text-slate-300">{project.description}</p>

                <div className="mb-5 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Impact</p>
                  <p className="mt-1 font-semibold text-slate-100">{project.impact}</p>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-600/80 bg-slate-800/80 px-3 py-1 text-xs font-medium text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/80 px-4 py-2 text-sm font-semibold text-slate-100 transition-all hover:border-cyan-300/60 hover:text-cyan-200"
                  >
                    <Github className="h-4 w-4" />
                    Code
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.03]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
