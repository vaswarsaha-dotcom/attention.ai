"use client";

import { useState } from "react";
import { apiPost } from "@/lib/api-client";

export interface AnalysisResult {
  movie_id: string;
  attention_score: number;
  confidence_score: number;
  explanation: string;
}

export interface AnalysisPayload {
  movie_id: string;
  title?: string;
  features?: Record<string, number>;
}

export function useAnalysis() {
  const [loading, setLoading] = useState(false);

  const analyze = async (
    payload: AnalysisPayload
  ): Promise<AnalysisResult> => {
    setLoading(true);

    try {
      return await apiPost<AnalysisResult>(
        "/api/analysis",
        payload
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    analyze,
    loading
  };
}