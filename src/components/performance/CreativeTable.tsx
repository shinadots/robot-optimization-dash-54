
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Eye, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const creatives = [
  {
    id: 1,
    name: "Vídeo Depoimento João",
    type: "video",
    campaign: "Black Friday 2023",
    ctr: 4.8,
    cpc: 13.25,
    conversionRate: 12.5,
    status: "active",
    trend: "up",
  },
  {
    id: 2,
    name: "Carrossel Resultados",
    type: "carousel",
    campaign: "Black Friday 2023",
    ctr: 3.2,
    cpc: 15.10,
    conversionRate: 8.3,
    status: "active",
    trend: "up",
  },
  {
    id: 3,
    name: "Imagem Estática Promo",
    type: "image",
    campaign: "Lead Magnet Programação",
    ctr: 2.1,
    cpc: 18.75,
    conversionRate: 5.8,
    status: "paused",
    trend: "down",
  },
  {
    id: 4,
    name: "Vídeo Tutorial Rápido",
    type: "video",
    campaign: "Lançamento Curso Excel",
    ctr: 3.9,
    cpc: 14.30,
    conversionRate: 9.6,
    status: "active",
    trend: "down",
  },
  {
    id: 5,
    name: "Imagem Destaque Curso",
    type: "image",
    campaign: "Lançamento Curso Excel",
    ctr: 3.5,
    cpc: 12.85,
    conversionRate: 7.2,
    status: "active",
    trend: "up",
  },
];

export function CreativeTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Criativo</TableHead>
            <TableHead>Campanha</TableHead>
            <TableHead className="text-right">CTR</TableHead>
            <TableHead className="text-right">CPC</TableHead>
            <TableHead className="text-right">Conv. %</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {creatives.map((creative) => (
            <TableRow key={creative.id}>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span className="font-medium">{creative.name}</span>
                  <Badge variant="outline" className="w-fit mt-1">
                    {creative.type === "video" && "Vídeo"}
                    {creative.type === "image" && "Imagem"}
                    {creative.type === "carousel" && "Carrossel"}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>{creative.campaign}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <span className="font-medium">{creative.ctr}%</span>
                  {creative.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">R$ {creative.cpc}</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col items-end">
                  <span>{creative.conversionRate}%</span>
                  <Progress 
                    value={creative.conversionRate * 8} 
                    className="h-1 w-16 mt-1"
                  />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Badge
                  variant={creative.status === "active" ? "default" : "secondary"}
                >
                  {creative.status === "active" ? "Ativo" : "Pausado"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Detalhes
                    </DropdownMenuItem>
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem>Duplicar</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Pausar</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
