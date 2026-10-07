"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function FeatureBarChart({
  data
}: {
  data: {
    name: string;
    value: number;
  }[];
}) {
  return (
    <div className="h-72">
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
        >
          <CartesianGrid
            stroke="rgba(255,255,255,.06)"
            horizontal={false}
          />

          <XAxis
            type="number"
            domain={[0, 100]}
            stroke="#718096"
          />

          <YAxis
            dataKey="name"
            type="category"
            stroke="#718096"
            width={100}
          />

          <Tooltip
            contentStyle={{
              background: "#0b151f",
              border:
                "1px solid rgba(255,255,255,.1)"
            }}
          />

          <Bar
            dataKey="value"
            fill="#8b5cf6"
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}