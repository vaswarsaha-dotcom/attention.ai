"use client";

import { motion } from "framer-motion";
import {
  Brain,
  CheckCircle2,
  Film,
  Loader2,
  Sparkles,
  Zap
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

import { getMovie, movies } from "@/lib/movie-data";
import { apiPost } from "@/lib/api-client";

interface AnalysisResult {
  movie_id: string;
  attention_score: number;
  confidence_score: number;
  explanation: string;
}

export default function Analyze() {
  const searchParams = useSearchParams();

  const initialMovie =
    searchParams.get("movie") ?? "";

  const [name, setName] = useState("");
  const [selectedMovie, setSelectedMovie] =
    useState(initialMovie);
  const [result, setResult] =
    useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialMovie) {
      const movie = getMovie(initialMovie);

      if (movie) {
        setName(movie.title);
        setSelectedMovie(movie.id);
      }
    }
  }, [initialMovie]);

  async function analyzeMovie() {
    const movie =
      getMovie(selectedMovie) ??
      movies.find(
        (item) =>
          item.title.toLowerCase() ===
          name.trim().toLowerCase()
      );

    if (!movie) {
      setError(
        "Choose a movie from the list before starting analysis."
      );
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const response =
        await apiPost<AnalysisResult>(
          "/api/analysis",
          {
            movie_id: movie.id,
            title: movie.title,
            features: movie.features
          }
        );

      setResult(response);
    } catch (err) {
      console.error(err);

      setError(
        "The FastAPI server is not reachable. Start the backend on port 8000 and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="mx-auto max-w-6xl space-y-7">
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 p-6 sm:p-8">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <Sparkles size={16} />
                AI ANALYSIS ENGINE
              </div>

              <h1 className="mt-3 text-4xl font-black sm:text-5xl">
                Discover what makes a movie{" "}
                <span className="gradient-text">
                  impossible to ignore.
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-slate-400">
                AttentionAI combines cinematic signals with
                your analysis pipeline to estimate viewer
                attention.
              </p>
            </div>
          </section>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <Card className="p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-300">
                  <Brain size={24} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Start an analysis
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Select a movie and send its cinematic
                    features to the FastAPI model.
                  </p>
                </div>
              </div>

              <label className="mt-7 block text-sm font-medium text-slate-300">
                Movie
              </label>

              <select
                value={selectedMovie}
                onChange={(event) => {
                  const id = event.target.value;
                  setSelectedMovie(id);

                  const movie = getMovie(id);
                  setName(movie?.title ?? "");
                  setResult(null);
                  setError("");
                }}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#09131d] px-4 py-3.5 text-sm outline-none focus:border-cyan-300/40"
              >
                <option value="">
                  Select a movie...
                </option>

                {movies.map((movie) => (
                  <option
                    key={movie.id}
                    value={movie.id}
                  >
                    {movie.title}
                  </option>
                ))}
              </select>

              <div className="mt-4">
                <input
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Or type a movie title..."
                  className="w-full rounded-2xl border border-white/10 bg-white/2.5 px-4 py-3.5 text-sm outline-none focus:border-cyan-300/40"
                />
              </div>

              {error && (
                <div className="mt-4 rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              <Button
                type="button"
                onClick={analyzeMovie}
                disabled={loading}
                className="mt-6 w-full justify-center bg-cyan-300 text-slate-950 hover:bg-cyan-200"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap size={17} />
                    Analyze attention
                  </>
                )}
              </Button>
            </Card>

            <Card className="relative overflow-hidden p-6 sm:p-8">
              {!result && !loading && (
                <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-purple-400/10 p-5 text-purple-300">
                    <Brain size={32} />
                  </div>

                  <h2 className="mt-5 text-xl font-bold">
                    Awaiting analysis
                  </h2>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Choose a movie and run the model to see
                    its predicted attention score.
                  </p>
                </div>
              )}

              {loading && (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <Loader2
                    size={42}
                    className="animate-spin text-cyan-300"
                  />

                  <h2 className="mt-5 text-xl font-bold">
                    Processing cinematic signals
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Pacing · emotion · music · visuals · suspense
                  </p>
                </div>
              )}

              {result && !loading && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                >
                  <div className="flex items-center gap-2 text-sm text-cyan-300">
                    <CheckCircle2 size={17} />
                    ANALYSIS COMPLETE
                  </div>

                  <div className="mt-6">
                    <div className="text-xs uppercase tracking-widest text-slate-500">
                      Attention score
                    </div>

                    <div className="mt-2 text-7xl font-black gradient-text">
                      {Math.round(
                        result.attention_score
                      )}
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      predicted attention / 100
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/2.5 p-5">
                    <div className="flex items-center gap-2 font-semibold">
                      <Film
                        size={17}
                        className="text-cyan-300"
                      />
                      AI explanation
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {result.explanation}
                    </p>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/2.5 p-5">
                    <div className="text-xs uppercase tracking-widest text-slate-500">
                      Model confidence
                    </div>

                    <div className="mt-2 text-2xl font-bold">
                      {Math.round(
                        result.confidence_score * 100
                      )}
                      %
                    </div>
                  </div>
                </motion.div>
              )}
            </Card>
          </div>
        </div>
      </PageContainer>
    </>
  );
}