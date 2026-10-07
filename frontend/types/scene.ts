import type { AttentionFeatures } from "./api";

export interface SceneAnalysis {
  sceneId: string;
  attention: number;
  features: AttentionFeatures;
  explanation: string;
}