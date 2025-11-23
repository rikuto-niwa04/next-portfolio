// components/work-card.tsx
import type { Project } from "@/types/project";

interface WorkCardProps {
  project: Project;
}

export function WorkCard({ project }: WorkCardProps) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:border-zinc-400 transition">
      <header className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold">{project.title}</h2>
          <p className="mt-1 text-xs text-zinc-400">{project.role}</p>
        </div>
        <span className="text-xs text-zinc-500">{project.period}</span>
      </header>

      <p className="mt-2 text-sm text-zinc-300">{project.description}</p>

      {/* 技術スタック */}
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-700 px-2 py-0.5 text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 主な機能（features） */}
      {project.features?.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-zinc-300">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}

      {/* リンク類 */}
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-zinc-400">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="underline underline-offset-4 hover:text-zinc-100"
            target={project.IsExternal ? "_blank" : "_self"}
            rel={project.IsExternal ? "noreferrer" : undefined}
          >
            {project.IsExternal ? "Site" : "GitHub"}
          </a>
        )}
      </div>
    </article>
  );
}
