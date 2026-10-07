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
  User
} from "lucide-react";

const items = [
  {
    label: "Home",
    href: "/",
    icon: Home
  },
  {
    label: "Explore",
    href: "/movies",
    icon: Search
  },
  {
    label: "AI Analysis",
    href: "/analyze",
    icon: Brain
  },
  {
    label: "Mood Match",
    href: "/mood",
    icon: Smile
  },
  {
    label: "Analytics",
    href: "/dashboard",
    icon: BarChart3
  },
  {
    label: "Compare",
    href: "/compare",
    icon: GitCompare
  },
  {
    label: "My List",
    href: "/history",
    icon: Heart
  }
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="hidden lg:flex fixed left-4 top-4 bottom-4 w-60 flex-col rounded-3xl glass p-4 z-40">
      <div className="px-3 py-4 text-xl font-bold">
        <span className="gradient-text">
          ✦ AttentionAI
        </span>
      </div>

      <nav className="space-y-2 flex-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                path === item.href
                  ? "bg-cyan-300/10 text-white border border-cyan-300/10"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 pt-3 space-y-2">
        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 hover:text-white"
        >
          <User size={17} />
          Profile
        </Link>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 hover:text-white">
          <Settings size={17} />
          Settings
        </button>
      </div>
    </aside>
  );
}