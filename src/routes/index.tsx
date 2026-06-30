import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anushka — Astronaut Developer" },
      { name: "description", content: "Hi, I'm Anushka — IT student, MERN stack developer, and DSA enthusiast. Step into my space-themed developer workspace." },
      { property: "og:title", content: "Anushka — Astronaut Developer" },
      { property: "og:description", content: "A futuristic, VS Code-inspired developer portfolio." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Landing />;
}
