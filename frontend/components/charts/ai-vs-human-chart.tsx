"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function AiVsHumanChart() {
  const data = [
    {
      name: "Attention",
      AI: 91,
      Human: 88
    },
    {
      name: "Emotion",
      AI: 87,
      Human: 92
    },
    {
      name: "Suspense",
      AI: 94,
      Human: 90
    },
    {
      name: "Pacing",
      AI: 96,
      Human: 89
    }
  ];

  return (
    <div className="h-72">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#718096"
          />

          <YAxis
            domain={[0, 100]}
            stroke="#718096"
          />

          <Tooltip
            contentStyle={{
              background: "#0b151f",
              border:
                "1px solid rgba(255,255,255,.1)"
            }}
          />

          <Legend />

          <Bar
            dataKey="AI"
            fill="#26e7d0"
            radius={[6, 6, 0, 0]}
          />

          <Bar
            dataKey="Human"
            fill="#8b5cf6"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}