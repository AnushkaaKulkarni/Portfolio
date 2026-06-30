import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Files,
  Sparkles,
  FolderGit2,
  GraduationCap,
  Trophy,
  FileText,
  Mail,
  X,
  ChevronRight,
  ChevronDown,
  TerminalSquare,
  Menu,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { FILES, type FileId, type FileMeta } from "./files";
import { FileContent } from "./FileContents";
import Terminal from "./Terminal";

const ACTIVITY: { id: string; label: string; icon: typeof Files; target?: FileId }[] = [
  { id: "explorer", label: "Explorer", icon: Files },
  { id: "skills", label: "Skills", icon: Sparkles, target: "skills.js" },
  { id: "projects", label: "Projects", icon: FolderGit2, target: "projects.jsx" },
  { id: "courses", label: "Courses", icon: GraduationCap, target: "courses.md" },
  { id: "achievements", label: "Achievements", icon: Trophy, target: "achievements.txt" },
  { id: "resume", label: "Resume", icon: FileText, target: "resume.pdf" },
  { id: "contact", label: "Contact", icon: Mail, target: "contact.ts" },
];

function FileRow({
  file,
  active,
  onClick,
}: {
  file: FileMeta;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2 px-2 py-1 text-left text-[13px] transition-colors hover:bg-vscode-active-tab ${
        active ? "bg-vscode-active-tab text-foreground" : "text-muted-foreground"
      }`}
    >
      <span
        className="grid h-4 w-7 shrink-0 place-items-center rounded-sm text-[9px] font-bold"
        style={{ background: "color-mix(in oklab, var(--vscode-bg) 70%, transparent)", color: file.color }}
      >
        {file.icon}
      </span>
      <span className="truncate">{file.label}</span>
    </button>
  );
}

export default function Workspace() {
  const [openTabs, setOpenTabs] = useState<FileId[]>(["about_me.tsx"]);
  const [active, setActive] = useState<FileId>("about_me.tsx");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [explorerExpanded, setExplorerExpanded] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  function openFile(id: FileId) {
    setOpenTabs((tabs) => (tabs.includes(id) ? tabs : [...tabs, id]));
    setActive(id);
    setMobileNav(false);
  }

  function closeTab(id: FileId, e: React.MouseEvent) {
    e.stopPropagation();
    setOpenTabs((tabs) => {
      const next = tabs.filter((t) => t !== id);
      if (id === active && next.length) setActive(next[next.length - 1]);
      return next;
    });
  }

  const activeFile = FILES.find((f) => f.id === active);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-screen w-full flex-col bg-vscode-bg text-foreground"
    >
      {/* Title bar */}
      <div className="flex h-9 shrink-0 items-center justify-between border-b border-border bg-vscode-activitybar px-3 text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileNav((v) => !v)}
            className="rounded p-1 hover:bg-vscode-active-tab md:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-3 text-muted-foreground">anushka — Visual Portfolio Code</span>
        </div>
        <Link
          to="/"
          className="font-mono-code text-[11px] text-muted-foreground hover:text-foreground"
        >
          ← back to launch
        </Link>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity bar */}
        <div className="flex w-12 shrink-0 flex-col items-center gap-1 border-r border-border bg-vscode-activitybar py-2">
          {ACTIVITY.map((a) => {
            const isActive =
              a.id === "explorer" ? sidebarOpen : a.target ? active === a.target : false;
            return (
              <button
                key={a.id}
                onClick={() => {
                  if (a.id === "explorer") {
                    setSidebarOpen((v) => !v);
                  } else if (a.target) {
                    setSidebarOpen(true);
                    openFile(a.target);
                  }
                }}
                title={a.label}
                aria-label={a.label}
                className={`relative grid h-10 w-10 place-items-center rounded text-muted-foreground transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : ""
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1 h-8 w-0.5 rounded-r bg-primary" />
                )}
                <a.icon className="h-5 w-5" />
              </button>
            );
          })}
        </div>

        {/* Sidebar — explorer */}
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`hidden shrink-0 overflow-hidden border-r border-border bg-vscode-sidebar md:block`}
            >
              <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Explorer
              </div>
              <div className="px-1 pb-2">
                <button
                  onClick={() => setExplorerExpanded((v) => !v)}
                  className="flex w-full items-center gap-1 rounded px-1 py-0.5 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground hover:bg-vscode-active-tab"
                >
                  {explorerExpanded ? (
                    <ChevronDown className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5" />
                  )}
                  anushka-portfolio
                </button>
                {explorerExpanded && (
                  <div className="mt-1 pl-3">
                    {FILES.map((f) => (
                      <FileRow
                        key={f.id}
                        file={f}
                        active={active === f.id}
                        onClick={() => openFile(f.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Mobile sidebar overlay */}
        <AnimatePresence>
          {mobileNav && (
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-y-9 left-12 z-30 w-60 border-r border-border bg-vscode-sidebar md:hidden"
            >
              <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Explorer
              </div>
              <div className="px-1 pb-2">
                {FILES.map((f) => (
                  <FileRow
                    key={f.id}
                    file={f}
                    active={active === f.id}
                    onClick={() => openFile(f.id)}
                  />
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Editor area */}
        <main className="flex min-w-0 flex-1 flex-col">
          {/* Tabs */}
          <div className="flex h-9 shrink-0 items-end overflow-x-auto border-b border-border bg-vscode-tabbar">
            {openTabs.map((id) => {
              const f = FILES.find((x) => x.id === id)!;
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`group flex h-9 shrink-0 items-center gap-2 border-r border-border px-3 text-[13px] transition-colors ${
                    isActive
                      ? "bg-vscode-active-tab text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: f.color }}
                  >
                    {f.icon}
                  </span>
                  <span>{f.label}</span>
                  <span
                    onClick={(e) => closeTab(id, e)}
                    className="rounded p-0.5 opacity-0 transition-opacity hover:bg-border group-hover:opacity-100"
                    role="button"
                    aria-label={`Close ${f.label}`}
                  >
                    <X className="h-3 w-3" />
                  </span>
                  {isActive && (
                    <span className="absolute left-0 right-0 top-0 mx-0 h-0.5 bg-primary" style={{ position: "relative" }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Breadcrumb */}
          {activeFile && (
            <div className="flex h-7 shrink-0 items-center gap-1 border-b border-border px-3 text-[12px] text-muted-foreground">
              <span>anushka-portfolio</span>
              <ChevronRight className="h-3 w-3" />
              <span style={{ color: activeFile.color }}>{activeFile.label}</span>
            </div>
          )}

          {/* Editor + terminal */}
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-auto p-4">
              {activeFile ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFile.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FileContent id={activeFile.id} />
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="grid h-full place-items-center text-muted-foreground">
                  <p className="font-mono-code text-sm">
                    {"// Open a file from the explorer to begin"}
                  </p>
                </div>
              )}
            </div>
            <AnimatePresence>
              {showTerminal && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 220 }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 overflow-hidden border-t border-border"
                >
                  <Terminal />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Status bar */}
      <div
        className="flex h-6 shrink-0 items-center justify-between px-3 text-[11px] text-primary-foreground"
        style={{ background: "var(--primary)" }}
      >
        <div className="flex items-center gap-3">
          <span>main</span>
          <span>● UTF-8</span>
          <span>{activeFile ? activeFile.label : "no file"}</span>
        </div>
        <button
          onClick={() => setShowTerminal((v) => !v)}
          className="flex items-center gap-1 hover:underline"
        >
          <TerminalSquare className="h-3 w-3" />
          {showTerminal ? "Hide Terminal" : "Show Terminal"}
        </button>
      </div>
    </motion.div>
  );
}