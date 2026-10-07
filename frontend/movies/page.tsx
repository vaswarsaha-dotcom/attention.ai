import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import MovieCard from "@/components/movie/movie-card";

import type { Movie } from "@/types/api";

const movies: Movie[] = Array.from(
  { length: 9 },
  (_, i) => ({
    id: `movie-${i}`,

    title: [
      "Interstellar",
      "Dune: Part Two",
      "Inception",
      "The Dark Knight",
      "Oppenheimer",
      "Spider-Man: Across the Spider-Verse",
      "Arrival",
      "Whiplash",
      "Mad Max: Fury Road"
    ][i],

    overview:
      "Cinematic attention analysis.",

    posterUrl: [
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    ][i % 3],

    backdropUrl: "",
    releaseDate: "2024-01-01",
    runtime: 120,
    genres: ["Drama"],
    rating: 8.2,
    attention: 90 - i,

    features: {
      action: 80 + i,
      suspense: 90,
      emotion: 88,
      music: 91,
      pacing: 92,
      visual: 95,
      dialogue: 80
    }
  })
);

export default function Movies() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-cyan-300">
              EXPLORE
            </p>

            <h1 className="text-4xl font-black mt-2">
              Movies ranked by attention
            </h1>

            <p className="text-slate-500 mt-2">
              Search, compare and analyze cinematic
              engagement.
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {[
              "All",
              "Action",
              "Drama",
              "Sci-Fi",
              "Thriller",
              "Comedy",
              "Animation"
            ].map((genre) => (
              <button
                key={genre}
                className="whitespace-nowrap rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-cyan-300/10"
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
}