import { cn } from "@/lib/utils";

export default function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "rounded-xl px-4 py-2.5 font-medium transition hover:-translate-y-0.5 disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}