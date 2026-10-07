import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import MovieHero from "@/components/movie/movie-hero";
import EngagementScore from "@/components/movie/engagement-score";
import MovieCard from "@/components/movie/movie-card";
import Card from "@/components/ui/card";

import type { Movie } from "@/types/api";

const movies: Movie[] = [
  {
    id: "interstellar",
    title: "Interstellar",
    overview:
      "A team travels beyond our galaxy in a cinematic journey driven by emotion, suspense and awe.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5Qtb5P.jpg",
    releaseDate: "2014-11-07",
    runtime: 169,
    genres: ["Sci-Fi", "Drama"],
    rating: 8.7,
    attention: 95,
    features: {
      action: 78,
      suspense: 90,
      emotion: 96,
      music: 99,
      pacing: 88,
      visual: 98,
      dialogue: 79
    }
  },
  {
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
  },
  {
    id: "inception",
    title: "Inception",
    overview:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    releaseDate: "2010-07-16",
    runtime: 148,
    genres: ["Sci-Fi", "Thriller"],
    rating: 8.4,
    attention: 92,
    features: {
      action: 89,
      suspense: 96,
      emotion: 82,
      music: 91,
      pacing: 95,
      visual: 96,
      dialogue: 88
    }
  }
];

export default function Home() {
  return (
    <>
      <Sidebar />

      <Navbar />

      <PageContainer>
        <div className="space-y-7">
          <section className="flex items-end justify-between">
            <div>
              <p className="text-sm text-cyan-300">
                AI-POWERED MOVIE INTELLIGENCE
              </p>

              <h1 className="text-3xl sm:text-4xl font-black mt-2">
                Why can you not{" "}
                <span className="gradient-text">
                  look away?
                </span>
              </h1>

              <p className="text-slate-500 mt-2">
                Discover the cinematic signals behind
                attention.
              </p>
            </div>
          </section>

          <MovieHero movie={movies[0]} />

          <div className="grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <Card className="p-5">
                <div className="flex justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Trending by Attention
                    </h2>

                    <p className="text-sm text-slate-500">
                      Movies predicted to hold attention
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {movies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                    />
                  ))}
                </div>
              </Card>
            </div>

            <EngagementScore
              score={movies[0].attention}
            />
          </div>
        </div>
      </PageContainer>
    </>
  );
}