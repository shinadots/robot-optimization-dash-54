
import { Card, CardContent } from "@/components/ui/card";
import { CircleOff } from "lucide-react";

interface CampaignPreviewProps {
  name: string;
  objective: string;
  budget: string;
}

export function CampaignPreview({ name, objective, budget }: CampaignPreviewProps) {
  const getObjectiveName = (objective: string) => {
    switch (objective) {
      case "conversions":
        return "Conversões";
      case "traffic":
        return "Tráfego";
      case "awareness":
        return "Reconhecimento";
      case "leads":
        return "Geração de Leads";
      default:
        return "";
    }
  };

  if (!name) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
        <CircleOff className="h-12 w-12 mb-2 opacity-50" />
        <p>Preencha os detalhes da campanha para ver a prévia</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="bg-muted border-dinastia-200">
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-bold text-dinastia-700">{name}</h3>
              <div className="text-xs text-muted-foreground flex justify-between">
                <span>Status: Rascunho</span>
                <span>Meta Ads</span>
              </div>
            </div>
            
            <div className="pt-2 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Objetivo:</span>
                <span className="font-medium">{getObjectiveName(objective)}</span>
              </div>
              {budget && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Orçamento:</span>
                  <span className="font-medium">{budget}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Otimização:</span>
                <span className="font-medium">Automática</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Estimativas de Desempenho</h4>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-dinastia-50 p-2 rounded">
            <div className="text-dinastia-700 font-medium">500-1.5K</div>
            <div className="text-xs text-muted-foreground">Alcance/dia</div>
          </div>
          <div className="bg-dinastia-50 p-2 rounded">
            <div className="text-dinastia-700 font-medium">30-90</div>
            <div className="text-xs text-muted-foreground">Cliques/dia</div>
          </div>
        </div>
      </div>
    </div>
  );
}
