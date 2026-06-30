import { createFileRoute } from "@tanstack/react-router";
import Workspace from "@/components/workspace/Workspace";

export const Route = createFileRoute("/workspace")({
  head: () => ({
    meta: [
      { title: "Workspace — Anushka" },
      { name: "description", content: "Explore Anushka's portfolio inside a VS Code-style workspace." },
      { property: "og:title", content: "Workspace — Anushka" },
      { property: "og:description", content: "A VS Code-inspired developer portfolio workspace." },
    ],
  }),
  component: Workspace,
});