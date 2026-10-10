
import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import MovieHero from "@/components/movie/movie-hero";
import EngagementScore from "@/components/movie/engagement-score";
import MovieCard from "@/components/movie/movie-card";
import Card from "@/components/ui/card";
import { movies } from "@/lib/movie-data";

export default function Home() {
  const featuredMovie = movies[0];

  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="mx-auto max-w-[1600px] space-y-7">
          <section className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/2.5 p-5 sm:p-7">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-cyan-400/8 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-purple-500/8 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.18em] text-cyan-300">
                AI-POWERED MOVIE INTELLIGENCE
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Why can you not{" "}
                <span className="gradient-text">look away?</span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Discover the cinematic signals behind attention,
                from suspense and pacing to emotion and music.
              </p>
            </div>
          </section>

          {featuredMovie && <MovieHero movie={featuredMovie} />}

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.8fr)_minmax(260px,0.8fr)]">
            <Card className="p-4 sm:p-5">
              <div className="mb-5 flex items-end justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold sm:text-xl">
                    Trending by Attention
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Explore the catalog and open any movie for details.
                  </p>
                </div>

                <a
                  href="/movies"
                  className="shrink-0 text-xs font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Explore all
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {movies.slice(0, 6).map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </Card>

            {featuredMovie && (
              <EngagementScore score={featuredMovie.attention} />
            )}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
