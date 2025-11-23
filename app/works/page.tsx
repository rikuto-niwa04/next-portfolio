// app/works/page.tsx
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorksPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Works</h1>
      <p className="mb-8 text-sm text-zinc-400">
        個人開発・学習用プロジェクトのまとめです。Next.js / TypeScript を中心に、
        今後 Java / C# のプロジェクトも追加していきます。
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            {/* タイトル + 期間 */}
            <div className="mb-2 flex items-start justify-between gap-2">
              <h2 className="text-lg font-semibold">
                <Link
                  href={`/works/${project.slug}`}
                  className="hover:underline"
                >
                  {project.title}
                </Link>
              </h2>
              <span className="text-xs text-zinc-500">{project.period}</span>
            </div>

            {/* 役割 */}
            <p className="mb-2 text-xs text-zinc-400">{project.role}</p>

            {/* 技術スタック */}
            <div className="mb-2 flex flex-wrap gap-2 text-xs">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 px-2 py-0.5 text-[11px] text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 説明 */}
            <p className="mb-3 text-sm text-zinc-300 line-clamp-3">
              {project.description}
            </p>

            {/* GitHub / 外部リンク */}
            <div className="text-right text-xs">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target={project.IsExternal ? "_blank" : "_self"}
                  rel={project.IsExternal ? "noreferrer" : undefined}
                  className="font-medium text-blue-400 hover:underline"
                >
                  {project.IsExternal ? "サイトを開く ↗" : "GitHub ↗"}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
