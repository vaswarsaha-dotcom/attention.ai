
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Star,
  Eye,
  Brain,
  Sparkles
} from "lucide-react";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import Card from "@/components/ui/card";
import { getMovie } from "@/lib/movie-data";

export default async function MovieDetailsPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = getMovie(decodeURIComponent(id));

  if (!movie) notFound();

  const features = [
    { label: "Action", value: movie.features.action },
    { label: "Suspense", value: movie.features.suspense },
    { label: "Emotion", value: movie.features.emotion },
    { label: "Music", value: movie.features.music },
    { label: "Pacing", value: movie.features.pacing },
    { label: "Visuals", value: movie.features.visual },
    { label: "Dialogue", value: movie.features.dialogue }
  ];

  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="mx-auto max-w-6xl space-y-6">
          <Link
            href="/movies"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:bg-white/[0.07] hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Explore
          </Link>

          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/65 shadow-2xl shadow-black/20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cyan-400/9 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-purple-500/9 blur-3xl" />

            <div className="relative grid gap-7 p-5 sm:p-8 md:grid-cols-[230px_minmax(0,1fr)] lg:gap-10 lg:p-10">
              <div className="mx-auto w-full max-w-57.5">
                <div className="relative aspect-2/3 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
                  <Image
                    src={movie.posterUrl}
                    alt={`${movie.title} poster`}
                    fill
                    priority
                    sizes="(max-width: 768px) 70vw, 230px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-xl border border-cyan-300/15 bg-cyan-300/6 p-3">
                  <Eye size={17} className="text-cyan-300" />
                  <span className="text-sm text-slate-300">
                    Attention score
                  </span>
                  <strong className="ml-auto text-lg text-cyan-200">
                    {movie.attention}
                  </strong>
                </div>
              </div>

              <div className="flex min-w-0 flex-col justify-center">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  <Sparkles size={14} />
                  Movie intelligence
                </p>

                <h1 className="mt-4 wrap-break-word text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {movie.title}
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-300">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={15} className="text-slate-500" />
                    {movie.releaseDate?.slice(0, 4) || "Year unavailable"}
                  </span>

                  {movie.runtime > 0 && (
                    <span className="flex items-center gap-2">
                      <Clock3 size={15} className="text-slate-500" />
                      {movie.runtime} min
                    </span>
                  )}

                  <span className="flex items-center gap-2">
                    <Star size={15} className="fill-amber-300 text-amber-300" />
                    {Number(movie.rating).toFixed(1)}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Synopsis
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    {movie.overview ||
                      "A description for this movie has not been added yet."}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={`/analyze?movie=${encodeURIComponent(movie.id)}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                  >
                    <Brain size={17} />
                    Analyze movie
                  </Link>

                  <Link
                    href="/compare"
                    className="rounded-xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8"
                  >
                    Compare movies
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <Card className="p-5 sm:p-7">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-purple-300/15 bg-purple-300/8 text-purple-200">
                <Brain size={19} />
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  Cinematic attention signals
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Review the feature scores currently stored for this movie.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {features.map(({ label, value }) => {
                const safeValue = Math.max(
                  0,
                  Math.min(100, Number(value) || 0)
                );

                return (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-300">{label}</span>
                      <span className="font-semibold tabular-nums text-slate-100">
                        {safeValue}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/6">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-cyan-300 to-purple-400 transition-all duration-700"
                        style={{ width: `${safeValue}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              These are stored project feature scores, not verified
              audience measurements unless actual viewing data supports them.
            </p>
          </Card>
        </div>
      </PageContainer>
    </>
  );
}
