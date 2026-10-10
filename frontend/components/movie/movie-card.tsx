
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye, Star } from "lucide-react";

import type { Movie } from "@/types/api";

export default function MovieCard({
  movie
}: {
  movie: Movie;
}) {
  const year = movie.releaseDate?.slice(0, 4) ?? "—";

  return (
    <Link
      href={`/movies/${encodeURIComponent(movie.id)}`}
      aria-label={`View details for ${movie.title}`}
      className="group block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    >
      <article className="h-full overflow-hidden rounded-2xl border border-white/8 bg-slate-950/45 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/25 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-cyan-950/20">
        <div className="relative aspect-2/3 overflow-hidden bg-slate-900">
          <Image
            src={movie.posterUrl}
            alt={`${movie.title} poster`}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 210px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-transparent to-black/20" />

          <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2 py-1.5 text-[10px] font-semibold text-white backdrop-blur-xl">
            <Eye size={12} className="text-cyan-300" />
            {movie.attention}% attention
          </div>

          <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-xs font-medium text-white">
              View details
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>

        <div className="p-3.5">
          <h3 className="line-clamp-1 text-sm font-semibold text-slate-100 transition-colors group-hover:text-cyan-200">
            {movie.title}
          </h3>

          <div className="mt-2 flex items-center justify-between gap-2 text-xs text-slate-400">
            <span>{year}</span>
            <span className="flex items-center gap-1">
              <Star
                size={12}
                className="fill-amber-300 text-amber-300"
              />
              {Number(movie.rating).toFixed(1)}
            </span>
          </div>

          <p className="mt-3 line-clamp-3 text-xs leading-5 text-slate-500">
            {movie.overview ||
              "Open this movie to explore its details."}
          </p>
        </div>
      </article>
    </Link>
  );
}
