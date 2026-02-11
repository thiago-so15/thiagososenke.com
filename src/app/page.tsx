import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 md:pt-32">
        <Image
          src="/logo.png"
          alt="Thiago Sosenke"
          width={280}
          height={280}
          className="h-auto w-48 sm:w-64"
          priority
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          Soy un emprendedor digital enfocado en crear y lanzar productos
          propios desde cero. Me apasiona convertir ideas en experiencias
          reales, combinando desarrollo de software, diseño y experimentación
          constante. Disfruto construir proyectos de manera independiente,
          probar conceptos nuevos, iterar rápido y aprender de cada error y
          acierto.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          Trabajo con una mentalidad de largo plazo, priorizando la simplicidad,
          la calidad y la escalabilidad. Mis proyectos incluyen juegos,
          simuladores y aplicaciones web, todos desarrollados con un enfoque
          práctico y creativo. En este sitio muestro lo que estoy construyendo,
          los proyectos que ya están en marcha y las ideas que sigo explorando
          como emprendedor.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Mis primeros proyectos
          </h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Ver todos &rarr;
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
