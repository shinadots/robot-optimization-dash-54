
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const robots = [
  {
    id: 1,
    name: "Robô de Escala",
    status: "online",
    lastSync: "Há 5 minutos",
    health: 98,
  },
  {
    id: 2,
    name: "Robô de Otimização",
    status: "online",
    lastSync: "Há 12 minutos",
    health: 85,
  },
  {
    id: 3,
    name: "Robô de Criativos",
    status: "offline",
    lastSync: "Há 3 horas",
    health: 20,
  },
  {
    id: 4,
    name: "Robô de Relatórios",
    status: "online",
    lastSync: "Há 30 minutos",
    health: 92,
  },
];

export function RobotStatus() {
  return (
    <div className="space-y-4">
      {robots.map((robot) => (
        <div key={robot.id} className="flex flex-col gap-2 pb-4 border-b border-border last:border-0">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">{robot.name}</h3>
            <Badge variant={robot.status === "online" ? "default" : "destructive"}>
              {robot.status === "online" ? "Online" : "Offline"}
            </Badge>
          </div>
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Saúde: {robot.health}%</span>
            <span>{robot.lastSync}</span>
          </div>
          <Progress 
            value={robot.health} 
            className={`h-2 ${
              robot.health > 80 
                ? "bg-muted" 
                : robot.health > 50 
                  ? "bg-orange-100" 
                  : "bg-red-100"
            }`} 
          />
        </div>
      ))}
    </div>
  );
}
