// app/about/page.tsx
const strengths = [
  {
    title: "学習の継続力",
    description:
      "Next.js / TypeScript / Java / C# など複数技術を継続的に学習し、個人開発やポートフォリオとしてアウトプットしています。",
  },
  {
    title: "コミュニケーション力",
    description:
      "営業・ライティング・バックオフィスなど異なる立場での実務経験があり、相手の前提を意識した説明や認識合わせが得意です。",
  },
  {
    title: "改善志向",
    description:
      "動くものを作るだけでなく、なぜそう実装するのか、どうすればより良くなるのかを考えながら継続的に改善しています。",
  },
];

const careers = [
  {
    period: "2025.8 - 2025.12",
    title: "株式会社Timers（IS） / 株式会社グッド（FS）",
    description:
      "業務委託として営業職に従事。クライアントとのコミュニケーションや提案活動を担当し、安定したアポ獲得・入金実績につなげました。",
  },
  {
    period: "2025.8 - 2025.12",
    title: "株式会社ブミックデータ / Webエンジニア",
    description:
      "C# / ASP.NET を用いた「作家締切管理システム」のチーム開発に参加。作家登録 CRUD、ログイン機能、一覧画面、単体テストの実装を担当し、MVC の責務分離やテスト観点を意識した開発を経験しました。",
  },
  {
    period: "2025.7 - 2025.8",
    title: "エンパワー株式会社 / 補助金システム開発支援",
    description:
      "補助金システムのマニュアル作成業務を担当。画面仕様が固まり切っていない段階からたたき台を作成し、関係者との認識合わせと改善を重ねながら納期内での納品に貢献しました。",
  },
  {
    period: "2021.12 - 2024.12",
    title: "Webライター（個人事業）",
    description:
      "SEO記事制作代行・インサイドセールスを中心に活動。不動産 / 金融 / ダイエット / 転職 / 美容などの領域で、キーワード選定から構成、執筆、リライトまで一気通貫で担当しました。",
  },
  {
    period: "2023.10 - 2024.3",
    title: "株式会社ハウスメンテナンス / 一般事務・SEO",
    description:
      "不動産・建設会社のバックオフィスとして契約書作成や図面作成を担当。あわせて自社サイトの SEO 改善にも関わり、上位表示記事数や検索順位の改善に貢献しました。",
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-12">
      {/* Hero */}
      <section className="space-y-5">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            About
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            ビジネス理解と技術の両方を活かし、
            <br className="hidden md:block" />
            Web開発で価値を出せるエンジニアを目指しています。
          </h1>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 md:p-6">
          <p className="leading-relaxed text-zinc-300">
            愛知県在住の丹羽陸斗です。営業・Webライティング・バックオフィスなど
            ビジネスサイドの実務経験を経て、現在は営業職として働きながら
            Webアプリケーション開発に継続的に取り組んでいます。
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            主に <strong>Next.js / TypeScript / React</strong> を用いた
            フロントエンド開発と、
            <strong> Java / Spring Boot </strong>
            や
            <strong> C# / ASP.NET </strong>
            を用いたバックエンド開発に取り組んでいます。
            技術だけでなく、ユーザー理解やコミュニケーションも含めて
            プロダクトに貢献できるエンジニアを目指しています。
          </p>
        </div>
      </section>

      {/* Profile */}
      <Section title="プロフィール">
        <div className="space-y-4">
          <p className="leading-relaxed text-zinc-300">
            これまで、Webライティング・営業・事務・開発支援など、
            ビジネスサイドを中心とした業務に携わってきました。
            その中で、要件を整理して相手に伝えることや、
            課題を見つけて改善することの面白さを実感し、
            現在はエンジニアとしてのキャリア形成に注力しています。
          </p>
          <p className="leading-relaxed text-zinc-300">
            個人開発ではフロントエンドだけでなく、
            API・CRUD・認証・データベース設計など、
            バックエンドも含めたアプリケーション開発を学習しています。
            将来的には、フロントエンドとバックエンドの両面から
            プロダクト改善に関われるエンジニアになりたいと考えています。
          </p>
        </div>
      </Section>

      {/* Career Goal */}
      <Section title="目指しているキャリア">
        <div className="space-y-4">
          <p className="leading-relaxed text-zinc-300">
            今後は、Webアプリケーション開発に継続的に関われる環境で、
            フロントエンドとバックエンドの両面から
            プロダクト改善に貢献したいと考えています。
          </p>
          <p className="leading-relaxed text-zinc-300">
            フロントエンドでは <strong>Next.js / TypeScript</strong>、
            バックエンドでは <strong>Java / Spring Boot</strong> や
            <strong> C# / ASP.NET</strong> を軸に、
            実装だけでなく、要件理解・改善提案・チーム開発にも
            価値を出せるエンジニアを目指しています。
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 p-5">
            <h3 className="mb-3 text-base font-semibold">Core</h3>
            <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
              <li>・Next.js / React / TypeScript</li>
              <li>・Java / Spring Boot</li>
              <li>・C# / ASP.NET</li>
              <li>・HTML / CSS / JavaScript</li>
              <li>・CRUD / 認証 / API 実装の基礎</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-5">
            <h3 className="mb-3 text-base font-semibold">Tools & Others</h3>
            <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
              <li>・Git / GitHub</li>
              <li>・VS Code / Visual Studio</li>
              <li>・SQL Server / SQLite</li>
              <li>・Redmine / 各種チャットツール</li>
              <li>・SEO ライティング / Webマーケティング</li>
              <li>・インサイドセールス / 新規開拓 / 架電</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Strengths */}
      <Section title="強み">
        <div className="grid gap-4 md:grid-cols-3">
          {strengths.map((strength) => (
            <article
              key={strength.title}
              className="rounded-2xl border border-zinc-800 p-5"
            >
              <h3 className="mb-2 text-base font-semibold">{strength.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-300">
                {strength.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Career */}
      <Section title="Career">
        <ol className="space-y-4">
          {careers.map((career) => (
            <li
              key={`${career.period}-${career.title}`}
              className="border-l border-zinc-700 pl-4"
            >
              <div className="text-xs text-zinc-400">{career.period}</div>
              <div className="mt-1 font-semibold">{career.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {career.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Personality */}
      <Section title="人柄・趣味">
        <div className="space-y-4">
          <p className="leading-relaxed text-zinc-300">
            学習やトレーニングなど、「毎日少しずつ積み上げること」を大切にしています。
            筋トレや個人開発を通じて、身体面と技術面の両方から
            自分を継続的にアップデートしていくことが好きです。
          </p>
          <p className="leading-relaxed text-zinc-300">
            新しい技術や考え方に触れたときは、まず自分で手を動かして試し、
            うまくいかなかった点も含めて振り返り、次の改善につなげることを意識しています。
          </p>
        </div>
      </Section>

      {/* Detailed Resume */}
      <Section title="Detailed Resume">
        <p className="text-sm text-zinc-300">
          各社での担当業務や実績を、ポートフォリオ向けに要約して掲載しています。
        </p>

        <details className="rounded-2xl border border-zinc-800 p-5 text-sm text-zinc-300">
          <summary className="cursor-pointer font-semibold">
            職務経歴書のサマリーを見る
          </summary>

          <div className="mt-5 space-y-6 leading-relaxed">
            <article className="space-y-3">
              <div>
                <p className="font-semibold text-white">
                  株式会社ブミックデータ / Webエンジニア
                </p>
                <p className="text-xs text-zinc-400">2025.8 - 2025.12</p>
              </div>

              <p>
                C# / ASP.NET を用いた「作家締切管理システム」の開発に参加し、
                チーム開発の中で画面実装・認証・CRUD・テストまで幅広く担当しました。
              </p>

              <div>
                <p className="font-medium text-white">担当業務</p>
                <ul className="mt-1 list-disc list-inside space-y-1">
                  <li>作家登録機能の CRUD 実装</li>
                  <li>ログイン機能の実装</li>
                  <li>一覧画面の表示・UI調整</li>
                  <li>単体テストの作成</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">学び・工夫</p>
                <p>
                  MVC の責務分離を意識しながら実装を進め、
                  単に動くものを作るだけでなく、
                  保守性やテスト観点を持って開発する重要性を学びました。
                </p>
              </div>
            </article>

            <article className="space-y-3 border-t border-zinc-800 pt-6">
              <div>
                <p className="font-semibold text-white">
                  エンパワー株式会社 / 補助金システム開発支援
                </p>
                <p className="text-xs text-zinc-400">2025.7 - 2025.8</p>
              </div>

              <p>
                補助金システムに関するマニュアル作成業務を担当し、
                画面仕様が固まり切っていない段階から関係者と認識を合わせつつ、
                たたき台の作成と改善を行いました。
              </p>

              <div>
                <p className="font-medium text-white">担当業務</p>
                <ul className="mt-1 list-disc list-inside space-y-1">
                  <li>システム操作マニュアルの作成</li>
                  <li>画面仕様の確認と反映</li>
                  <li>関係者との認識合わせ・内容調整</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">実績・工夫</p>
                <p>
                  完成前の画面情報をもとに先回りしてドラフトを作成し、
                  手戻りを抑えながら納期内での納品に貢献しました。
                </p>
              </div>
            </article>

            <article className="space-y-3 border-t border-zinc-800 pt-6">
              <div>
                <p className="font-semibold text-white">
                  Webライター（個人事業）
                </p>
                <p className="text-xs text-zinc-400">2021.12 - 2024.12</p>
              </div>

              <p>
                SEO記事制作を中心に、不動産・金融・転職・美容など幅広い領域で
                コンテンツ制作を担当しました。企画から執筆、改善まで
                一気通貫で対応しています。
              </p>

              <div>
                <p className="font-medium text-white">担当業務</p>
                <ul className="mt-1 list-disc list-inside space-y-1">
                  <li>キーワード選定</li>
                  <li>記事構成案の作成</li>
                  <li>SEO記事執筆・リライト</li>
                  <li>クライアントとの要件すり合わせ</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">実績・工夫</p>
                <p>
                  検索意図を踏まえた構成設計を意識し、
                  読者にとって分かりやすい記事制作と継続的な改善提案を行ってきました。
                </p>
              </div>
            </article>
          </div>
        </details>
      </Section>
    </section>
  );
}