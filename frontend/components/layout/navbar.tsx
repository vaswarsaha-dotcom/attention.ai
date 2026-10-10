
"use client";

import {
  Bell,
  Menu,
  Search,
  Sparkles
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const value = query.trim();
    if (!value) return;

    router.push(
      `/explore?search=${encodeURIComponent(value)}`
    );
  }

  return (
    <header className="w-full px-4 pt-4 sm:px-6 lg:pl-67 lg:pr-8">
      <div className="glass flex min-w-0 items-center gap-2 rounded-2xl p-2 sm:gap-3 sm:p-3">
        <button
          type="button"
          className="rounded-xl bg-white/4 p-2.5 text-slate-400 transition hover:bg-white/8 hover:text-white lg:hidden"
          onClick={() => router.push("/")}
          aria-label="Go home"
        >
          <Menu size={18} />
        </button>

        <form onSubmit={handleSearch} className="relative min-w-0 flex-1">
          <Search
            size={17}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search movies..."
            aria-label="Search movies"
            className="w-full rounded-xl border border-white/6 bg-white/[0.035] py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/30 focus:bg-white/6"
          />
        </form>

        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          title="Analytics"
          aria-label="Analytics"
          className="rounded-xl border border-transparent bg-white/4 p-2.5 text-slate-400 transition hover:border-white/10 hover:bg-white/8 hover:text-cyan-200"
        >
          <Sparkles size={18} />
        </button>

        <button
          type="button"
          title="Notifications"
          aria-label="Notifications"
          className="hidden rounded-xl bg-white/4 p-2.5 text-slate-400 transition hover:bg-white/8 hover:text-white sm:block"
        >
          <Bell size={18} />
        </button>

        <button
          type="button"
          onClick={() => router.push("/profile")}
          className="hidden shrink-0 items-center gap-2.5 rounded-xl px-1.5 py-1 sm:flex"
        >
          <span className="hidden text-right md:block">
            <span className="block text-xs font-semibold text-slate-100">
              Attention Explorer
            </span>
            <span className="mt-0.5 block text-[11px] text-slate-500">
              AI Researcher
            </span>
          </span>
          <span className="h-9 w-9 rounded-full bg-linear-to-br from-cyan-300 to-purple-500 shadow-lg shadow-cyan-400/10" />
        </button>
      </div>
    </header>
  );
}
