import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import astronaut from "@/assets/astronaut-hero.png";

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=anushkamkulkarni@gmail.com";
const RESUME_URL = "/resume/Anushka_Kulkarni_VIT_Resume.pdf";

const details = [
  ["Address", "Pune, India"],
  ["Education", "BTech in Information Technology"],
  ["Grade", "9.2 CGPA"],
  ["Achievements", "Techathon award winner, hackathon finalist, IEEE research publication"],
  ["Hobbies", "Music, sketching, travelling, problem solving"],
  ["Goal", "To build scalable and inclusive digital experiences as a full-stack developer"],
  ["Tech Stack", "MongoDB, Express.js, React.js, Node.js, Next.js, Tailwind CSS"],
];

export function AboutMeView() {
  return (
    <div className="h-full min-h-[calc(100vh-90px)] flex items-center justify-center bg-space px-6 py-6 md:px-8 md:py-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid h-full w-full max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(180px,200px)]"
      >
        <div className="min-w-0">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-cyan-300">About me</p>
          <h1 className="mt-1 text-4xl font-bold text-white lg:text-5xl">Anushka Kulkarni</h1>
          <p className="mt-2 text-lg text-slate-300 md:text-xl">IT Student | MERN Developer | DSA Enthusiast</p>

          <p className="mt-2 max-w-4xl text-base leading-normal text-slate-300">
            I'm Anushka Kulkarni, a passionate full-stack developer from Pune, India, driven by the goal of building dynamic, scalable, and seamless web applications. I specialize in technologies like React, JavaScript, Node.js, HTML, and CSS, merging intuitive user experiences with robust backend logic to deliver end-to-end digital solutions.
          </p>

          <div className="mt-2 space-y-0.5 text-base">
            {details.map(([label, value]) => (
              <p key={label} className="leading-relaxed text-slate-300">
                <span className="font-semibold text-white">{label} : </span>
                {value}
              </p>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 font-semibold text-cyan-300 transition-colors hover:text-cyan-100 text-base"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-cyan-300 transition-colors hover:text-cyan-100 text-base"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="order-first flex flex-col items-center lg:order-none lg:items-end">
          <img
            src={astronaut}
            alt="Anushka"
            className="h-36 w-36 rounded-full border border-cyan-300/40 object-cover md:h-44 md:w-44 lg:h-48 lg:w-48"
          />

          <div className="mt-3 flex gap-3">
            <a
              href="https://github.com/AnushkaaKulkarni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition-colors hover:text-cyan-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/anushka-kulkarni-08801a318"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition-colors hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition-colors hover:text-cyan-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
