import { useEffect, useRef, useState } from "react";

type Line = { kind: "in" | "out"; text: string };

const HELP = `Available commands:
  help        Show this help
  about       Who is Anushka
  skills      List my technical skills
  projects    Show featured projects
  contact     Show contact info
  clear       Clear the terminal`;

const RESPONSES: Record<string, string> = {
  help: HELP,
  about:
    "Anushka — IT student, MERN stack developer, DSA enthusiast. Building thoughtful UIs and solving hard problems.",
  skills:
    "Languages: JavaScript, TypeScript, Python, C++\nFrontend: React, Next.js, Tailwind, Framer Motion\nBackend: Node.js, Express, MongoDB\nTools: Git, Docker, VS Code",
  projects:
    "• AstroChat — MERN + Socket.io\n• DSA Visualizer — React + Canvas\n• Nebula Notes — Next.js + Prisma",
  contact:
    "Email: anushka@example.com\nGitHub: github.com/anushka\nLinkedIn: linkedin.com/in/anushka",
};

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: "Welcome to anushka@portfolio — type 'help' to begin." },
  ]);
  const [value, setValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const out = RESPONSES[cmd] ?? `command not found: ${cmd}. try 'help'.`;
    setLines((prev) => [...prev, { kind: "in", text: raw }, { kind: "out", text: out }]);
  }

  return (
    <div className="flex h-full flex-col bg-vscode-bg font-mono-code text-[13px]">
      <div className="flex items-center gap-3 border-b border-border px-3 py-1.5 text-xs text-muted-foreground">
        <span className="text-foreground">TERMINAL</span>
        <span>bash</span>
      </div>
      <div className="flex-1 overflow-auto px-3 py-2">
        {lines.map((l, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {l.kind === "in" ? (
              <span>
                <span style={{ color: "var(--nebula-cyan)" }}>anushka@portfolio</span>
                <span className="text-muted-foreground">:~$ </span>
                {l.text}
              </span>
            ) : (
              <span className="text-muted-foreground">{l.text}</span>
            )}
          </div>
        ))}
        <div className="flex items-center">
          <span style={{ color: "var(--nebula-cyan)" }}>anushka@portfolio</span>
          <span className="text-muted-foreground">:~$&nbsp;</span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                run(value);
                setValue("");
              }
            }}
            className="flex-1 bg-transparent text-foreground outline-none"
            placeholder="type 'help'"
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
          />
        </div>
        <div ref={endRef} />
      </div>
    </div>
  );
}