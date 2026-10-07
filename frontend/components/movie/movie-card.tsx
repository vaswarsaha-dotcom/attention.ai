"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Star } from "lucide-react";

import type { Movie } from "@/types/api";
import Badge from "@/components/ui/badge";

export default function MovieCard({
  movie
}: {
  movie: Movie;
}) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group block"
    >
      <motion.article
        whileHover={{
          y: -6
        }}
        transition={{
          duration: 0.2
        }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 shadow-xl shadow-black/10"
      >
        <div className="relative aspect-2/3 overflow-hidden bg-slate-900">
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 220px"
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent opacity-80" />

          <div className="absolute left-3 top-3">
            <Badge>
              <Brain size={12} />
              {movie.attention}
            </Badge>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-3">
            <h3 className="truncate font-bold">
              {movie.title}
            </h3>

            <div className="mt-1 flex items-center justify-between text-xs text-slate-300">
              <span>
                {movie.releaseDate?.slice(0, 4)}
              </span>

              <span className="flex items-center gap-1">
                <Star
                  size={12}
                  fill="currentColor"
                  className="text-yellow-300"
                />
                {movie.rating}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-3 py-2.5">
          <span className="text-xs text-slate-500">
            Attention
          </span>

          <span className="text-sm font-bold text-cyan-300">
            {movie.attention}/100
          </span>
        </div>
      </motion.article>
    </Link>
  );
}