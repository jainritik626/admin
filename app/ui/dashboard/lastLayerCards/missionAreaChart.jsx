"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Mo", Missions: 5 },
  { name: "Tu", Missions: 10 },
  { name: "We", Missions: 15 },
  { name: "Th", Missions: 10 },
  { name: "Fr", Missions: 20 },
  { name: "Sa", Missions: 25 },
  { name: "Su", Missions: 30 },
];

const MissionAreaChart = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">No. of Missions</h2>
      <p className="text-sm text-gray-600 mb-4">Evaluated per day</p>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Missions"
          stroke="#FF6384"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};

export default MissionAreaChart;
