
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Gauge, ArrowUpRight, BarChart3, DollarSign, MousePointerClick, Eye } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: React.ReactNode;
  description?: string;
}

const MetricCard = ({ title, value, change, trend, icon, description }: MetricCardProps) => (
  <Card>
    <CardContent className="p-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-muted">{icon}</div>
          <div>
            <p className="text-xs font-medium text-muted-foreground">{title}</p>
            <h3 className="text-xl font-bold">{value}</h3>
          </div>
        </div>
        <Badge className={`flex items-center gap-1 ${
          trend === "up" 
            ? "bg-green-100 text-green-800 hover:bg-green-100" 
            : trend === "down" 
              ? "bg-red-100 text-red-800 hover:bg-red-100" 
              : "bg-gray-100 text-gray-800 hover:bg-gray-100"
        }`}>
          {trend === "up" ? <TrendingUp className="h-3 w-3" /> : 
           trend === "down" ? <TrendingDown className="h-3 w-3" /> : null}
          {change}
        </Badge>
      </div>
      {description && <p className="text-xs text-muted-foreground mt-2">{description}</p>}
    </CardContent>
  </Card>
);

export function PerformanceMetrics() {
  const [activeTab, setActiveTab] = useState<string>("engagement");

  const engagementMetrics = [
    {
      title: "CTR (Click-Through Rate)",
      value: "3.8%",
      change: "+0.6%",
      trend: "up" as const,
      icon: <MousePointerClick className="h-4 w-4" />,
      description: "Porcentagem de cliques por impressão"
    },
    {
      title: "Taxa de Engajamento",
      value: "5.2%",
      change: "+1.1%",
      trend: "up" as const,
      icon: <ArrowUpRight className="h-4 w-4" />,
      description: "Interações totais / alcance"
    },
    {
      title: "Frequência",
      value: "2.7x",
      change: "-0.3x",
      trend: "down" as const,
      icon: <Eye className="h-4 w-4" />,
      description: "Média de vezes que um usuário viu seu anúncio"
    },
    {
      title: "Relevância do Anúncio",
      value: "8/10",
      change: "+1",
      trend: "up" as const,
      icon: <Gauge className="h-4 w-4" />,
      description: "Pontuação de qualidade pela Meta"
    }
  ];

  const costMetrics = [
    {
      title: "CPC (Custo por Clique)",
      value: "R$ 1.25",
      change: "-R$ 0.30",
      trend: "up" as const,
      icon: <MousePointerClick className="h-4 w-4" />,
      description: "Custo médio por clique"
    },
    {
      title: "CPM (Custo por Mil Impressões)",
      value: "R$ 18.50",
      change: "+R$ 1.20",
      trend: "down" as const,
      icon: <Eye className="h-4 w-4" />,
      description: "Custo para mil pessoas visualizarem"
    },
    {
      title: "CPA (Custo por Aquisição)",
      value: "R$ 45.30",
      change: "-R$ 5.25",
      trend: "up" as const,
      icon: <DollarSign className="h-4 w-4" />,
      description: "Custo médio por conversão"
    },
    {
      title: "ROAS (Return on Ad Spend)",
      value: "3.2x",
      change: "+0.4x",
      trend: "up" as const,
      icon: <BarChart3 className="h-4 w-4" />,
      description: "Retorno sobre o investimento em anúncios"
    }
  ];

  const conversionMetrics = [
    {
      title: "Taxa de Conversão",
      value: "8.2%",
      change: "+1.4%",
      trend: "up" as const,
      icon: <ArrowUpRight className="h-4 w-4" />,
      description: "Porcentagem de conversões por clique"
    },
    {
      title: "Taxa de Retenção (Vídeos)",
      value: "65%",
      change: "+12%",
      trend: "up" as const,
      icon: <Gauge className="h-4 w-4" />,
      description: "Porcentagem média de visualização completa de vídeos"
    },
    {
      title: "Custo por Resultado",
      value: "R$ 12.50",
      change: "+R$ 1.20",
      trend: "down" as const,
      icon: <DollarSign className="h-4 w-4" />,
      description: "Custo para o objetivo principal da campanha"
    },
    {
      title: "Valor por Conversão",
      value: "R$ 145.00",
      change: "+R$ 15.30",
      trend: "up" as const,
      icon: <BarChart3 className="h-4 w-4" />,
      description: "Valor médio gerado por conversão"
    }
  ];

  return (
    <div className="mb-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
        <TabsList>
          <TabsTrigger value="engagement">Engajamento</TabsTrigger>
          <TabsTrigger value="cost">Custos</TabsTrigger>
          <TabsTrigger value="conversion">Conversões</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <TabsContent value="engagement" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {engagementMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="cost" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {costMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="conversion" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {conversionMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </TabsContent>
    </div>
  );
}
