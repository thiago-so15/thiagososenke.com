"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useApp } from "@/context/AppContext";
import translations from "@/data/translations";

export default function ProjectsContent() {
  const { lang } = useApp();
  const t = translations[lang].projects;

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:pt-32">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
        {t.subtitle}
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            description={t.descriptions[project.slug as keyof typeof t.descriptions]}
          />
        ))}
      </div>
    </section>
  );
}
