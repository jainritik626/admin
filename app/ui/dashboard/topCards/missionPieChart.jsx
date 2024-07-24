"use client";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const MissionCard = () => {
  const mockData = [
    { name: "Started", value: 60 },
    { name: "Evaluating", value: 20 },
    { name: "Completed", value: 20 },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FF5544"];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-l  mb-2">Branded vs Non-Branded</h2>
      <p className="text-2xl font-bold">6.4 K Total</p>
      <PieChart width={400} height={250}>
        <Pie
          data={mockData}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {mockData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="middle"
          layout="vertical"
          iconType="circle"
        />
      </PieChart>
    </div>
  );
};

export default MissionCard;
