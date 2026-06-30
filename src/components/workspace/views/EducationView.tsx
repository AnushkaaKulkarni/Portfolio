import { motion } from "framer-motion";
import { GraduationCap, Calendar, Trophy } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  cgpa?: number;
  description?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Vishwakarma Institute of Technology",
    years: "2024 – 2028",
    cgpa: 9.2,
    description: "Focusing on full-stack development, AI/ML, and system design.",
  },
  {
    degree: "HSC (Science)",
    institution: "Geetamata Junior College",
    years: "2022 – 2024",
    cgpa: 89,
    description: "Science stream with focus on Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "SSC",
    institution: "D.I.C English Medium School",
    years: "2022",
    cgpa: 95.6,
    description: "Scored 95.60% with distinction in all subjects.",
  },
];

export function EducationView() {
  return (
    <div className="h-full bg-space px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white">Education</h2>
          </div>
          <p className="text-slate-400">My academic journey and qualifications</p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    </div>
                    <p className="text-lg text-cyan-400 font-semibold">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-sm text-slate-400 mt-2">{edu.description}</p>
                    )}
                  </div>
                  {edu.cgpa && (
                    <div className="text-right">
                      <div className="text-3xl font-bold text-purple-400">{edu.cgpa}</div>
                      <div className="text-xs text-slate-400">CGPA</div>
                    </div>
                  )}
                </div>

                {/* Years */}
                <div className="mt-4 flex items-center gap-2 text-slate-300">
                  <Calendar className="h-4 w-4 text-slate-500" />
                  <span className="font-semibold">{edu.years}</span>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1 w-full rounded-full bg-slate-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl bg-slate-800/50 border border-slate-700"
        >
          <h3 className="text-lg font-bold text-white mb-4">Relevant Coursework</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Data Structures",
              "Algorithms",
              "DBMS",
              "Operating Systems",
              "Web Development",
              "Computer Networks",
            ].map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                className="flex items-center gap-2 rounded-lg bg-slate-700/50 px-3 py-2"
              >
                <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                <span className="text-sm text-slate-200">{course}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
