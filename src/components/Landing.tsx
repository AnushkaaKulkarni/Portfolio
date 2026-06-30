import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Download, Rocket, Send } from "lucide-react";
import StarField from "./StarField";
import astronaut from "@/assets/astronaut-hero.png";

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-space text-foreground">
      <StarField count={160} />

      {/* Distant planets */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full opacity-60 blur-2xl"
        style={{ background: "radial-gradient(circle at 30% 30%, var(--nebula-magenta), transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle at 70% 40%, var(--nebula-cyan), transparent 60%)" }}
      />

      {/* Top nav */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-2 font-mono-code text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-nebula-cyan shadow-[0_0_10px_var(--nebula-cyan)]" />
          <span className="text-muted-foreground">anushka@portfolio:~$</span>
        </div>
        <Link
          to="/workspace"
          className="font-mono-code text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          /workspace →
        </Link>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-6 md:px-12 lg:grid-cols-2 lg:gap-6 lg:pt-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono-code text-sm text-nebula-cyan"
          >
            {"// initializing developer..."}
          </motion.p>
          <h1
            className="mt-4 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hi, I'm <span className="text-aurora">Anushka</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            An <span className="text-foreground">Information Technology</span> student,{" "}
            <span className="text-foreground">MERN stack</span> developer, and{" "}
            <span className="text-foreground">DSA</span> enthusiast — exploring code in the
            outer reaches of the web.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/workspace"
              className="group inline-flex items-center gap-2 rounded-md px-5 py-3 font-medium text-primary-foreground transition-all hover:scale-[1.03]"
              style={{
                background: "var(--gradient-aurora)",
                boxShadow: "var(--glow-cyan)",
              }}
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:-rotate-12" />
              Launch Workspace
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-3 font-medium backdrop-blur transition-colors hover:bg-card"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="mailto:anushka@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-3 font-medium backdrop-blur transition-colors hover:bg-card"
            >
              <Send className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="font-mono-code text-xs text-muted-foreground">connect()</span>
            <div className="h-px flex-1 bg-border" />
            {[
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Mail, href: "mailto:anushka@example.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group rounded-full border border-border bg-card/50 p-3 backdrop-blur transition-all hover:border-nebula-cyan hover:text-nebula-cyan hover:shadow-[var(--glow-cyan)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — astronaut on earth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-1 flex h-[480px] items-end justify-center sm:h-[560px] lg:order-2 lg:h-[640px]"
        >
          {/* Earth */}
          <div
            className="absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-t-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, oklch(0.45 0.15 220) 0%, oklch(0.3 0.12 230) 35%, oklch(0.18 0.06 250) 70%)",
              boxShadow:
                "inset 0 60px 80px oklch(0.7 0.18 200 / 0.35), 0 -20px 80px oklch(0.7 0.18 210 / 0.3)",
            }}
          />
          {/* Earth glow */}
          <div
            className="absolute bottom-[380px] left-1/2 h-2 w-[820px] -translate-x-1/2 rounded-full blur-xl"
            style={{ background: "var(--nebula-cyan)", opacity: 0.5 }}
          />

          {/* Astronaut floating */}
          <motion.img
            src={astronaut}
            alt="Anushka, an astronaut developer standing on Earth"
            width={1024}
            height={1280}
            className="relative z-10 h-full w-auto object-contain drop-shadow-[0_30px_60px_rgba(120,180,255,0.35)]"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <footer className="relative z-10 px-6 pb-6 text-center font-mono-code text-xs text-muted-foreground md:px-12">
        {"// press 'Launch Workspace' to enter the editor"}
      </footer>
    </main>
  );
}