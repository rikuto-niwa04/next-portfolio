import Image from "next/image";

// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <p className="text-sm text-gray-400">Rikuto Niwa / Web Engineer</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Next.js ポートフォリオ（仮）
        </h1>
        <p className="text-gray-400">
          このページは app/page.tsx を編集して作っています。
        </p>
      </div>
    </main>
  );
}

