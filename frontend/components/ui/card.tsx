import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true
}: CardProps) {
  return (
    <div
      className={[
        "glass rounded-3xl",
        hover ? "glass-hover" : "",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}