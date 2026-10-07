"use client";

import {
  Bell,
  Search,
  Menu
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="lg:ml-64 px-4 lg:px-8 pt-4">
      <div className="glass rounded-2xl px-4 py-3 flex items-center gap-4">
        <button className="lg:hidden p-2 rounded-lg bg-white/5">
          <Menu size={19} />
        </button>

        <div className="relative flex-1 max-w-xl">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            placeholder="Search movies, directors, or actors..."
            className="w-full rounded-xl bg-white/5 border border-white/5 pl-10 pr-4 py-2.5 outline-none text-sm placeholder:text-slate-600 focus:border-cyan-300/30"
          />
        </div>

        <button className="p-2.5 rounded-xl bg-white/5 text-slate-400">
          <Bell size={18} />
        </button>

        <div className="hidden sm:block text-right">
          <div className="text-sm font-medium">
            Noah Bennett
          </div>
          <div className="text-xs text-slate-500">
            AI Explorer
          </div>
        </div>

        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-300 to-purple-500" />
      </div>
    </header>
  );
}