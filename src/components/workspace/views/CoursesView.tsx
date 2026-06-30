import { motion } from "framer-motion";
import { Award, CalendarDays, CheckCircle2, GraduationCap } from "lucide-react";

interface Course {
  title: string;
  provider: string;
  date: string;
  description: string;
  verified: boolean;
}

const coursesData: Course[] = [
  {
    title: "Cyber Security & Ethical Hacking",
    provider: "Vodafone",
    date: "2025",
    description: "Security principles, vulnerability awareness, and ethical hacking practices.",
    verified: true,
  },
  {
    title: "TRF Robotics Level-1",
    provider: "VIT Pune",
    date: "2025",
    description: "Introductory robotics, automation concepts, and practical hardware fundamentals.",
    verified: true,
  },
  {
    title: "German Language A1",
    provider: "ASAP Institute",
    date: "2025",
    description: "Beginner German language proficiency with A1 grammar, vocabulary, and communication.",
    verified: true,
  },
];

export function CoursesView() {
  return (
    <div className="h-full overflow-hidden bg-space px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-semibold text-cyan-200">
            <Award className="h-4 w-4" />
            Learning timeline
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Courses & Certifications</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-slate-300">
            A snapshot of the certifications and learning tracks shaping my technical foundation.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-fuchsia-400 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {coursesData.map((course, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] md:gap-0"
                >
                  <div
                    className={`order-2 md:order-none ${
                      isLeft ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-3 md:pl-10"
                    }`}
                  >
                    <motion.article
                      whileHover={{ y: -6 }}
                      className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/75 p-5 shadow-xl shadow-black/20 backdrop-blur transition-all hover:border-cyan-300/40 hover:shadow-cyan-500/20"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="relative">
                        <div className={`mb-3 flex flex-wrap items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                          <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-300">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {course.date}
                          </span>
                          {course.verified && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Verified
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white">{course.title}</h3>
                        <p className="mt-1 font-semibold text-cyan-300">{course.provider}</p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">{course.description}</p>
                      </div>
                    </motion.article>
                  </div>

                  <div className="relative order-1 col-start-1 row-start-1 flex justify-center md:order-none md:col-start-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.35, delay: 0.1 + idx * 0.08 }}
                      className="relative z-10 mt-5 grid h-11 w-11 place-items-center rounded-full border-4 border-cyan-400 bg-slate-950 shadow-lg shadow-cyan-500/30 md:h-14 md:w-14"
                    >
                      <GraduationCap className="h-5 w-5 text-cyan-300 md:h-6 md:w-6" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur"
        >
          <div>
            <div className="text-3xl font-bold text-cyan-300">{coursesData.length}</div>
            <div className="mt-1 text-sm text-slate-400">Courses</div>
          </div>
          <div className="border-x border-slate-700">
            <div className="text-3xl font-bold text-emerald-300">
              {coursesData.filter((c) => c.verified).length}
            </div>
            <div className="mt-1 text-sm text-slate-400">Verified</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-300">2025</div>
            <div className="mt-1 text-sm text-slate-400">Active Year</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
