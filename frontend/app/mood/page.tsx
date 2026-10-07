"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import Card from "@/components/ui/card";
import MovieCard from "@/components/movie/movie-card";

import type { Movie } from "@/types/api";

const movie: Movie = {
  id: "mood-pick",
  title: "La La Land",
  overview:
    "A warm, emotional musical for an uplifting night.",

  posterUrl:
    "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",

  backdropUrl: "",
  releaseDate: "2016-12-09",
  runtime: 128,

  genres: ["Romance", "Drama"],
  rating: 8,
  attention: 89,

  features: {
    action: 50,
    suspense: 68,
    emotion: 96,
    music: 99,
    pacing: 88,
    visual: 91,
    dialogue: 86
  }
};

export default function Mood() {
  const [mood, setMood] = useState(
    "😊 Happy"
  );

  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="space-y-6 max-w-6xl mx-auto">
          <div>
            <p className="text-sm text-cyan-300">
              MOOD MATCH
            </p>

            <h1 className="text-4xl font-black mt-2">
              What do you want to feel?
            </h1>

            <p className="text-slate-500 mt-2">
              AttentionAI matches mood, movie signals
              and your watch history.
            </p>
          </div>

          <Card className="p-6">
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-3">
              {[
                "😊 Happy",
                "😢 Sad",
                "😌 Relaxed",
                "⚡ Energetic",
                "❤️ Romantic",
                "😱 Thrilled",
                "🧠 Curious"
              ].map((item) => (
                <button
                  onClick={() => setMood(item)}
                  key={item}
                  className={`rounded-xl p-4 text-sm ${
                    mood === item
                      ? "bg-cyan-300/10 border border-cyan-300/30"
                      : "bg-white/5 border border-transparent"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm text-cyan-300">
              BEST MATCH FOR{" "}
              {mood.toUpperCase()}
            </div>

            <div className="mt-4 grid sm:grid-cols-[220px_1fr] gap-6">
              <MovieCard movie={movie} />

              <div>
                <div className="text-6xl font-black gradient-text">
                  96%
                </div>

                <p className="text-slate-400 mt-2">
                  Mood compatibility
                </p>

                <p className="text-slate-300 leading-7 mt-6">
                  A strong match because of emotional
                  warmth, musical intensity and
                  uplifting pacing.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </PageContainer>
    </>
  );
}