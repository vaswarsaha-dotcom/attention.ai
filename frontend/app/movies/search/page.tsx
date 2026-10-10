import { NextResponse } from "next/server";

import {
  searchTMDBMovies,
  tmdbMovieToAttentionMovie
} from "@/lib/tmdb";

export async function GET(request: Request) {
  const { searchParams } =
    new URL(request.url);

  const query =
    searchParams.get("query")?.trim() ?? "";

  if (!query) {
    return NextResponse.json([]);
  }

  try {
    const results =
      await searchTMDBMovies(query);

    return NextResponse.json(
      results.map(tmdbMovieToAttentionMovie)
    );
  } catch (error) {
    console.error(
      "TMDB movie search failed:",
      error
    );

    return NextResponse.json(
      {
        error: "Movie search is temporarily unavailable."
      },
      { status: 502 }
    );
  }
}