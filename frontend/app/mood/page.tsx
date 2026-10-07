"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Check,
  Sparkles,
  Zap
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import MovieCard from "@/components/movie/movie-card";

import {
  getMovie,
  moods,
  moodRecommendations,
  type Mood
} from "@/lib/movie-data";

export default function Mood() {
  const [mood, setMood] = useState<Mood>("😊 Happy");

  const recommendation = moodRecommendations[mood];
  const movie = getMovie(recommendation.movieId);

  const featureList = useMemo(() => {
    if (!movie) return [];

    return [
      ["Emotion", movie.features.emotion],
      ["Music", movie.features.music],
      ["Pacing", movie.features.pacing],
      ["Visual", movie.features.visual],
      ["Suspense", movie.features.suspense]
    ];
  }, [movie]);

  if (!movie) return null;

  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="mx-auto max-w-7xl space-y-8">
          {/* Header */}
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 p-6 sm:p-8">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 text-sm font-medium text-cyan-300">
                <Sparkles size={16} />
                MOOD MATCH
              </div>

              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                What do you want to{" "}
                <span className="gradient-text">feel?</span>
              </h1>

              <p className="mt-3 max-w-2xl text-slate-400">
                Choose a mood and AttentionAI will match it against
                cinematic signals, emotional intensity and predicted
                attention.
              </p>
            </div>
          </section>

          {/* Mood selector */}
          <Card className="overflow-hidden p-2">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-7">
              {moods.map((item) => {
                const selected = mood === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setMood(item)}
                    className={`group relative rounded-2xl px-4 py-4 text-sm font-medium transition-all duration-300 ${
                      selected
                        ? "bg-cyan-300/10 text-white shadow-lg shadow-cyan-400/5"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {selected && (
                      <motion.div
                        layoutId="mood-active"
                        className="absolute inset-0 rounded-2xl border border-cyan-300/30 bg-cyan-300/5"
                      />
                    )}

                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {selected && (
                        <Check
                          size={15}
                          className="text-cyan-300"
                        />
                      )}
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Recommendation */}
          <motion.div
            key={mood}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-[1.1fr_1fr]">
                {/* Movie */}
                <div className="relative p-6 sm:p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300">
                        BEST MATCH
                      </p>
                      <h2 className="mt-1 text-xl font-bold">
                        For {mood}
                      </h2>
                    </div>

                    <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs text-cyan-300">
                      AI matched
                    </div>
                  </div>

                  <div className="max-w-57.5">
                    <MovieCard movie={movie} />
                  </div>
                </div>

                {/* Analysis */}
                <div className="border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
                  <div className="flex items-end gap-4">
                    <div className="text-6xl font-black tracking-tight gradient-text">
                      {recommendation.compatibility}%
                    </div>

                    <div className="pb-2">
                      <div className="text-sm font-semibold">
                        Mood compatibility
                      </div>
                      <div className="text-xs text-slate-500">
                        AI confidence match
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl border border-white/10 bg-white/2.5 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Brain
                        size={17}
                        className="text-cyan-300"
                      />
                      Why this matches
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {recommendation.reason}
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
                    {featureList.map(([name, value]) => (
                      <div
                        key={name}
                        className="rounded-2xl border border-white/10 bg-white/2.5 p-3"
                      >
                        <div className="text-xs text-slate-500">
                          {name}
                        </div>

                        <div className="mt-2 text-lg font-bold">
                          {value}
                        </div>

                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 0.6 }}
                            className="h-full rounded-full bg-cyan-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/movies/${movie.id}`}>
                      <Button className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                        Explore movie
                        <ArrowRight size={17} />
                      </Button>
                    </Link>

                    <Link href={`/analyze?movie=${movie.id}`}>
                      <Button className="bg-white/5 hover:bg-white/10">
                        <Zap size={17} />
                        Analyze attention
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Bottom insight */}
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Mood signal", mood, "Your current preference"],
              ["Attention score", `${movie.attention}/100`, "Predicted engagement"],
              ["Rating", `${movie.rating}/10`, "Viewer reception"]
            ].map(([label, value, description]) => (
              <Card key={label} className="p-5">
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  {label}
                </div>
                <div className="mt-2 text-2xl font-black">
                  {value}
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  {description}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
}