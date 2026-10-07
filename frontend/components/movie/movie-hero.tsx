"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Brain,
  ChevronRight
} from "lucide-react";

import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import type { Movie } from "@/types/api";

export default function MovieHero({
  movie
}: {
  movie: Movie;
}) {
  const imageUrl =
    movie.backdropUrl || movie.posterUrl;

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 15
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      className="relative min-h-[420px] overflow-hidden rounded-3xl flex items-end"
    >
      {/* Background */}
      <Image
        src={imageUrl}
        alt={movie.title}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b12] via-[#050b12]/75 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050b12] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-10 max-w-2xl">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>AI Recommendation</Badge>
          <Badge>Trending</Badge>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
          {movie.title}
        </h1>

        <p className="mt-4 text-slate-300 leading-7 max-w-xl">
          {movie.overview ||
            "AttentionAI analyzes cinematic signals to explain what makes this movie impossible to ignore."}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <Button className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
            <Play
              size={17}
              fill="currentColor"
            />
            Analyze Movie
          </Button>

          <Button className="bg-white/10 border border-white/10 hover:bg-white/15">
            <Brain size={17} />
            Why this movie?
          </Button>

          <Button className="bg-white/5 hover:bg-white/10">
            <ChevronRight size={17} />
            Details
          </Button>
        </div>
      </div>

      {/* Attention score */}
      <div className="absolute z-10 right-5 top-5 hidden md:block glass rounded-2xl p-4 w-44">
        <div className="text-xs text-slate-400">
          ATTENTION SCORE
        </div>

        <div className="text-4xl font-black gradient-text mt-1">
          {movie.attention}
        </div>

        <div className="text-xs text-slate-500">
          out of 100
        </div>
      </div>
    </motion.section>
  );
}