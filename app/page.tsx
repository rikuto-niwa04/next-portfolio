import Image from "next/image";

// app/page.tsx
// app/page.tsx
export default function HomePage() {
  return (
    <section className="space-y-4">
      <p className="text-sm text-zinc-400">Welcome.</p>
      <h1 className="text-3xl md:text-4xl font-bold">
        Next.js / TypeScript を中心に学習中の Web エンジニアです。
      </h1>
      <p className="text-zinc-300 leading-relaxed">
        将来的には、モダンな技術スタック（Next.js / React / TypeScript /
        Java / C# など）を使ってプロダクト開発を行う企業で働くことを目指しています。
        このサイトでは、学習の過程で作成したプロジェクトやスキルセットをまとめていきます。
      </p>
    </section>
  );
}


