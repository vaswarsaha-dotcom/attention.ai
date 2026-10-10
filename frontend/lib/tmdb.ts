export interface TmdbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

interface TmdbSearchResponse {
  results: TmdbMovie[];
  total_results: number;
}

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const genreMap: Record<number, string> = {
  28: "Action",
  16: "Animation",
  35: "Comedy",
  18: "Drama",
  14: "Fantasy",
  27: "Horror",
  10749: "Romance",
  878: "Sci-Fi",
  53: "Thriller"
};

export async function searchTMDBMovies(
  query: string
): Promise<TmdbMovie[]> {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey || !query.trim()) {
    return [];
  }

  const url = new URL(
    `${TMDB_BASE_URL}/search/movie`
  );

  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("query", query.trim());
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const response = await fetch(url.toString(), {
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    throw new Error(
      `TMDB request failed: ${response.status}`
    );
  }

  const data =
    (await response.json()) as TmdbSearchResponse;

  return data.results;
}

export function tmdbMovieToAttentionMovie(
  movie: TmdbMovie
) {
  const genres = movie.genre_ids
    .map((id) => genreMap[id])
    .filter(Boolean);

  const rating = Number(
    movie.vote_average.toFixed(1)
  );

  // Temporary baseline until the ML pipeline has
  // scene-level features for externally discovered films.
  const attention = Math.round(
    Math.min(
      98,
      Math.max(
        55,
        rating * 7 +
          (movie.overview?.length ?? 0) * 0.03
      )
    )
  );

  return {
    id: `tmdb-${movie.id}`,
    title: movie.title,
    overview: movie.overview,
    posterUrl: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "/placeholder-movie.png",
    backdropUrl: movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : "",
    releaseDate: movie.release_date,
    runtime: 0,
    genres:
      genres.length > 0 ? genres : ["Movie"],
    rating,
    attention,
    features: {
      action: 0,
      suspense: 0,
      emotion: 0,
      music: 0,
      pacing: 0,
      visual: 0,
      dialogue: 0
    }
  };
}