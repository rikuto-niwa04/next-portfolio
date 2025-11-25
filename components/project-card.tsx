// components/project-card.tsx
import Link from "next/link";
import type { Project } from "@/types/project"; // ★自分の型のパスに合わせてね

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition">
      {/* タイトル + 期間・ロール */}
      <header className="space-y-1 mb-3">
        <h3 className="text-lg font-semibold text-zinc-50 group-hover:underline">
          {/* slug や path のプロパティ名は自分の型に合わせて変更 */}
          <Link href={`/works/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* 期間 & ロールは、あれば表示する感じで */}
        <p className="text-xs text-zinc-400">
          {project.period && <span>{project.period}</span>}
          {project.role && project.period && <span> / </span>}
          {project.role && <span>{project.role}</span>}
        </p>
      </header>

      {/* 概要 */}
      <p className="text-sm text-zinc-300 line-clamp-3 mb-3">
        {project.description}
      </p>

      {/* 技術スタック（あれば） */}
      {project.techStack && project.techStack.length > 0 && (
        <p className="text-xs text-zinc-400">
          使用技術：{project.techStack.join(" / ")}
        </p>
      )}
    </article>
  );
}
