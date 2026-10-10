"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
  Loader2
} from "lucide-react";
import { useMemo, useState } from "react";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import MovieCard from "@/components/movie/movie-card";
import Card from "@/components/ui/card";
import { movies } from "@/lib/movie-data";
import { useMovieSearch } from "@/hooks/use-movie-search";

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

type SortType = "attention" | "rating" | "newest";

export default function Movies({
  initialQuery = ""
}: {
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState<SortType>("attention");

  const {
    results: searchResults,
    loading
  } = useMovieSearch(query);

  const filteredMovies = useMemo(() => {
    const source =
      query.trim().length > 0
        ? searchResults
        : movies;

    const result = source.filter((movie) => {
      if (genre === "All") {
        return true;
      }

      return movie.genres.some(
        (item) =>
          item.toLowerCase() === genre.toLowerCase()
      );
    });

    return [...result].sort((a, b) => {
      if (sort === "rating") {
        return b.rating - a.rating;
      }

      if (sort === "newest") {
        return (
          new Date(b.releaseDate).getTime() -
          new Date(a.releaseDate).getTime()
        );
      }

      return b.attention - a.attention;
    });
  }, [query, searchResults, genre, sort]);

  const resetFilters = () => {
    setQuery("");
    setGenre("All");
    setSort("attention");
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="mx-auto max-w-7xl space-y-8">

          {/* HERO / SEARCH */}
          <section className="glass glass-hover relative overflow-hidden rounded-4xl p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

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
                Search the AttentionAI catalog or discover
                movies directly from TMDB.
              </p>

              <div className="mt-6 flex flex-col gap-3 lg:flex-row">

                {/* SEARCH INPUT */}
                <div className="glass-hover relative flex-1 rounded-2xl">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    value={query}
                    onChange={(event) =>
                      setQuery(event.target.value)
                    }
                    placeholder="Search any movie..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-11 pr-20 text-sm outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-cyan-300/30 focus:bg-white/10"
                  />

                  {/* LOADING */}
                  {loading && (
                    <Loader2
                      size={18}
                      className="absolute right-11 top-1/2 -translate-y-1/2 animate-spin text-cyan-300"
                    />
                  )}

                  {/* CLEAR */}
                  {query && !loading && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl p-2 text-slate-500 transition-all duration-200 hover:bg-white/10 hover:text-white"
                      aria-label="Clear search"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                {/* SORT */}
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <SlidersHorizontal
                    size={16}
                    className="text-cyan-300"
                  />

                  <select
                    value={sort}
                    onChange={(event) =>
                      setSort(
                        event.target.value as SortType
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

          {/* GENRES */}
          <Card className="p-2">
            <div className="flex gap-2 overflow-x-auto scrollbar-none">
              {genres.map((item) => {
                const selected = genre === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setGenre(item)}
                    className={[
                      "whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300",
                      selected
                        ? "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/10"
                        : "bg-white/5 text-slate-400 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                    ].join(" ")}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </Card>

          {/* RESULTS HEADER */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm text-slate-500">
                {loading
                  ? "Searching..."
                  : `${filteredMovies.length} movies found`}
              </div>

              <div className="mt-1 text-xl font-bold">
                {query
                  ? `Results for “${query}”`
                  : genre === "All"
                    ? "Attention leaderboard"
                    : `${genre} movies`}
              </div>
            </div>

            {(query || genre !== "All" || sort !== "attention") && (
              <button
                type="button"
                onClick={resetFilters}
                className="shrink-0 text-sm text-cyan-300 transition-all duration-200 hover:text-cyan-200 hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* LOADING STATE */}
          {loading ? (
            <Card className="p-16 text-center">
              <Loader2
                size={32}
                className="mx-auto animate-spin text-cyan-300"
              />

              <h2 className="mt-4 text-lg font-bold">
                Searching movies...
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Finding movies from the AttentionAI catalog
                and TMDB.
              </p>
            </Card>
          ) : filteredMovies.length > 0 ? (

            /* MOVIE GRID */
            <motion.div
              layout
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
              <AnimatePresence mode="popLayout">
                {filteredMovies.map((movie) => (
                  <motion.div
                    layout
                    key={movie.id}
                    initial={{
                      opacity: 0,
                      y: 14
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96
                    }}
                    transition={{
                      duration: 0.24
                    }}
                  >
                    <MovieCard movie={movie} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          ) : (

            /* EMPTY STATE */
            <Card
              className="p-12 text-center"
              hover
            >
              <div className="text-5xl">
                🎬
              </div>

              <h2 className="mt-4 text-xl font-bold">
                No movies found
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                We couldn't find a match for{" "}
                <span className="text-slate-300">
                  "{query}"
                </span>
                . Try another movie title or spelling.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 rounded-xl bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/20"
              >
                Browse all movies
              </button>
            </Card>
          )}
        </div>
      </PageContainer>
    </>
  );
}