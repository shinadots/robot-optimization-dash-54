
import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Mock data for the chart
const generateData = () => {
  const data = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      impressoes: Math.floor(Math.random() * 5000) + 8000,
      clicks: Math.floor(Math.random() * 1000) + 500,
      conversoes: Math.floor(Math.random() * 100) + 20,
    });
  }
  return data;
};

export function ChartContainer() {
  const [data, setData] = useState(generateData());

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="impressoes"
            stackId="1"
            stroke="#8b5cf6"
            fill="#c4b5fd"
            fillOpacity={0.3}
            name="Impressões"
          />
          <Area
            type="monotone"
            dataKey="clicks"
            stackId="2"
            stroke="#6d28d9"
            fill="#a78bfa"
            fillOpacity={0.5}
            name="Clicks"
          />
          <Area
            type="monotone"
            dataKey="conversoes"
            stackId="3"
            stroke="#4c1d95"
            fill="#8b5cf6"
            fillOpacity={0.7}
            name="Conversões"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
