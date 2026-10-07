export function cn(
  ...v: Array<string | false | null | undefined>
) {
  return v.filter(Boolean).join(" ");
}

export function scoreLabel(score: number) {
  if (score >= 90) return "Exceptional";
  if (score >= 80) return "High";
  if (score >= 70) return "Good";
  return "Low";
}