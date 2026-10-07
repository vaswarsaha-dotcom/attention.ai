export default function Progress({
  value
}: {
  value: number;
}) {
  return (
    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
        style={{
          width: `${Math.max(
            0,
            Math.min(100, value)
          )}%`
        }}
      />
    </div>
  );
}