// app/works/page.tsx
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function WorksPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Works</h1>
      <p className="mb-8 text-sm text-zinc-400">
        個人開発・学習用プロジェクトのまとめです。Next.js / TypeScript に加えて、
        Java / Spring Boot・C# などを用いた開発にも取り組んでいます。
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
