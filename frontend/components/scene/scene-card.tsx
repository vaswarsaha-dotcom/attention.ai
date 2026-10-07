import type { Scene } from "@/types/api";
import Badge from "@/components/ui/badge";
import Progress from "@/components/ui/progress";

export default function SceneCard({
  scene
}: {
  scene: Scene;
}) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex justify-between gap-4">
        <div>
          <Badge>Scene {scene.number}</Badge>

          <h3 className="font-semibold mt-3">
            {scene.title}
          </h3>

          <p className="text-xs text-slate-500 mt-1">
            {scene.start} — {scene.end} ·{" "}
            {scene.duration}s
          </p>
        </div>

        <div className="text-right">
          <div className="text-xs text-slate-500">
            Attention
          </div>

          <div className="text-2xl font-bold gradient-text">
            {scene.attention}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Progress value={scene.attention} />
      </div>

      <p className="mt-4 text-sm text-slate-400 leading-6">
        {scene.explanation}
      </p>
    </div>
  );
}