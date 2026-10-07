import Progress from "@/components/ui/progress";

export default function EngagementScore({
  score
}: {
  score: number;
}) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="text-xs tracking-widest text-slate-500">
        ATTENTION SCORE
      </div>

      <div className="text-5xl font-black mt-2 gradient-text">
        {score}
      </div>

      <div className="text-sm text-slate-400 mb-4">
        AI estimated engagement
      </div>

      <Progress value={score} />
    </div>
  );
}