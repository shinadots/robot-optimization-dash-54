
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { FileSpreadsheet, PlusCircle, Save } from "lucide-react";
import { CampaignPreview } from "@/components/campaigns/CampaignPreview";

const CampaignGenerator = () => {
  const [campaignName, setCampaignName] = useState("");
  const [objective, setObjective] = useState("");
  const [budget, setBudget] = useState("");
  const [audience, setAudience] = useState("");
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);
  
  const handleGenerateCampaign = () => {
    if (!campaignName || !objective || !budget) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos obrigatórios para gerar a campanha.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Campanha gerada com sucesso!",
      description: "A prévia da campanha está disponível para revisão.",
    });
  };
  
  const handleSaveCampaign = () => {
    toast({
      title: "Campanha salva!",
      description: "A campanha foi salva e está pronta para ser agendada.",
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Gerador de Campanhas</h1>
        <p className="text-muted-foreground">
          Crie campanhas otimizadas para o Meta Ads com nossos robôs
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalhes da Campanha</CardTitle>
              <CardDescription>
                Configure os parâmetros básicos da sua campanha
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Nome da Campanha*</Label>
                  <Input 
                    id="campaign-name" 
                    placeholder="Ex: Black Friday 2023" 
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="objective">Objetivo*</Label>
                  <Select value={objective} onValueChange={setObjective}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um objetivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conversions">Conversões</SelectItem>
                      <SelectItem value="traffic">Tráfego</SelectItem>
                      <SelectItem value="awareness">Reconhecimento</SelectItem>
                      <SelectItem value="leads">Geração de Leads</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Orçamento Diário (R$)*</Label>
                  <Input 
                    id="budget" 
                    type="number" 
                    placeholder="Ex: 100" 
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audience">Público-Alvo</Label>
                  <Select value={audience} onValueChange={setAudience}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um público" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="broad">Amplo</SelectItem>
                      <SelectItem value="interest-marketing">Interessados em Marketing</SelectItem>
                      <SelectItem value="interest-technology">Interessados em Tecnologia</SelectItem>
                      <SelectItem value="custom">Público Personalizado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Descrição da Campanha</Label>
                <Textarea 
                  id="description" 
                  placeholder="Detalhe o objetivo e público-alvo da campanha..." 
                  rows={3}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="advanced-mode" 
                  checked={isAdvancedMode}
                  onCheckedChange={setIsAdvancedMode}
                />
                <Label htmlFor="advanced-mode">Modo Avançado</Label>
              </div>
              
              {isAdvancedMode && (
                <div className="space-y-4 border-t pt-4 mt-4">
                  <h3 className="font-medium">Configurações Avançadas</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bid-strategy">Estratégia de Lance</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma estratégia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lowest-cost">Menor Custo</SelectItem>
                          <SelectItem value="target-cost">Custo Alvo</SelectItem>
                          <SelectItem value="bid-cap">Limite de Lance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="optimization-goal">Meta de Otimização</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma meta" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conversions">Conversões</SelectItem>
                          <SelectItem value="link-clicks">Cliques no Link</SelectItem>
                          <SelectItem value="impressions">Impressões</SelectItem>
                          <SelectItem value="reach">Alcance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Salvar Rascunho
                </Button>
                <Button onClick={handleGenerateCampaign} className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4" />
                  Gerar Campanha
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Criativos</CardTitle>
              <CardDescription>
                Adicione imagens, vídeos e textos para sua campanha
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="images">
                <TabsList className="mb-4">
                  <TabsTrigger value="images">Imagens</TabsTrigger>
                  <TabsTrigger value="videos">Vídeos</TabsTrigger>
                  <TabsTrigger value="text">Textos</TabsTrigger>
                </TabsList>
                
                <TabsContent value="images" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-muted-foreground hover:border-dinastia-400 transition-colors cursor-pointer">
                      <PlusCircle className="h-8 w-8 mb-2" />
                      <span>Adicionar Imagem</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="videos" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-muted-foreground hover:border-dinastia-400 transition-colors cursor-pointer">
                      <PlusCircle className="h-8 w-8 mb-2" />
                      <span>Adicionar Vídeo</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="text" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="headline">Título Principal</Label>
                      <Input id="headline" placeholder="Digite o título principal..." />
                    </div>
                    <div>
                      <Label htmlFor="primary-text">Texto Principal</Label>
                      <Textarea id="primary-text" placeholder="Digite o texto principal do anúncio..." rows={3} />
                    </div>
                    <div>
                      <Label htmlFor="description-text">Descrição</Label>
                      <Textarea id="description-text" placeholder="Digite a descrição do anúncio..." rows={2} />
                    </div>
                    <Button variant="outline" className="w-full">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Adicionar Mais Textos
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Prévia da Campanha</CardTitle>
              <CardDescription>
                Visualize como sua campanha ficará
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CampaignPreview 
                name={campaignName}
                objective={objective}
                budget={budget ? `R$ ${budget}/dia` : ""}
              />
              
              <Button 
                className="w-full mt-4" 
                disabled={!campaignName}
                onClick={handleSaveCampaign}
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar Campanha
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CampaignGenerator;
