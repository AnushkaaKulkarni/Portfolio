import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";

const RESUME_URL = "/resume/Anushka_Kulkarni_VIT_Resume.pdf";

export function ResumeView() {
  return (
    <div className="flex h-full items-center justify-center bg-space px-6 py-12 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl text-center"
      >
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-2xl shadow-cyan-500/20">
          <FileText className="h-10 w-10" />
        </div>

        <h2 className="text-5xl font-bold text-white md:text-6xl">Resume</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
          Choose how you want to access the PDF. View opens it in a new browser tab, while download saves the file directly.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-500 bg-slate-900/70 px-7 py-4 text-base font-semibold text-slate-100 shadow-xl shadow-black/20 backdrop-blur transition-all hover:border-cyan-300/70 hover:text-cyan-200"
          >
            <ExternalLink className="h-5 w-5" />
            View Resume
          </a>
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-7 py-4 text-base font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.03]"
          >
            <Download className="h-5 w-5" />
            Download PDF
          </a>
        </div>
      </motion.div>
    </div>
  );
}
