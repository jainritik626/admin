"use client";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BrandedChart = () => {
  const mockData = [
    { name: "Branded", value: 60 },
    { name: "Non-Branded", value: 40 },
  ];

  const COLORS = ["#FF6384", "#36A2EB"];

  return (
    <div className="bg-white shadow rounded-lg p-4 h-full flex flex-col">
      <div className="text-l  mb-2">Branded vs Non-Branded</div>
      <div className="text-2xl font-bold">6.4 K Total</div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
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
              {mockData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
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
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BrandedChart;
