
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

const insights = [
  {
    id: 1,
    type: "improvement",
    title: "CTR acima da média",
    message: "O vídeo 'Depoimento João' tem CTR 45% maior que a média. Considere aumentar o orçamento.",
  },
  {
    id: 2,
    type: "warning",
    title: "Alto custo por conversão",
    message: "A campanha 'Lead Magnet Programação' tem CPA acima do esperado. Sugerimos ajustar o público-alvo.",
  },
  {
    id: 3,
    type: "improvement",
    title: "Formato eficiente",
    message: "Criativos em formato carrossel têm melhor desempenho para o público-alvo atual.",
  },
  {
    id: 4,
    type: "warning",
    title: "Queda de performance",
    message: "A imagem 'Promo Estática' teve queda de 28% no CTR nos últimos 3 dias.",
  },
];

export function CreativeInsights() {
  return (
    <div className="space-y-4">
      {insights.map((insight) => (
        <div 
          key={insight.id} 
          className={`p-3 rounded-lg flex items-start gap-3 ${
            insight.type === "improvement" 
              ? "bg-green-50 border border-green-100" 
              : "bg-amber-50 border border-amber-100"
          }`}
        >
          {insight.type === "improvement" ? (
            <TrendingUp className={`w-5 h-5 mt-0.5 text-green-600 flex-shrink-0`} />
          ) : (
            <AlertCircle className={`w-5 h-5 mt-0.5 text-amber-600 flex-shrink-0`} />
          )}
          
          <div>
            <h4 className={`text-sm font-medium ${
              insight.type === "improvement" ? "text-green-800" : "text-amber-800"
            }`}>
              {insight.title}
            </h4>
            <p className="text-xs mt-1 text-muted-foreground">{insight.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
