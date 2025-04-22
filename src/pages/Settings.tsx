
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { RefreshCcw, Save, Key } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Settings = () => {
  const [metaApiKey, setMetaApiKey] = useState("");
  const [metaAccountId, setMetaAccountId] = useState("");
  const [n8nUrl, setN8nUrl] = useState("");
  const [n8nToken, setN8nToken] = useState("");
  
  const handleSaveIntegrations = () => {
    if (!metaApiKey || !metaAccountId || !n8nUrl || !n8nToken) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos para salvar as configurações.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Configurações salvas",
      description: "Suas configurações de integração foram salvas com sucesso.",
    });
  };
  
  const handleSaveNotifications = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas configurações de notificação foram salvas com sucesso.",
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie suas integrações e preferências
        </p>
      </div>
      
      <Tabs defaultValue="integrations" className="space-y-6">
        <TabsList>
          <TabsTrigger value="integrations">Integrações</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="robots">Robôs</TabsTrigger>
          <TabsTrigger value="account">Conta</TabsTrigger>
        </TabsList>
        
        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Meta</Badge>
                API do Facebook
              </CardTitle>
              <CardDescription>
                Configure a conexão com a API de Anúncios do Facebook
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="meta-api-key">API Key</Label>
                  <Input 
                    id="meta-api-key" 
                    type="password" 
                    placeholder="Digite sua API Key" 
                    value={metaApiKey}
                    onChange={(e) => setMetaApiKey(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-account-id">ID da Conta de Anúncios</Label>
                  <Input 
                    id="meta-account-id" 
                    placeholder="Digite o ID da sua conta de anúncios" 
                    value={metaAccountId}
                    onChange={(e) => setMetaAccountId(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meta-account-id">Permissões</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge>ads_management</Badge>
                  <Badge>ads_read</Badge>
                  <Badge>business_management</Badge>
                  <Badge>pages_read_engagement</Badge>
                </div>
              </div>
              
              <Button variant="outline" className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Testar Conexão
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">n8n</Badge>
                Integração com n8n
              </CardTitle>
              <CardDescription>
                Configure a conexão com sua instância do n8n
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="n8n-url">URL do n8n</Label>
                  <Input 
                    id="n8n-url" 
                    placeholder="https://seu-n8n.exemplo.com" 
                    value={n8nUrl}
                    onChange={(e) => setN8nUrl(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="n8n-token">Token de API</Label>
                  <Input 
                    id="n8n-token" 
                    type="password" 
                    placeholder="Digite seu token de API" 
                    value={n8nToken}
                    onChange={(e) => setN8nToken(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <div className="flex">
                  <Input 
                    id="webhook-url" 
                    readOnly
                    value="https://dinastia-robos.com/api/webhook/n8n"
                  />
                  <Button variant="ghost" className="ml-2">
                    Copiar
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Use esta URL como webhook nas suas automações n8n
                </p>
              </div>
              
              <Button variant="outline" className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Testar Conexão
              </Button>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button onClick={handleSaveIntegrations} className="gap-2">
              <Save className="h-4 w-4" />
              Salvar Configurações
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Notificação</CardTitle>
              <CardDescription>
                Gerencie como e quando deseja receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Notificações por Email</h3>
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-reports">Relatórios Diários</Label>
                    <Switch id="email-reports" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receba um relatório diário com o desempenho das campanhas
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-alerts">Alertas de Performance</Label>
                    <Switch id="email-alerts" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receba alertas quando houver mudanças significativas na performance
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-tasks">Execução de Tarefas</Label>
                    <Switch id="email-tasks" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Seja notificado quando tarefas agendadas forem executadas
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Notificações no Sistema</h3>
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="system-alerts">Alertas Críticos</Label>
                    <Switch id="system-alerts" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receba alertas quando houver problemas críticos com suas campanhas
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="system-reports">Relatórios Completados</Label>
                    <Switch id="system-reports" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Seja notificado quando relatórios estiverem prontos para visualização
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email-recipients">Destinatários de Email</Label>
                <Textarea 
                  id="email-recipients" 
                  placeholder="Email 1, Email 2, Email 3..."
                  rows={2}
                />
                <p className="text-xs text-muted-foreground">
                  Separe múltiplos emails com vírgulas
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button onClick={handleSaveNotifications}>
              Salvar Preferências
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="robots" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuração de Robôs</CardTitle>
              <CardDescription>
                Defina os comportamentos dos robôs automáticos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  Robô de Otimização
                  <Badge variant="outline" className="bg-green-50 text-green-800">Ativo</Badge>
                </h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="optimization-threshold">Limiar de Otimização (ROAS)</Label>
                      <Input id="optimization-threshold" type="number" placeholder="2.0" defaultValue="2.0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-bid-adjustment">Ajuste Máximo de Lance (%)</Label>
                      <Input id="max-bid-adjustment" type="number" placeholder="25" defaultValue="25" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-pause">Pausar Campanhas Automaticamente</Label>
                      <Switch id="auto-pause" defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pausar campanhas automaticamente quando o ROAS estiver abaixo do limiar por 3 dias
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  Robô de Relatórios
                  <Badge variant="outline" className="bg-green-50 text-green-800">Ativo</Badge>
                </h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="report-frequency">Frequência de Relatórios</Label>
                      <select
                        id="report-frequency"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="daily">Diário</option>
                        <option value="weekly">Semanal</option>
                        <option value="biweekly">Quinzenal</option>
                        <option value="monthly">Mensal</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="report-format">Formato de Relatório</Label>
                      <select
                        id="report-format"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="pdf">PDF</option>
                        <option value="excel">Excel</option>
                        <option value="csv">CSV</option>
                        <option value="all">Todos</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="report-metrics">Métricas do Relatório</Label>
                    <Textarea 
                      id="report-metrics" 
                      placeholder="Inclua métricas específicas para rastrear..."
                      defaultValue="impressions,clicks,ctr,cpc,conversions,roas,spend"
                      rows={2}
                    />
                    <p className="text-xs text-muted-foreground">
                      Separe as métricas com vírgulas
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  Robô de Campanhas
                  <Badge variant="outline" className="bg-green-50 text-green-800">Ativo</Badge>
                </h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-create">Criar Campanhas Automaticamente</Label>
                      <Switch id="auto-create" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Criar campanhas automáticas para produtos marcados como destaque
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-budget">Ajuste Automático de Orçamento</Label>
                      <Switch id="auto-budget" defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ajustar orçamentos com base no desempenho das campanhas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Salvar Configurações
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Conta</CardTitle>
              <CardDescription>
                Gerencie seus dados de perfil e configurações de segurança
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="user-name">Nome Completo</Label>
                  <Input id="user-name" defaultValue="Usuário" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-email">Email</Label>
                  <Input id="user-email" type="email" defaultValue="usuario@blcompany.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="user-company">Empresa</Label>
                <Input id="user-company" defaultValue="BL Comapny" />
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="font-medium">Segurança</h3>
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="two-factor">Autenticação de Dois Fatores</Label>
                    <Switch id="two-factor" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Adicione uma camada extra de segurança à sua conta
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="font-medium">API Keys</h3>
                <Separator />
                
                <div className="rounded-md border p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-medium">API Key Principal</h4>
                      <p className="text-sm text-muted-foreground">
                        Criada em 12/05/2023 • Expira em 12/05/2024
                      </p>
                    </div>
                    <Badge>Ativa</Badge>
                  </div>
                  
                  <div className="flex">
                    <Input readOnly value="···································" className="font-mono" />
                    <Button variant="outline" className="ml-2 gap-2">
                      <Key className="h-4 w-4" />
                      Mostrar
                    </Button>
                  </div>
                </div>
                
                <Button variant="outline" className="gap-2">
                  <Key className="h-4 w-4" />
                  Gerar Nova API Key
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Salvar Alterações
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;
