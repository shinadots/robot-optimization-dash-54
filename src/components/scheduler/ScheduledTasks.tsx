
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarClock, MoreVertical, Repeat, CheckCircle2, PauseCircle } from "lucide-react";

const tasks = [
  {
    id: 1,
    name: "Otimizar campanhas ativas",
    description: "Ajustar lances e orçamentos com base no desempenho",
    schedule: "Diário às 08:00",
    lastRun: "Hoje, 08:00",
    nextRun: "Amanhã, 08:00",
    status: "active",
    robot: "Robô de Otimização",
  },
  {
    id: 2,
    name: "Gerar relatório diário",
    description: "Criar e enviar relatório de performance por email",
    schedule: "Seg-Sex às 18:00",
    lastRun: "Hoje, 18:00",
    nextRun: "Amanhã, 18:00",
    status: "active",
    robot: "Robô de Relatórios",
  },
  {
    id: 3,
    name: "Criar campanhas para produtos em destaque",
    description: "Criar campanhas automáticas para produtos marcados como destaque",
    schedule: "Segunda às 10:00",
    lastRun: "Segunda, 10:00",
    nextRun: "Segunda, 10:00",
    status: "paused",
    robot: "Robô de Campanhas",
  },
  {
    id: 4,
    name: "Pausar campanhas de baixo desempenho",
    description: "Identificar e pausar campanhas com ROAS abaixo de 2.0 por 3 dias",
    schedule: "Diário às 20:00",
    lastRun: "Hoje, 20:00",
    nextRun: "Amanhã, 20:00",
    status: "active",
    robot: "Robô de Otimização",
  },
];

export function ScheduledTasks() {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div 
          key={task.id} 
          className={`border rounded-lg p-4 ${
            task.status === "paused" ? "bg-muted/30" : "bg-card"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{task.name}</h3>
                <Badge variant={task.status === "active" ? "default" : "outline"}>
                  {task.status === "active" ? "Ativo" : "Pausado"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{task.description}</p>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Repeat className="mr-2 h-4 w-4" />
                  Executar Agora
                </DropdownMenuItem>
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Duplicar</DropdownMenuItem>
                {task.status === "active" ? (
                  <DropdownMenuItem>
                    <PauseCircle className="mr-2 h-4 w-4" />
                    Pausar
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Ativar
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <CalendarClock className="h-4 w-4" />
              <span>{task.schedule}</span>
            </div>
            <div className="text-muted-foreground">
              Última execução: {task.lastRun}
            </div>
            <div className="text-muted-foreground">
              Próxima execução: {task.nextRun}
            </div>
          </div>
          
          <div className="mt-2 text-xs text-muted-foreground">
            Executado por: {task.robot}
          </div>
        </div>
      ))}
    </div>
  );
}
