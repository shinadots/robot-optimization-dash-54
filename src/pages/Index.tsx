
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/dashboard/ChartContainer";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentCampaigns } from "@/components/dashboard/RecentCampaigns";
import { CampaignPerformance } from "@/components/dashboard/CampaignPerformance";
import { RobotStatus } from "@/components/dashboard/RobotStatus";
import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Teste Dash Bl</h1>
        <p className="text-muted-foreground">
          Visão geral da performance das suas campanhas e robôs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard 
          title="Campanhas Ativas" 
          value="24" 
          change="+12%" 
          trend="up" 
          description="Últimos 30 dias"
        />
        <StatCard 
          title="CTR Médio" 
          value="3.2%" 
          change="-0.8%" 
          trend="down" 
          description="Comparado à última semana"
        />
        <StatCard 
          title="ROI Total" 
          value="R$ 12.480" 
          change="+23%" 
          trend="up" 
          description="Este mês"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Performance das Campanhas</span>
              <Tabs defaultValue="7dias">
                <TabsList>
                  <TabsTrigger value="7dias">7 dias</TabsTrigger>
                  <TabsTrigger value="30dias">30 dias</TabsTrigger>
                  <TabsTrigger value="90dias">90 dias</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status dos Robôs</CardTitle>
          </CardHeader>
          <CardContent>
            <RobotStatus />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Campanhas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentCampaigns />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance por Criativo</CardTitle>
          </CardHeader>
          <CardContent>
            <CampaignPerformance />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
