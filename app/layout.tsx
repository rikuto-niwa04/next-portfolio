import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rikuto Niwa | Portfolio",
  description: "Next.js / TypeScript を中心としたポートフォリオサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="border-b border-zinc-800">
            <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
              <span className="text-sm font-semibold">
                Rikuto Niwa / Web Engineer
              </span>
              <ul className="flex gap-4 text-sm text-zinc-300">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/works">Works</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* Main */}
          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-4 py-10">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Rikuto Niwa. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
