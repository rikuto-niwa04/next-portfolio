// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="max-w-4xl space-y-10">
      <h1 className="text-2xl md:text-3xl font-bold">About</h1>

      {/* プロフィール要約 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">プロフィール</h2>
        <p className="text-zinc-300 leading-relaxed">
          愛知県在住の Web エンジニア / 元 SEO ライターです。
          Web ライティング・インサイドセールス・建設業バックオフィスなど、
          ビジネスサイドの職種を経験したのち、現在はエンジニアとして
          Web アプリケーション開発に取り組んでいます。
        </p>
        <p className="text-zinc-300 leading-relaxed">
          現在は <strong>Next.js / TypeScript / React</strong> を中心にモダンなフロントエンドを学習しつつ、
          <strong>Java / C#</strong> を使ったバックエンド開発（API・CRUD・認証など）の基礎も継続的に鍛えています。
          「ビジネスと技術の両方がわかるエンジニア」として、プロダクト開発に貢献できることを目指しています。
        </p>
      </section>

      {/* 目指しているキャリア */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">目指しているキャリア</h2>
        <p className="text-zinc-300 leading-relaxed">
          将来的には、<strong>外資 / モダンな自社開発 / SaaS 企業</strong> のような、
          技術選定と開発プロセスにこだわりのある環境で働きたいと考えています。
        </p>
        <p className="text-zinc-300 leading-relaxed">
          フロントエンドでは Next.js / TypeScript を軸に、
          バックエンドでは Java / Spring Boot や C# / ASP.NET で API を実装できる
          <strong>フルスタック寄りのエンジニア</strong> を志望しています。
          また、ビジネスサイドの経験を活かして、単なる実装だけでなく、
          ユーザーやクライアント目線での提案も行っていきたいです。
        </p>
      </section>

      {/* 現在のスキル */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-zinc-800 p-4">
            <h3 className="mb-2 font-semibold">Languages &amp; Frameworks</h3>
            <ul className="space-y-1 text-sm text-zinc-300">
              <li>・Next.js / React / TypeScript（個人開発・ポートフォリオ）</li>
              <li>・Java / Spring Boot（API / CRUD / 認証の基礎）</li>
              <li>・C# / ASP.NET（社内研修での Web アプリケーション開発）</li>
              <li>・JavaScript / PHP / PL/SQL / HTML / CSS</li>
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-800 p-4">
            <h3 className="mb-2 font-semibold">Tools &amp; Others</h3>
            <ul className="space-y-1 text-sm text-zinc-300">
              <li>・Visual Studio / VS Code / SQL Server / SQLite</li>
              <li>・Git / GitHub / Redmine / 各種チャットツール</li>
              <li>・SEO ライティング / Web マーケティング</li>
              <li>・インサイドセールス（新規開拓 / 架電）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 強み */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">強み</h2>
        <ul className="space-y-1 text-sm text-zinc-300 list-disc list-inside">
          <li>
            <strong>学習の継続力</strong>：
            Next.js / TypeScript / Java / C# など複数技術を並行して学習しつつ、
            個人開発やポートフォリオを通して継続的にアウトプットしています。
          </li>
          <li>
            <strong>コミュニケーション</strong>：
            ライター、営業、バックオフィス、現場エンジニアなど、
            異なる立場のメンバーと協業してきた経験から、
            相手の前提を意識した説明やキャッチアップが得意です。
          </li>
          <li>
            <strong>探求心と改善志向</strong>：
            技術面だけでなく、トレーニングや生活習慣の改善など、
            「なぜそうなるのか」を掘り下げて継続的に試行錯誤することが好きです。
          </li>
        </ul>
      </section>

      {/* 職務経歴 タイムライン要約 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Career</h2>
        <ol className="space-y-4 text-sm text-zinc-300">
          <li className="border-l border-zinc-700 pl-4">
            <div className="text-xs text-zinc-400">2025.8 - 現在</div>
            <div className="font-semibold">
              株式会社ブミックデータ / Webエンジニア
            </div>
            <p className="mt-1 leading-relaxed">
              C# / ASP.NET を用いた「作家締切管理システム」のチーム開発に参加。
              作家登録 CRUD、ログイン機能、一覧画面、単体テストの実装などを担当し、
              MVC アーキテクチャやテスト観点を実務レベルで習得しました。
            </p>
          </li>
          <li className="border-l border-zinc-700 pl-4">
            <div className="text-xs text-zinc-400">2025.7 - 2025.8</div>
            <div className="font-semibold">
              エンパワー株式会社 / 補助金システム開発支援
            </div>
            <p className="mt-1 leading-relaxed">
              補助金システムのマニュアル作成業務に従事。
              画面未完成の段階からたたき台を作成し、関係者とコミュニケーションを取りながら
              納期内に納品しました。
            </p>
          </li>
          <li className="border-l border-zinc-700 pl-4">
            <div className="text-xs text-zinc-400">2021.12 - 2024.12</div>
            <div className="font-semibold">Webライター（個人事業）</div>
            <p className="mt-1 leading-relaxed">
              SEO 記事制作代行・インサイドセールスを中心に活動。
              不動産 / 金融 / ダイエット / 転職 / 美容などの領域で、
              キーワード選定〜構成〜執筆〜リライトまで一気通貫で担当しました。
            </p>
          </li>
          <li className="border-l border-zinc-700 pl-4">
            <div className="text-xs text-zinc-400">2023.10 - 2024.3</div>
            <div className="font-semibold">
              株式会社ハウスメンテナンス / 一般事務・SEO
            </div>
            <p className="mt-1 leading-relaxed">
              不動産・建設会社のバックオフィスとして契約書作成や図面作成を担当。
              併せて自社サイト複数の SEO 改善を行い、平均順位や上位表示記事数の改善に貢献しました。
            </p>
          </li>
        </ol>
      </section>

      {/* 人柄・趣味 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">人柄・趣味</h2>
        <p className="text-zinc-300 leading-relaxed">
          学習やトレーニングなど、「毎日少しずつ積み上げること」を大切にしています。
          筋トレや個人開発を通じて、身体的なコンディションと技術的な成長の両面から
          自分をアップデートしていくことが好きです。
        </p>
        <p className="text-zinc-300 leading-relaxed">
          新しい技術や考え方に触れたときは、まず自分で手を動かして試してみるタイプです。
          うまくいかなかった部分も含めて言語化し、次の改善につなげていくことを意識しています。
        </p>
      </section>

      {/* 詳細な職務経歴（折りたたみ） */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Detailed Resume</h2>
        <p className="text-sm text-zinc-300">
          具体的な担当業務や実績については、詳細な職務経歴書としてまとめています。
        </p>
        <details className="rounded-lg border border-zinc-800 p-4 text-sm text-zinc-300">
          <summary className="cursor-pointer font-semibold">
            職務経歴書のサマリーを表示する
          </summary>
          <div className="mt-3 space-y-3 leading-relaxed">
            <p>
              ここには、現在お持ちの職務経歴書のテキスト（各社での業務内容・実績など）を
              必要に応じて抜粋して掲載できます。
              転職活動のフェーズや応募企業に応じて、内容を絞り込んだり更新していく想定です。
            </p>
          </div>
        </details>
      </section>
    </section>
  );
}
