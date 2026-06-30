import { motion } from "framer-motion";
import { Trophy, Star, Award, Zap, Target, GitBranch } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  date?: string;
}

const achievementsData: Achievement[] = [
  {
    title: "4th Position in Track 'Future Learning'",
    description: "Ignition Hackverse 2026 by PVG College - Recognized for innovative educational solutions",
    icon: <Trophy className="h-6 w-6" />,
    category: "Hackathon",
    date: "2026",
  },
  {
    title: "Best Solution Award - Techathon 3.0",
    description: "National Hackathon in EdTech Domain - Won for exceptional solution in educational technology",
    icon: <Zap className="h-6 w-6" />,
    category: "Competition",
    date: "2025",
  },
  {
    title: "3rd Prize - She Solves 2.0 Hackathon",
    description: "Team Pixel Petals - Recognition for women-focused tech solutions and innovation",
    icon: <Star className="h-6 w-6" />,
    category: "Hackathon",
    date: "2025",
  },
  {
    title: "IEEE Paper Published - GCWCN 2025",
    description: "Published research in Global Conference on Wireless Communication and Networks",
    icon: <Award className="h-6 w-6" />,
    category: "Publication",
    date: "2025",
  },
  {
    title: "Published Research - GIJET Journal",
    description: "Research publication in GIJET Journal at AITC 2025 conference",
    icon: <GitBranch className="h-6 w-6" />,
    category: "Publication",
    date: "2025",
  },
  {
    title: "Kurukshetra Hackathon - Round 2 Qualified",
    description: "Successfully qualified for Round 2 of Kurukshetra National Hackathon",
    icon: <Target className="h-6 w-6" />,
    category: "Hackathon",
    date: "2024",
  },
];

export function AchievementsView() {
  return (
    <div className="h-full bg-space px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-yellow-400" />
            <h2 className="text-4xl font-bold text-white">Achievements</h2>
          </div>
          <p className="text-slate-400 text-lg">Recognition and milestones</p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-lg hover:shadow-xl hover:shadow-yellow-500/20 transition-all"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-purple-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  className="mb-4 inline-flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 group-hover:text-yellow-300 transition-colors"
                >
                  {achievement.icon}
                </motion.div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-white">{achievement.title}</h3>

                {/* Description */}
                <p className="mb-4 text-sm text-slate-400 leading-relaxed">{achievement.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="inline-block rounded-full bg-slate-700/50 px-3 py-1 text-xs font-medium text-cyan-300">
                    {achievement.category}
                  </span>
                  {achievement.date && (
                    <span className="text-xs text-slate-500 font-semibold">{achievement.date}</span>
                  )}
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-l from-yellow-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>




      </div>
    </div>
  );
}
