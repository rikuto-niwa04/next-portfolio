// lib/projects.ts
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "next-portfolio",
    title: "Next.js 個人ポートフォリオサイト",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "自己紹介・スキルセット・Works をまとめたポートフォリオサイト。App Router と TypeScript を使用。",
    githubUrl: "https://github.com/rikuto-niwa04/next-portfolio",

    period: "2025年11月（1〜2週間）",
    role: "フロントエンド / UI 設計〜実装まで担当",
    features: [
      "App Router を用いたページ・動的ルーティング構築",
      "Project 型と配列による型安全なデータ管理",
      "Works 一覧と詳細ページの動的生成",
      "Tailwind CSS によるシンプルでレスポンシブなUI",
    ],
    challenges:
      "型安全性を保ちつつ、Works を一覧と詳細で共通データからレンダリングできるように情報設計を工夫した。今後ブログページやスキルページを追加しやすい構造にした点も意識。",
  },

  {
    slug: "makingbody-blog",
    title: "makingbody-blog（トレーナー監修ブログ）",
    techStack: ["HTML", "CSS", "PHP", "JavaScript"],
    description:
      "パーソナルトレーナー監修のトレーニング・栄養ブログ。要望に合わせたUI調整と継続改善を担当。",
    githubUrl: "https://rtc-jp.online/",
    IsExternal: true,

    period: "2024年〜継続改善中",
    role: "フロントエンド実装 / 一部PHPテンプレ調整",
    features: [
      "記事一覧ページのレスポンシブ対応",
      "カテゴリ別表示（栄養・トレーニング）",
      "既存テーマの運用改善",
      "スマホ表示を意識したUI調整",
    ],

    challenges:
      "既存テーマの構造が複雑で自由度が低いため、制約内でユーザー体験を改善する設計・微調整が求められた。運用者（トレーナー）の要望に沿った改善を継続。",
      },
    {
        slug: "fitness-booking",
        title: "FitnessBooking（パーソナルトレーニング予約システム）",
        period: "2024年〜継続開発中",
        role: "バックエンド / フロント実装 / カレンダーUI連携",
        techStack: [
        "C#",
        "ASP.NET Core",
        "Razor Pages",
        "FullCalendar",
        "SQLite",
        ],
        description:
        "パーソナルトレーナー向けの予約管理システム。トレーナーのスケジュールをカレンダー形式で管理し、予約作成・編集・削除を行えるアプリケーション。FullCalendar と ASP.NET Core の連携を通して、フロントとバックエンドのデータ同期・イベント管理の基礎を学んだプロジェクト。",
        githubUrl: "https://github.com/rikuto-niwa04/FitnessBooking",
        IsExternal: false,
        
        features: [
        "FullCalendar を用いた月間カレンダー表示",
        "予約情報をデータベースと連携して表示・更新",
        "ASP.NET Core Razor Pages による画面構築",
        "today ボタンや前月/翌月ナビゲーションによる操作性の向上",
        ],
        challenges:
        "FullCalendar が要求するイベントデータ形式と ASP.NET Core 側のモデル・エンドポイント設計を揃える部分に苦戦した。特に日時のフォーマットやタイムゾーンを意識しつつ、トレーナーごとの予約が重複しないようにサーバー側バリデーションを実装した点が学びになった。",
  },
];
