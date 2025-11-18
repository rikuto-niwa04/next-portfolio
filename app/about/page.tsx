// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold">About</h1>
      <p className="text-zinc-300 leading-relaxed">
        ここに、これまでの経歴・学習してきたこと・今後やりたいことを整理して書いていきます。
        まずは箇条書きでも良いので、Java / C# の経験や、Next.js /
        TypeScript を今後伸ばしたい理由などをまとめていきましょう。
      </p>
    </section>
  );
}
