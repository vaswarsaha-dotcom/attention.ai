"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api-client";
import type { HealthResponse } from "@/types/api";

type State =
  | { kind: "loading" }
  | { kind: "ok"; data: HealthResponse }
  | { kind: "error"; message: string };

export default function Home() {
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    apiGet<HealthResponse>("/api/health")
      .then((data) => setState({ kind: "ok", data }))
      .catch((e: Error) => setState({ kind: "error", message: e.message }));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-neutral-950 p-8 text-neutral-100">
      <h1 className="text-4xl font-bold tracking-tight">AttentionAI</h1>
      <p className="text-neutral-400">Phase 0: setup check</p>

      <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-6">
        {state.kind === "loading" && <p>Checking backend…</p>}
        {state.kind === "error" && (
          <p className="text-red-400">
            Backend unreachable: {state.message}. Is uvicorn running on port 8000?
          </p>
        )}
        {state.kind === "ok" && (
          <ul className="space-y-2 text-sm">
            <li className="text-emerald-400">✓ API connected ({state.data.app})</li>
            <li>Environment: {state.data.environment}</li>
            <li>TMDB key: {state.data.tmdb_configured ? "configured" : "not set yet"}</li>
            <li>Database: {state.data.database_configured ? "configured" : "not set yet"}</li>
          </ul>
        )}
      </div>
    </main>
  );
}
