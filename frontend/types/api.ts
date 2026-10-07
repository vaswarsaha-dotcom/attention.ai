export interface HealthResponse {
  status: string;
  app: string;
  environment: string;
  tmdb_configured: boolean;
  database_configured: boolean;
}

export interface AttentionFeatures {
  action: number;
  suspense: number;
  emotion: number;
  music: number;
  pacing: number;
  visual: number;
  dialogue: number;
}

export interface Movie {
  id: string;
  tmdbId?: number;
  title: string;
  overview: string;
  posterUrl: string;
  backdropUrl: string;
  releaseDate: string;
  runtime: number;
  genres: string[];
  rating: number;
  attention: number;
  features: AttentionFeatures;
}

export interface Scene {
  id: string;
  movieId: string;
  number: number;
  title: string;
  start: string;
  end: string;
  duration: number;
  attention: number;
  features: AttentionFeatures;
  explanation: string;
}