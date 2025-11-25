// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-10">
      {/* Hero セクション */}
      <section className="space-y-6">
        <p className="text-sm text-zinc-400">
          フロントエンド志望の Web エンジニアです。
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-zinc-50 leading-tight">
          Next.js / TypeScript を中心に、<br className="hidden md:block" />
          個人開発でスキルアップ中です。
        </h1>

        <p className="text-zinc-300 leading-relaxed max-w-xl">
          モダンな自社開発・SaaS プロダクトで、
          フロントエンドを軸にキャリアを築いていきたいと考えています。
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

      {/* ここに続きのセクション（Works のダイジェストとか）を置いていく */}
    </main>
  );
}
