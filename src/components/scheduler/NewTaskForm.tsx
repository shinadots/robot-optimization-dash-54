
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, Clock } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface NewTaskFormProps {
  onCancel: () => void;
  onSave: () => void;
}

export function NewTaskForm({ onCancel, onSave }: NewTaskFormProps) {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("08:00");
  const [scheduleType, setScheduleType] = useState<string>("once");
  
  return (
    <Card className="border-dinastia-200 bg-dinastia-50/30">
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="task-name">Nome da Tarefa*</Label>
              <Input id="task-name" placeholder="Ex: Otimizar campanhas ativas" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="task-description">Descrição da Tarefa</Label>
              <Textarea 
                id="task-description" 
                placeholder="Detalhe o que esta tarefa vai executar..."
                rows={2}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="robot-type">Robô</Label>
            <Select defaultValue="optimization">
              <SelectTrigger>
                <SelectValue placeholder="Selecione um robô" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="optimization">Robô de Otimização</SelectItem>
                <SelectItem value="campaign">Robô de Campanhas</SelectItem>
                <SelectItem value="creative">Robô de Criativos</SelectItem>
                <SelectItem value="report">Robô de Relatórios</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Tipo de Agendamento</Label>
              <RadioGroup defaultValue="once" value={scheduleType} onValueChange={setScheduleType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="once" id="once" />
                  <Label htmlFor="once">Uma vez</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily">Diário</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly">Semanal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="custom" id="custom" />
                  <Label htmlFor="custom">Personalizado (Cron)</Label>
                </div>
              </RadioGroup>
            </div>
            
            {scheduleType === "once" && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Data</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: ptBR }) : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label>Horário</Label>
                  <div className="flex">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      <Input 
                        type="time" 
                        className="border-0 p-0 focus-visible:ring-0"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {scheduleType === "daily" && (
              <div className="space-y-2">
                <Label>Horário</Label>
                <div className="flex">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    <Input 
                      type="time" 
                      className="border-0 p-0 focus-visible:ring-0"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    />
                  </Button>
                </div>
              </div>
            )}
            
            {scheduleType === "weekly" && (
              <div className="space-y-4">
                <div className="grid grid-cols-7 gap-2">
                  {["D", "S", "T", "Q", "Q", "S", "S"].map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="mb-1 text-xs">{day}</div>
                      <div className="h-8 w-8 rounded-full border flex items-center justify-center mx-auto cursor-pointer hover:bg-dinastia-100">
                        {index === 1 && (
                          <div className="h-3 w-3 rounded-full bg-dinastia-500"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <Label>Horário</Label>
                  <div className="flex">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      <Input 
                        type="time" 
                        className="border-0 p-0 focus-visible:ring-0"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {scheduleType === "custom" && (
              <div className="space-y-2">
                <Label htmlFor="cron">Expressão Cron</Label>
                <Input id="cron" placeholder="*/30 * * * *" />
                <p className="text-xs text-muted-foreground mt-1">
                  Exemplo: */30 * * * * (a cada 30 minutos)
                </p>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notify">Notificações</Label>
                <p className="text-xs text-muted-foreground">
                  Receba notificações quando a tarefa for executada
                </p>
              </div>
              <Switch id="notify" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-restart">Reinício Automático</Label>
                <p className="text-xs text-muted-foreground">
                  Reiniciar automaticamente a tarefa em caso de falha
                </p>
              </div>
              <Switch id="auto-restart" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onCancel}>Cancelar</Button>
          <Button onClick={onSave}>Salvar Tarefa</Button>
        </div>
      </CardContent>
    </Card>
  );
}
