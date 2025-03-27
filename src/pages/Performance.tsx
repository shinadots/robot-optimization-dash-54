
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreativeTable } from "@/components/performance/CreativeTable";
import { CreativeInsights } from "@/components/performance/CreativeInsights";
import { PerformanceChart } from "@/components/performance/PerformanceChart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Performance = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Performance de Criativos</h1>
        <p className="text-muted-foreground">
          Analise o desempenho de seus criativos e otimize suas campanhas
        </p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row justify-between gap-4">
        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="all">Todos Criativos</TabsTrigger>
            <TabsTrigger value="images">Imagens</TabsTrigger>
            <TabsTrigger value="videos">Vídeos</TabsTrigger>
            <TabsTrigger value="carousel">Carrossel</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Select defaultValue="7days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="yesterday">Ontem</SelectItem>
              <SelectItem value="7days">Últimos 7 dias</SelectItem>
              <SelectItem value="30days">Últimos 30 dias</SelectItem>
              <SelectItem value="custom">Personalizado</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Campanha" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas Campanhas</SelectItem>
              <SelectItem value="blackfriday">Black Friday 2023</SelectItem>
              <SelectItem value="excel">Lançamento Curso Excel</SelectItem>
              <SelectItem value="leadmagnet">Lead Magnet Programação</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">CTR Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-3xl font-bold">3.8%</div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+0.6%</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Custo por Resultado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-3xl font-bold">R$ 12,50</div>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">+R$ 1,20</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Taxa de Conversão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-end">
              <div className="text-3xl font-bold">8.2%</div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+1.4%</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Desempenho por Métrica</CardTitle>
            <CardDescription>
              Analise as tendências de desempenho ao longo do tempo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PerformanceChart />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Insights de Criativos</CardTitle>
            <CardDescription>
              Recomendações baseadas no desempenho
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CreativeInsights />
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Lista de Criativos</CardTitle>
          <CardDescription>
            Visualize e compare o desempenho de todos os seus criativos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreativeTable />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Performance;
