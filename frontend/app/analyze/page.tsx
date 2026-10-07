"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import PageContainer from "@/components/layout/page-container";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

import {
  Brain,
  Upload,
  Film
} from "lucide-react";

export default function Analyze() {
  const [name, setName] = useState("");

  return (
    <>
      <Sidebar />
      <Navbar />

      <PageContainer>
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <p className="text-sm text-cyan-300">
              AI ANALYSIS
            </p>

            <h1 className="text-4xl font-black mt-2">
              Analyze a movie
            </h1>

            <p className="text-slate-500 mt-2">
              Enter a movie or upload scene metadata
              to generate an attention profile.
            </p>
          </div>

          <Card className="p-7">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-300/10 text-cyan-300">
                <Brain />
              </div>

              <div>
                <h2 className="font-semibold">
                  Movie analysis
                </h2>

                <p className="text-sm text-slate-500">
                  TMDB + feature extraction + ML
                  prediction
                </p>
              </div>
            </div>

            <input
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Movie title..."
              className="mt-6 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/30"
            />

            <div className="flex flex-wrap gap-3 mt-4">
              <Button className="bg-cyan-300 text-slate-950">
                <Film size={17} />
                Analyze {name || "Movie"}
              </Button>

              <Button className="bg-white/5">
                <Upload size={17} />
                Upload metadata
              </Button>
            </div>
          </Card>
        </div>
      </PageContainer>
    </>
  );
}