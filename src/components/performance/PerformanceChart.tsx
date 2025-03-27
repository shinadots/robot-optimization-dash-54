
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for the chart
const generateData = () => {
  const data = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      ctr: (2 + Math.random() * 3).toFixed(2),
      cpc: (10 + Math.random() * 8).toFixed(2),
      conversionRate: (5 + Math.random() * 5).toFixed(2),
    });
  }
  return data;
};

export function PerformanceChart() {
  const [data] = useState(generateData());
  const [metric, setMetric] = useState("ctr");
  
  const getMetricColor = () => {
    switch (metric) {
      case "ctr":
        return "#8b5cf6";
      case "cpc":
        return "#ec4899";
      case "conversionRate":
        return "#10b981";
      default:
        return "#8b5cf6";
    }
  };
  
  const getMetricName = () => {
    switch (metric) {
      case "ctr":
        return "CTR (%)";
      case "cpc":
        return "CPC (R$)";
      case "conversionRate":
        return "Taxa de Conversão (%)";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={metric} onValueChange={setMetric}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione a métrica" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ctr">CTR (%)</SelectItem>
            <SelectItem value="cpc">CPC (R$)</SelectItem>
            <SelectItem value="conversionRate">Taxa de Conversão (%)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <Tooltip 
              formatter={(value) => [
                metric === "cpc" ? `R$ ${value}` : `${value}%`,
                getMetricName()
              ]}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey={metric}
              stroke={getMetricColor()}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
              name={getMetricName()}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
