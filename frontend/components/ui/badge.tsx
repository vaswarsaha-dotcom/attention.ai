export default function Badge({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex rounded-full bg-cyan-300/10 border border-cyan-300/15 px-2.5 py-1 text-xs text-cyan-200">
      {children}
    </span>
  );
}