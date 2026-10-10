
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  Brain,
  Smile,
  BarChart3,
  GitCompare,
  Heart,
  Settings,
  User,
  Sparkles
} from "lucide-react";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Explore", href: "/movies", icon: Search },
  { label: "AI Analysis", href: "/analyze", icon: Brain },
  { label: "Mood Match", href: "/mood", icon: Smile },
  { label: "Analytics", href: "/dashboard", icon: BarChart3 },
  { label: "Compare", href: "/compare", icon: GitCompare },
  { label: "My List", href: "/history", icon: Heart }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-3 top-3 z-50 hidden h-[calc(100dvh-24px)] w-55 flex-col rounded-[26px] border border-white/10 bg-slate-950/75 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:flex">
      <Link
        href="/"
        className="mb-5 flex items-center gap-2 rounded-2xl px-2.5 py-3 transition hover:bg-white/4"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
          <Sparkles size={18} />
        </span>
        <span className="text-lg font-bold tracking-tight">
          <span className="gradient-text">AttentionAI</span>
        </span>
      </Link>

      <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        Workspace
      </p>

      <nav className="flex-1 space-y-1">
        {items.map(({ label, href, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href ||
                pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`group relative flex items-center gap-3 rounded-xl border px-3 py-2.5 text-[13px] transition-all duration-200 ${
                active
                  ? "border-cyan-300/20 bg-cyan-300/9 text-white"
                  : "border-transparent text-slate-400 hover:translate-x-0.5 hover:border-white/[0.07] hover:bg-white/4 hover:text-white"
              }`}
            >
              {active && (
                <span className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-cyan-300" />
              )}

              <Icon
                size={17}
                className={`shrink-0 transition-colors ${
                  active
                    ? "text-cyan-300"
                    : "text-slate-500 group-hover:text-cyan-200"
                }`}
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="my-3 h-px bg-white/8" />

      <Link
        href="/profile"
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] text-slate-400 transition hover:bg-white/4 hover:text-white"
      >
        <User size={17} />
        Profile
      </Link>

      <button
        type="button"
        className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] text-slate-400 transition hover:bg-white/4 hover:text-white"
      >
        <Settings size={17} />
        Settings
      </button>
    </aside>
  );
}
