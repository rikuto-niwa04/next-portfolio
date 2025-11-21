export type Project = {
  slug: string;          // /works/[slug] 用
  title: string;         // タイトル
  techStack: string[];   // ["Next.js", "TypeScript"] みたいに配列で
  description: string;   // 説明文
  githubUrl: string;     // GitHub リンク
  role: string;        // 自分の担当範囲
 features: string[];  // 作った機能（箇条書き）
 challenges: string;  // 苦労したこと・工夫したこと
 period: string;      // 開発期間
 IsExternal?: boolean; // 外部プロジェクトの場合 true
};
