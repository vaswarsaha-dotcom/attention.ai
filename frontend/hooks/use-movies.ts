"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api-client";
import type { Movie } from "@/types/api";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet<Movie[]>("/api/movies/trending")
      .then(setMovies)
      .catch(() => setMovies([]))
      .finally(() => setLoading(false));
  }, []);

  return {
    movies,
    loading
  };
}