
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";

const campaigns = [
  {
    id: 1,
    name: "Black Friday 2023",
    status: "active",
    performance: "up",
    lastUpdated: "Hoje, 14:30",
    spend: "R$ 450,22",
  },
  {
    id: 2,
    name: "Lançamento Curso Excel",
    status: "active",
    performance: "up",
    lastUpdated: "Hoje, 12:15",
    spend: "R$ 850,00",
  },
  {
    id: 3,
    name: "Lead Magnet Programação",
    status: "paused",
    performance: "down",
    lastUpdated: "Ontem, 18:20",
    spend: "R$ 320,50",
  },
  {
    id: 4,
    name: "Remarketing Alunos",
    status: "active",
    performance: "neutral",
    lastUpdated: "Hoje, 09:45",
    spend: "R$ 150,30",
  },
];

export function RecentCampaigns() {
  return (
    <div className="space-y-4">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-medium">{campaign.name}</span>
              <Badge variant={campaign.status === "active" ? "default" : "outline"}>
                {campaign.status === "active" ? "Ativo" : "Pausado"}
              </Badge>
            </div>
            <span className="text-xs text-muted-foreground">{campaign.lastUpdated}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <span className="font-medium">{campaign.spend}</span>
              <div className="flex items-center justify-end">
                {campaign.performance === "up" && (
                  <ArrowUp className="h-3 w-3 text-green-600 mr-1" />
                )}
                {campaign.performance === "down" && (
                  <ArrowDown className="h-3 w-3 text-red-600 mr-1" />
                )}
                <span className={`text-xs ${
                  campaign.performance === "up" 
                    ? "text-green-600" 
                    : campaign.performance === "down" 
                      ? "text-red-600" 
                      : "text-muted-foreground"
                }`}>
                  {campaign.performance === "up" 
                    ? "Crescendo" 
                    : campaign.performance === "down" 
                      ? "Caindo"
                      : "Estável"}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
