"use client";

import { useSearchParams } from "next/navigation";
import MoviesPage from "@/app/movies/page";

export default function ExplorePage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const MoviesPageWithQuery = MoviesPage as unknown as (props: {
    initialQuery: string;
  }) => JSX.Element;

  return <MoviesPageWithQuery initialQuery={search ?? ""} />;
}