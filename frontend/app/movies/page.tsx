"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  X
} from "lucide-react";
import { useMemo, useState } from "react";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import MovieCard from "@/components/movie/movie-card";
import Card from "@/components/ui/card";

import { movies } from "@/lib/movie-data";

const genres = [
  "All",
  "Action",
  "Drama",
  "Sci-Fi",
  "Thriller",
  "Comedy",
  "Animation",
  "Romance"
];

export default function Movies() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState<"attention" | "rating" | "newest">(
    "attention"
  );

  const filteredMovies = useMemo(() => {
    const result = movies.filter((movie) => {
      const matchesQuery =
        !query ||
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genres.some((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );

      const matchesGenre =
        genre === "All" || movie.genres.includes(genre);

      return matchesQuery && matchesGenre;
    });

    return [...result].sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "newest") {
        return (
          new Date(b.releaseDate).getTime() -
          new Date(a.releaseDate).getTime()
        );
      }

      return b.attention - a.attention;
    });
  }, [query, genre, sort]);

  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="mx-auto max-w-7xl space-y-7">
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 p-6 sm:p-8">
            <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 text-sm font-medium text-cyan-300">
                <Sparkles size={16} />
                EXPLORE
              </div>

              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Find movies that{" "}
                <span className="gradient-text">
                  hold attention.
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-slate-400">
                Search movies, filter by genre and sort them by
                predicted attention.
              </p>

              <div className="mt-6 flex flex-col gap-3 lg:flex-row">
                <div className="relative flex-1">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    value={query}
                    onChange={(event) =>
                      setQuery(event.target.value)
                    }
                    placeholder="Search movies or genres..."
                    className="w-full rounded-2xl border border-white/10 bg-black/20 py-3.5 pl-11 pr-11 text-sm outline-none transition focus:border-cyan-300/40"
                  />

                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4">
                  <SlidersHorizontal
                    size={16}
                    className="text-cyan-300"
                  />

                  <select
                    value={sort}
                    onChange={(event) =>
                      setSort(
                        event.target.value as
                          | "attention"
                          | "rating"
                          | "newest"
                      )
                    }
                    className="bg-transparent py-3.5 text-sm outline-none"
                  >
                    <option value="attention">
                      Highest attention
                    </option>
                    <option value="rating">
                      Highest rating
                    </option>
                    <option value="newest">
                      Newest
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          <Card className="p-3">
            <div className="flex gap-2 overflow-x-auto scrollbar-none">
              {genres.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setGenre(item)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    genre === item
                      ? "bg-cyan-300 text-slate-950"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </Card>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-500">
                {filteredMovies.length} movies found
              </div>
              <div className="mt-1 text-xl font-bold">
                {genre === "All"
                  ? "Attention leaderboard"
                  : `${genre} movies`}
              </div>
            </div>

            {(query || genre !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setGenre("All");
                }}
                className="text-sm text-cyan-300 hover:text-cyan-200"
              >
                Reset filters
              </button>
            )}
          </div>

          {filteredMovies.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
              <AnimatePresence>
                {filteredMovies.map((movie) => (
                  <motion.div
                    layout
                    key={movie.id}
                    initial={{
                      opacity: 0,
                      scale: 0.96
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96
                    }}
                  >
                    <MovieCard movie={movie} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <Card className="p-12 text-center">
              <div className="text-4xl">🎬</div>
              <h2 className="mt-4 text-xl font-bold">
                No movies found
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Try another title or remove the genre filter.
              </p>
            </Card>
          )}
        </div>
      </PageContainer>
    </>
  );
}