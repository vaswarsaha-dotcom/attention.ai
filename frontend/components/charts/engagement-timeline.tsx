"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function EngagementTimeline({
  data
}: {
  data: {
    minute: number;
    score: number;
  }[];
}) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid
            stroke="rgba(255,255,255,.06)"
          />

          <XAxis
            dataKey="minute"
            stroke="#718096"
            tickFormatter={(value) => `${value}m`}
          />

          <YAxis
            stroke="#718096"
            domain={[0, 100]}
          />

          <Tooltip
            contentStyle={{
              background: "#0b151f",
              border:
                "1px solid rgba(255,255,255,.1)",
              borderRadius: 12
            }}
          />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#26e7d0"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}