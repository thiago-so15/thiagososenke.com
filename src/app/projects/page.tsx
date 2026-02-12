import type { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Proyectos de Thiago Sosenke. Juegos, simuladores y experiencias web.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
