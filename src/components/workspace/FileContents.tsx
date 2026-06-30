import { T, WithLines } from "./Code";
import type { FileId } from "./files";
import type { ReactNode } from "react";

const aboutLines: ReactNode[] = [
  <>{T.k("import")} {T.v("React")} {T.k("from")} {T.s('"react"')};</>,
  <>{T.k("import")} {"{ "}{T.v("Astronaut")}{" }"} {T.k("from")} {T.s('"@cosmos/dev"')};</>,
  <></>,
  <>{T.k("export default function")} {T.f("AboutMe")}() {"{"}</>,
  <>  {T.k("return")} ({"("}</>,
  <>    {T.p("<")}{T.v("Astronaut")} {T.f("name")}={T.s('"Anushka"')}{T.p(">")}</>,
  <>      {T.p("<")}{T.v("h1")}{T.p(">")}Hi, I'm Anushka 🚀{T.p("</")}{T.v("h1")}{T.p(">")}</>,
  <>      {T.p("<")}{T.v("p")}{T.p(">")}</>,
  <>        IT student · MERN developer · DSA enthusiast.</>,
  <>      {T.p("</")}{T.v("p")}{T.p(">")}</>,
  <>      {T.p("<")}{T.v("p")}{T.p(">")}</>,
  <>        I love building thoughtful interfaces and solving hard problems.</>,
  <>      {T.p("</")}{T.v("p")}{T.p(">")}</>,
  <>    {T.p("</")}{T.v("Astronaut")}{T.p(">")}</>,
  <>  );</>,
  <>{"}"}</>,
];

const educationLines: ReactNode[] = [
  <>{T.p("{")}</>,
  <>  {T.s('"degree"')}: {T.s('"B.Tech, Information Technology"')},</>,
  <>  {T.s('"institution"')}: {T.s('"Your University"')},</>,
  <>  {T.s('"years"')}: {T.s('"2022 – 2026"')},</>,
  <>  {T.s('"cgpa"')}: {T.n("8.7")},</>,
  <>  {T.s('"school"')}: {T.p("{")}</>,
  <>    {T.s('"name"')}: {T.s('"Higher Secondary"')},</>,
  <>    {T.s('"stream"')}: {T.s('"Science (PCM)"')},</>,
  <>    {T.s('"percentage"')}: {T.n("92")}</>,
  <>  {T.p("}")}</>,
  <>{T.p("}")}</>,
];

const skillsLines: ReactNode[] = [
  <>{T.c("// Technical skill stack")}</>,
  <>{T.k("export const")} {T.v("languages")} = [{T.s('"JavaScript"')}, {T.s('"TypeScript"')}, {T.s('"Python"')}, {T.s('"C++"')}];</>,
  <>{T.k("export const")} {T.v("frontend")}  = [{T.s('"React"')}, {T.s('"Next.js"')}, {T.s('"Tailwind"')}, {T.s('"Framer Motion"')}];</>,
  <>{T.k("export const")} {T.v("backend")}   = [{T.s('"Node.js"')}, {T.s('"Express"')}, {T.s('"MongoDB"')}, {T.s('"REST APIs"')}];</>,
  <>{T.k("export const")} {T.v("tools")}     = [{T.s('"Git"')}, {T.s('"GitHub"')}, {T.s('"Docker"')}, {T.s('"Postman"')}, {T.s('"VS Code"')}];</>,
  <></>,
  <>{T.k("export const")} {T.v("interests")} = {T.p("{")}</>,
  <>  dsa: {T.s('"comfortable with arrays, trees, graphs & DP"')},</>,
  <>  systems: {T.s('"learning distributed systems"')},</>,
  <>{T.p("}")};</>,
];

const projectsLines: ReactNode[] = [
  <>{T.k("const")} {T.v("projects")} = [</>,
  <>  {T.p("{")} name: {T.s('"AstroChat"')}, stack: {T.s('"MERN + Socket.io"')}, link: {T.s('"github.com/anushka/astrochat"')} {T.p("}")},</>,
  <>  {T.p("{")} name: {T.s('"DSA Visualizer"')}, stack: {T.s('"React + Canvas"')}, link: {T.s('"github.com/anushka/dsa-viz"')} {T.p("}")},</>,
  <>  {T.p("{")} name: {T.s('"Nebula Notes"')}, stack: {T.s('"Next.js + Prisma"')}, link: {T.s('"github.com/anushka/nebula-notes"')} {T.p("}")},</>,
  <>];</>,
  <></>,
  <>{T.k("export default function")} {T.f("Projects")}() {"{"}</>,
  <>  {T.k("return")} {T.v("projects")}.{T.f("map")}((p) ={">"} (</>,
  <>    {T.p("<")}{T.v("ProjectCard")} {T.f("key")}={"{"}p.name{"}"} {"{"}...p{"}"} {T.p("/>")}</>,
  <>  ));</>,
  <>{"}"}</>,
];

const coursesLines: ReactNode[] = [
  <># Completed Courses</>,
  <></>,
  <>- **Data Structures & Algorithms** — Coding Ninjas</>,
  <>- **Full-Stack Web Development (MERN)** — Udemy</>,
  <>- **System Design Basics** — NeetCode</>,
  <>- **DBMS & SQL** — University coursework</>,
  <>- **Operating Systems** — University coursework</>,
  <>- **Computer Networks** — University coursework</>,
];

const achievementLines: ReactNode[] = [
  <>$ cat achievements.txt</>,
  <>──────────────────────────────────────────</>,
  <>★ Solved 500+ DSA problems across LeetCode / GFG</>,
  <>★ Finalist — Smart India Hackathon 2024</>,
  <>★ GitHub Arctic Code Vault contributor</>,
  <>★ Top 5% in university coding contest</>,
  <>★ Open-source contributor (3 merged PRs)</>,
  <>──────────────────────────────────────────</>,
  <>$ _</>,
];

const contactLines: ReactNode[] = [
  <>{T.k("export const")} {T.v("contact")}: {T.v("Contact")} = {T.p("{")}</>,
  <>  name: {T.s('"Anushka"')},</>,
  <>  email: {T.s('"anushka@example.com"')},</>,
  <>  location: {T.s('"India 🌍"')},</>,
  <>  socials: {T.p("{")}</>,
  <>    github: {T.s('"https://github.com/anushka"')},</>,
  <>    linkedin: {T.s('"https://linkedin.com/in/anushka"')},</>,
  <>  {T.p("}")},</>,
  <>  availableFor: [{T.s('"internships"')}, {T.s('"collabs"')}, {T.s('"freelance"')}],</>,
  <>{T.p("}")};</>,
];

function ResumePreview() {
  return (
    <div className="mx-auto max-w-2xl rounded-md border border-border bg-white p-8 text-slate-900 shadow-2xl">
      <h1 className="text-3xl font-bold tracking-tight">Anushka</h1>
      <p className="text-sm text-slate-600">Information Technology · MERN Developer · DSA Enthusiast</p>
      <p className="mt-1 text-xs text-slate-500">anushka@example.com · github.com/anushka · linkedin.com/in/anushka</p>
      <hr className="my-4 border-slate-200" />
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700">Education</h2>
        <p className="mt-1 text-sm">B.Tech, Information Technology — 2022–2026 (CGPA 8.7)</p>
      </section>
      <section className="mt-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700">Skills</h2>
        <p className="mt-1 text-sm">JavaScript, TypeScript, React, Next.js, Node, Express, MongoDB, C++, Python</p>
      </section>
      <section className="mt-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700">Projects</h2>
        <ul className="mt-1 list-disc pl-5 text-sm">
          <li>AstroChat — real-time chat (MERN + Socket.io)</li>
          <li>DSA Visualizer — algorithm animations (React + Canvas)</li>
          <li>Nebula Notes — note-taking (Next.js + Prisma)</li>
        </ul>
      </section>
      <section className="mt-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700">Achievements</h2>
        <ul className="mt-1 list-disc pl-5 text-sm">
          <li>500+ DSA problems solved</li>
          <li>SIH 2024 finalist</li>
        </ul>
      </section>
      <p className="mt-6 text-center text-xs text-slate-400">— resume preview —</p>
    </div>
  );
}

export function FileContent({ id }: { id: FileId }) {
  switch (id) {
    case "about_me.tsx":
      return <WithLines lines={aboutLines} />;
    case "education.json":
      return <WithLines lines={educationLines} />;
    case "skills.js":
      return <WithLines lines={skillsLines} />;
    case "projects.jsx":
      return <WithLines lines={projectsLines} />;
    case "courses.md":
      return <WithLines lines={coursesLines} />;
    case "achievements.txt":
      return (
        <pre className="font-mono-code text-[13.5px] leading-7 text-foreground">
          {achievementLines.map((l, i) => (
            <div key={i} style={{ color: "var(--syntax-fn)" }}>{l}</div>
          ))}
        </pre>
      );
    case "resume.pdf":
      return <ResumePreview />;
    case "contact.ts":
      return <WithLines lines={contactLines} />;
  }
}