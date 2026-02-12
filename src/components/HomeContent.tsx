"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useApp } from "@/context/AppContext";
import translations from "@/data/translations";

export default function HomeContent() {
  const { lang } = useApp();
  const t = translations[lang].home;
  const projectDescs = translations[lang].projects.descriptions;

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-8 md:pt-12">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Thiago Sosenke"
            width={280}
            height={280}
            className="h-auto w-48 drop-shadow-[0_0_10px_#7c3aed] dark:drop-shadow-[0_0_15px_#b026ff] sm:w-64"
            priority
          />
        </div>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-[#00e5ff]/80">
          {t.description1}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-[#00e5ff]/80">
          {t.description2}
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {t.featuredTitle}
          </h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            {t.viewAll} &rarr;
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              description={projectDescs[project.slug as keyof typeof projectDescs]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
