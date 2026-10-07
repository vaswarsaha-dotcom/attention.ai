import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "AttentionAI — Why can't you look away?",
  description:
    "AI-powered movie attention and scene engagement analysis."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <Toaster
          theme="dark"
          position="bottom-right"
        />
      </body>
    </html>
  );
}