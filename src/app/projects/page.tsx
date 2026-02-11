import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Proyectos de Thiago Sosenke. Juegos, simuladores y experiencias web.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:pt-32">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
        Proyectos
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
        Una coleccion de proyectos web en los que estuve trabajando.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
