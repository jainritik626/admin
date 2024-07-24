"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Mo", Missions: 12, Giveaways: 9, JobsInternships: 4 },
  { name: "Tu", Missions: 18, Giveaways: 12, JobsInternships: 6 },
  { name: "We", Missions: 15, Giveaways: 10, JobsInternships: 5 },
  { name: "Th", Missions: 20, Giveaways: 14, JobsInternships: 8 },
  { name: "Fr", Missions: 14, Giveaways: 10, JobsInternships: 6 },
  { name: "Sa", Missions: 16, Giveaways: 12, JobsInternships: 7 },
  { name: "Su", Missions: 18, Giveaways: 13, JobsInternships: 8 },
];

const OpportunitiesBarChart = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">No. of Opportunities</h2>
      <p className="text-sm text-gray-600 mb-4">Listed per day</p>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 0, right: 10, left: 10, bottom: 30 }}
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingBottom: 20 }} />
        <Bar dataKey="Missions" stackId="a" fill="#FF6384" />
        <Bar dataKey="Giveaways" stackId="a" fill="#36A2EB" />
        <Bar dataKey="JobsInternships" stackId="a" fill="#FFCE56" />
      </BarChart>
    </div>
  );
};

export default OpportunitiesBarChart;
