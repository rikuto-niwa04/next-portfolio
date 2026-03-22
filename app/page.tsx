// app/page.tsx
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card"; 

export default function HomePage() {
   // 先頭から3件をピックアップ
  const pickupProjects = projects.slice(0, 3);
  return (
    <main className="space-y-10">
      {/* Hero セクション */}
      <section className="space-y-6">
        <p className="text-sm text-zinc-400">
          バックエンド志望の Web エンジニアを目指しています。
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-zinc-50 leading-tight">
          Next.js / TypeScript / Java / C# を中心に、<br className="hidden md:block" />
          個人開発でスキルアップ中です。
        </h1>

        <p className="text-zinc-300 leading-relaxed max-w-xl">
          バックエンドを軸にキャリアを築いていきたいと考えています。
          個人開発のアウトプットや、これまでの経歴をまとめました。
        </p>

        {/* CTA ボタン */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/works"
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-zinc-50 text-zinc-900 hover:bg-zinc-200 transition"
          >
            💼 Works を見る
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium border border-zinc-600 text-zinc-100 hover:bg-zinc-900/40 transition"
          >
            👤 About / 経歴を見る
          </Link>
        </div>
      </section>

       {/* ===== Pickup Works セクション ===== */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="text-xl font-semibold text-zinc-50">
            Pickup Works
          </h2>
          <Link
            href="/works"
            className="text-xs text-zinc-400 hover:text-zinc-200 underline underline-offset-4"
          >
            すべての Works を見る →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pickupProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      
    </main>
  );
}
