"use client";

import Link from "next/link";
import { useState } from "react";

import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen grid place-items-center p-5">
      <Card className="w-full max-w-md p-7">
        <div className="gradient-text text-2xl font-black">
          ✦ AttentionAI
        </div>

        <h1 className="text-3xl font-black mt-8">
          Welcome back
        </h1>

        <p className="text-slate-500 mt-2">
          Continue exploring cinematic attention.
        </p>

        <input
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          placeholder="Email"
          className="mt-6 w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-3 w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none"
        />

        <Button className="mt-4 w-full bg-cyan-300 text-slate-950">
          Sign in
        </Button>

        <p className="text-sm text-slate-500 mt-5 text-center">
          New here?{" "}
          <Link
            className="text-cyan-300"
            href="/auth/signup"
          >
            Create account
          </Link>
        </p>
      </Card>
    </main>
  );
}