import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import MovieDetails from "@/components/movie/movie-details";
import EngagementScore from "@/components/movie/engagement-score";
import SceneCard from "@/components/scene/scene-card";

import type {
  Movie,
  Scene
} from "@/types/api";

const movie: Movie = {
  id: "dune2",
  title: "Dune: Part Two",

  overview:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",

  posterUrl:
    "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",

  backdropUrl:
    "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",

  releaseDate: "2024-03-01",
  runtime: 166,

  genres: ["Sci-Fi", "Drama"],

  rating: 8.6,
  attention: 94,

  features: {
    action: 92,
    suspense: 94,
    emotion: 88,
    music: 95,
    pacing: 93,
    visual: 99,
    dialogue: 76
  }
};

const scenes: Scene[] = Array.from(
  { length: 5 },
  (_, i) => ({
    id: `s${i}`,
    movieId: "dune2",
    number: i + 1,

    title: [
      "Desert Arrival",
      "The Fremen",
      "The Prophecy",
      "The Attack",
      "Final Confrontation"
    ][i],

    start: `${String(i * 25).padStart(
      2,
      "0"
    )}:00`,

    end: `${String(
      i * 25 + 24
    ).padStart(2, "0")}:00`,

    duration: 1440,

    attention: [82, 91, 95, 98, 97][i],

    features: movie.features,

    explanation: [
      "Strong visual activity establishes the world and raises curiosity.",
      "Dialogue and character emotion increase viewer investment.",
      "Suspense peaks as multiple narrative questions converge.",
      "Rapid pacing, action and music create a high-engagement sequence.",
      "Emotional stakes and payoff produce sustained attention."
    ][i]
  })
);

export default async function MoviePage() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl min-h-[300px]">
            <img
              src={movie.backdropUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050b12] via-[#050b12]/75 to-transparent" />

            <div className="relative p-7 sm:p-10 max-w-2xl">
              <div className="text-sm text-cyan-300">
                MOVIE ANALYSIS
              </div>

              <h1 className="text-4xl sm:text-6xl font-black mt-2">
                {movie.title}
              </h1>

              <p className="text-slate-300 mt-4">
                {movie.overview}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            <MovieDetails movie={movie} />

            <EngagementScore
              score={movie.attention}
            />

            <div className="glass rounded-2xl p-5">
              <div className="text-xs text-slate-500">
                RATING
              </div>

              <div className="text-4xl font-bold mt-2">
                {movie.rating}
                <span className="text-sm text-slate-500">
                  {" "}
                  / 10
                </span>
              </div>

              <div className="text-sm text-slate-400 mt-3">
                {movie.runtime} minutes ·{" "}
                {movie.releaseDate.slice(0, 4)}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Scene-by-scene attention
            </h2>

            <div className="grid lg:grid-cols-2 gap-4">
              {scenes.map((scene) => (
                <SceneCard
                  key={scene.id}
                  scene={scene}
                />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}