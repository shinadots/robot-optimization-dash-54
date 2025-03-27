
import { Progress } from "@/components/ui/progress";

const creativesData = [
  {
    id: 1,
    name: "Vídeo Depoimento João",
    ctr: 4.8,
    conversionRate: 12.5,
    performance: 92,
  },
  {
    id: 2,
    name: "Carrossel Resultados",
    ctr: 3.2,
    conversionRate: 8.3,
    performance: 78,
  },
  {
    id: 3,
    name: "Imagem Estática Promo",
    ctr: 2.1,
    conversionRate: 5.8,
    performance: 65,
  },
  {
    id: 4,
    name: "Vídeo Tutorial Rápido",
    ctr: 3.9,
    conversionRate: 9.6,
    performance: 84,
  },
];

export function CampaignPerformance() {
  return (
    <div className="space-y-4">
      {creativesData.map((creative) => (
        <div key={creative.id} className="space-y-2 pb-3 border-b border-border last:border-0">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">{creative.name}</h4>
            <span className="text-sm font-bold">{creative.performance}%</span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>CTR: {creative.ctr}%</span>
            <span>Taxa Conv: {creative.conversionRate}%</span>
          </div>
          <Progress 
            value={creative.performance} 
            className="h-2"
          />
        </div>
      ))}
    </div>
  );
}
