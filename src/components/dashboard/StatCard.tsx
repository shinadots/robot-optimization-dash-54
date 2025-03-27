
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  description: string;
}

export function StatCard({ title, value, change, trend, description }: StatCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
          </div>
          <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            trend === "up" 
              ? "bg-green-100 text-green-800" 
              : trend === "down" 
                ? "bg-red-100 text-red-800" 
                : "bg-gray-100 text-gray-800"
          }`}>
            {trend === "up" && <ArrowUp className="w-3 h-3 mr-1" />}
            {trend === "down" && <ArrowDown className="w-3 h-3 mr-1" />}
            {change}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">{description}</p>
      </CardContent>
    </Card>
  );
}
