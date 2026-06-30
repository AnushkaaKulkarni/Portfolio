export type FileId =
  | "about_me.tsx"
  | "education.json"
  | "skills.js"
  | "projects.jsx"
  | "courses.md"
  | "achievements.txt"
  | "resume.pdf"
  | "contact.ts";

export interface FileMeta {
  id: FileId;
  label: string;
  icon: string;
  color: string;
}

export const FILES: FileMeta[] = [
  { id: "about_me.tsx", label: "about_me.tsx", icon: "TSX", color: "var(--syntax-var)" },
  { id: "education.json", label: "education.json", icon: "{ }", color: "var(--syntax-string)" },
  { id: "skills.js", label: "skills.js", icon: "JS", color: "var(--syntax-fn)" },
  { id: "projects.jsx", label: "projects.jsx", icon: "JSX", color: "var(--syntax-var)" },
  { id: "courses.md", label: "courses.md", icon: "MD", color: "var(--nebula-cyan)" },
  { id: "achievements.txt", label: "achievements.txt", icon: "TXT", color: "var(--muted-foreground)" },
  { id: "resume.pdf", label: "resume.pdf", icon: "PDF", color: "var(--destructive)" },
  { id: "contact.ts", label: "contact.ts", icon: "TS", color: "var(--syntax-var)" },
];