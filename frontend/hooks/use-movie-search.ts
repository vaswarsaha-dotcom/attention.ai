
"use client";

import { useEffect, useState } from "react";

import type { Movie } from "@/types/api";
import { movies as localMovies } from "@/lib/movie-data";

export function useMovieSearch(query: string) {
  const [results, setResults] = useState<Movie[]>(localMovies);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const timer = window.setTimeout(() => {
      if (cancelled) return;

      const value = query.trim().toLowerCase();

      if (!value) {
        setResults(localMovies);
        setLoading(false);
        return;
      }

      setLoading(true);

      const normalizedQuery = value.replace(
        /[^a-z0-9]/g,
        ""
      );

      const matchedMovies = localMovies.filter((movie) => {
        const searchableText = [
          movie.title,
          movie.overview ?? "",
          ...(movie.genres ?? []),
          movie.releaseDate ?? ""
        ]
          .join(" ")
          .toLowerCase();

        const normalizedText = searchableText.replace(
          /[^a-z0-9]/g,
          ""
        );

        return (
          searchableText.includes(value) ||
          normalizedText.includes(normalizedQuery)
        );
      });

      if (!cancelled) {
        setResults(matchedMovies);
        setLoading(false);
      }
    }, 200);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [query]);

  return {
    results,
    loading
  };
}
