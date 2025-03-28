
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
      engagement: (4 + Math.random() * 4).toFixed(2),
      cpm: (15 + Math.random() * 10).toFixed(2),
      cpa: (40 + Math.random() * 15).toFixed(2),
      roas: (2 + Math.random() * 2).toFixed(1),
      frequency: (1.5 + Math.random() * 2).toFixed(1),
      retention: (50 + Math.random() * 30).toFixed(1),
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
      case "engagement":
        return "#3b82f6";
      case "cpm":
        return "#f59e0b";
      case "cpa":
        return "#ef4444";
      case "roas":
        return "#14b8a6";
      case "frequency":
        return "#8b5cf6";
      case "retention":
        return "#6366f1";
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
      case "engagement":
        return "Taxa de Engajamento (%)";
      case "cpm":
        return "CPM (R$)";
      case "cpa":
        return "CPA (R$)";
      case "roas":
        return "ROAS (x)";
      case "frequency":
        return "Frequência (x)";
      case "retention":
        return "Taxa de Retenção (%)";
      default:
        return "";
    }
  };

  // Determine if the metric is a monetary value
  const isMonetary = () => {
    return ["cpc", "cpm", "cpa"].includes(metric);
  };

  // Determine if the metric is a percentage
  const isPercentage = () => {
    return ["ctr", "conversionRate", "engagement", "retention"].includes(metric);
  };

  // Determine if the metric has an "x" unit
  const isMultiplier = () => {
    return ["roas", "frequency"].includes(metric);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={metric} onValueChange={setMetric}>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Selecione a métrica" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ctr">CTR (%)</SelectItem>
            <SelectItem value="engagement">Taxa de Engajamento (%)</SelectItem>
            <SelectItem value="cpc">CPC (R$)</SelectItem>
            <SelectItem value="cpm">CPM (R$)</SelectItem>
            <SelectItem value="cpa">CPA (R$)</SelectItem>
            <SelectItem value="roas">ROAS (x)</SelectItem>
            <SelectItem value="conversionRate">Taxa de Conversão (%)</SelectItem>
            <SelectItem value="frequency">Frequência (x)</SelectItem>
            <SelectItem value="retention">Taxa de Retenção Vídeos (%)</SelectItem>
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
                isMonetary() ? `R$ ${value}` : 
                isPercentage() ? `${value}%` : 
                isMultiplier() ? `${value}x` : value,
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
