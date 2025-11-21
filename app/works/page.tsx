// app/works/page.tsx
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorksPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Works</h1>
      <p className="mb-8 text-sm text-gray-500">
        個人開発・学習用プロジェクトのまとめです。
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-xl border p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold">
              <Link
                href={`/works/${project.slug}`}
                className="hover:underline"
              >
                {project.title}
              </Link>
            </h2>

            <div className="mb-2 flex flex-wrap gap-2 text-xs">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-2 py-0.5 text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mb-3 text-sm text-gray-600 line-clamp-3">
              {project.description}
            </p>

            <div className="text-right">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-blue-600 hover:underline"
              >
                GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
