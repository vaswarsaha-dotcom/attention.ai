import type { Movie } from "@/types/api";

export const movies: Movie[] = [
  {
    id: "interstellar",
    title: "Interstellar",
    overview:
      "A breathtaking journey through space, time and human connection where every major sequence is designed to keep attention high.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5Qtb5P.jpg",
    releaseDate: "2014-11-07",
    runtime: 169,
    genres: ["Sci-Fi", "Drama"],
    rating: 8.7,
    attention: 95,
    features: {
      action: 78,
      suspense: 90,
      emotion: 96,
      music: 99,
      pacing: 88,
      visual: 98,
      dialogue: 79
    }
  },
  {
    id: "dune-2",
    title: "Dune: Part Two",
    overview:
      "A visually spectacular science-fiction epic combining action, suspense, emotional stakes and extraordinary world building.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    releaseDate: "2024-03-01",
    runtime: 166,
    genres: ["Sci-Fi", "Drama", "Action"],
    rating: 8.6,
    attention: 94,
    features: {
      action: 94,
      suspense: 94,
      emotion: 88,
      music: 95,
      pacing: 93,
      visual: 99,
      dialogue: 76
    }
  },
  {
    id: "inception",
    title: "Inception",
    overview:
      "A mind-bending thriller built around dream manipulation, escalating tension and carefully controlled pacing.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    releaseDate: "2010-07-16",
    runtime: 148,
    genres: ["Sci-Fi", "Thriller", "Action"],
    rating: 8.4,
    attention: 92,
    features: {
      action: 89,
      suspense: 96,
      emotion: 82,
      music: 91,
      pacing: 95,
      visual: 96,
      dialogue: 88
    }
  },
  {
    id: "dark-knight",
    title: "The Dark Knight",
    overview:
      "A high-pressure crime thriller driven by conflict, suspense, iconic performances and consistently escalating stakes.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
    releaseDate: "2008-07-18",
    runtime: 152,
    genres: ["Action", "Drama", "Thriller"],
    rating: 9.0,
    attention: 97,
    features: {
      action: 95,
      suspense: 98,
      emotion: 91,
      music: 94,
      pacing: 96,
      visual: 94,
      dialogue: 98
    }
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    overview:
      "A tense historical drama using dialogue, music, pacing and psychological pressure to maintain engagement.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    releaseDate: "2023-07-21",
    runtime: 180,
    genres: ["Drama", "Thriller"],
    rating: 8.6,
    attention: 93,
    features: {
      action: 62,
      suspense: 94,
      emotion: 92,
      music: 97,
      pacing: 91,
      visual: 95,
      dialogue: 99
    }
  },
  {
    id: "spiderverse",
    title: "Spider-Man: Across the Spider-Verse",
    overview:
      "A visually explosive animated adventure packed with color, movement, emotion and rapid cinematic transitions.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    releaseDate: "2023-06-02",
    runtime: 140,
    genres: ["Animation", "Action", "Sci-Fi"],
    rating: 8.6,
    attention: 96,
    features: {
      action: 96,
      suspense: 88,
      emotion: 91,
      music: 96,
      pacing: 98,
      visual: 100,
      dialogue: 82
    }
  },
  {
    id: "arrival",
    title: "Arrival",
    overview:
      "A thoughtful science-fiction mystery balancing emotional depth, atmosphere and intellectual curiosity.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/6C8d6b7Z6eW6hR7N8pXyWQh3Qqf.jpg",
    releaseDate: "2016-11-10",
    runtime: 116,
    genres: ["Sci-Fi", "Drama"],
    rating: 7.9,
    attention: 87,
    features: {
      action: 42,
      suspense: 86,
      emotion: 93,
      music: 89,
      pacing: 82,
      visual: 94,
      dialogue: 91
    }
  },
  {
    id: "whiplash",
    title: "Whiplash",
    overview:
      "A relentless character drama where rhythm, pressure, conflict and performance create intense engagement.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/fRGxZuo7jJUWQsVg9Kj9V9xYq2O.jpg",
    releaseDate: "2014-10-10",
    runtime: 107,
    genres: ["Drama", "Music"],
    rating: 8.5,
    attention: 94,
    features: {
      action: 48,
      suspense: 94,
      emotion: 95,
      music: 100,
      pacing: 98,
      visual: 88,
      dialogue: 94
    }
  },
  {
    id: "mad-max",
    title: "Mad Max: Fury Road",
    overview:
      "A kinetic action experience built around relentless movement, visual spectacle and high-intensity pacing.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/8y2qzM95yqGJq3Y6JqG7Jr2V0eE.jpg",
    releaseDate: "2015-05-15",
    runtime: 120,
    genres: ["Action", "Thriller"],
    rating: 8.1,
    attention: 96,
    features: {
      action: 100,
      suspense: 95,
      emotion: 78,
      music: 94,
      pacing: 100,
      visual: 99,
      dialogue: 63
    }
  },
  {
    id: "la-la-land",
    title: "La La Land",
    overview:
      "A colorful musical romance combining emotional warmth, music, visual style and uplifting pacing.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/original/n7gQ2h6QYV1q1XQZ7Q2nQ9V1QxQ.jpg",
    releaseDate: "2016-12-09",
    runtime: 128,
    genres: ["Romance", "Drama"],
    rating: 8.0,
    attention: 89,
    features: {
      action: 50,
      suspense: 68,
      emotion: 96,
      music: 99,
      pacing: 88,
      visual: 91,
      dialogue: 86
    }
  }
];

export type Mood =
  | "😊 Happy"
  | "😢 Sad"
  | "😌 Relaxed"
  | "⚡ Energetic"
  | "❤️ Romantic"
  | "😱 Thrilled"
  | "🧠 Curious";

export const moods: Mood[] = [
  "😊 Happy",
  "😢 Sad",
  "😌 Relaxed",
  "⚡ Energetic",
  "❤️ Romantic",
  "😱 Thrilled",
  "🧠 Curious"
];

export const moodRecommendations: Record<
  Mood,
  { movieId: string; compatibility: number; reason: string }
> = {
  "😊 Happy": {
    movieId: "la-la-land",
    compatibility: 96,
    reason:
      "Warm emotion, musical energy, colorful visuals and uplifting pacing make this a strong feel-good match."
  },
  "😢 Sad": {
    movieId: "interstellar",
    compatibility: 94,
    reason:
      "Deep emotional stakes, powerful music and human relationships create an emotionally immersive experience."
  },
  "😌 Relaxed": {
    movieId: "arrival",
    compatibility: 91,
    reason:
      "Atmospheric visuals, controlled pacing and thoughtful storytelling create a calmer viewing rhythm."
  },
  "⚡ Energetic": {
    movieId: "mad-max",
    compatibility: 99,
    reason:
      "Extreme pacing, action intensity and visual movement make this the strongest high-energy match."
  },
  "❤️ Romantic": {
    movieId: "la-la-land",
    compatibility: 98,
    reason:
      "Romance, music, emotional warmth and visual style strongly align with a romantic mood."
  },
  "😱 Thrilled": {
    movieId: "dark-knight",
    compatibility: 98,
    reason:
      "Suspense, conflict, escalating stakes and dialogue create consistently high tension."
  },
  "🧠 Curious": {
    movieId: "inception",
    compatibility: 97,
    reason:
      "Complex ideas, layered storytelling and mystery provide strong intellectual engagement."
  }
};

export function getMovie(movieId: string) {
  return movies.find((movie) => movie.id === movieId);
}