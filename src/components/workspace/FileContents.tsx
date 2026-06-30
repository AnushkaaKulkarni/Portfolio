import type { FileId } from "./files";
import { AboutMeView } from "./views/AboutMeView";
import { EducationView } from "./views/EducationView";
import { SkillsView } from "./views/SkillsView";
import { ProjectsView } from "./views/ProjectsView";
import { CoursesView } from "./views/CoursesView";
import { AchievementsView } from "./views/AchievementsView";
import { ResumeView } from "./views/ResumeView";
import { ContactView } from "./views/ContactView";

export function FileContent({ id }: { id: FileId }) {
  switch (id) {
    case "about_me.tsx":
      return <AboutMeView />;
    case "education.json":
      return <EducationView />;
    case "skills.js":
      return <SkillsView />;
    case "projects.jsx":
      return <ProjectsView />;
    case "courses.md":
      return <CoursesView />;
    case "achievements.txt":
      return <AchievementsView />;
    case "resume.pdf":
      return <ResumeView />;
    case "contact.ts":
      return <ContactView />;
  }
}