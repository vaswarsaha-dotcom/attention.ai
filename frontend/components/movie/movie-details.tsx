import type { Movie } from "@/types/api";
import Progress from "@/components/ui/progress";

export default function MovieDetails({
  movie
}: {
  movie: Movie;
}) {
  const f = movie.features;

  const rows = [
    ["Suspense", f.suspense],
    ["Emotion", f.emotion],
    ["Pacing", f.pacing],
    ["Music", f.music],
    ["Visual Activity", f.visual],
    ["Dialogue", f.dialogue],
    ["Action", f.action]
  ];

  return (
    <div className="glass rounded-2xl p-5">
      <h2 className="text-lg font-semibold">
       Why can&apos;t you look away??
      </h2>

      <p className="text-sm text-slate-400 mt-2 leading-6">
        AttentionAI estimates attention from pacing,
        emotion, suspense, music, visual activity,
        dialogue and action signals.
      </p>

      <div className="mt-6 space-y-4">
        {rows.map(([name, value]) => (
          <div key={name}>
            <div className="flex justify-between text-sm mb-1.5">
              <span>{name}</span>
              <span className="text-slate-400">
                {value}
              </span>
            </div>

            <Progress value={Number(value)} />
          </div>
        ))}
      </div>
    </div>
  );
}