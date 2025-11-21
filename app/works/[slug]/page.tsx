// app/works/[slug]/page.tsx

import { projects } from "@/lib/projects";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>; 
};

export default async function WorkDetailPage({ params }: Props) {
    const { slug } = await params;// slug を取得
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-10">Project not found.</div>;
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>

      {/* 開発期間・担当範囲 */}
      <div className="mb-6 text-sm text-gray-600">
        <p>開発期間：{project.period}</p>
        <p className="mt-1">担当範囲：{project.role}</p>
      </div>

      {/* 技術スタック */}
      <div className="mb-6 flex flex-wrap gap-2 text-xs">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border px-2 py-0.5 text-[11px]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 説明文 */}
      <p className="mb-6 text-sm text-gray-800">{project.description}</p>

      {/* 機能一覧 */}
      <h2 className="mt-10 mb-2 text-xl font-semibold">実装した機能</h2>
        <ul className="mb-6 list-inside list-disc text-sm text-gray-700">
        {(project.features ?? []).map((feature) => (
            <li key={feature}>{feature}</li>
        ))}
        </ul>

      {/* 工夫ポイント / 苦労した点 */}
      <h2 className="mt-10 mb-2 text-xl font-semibold">工夫したポイント</h2>
      <p className="mb-6 text-sm text-gray-800">{project.challenges}</p>

  {/* GitHub */}
  <div className="mt-10">
    {project.IsExternal ? (
      <a
        href={project.githubUrl}
        className="text-sm font-medium text-blue-600 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        ブログを見る ↗
      </a>
    ) : (
      <a
        href={project.githubUrl}
        className="text-sm font-medium text-blue-600 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        GitHub でコードを見る ↗
      </a>
    )}
  </div>
    </main>
  );
}
