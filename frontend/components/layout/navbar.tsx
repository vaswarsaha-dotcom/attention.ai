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
    <header className="lg:ml-64 px-4 pt-4 lg:px-8">
      <div className="glass flex items-center gap-3 rounded-2xl px-3 py-3 sm:gap-4 sm:px-4">
        <button
          type="button"
          className="rounded-xl bg-white/5 p-2 text-slate-400 hover:text-white lg:hidden"
          onClick={() => router.push("/")}
        >
          <Menu size={19} />
        </button>

        <form
          onSubmit={handleSearch}
          className="relative flex-1"
        >
          <Search
            size={17}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search movies..."
            className="w-full rounded-xl border border-white/5 bg-white/5 py-2.5 pl-10 pr-4 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-300/30"
          />
        </form>

        <button
          type="button"
          className="rounded-xl bg-white/5 p-2.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          onClick={() => router.push("/dashboard")}
          title="Analytics"
        >
          <Sparkles size={18} />
        </button>

        <button
          type="button"
          className="rounded-xl bg-white/5 p-2.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          title="Notifications"
        >
          <Bell size={18} />
        </button>

        <button
          type="button"
          onClick={() => router.push("/profile")}
          className="hidden items-center gap-3 sm:flex"
        >
          <div className="text-right">
            <div className="text-sm font-medium">
              Attention Explorer
            </div>

            <div className="text-xs text-slate-500">
              AI Researcher
            </div>
          </div>

          <div className="h-9 w-9 rounded-full bg-linear-to-br from-cyan-300 to-purple-500 shadow-lg shadow-cyan-400/10" />
        </button>
      </div>
    </header>
  );
}