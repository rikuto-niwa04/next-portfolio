📘 Rikuto Niwa – Next.js Portfolio

モダンフロントエンド技術（Next.js / TypeScript / React）を中心に学習・開発しているエンジニア 丹羽陸斗（Rikuto Niwa） のポートフォリオサイトです。
App Router と TypeScript を用いて、拡張性・可読性・型安全性を意識した構成で作成しています。

🚀 技術スタック

Next.js 16 (App Router / Server Components)

React 18

TypeScript

Tailwind CSS

ESLint / Prettier

Vercel（デプロイ予定）

🧱 構成（Directory Structure）
next-portfolio/
├─ app/
│  ├─ layout.tsx        # 共通レイアウト
│  ├─ page.tsx          # Home
│  ├─ works/
│  │   ├─ page.tsx      # Works 一覧
│  │   └─ [slug]/page.tsx   # プロジェクト詳細ページ
│  ├─ about/page.tsx    # 経歴
│  └─ contact/page.tsx  # 連絡先
│
├─ components/
│  ├─ work-card.tsx     # Works 用カードコンポーネント
│  └─ ...               # 今後追加予定
│
├─ lib/
│  └─ projects.ts       # プロジェクトデータ定義
│
├─ types/
│  └─ project.ts        # Project 型定義
│
├─ public/              # 画像など
└─ package.json

📂 主なページ
🔹 Home

自己紹介とポートフォリオ概要を掲載。

🔹 About

経歴・学習ロードマップ・得意技術をまとめています。

🔹 Works

Project 型でデータを一元管理し、
一覧 → 詳細（動的ルーティング） で閲覧できる構成になっています。

🔹 Contact

GitHub などの連絡先を掲載しています。
※ 後日フォーム機能を追加予定。

🛠 開発のこだわり

App Router + TypeScript を最大限活かした実装

Project 型による 型安全なデータ管理

一覧・詳細ページを 同一データソースから自動生成

UI は Tailwind CSS でシンプル & 拡張性重視

レイアウトは layout.tsx で一元管理し、
再利用性の高い構成を実現

📦 今後の拡張予定

Skills ページの追加（技術スタック一覧）

Contact フォーム（API Route）実装

ブログページの追加

デザインのブラッシュアップ（Card / Section コンポーネント整理）

Vercel へのデプロイ

🔗 GitHub / SNS

GitHub: https://github.com/rikuto-niwa04

Portfolio（Vercel）: Coming Soon

📄 ライセンス

This project is licensed under the MIT License.

🌟 作者

Rikuto Niwa (丹羽陸斗)
Next.js / TypeScript を中心に、
モダンなWebアプリケーション開発を学習中。