import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  description?: string;
}

export default function ProjectCard({ project, description }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-[#7c3aed] hover:shadow-[0_0_12px_#7c3aed40] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-[#39ff14] dark:hover:shadow-[0_0_15px_#39ff14]"
    >
      <div className="flex items-start gap-4">
        {project.logo && (
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            width={40}
            height={40}
            className="mt-0.5 shrink-0 rounded-lg"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {project.name}
            </h3>
            <span className="mt-1 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 dark:text-neutral-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {description || project.description}
          </p>
          <p className="mt-3 text-xs text-neutral-400 dark:text-neutral-500">
            {project.url.replace("https://", "")}
          </p>
        </div>
      </div>
    </a>
  );
}
