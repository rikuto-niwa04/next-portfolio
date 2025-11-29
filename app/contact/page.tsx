"use client";

import { useState } from "react";

type Errors = {
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [state, setState] = useState({
    email: "",
    message: "",
    name: "",
    done: false,
    loading: false,
  });

  const [errors, setErrors] = useState<Errors>({});

  // ▼ ① バリデーション関数（errors を更新）
  const validate = () => {
    const newErrors: Errors = {};

    // メール必須 & 形式チェック
    if (!state.email) {
      newErrors.email = "メールアドレスは必須です。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      newErrors.email = "メールアドレスの形式が正しくありません。";
    }

    // メッセージ必須 & 文字数チェック
    if (!state.message) {
      newErrors.message = "メッセージは必須です。";
    } else if (state.message.length < 10) {
      newErrors.message = "10文字以上で入力してください。";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ▼ ② 送信処理（最初に validate を呼ぶ）
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ok = validate();
    if (!ok) return;

    setState((s) => ({ ...s, loading: true }));

    // ★ 自分の Formspree の URL 
    const FORMSPREE_URL = "https://formspree.io/f/xqavbkzn";

    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: state.email,
        message: state.message,
        name: state.name,
      }),
    });

    if (res.ok) {
      setState({
        email: "",
        message: "",
        name: "",
        done: true,
        loading: false,
      });
      setErrors({});
    } else {
      alert("送信に失敗しました…");
      setState((s) => ({ ...s, loading: false }));
    }
  };

  // ▼ ③ JSX（フォーム部分）。email / message にエラー表示を追加
  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold text-zinc-50">Contact</h1>
      <p className="mb-8 text-zinc-400">
        お問い合わせはこちらから。ポートフォリオに関する質問やご連絡はお気軽にどうぞ。
      </p>

      {state.done ? (
        <p className="mt-6 rounded-lg bg-green-900/40 px-4 py-3 text-green-300">
          ✔ 送信しました！返信まで少しお待ちください。
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* name */}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              お名前（任意）
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-zinc-900 border border-zinc-700 px-3 py-2 text-zinc-100"
              value={state.name}
              onChange={(e) =>
                setState({ ...state, name: e.target.value })
              }
            />
          </div>

          {/* email */}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              メールアドレス（必須）
            </label>
            <input
              type="email"
              required
              className={`w-full rounded-md bg-zinc-900 border px-3 py-2 text-zinc-100 ${
                errors.email ? "border-red-500" : "border-zinc-700"
              }`}
              value={state.email}
              onChange={(e) =>
                setState({ ...state, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          {/* message */}
          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              メッセージ（必須）
            </label>
            <textarea
              required
              rows={5}
              className={`w-full rounded-md bg-zinc-900 border px-3 py-2 text-zinc-100 ${
                errors.message ? "border-red-500" : "border-zinc-700"
              }`}
              value={state.message}
              onChange={(e) =>
                setState({ ...state, message: e.target.value })
              }
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={state.loading}
            className="mt-4 w-full rounded-md bg-zinc-50 text-zinc-900 py-2 font-semibold hover:bg-zinc-200 disabled:opacity-50"
          >
            {state.loading ? "送信中…" : "送信する"}
          </button>
        </form>
      )}
    </main>
  );
}
