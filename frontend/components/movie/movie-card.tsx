"use client";

import Image from "next/image";
import Link from "next/link";

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
      <div className="relative overflow-hidden rounded-2xl aspect-[2/3] bg-slate-900">
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          fill
          sizes="(max-width: 768px) 50vw, 220px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
          <div className="font-semibold truncate">
            {movie.title}
          </div>

          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-slate-300">
              {movie.releaseDate?.slice(0, 4)}
            </span>

            <Badge>{movie.attention}</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}