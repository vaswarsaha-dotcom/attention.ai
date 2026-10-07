import type { Movie, Scene } from "./api";

export interface MovieAnalysis {
  movie: Movie;
  scenes: Scene[];
  overall: number;
  summary: string;
}