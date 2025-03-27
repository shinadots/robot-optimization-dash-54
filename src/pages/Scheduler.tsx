
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, Calendar as CalendarIcon, Plus, Clock } from "lucide-react";
import { useState } from "react";
import { ScheduledTasks } from "@/components/scheduler/ScheduledTasks";
import { NewTaskForm } from "@/components/scheduler/NewTaskForm";

const Scheduler = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  
  const handleAddTask = () => {
    setShowNewTaskForm(true);
  };
  
  const handleCancelTask = () => {
    setShowNewTaskForm(false);
  };
  
  const handleSaveTask = () => {
    toast({
      title: "Tarefa agendada",
      description: "Sua tarefa foi agendada com sucesso.",
    });
    setShowNewTaskForm(false);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Programador de Campanhas</h1>
        <p className="text-muted-foreground">
          Agende tarefas e automatize suas campanhas com crons
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Tarefas Agendadas</CardTitle>
                <CardDescription>
                  Gerencie as tarefas programadas para seus robôs
                </CardDescription>
              </div>
              <Button onClick={handleAddTask} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Nova Tarefa
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="active">
                <TabsList className="mb-4">
                  <TabsTrigger value="active">Ativas</TabsTrigger>
                  <TabsTrigger value="completed">Concluídas</TabsTrigger>
                  <TabsTrigger value="all">Todas</TabsTrigger>
                </TabsList>
                
                {showNewTaskForm ? (
                  <NewTaskForm onCancel={handleCancelTask} onSave={handleSaveTask} />
                ) : (
                  <ScheduledTasks />
                )}
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Log de Execução</CardTitle>
              <CardDescription>
                Histórico de execução das tarefas agendadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                <div className="flex items-start gap-3 pb-3 border-b">
                  <div className="bg-dinastia-100 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-4 w-4 text-dinastia-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Otimização da Campanha Black Friday</h4>
                      <span className="text-xs text-muted-foreground">Hoje, 14:30</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      O robô ajustou os lances para otimizar o CPA. Reduziu o lance em 15% para o público de 25-34 anos.
                    </p>
                    <Badge variant="outline" className="bg-green-50">Sucesso</Badge>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 pb-3 border-b">
                  <div className="bg-dinastia-100 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-4 w-4 text-dinastia-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Relatório Diário Gerado</h4>
                      <span className="text-xs text-muted-foreground">Hoje, 08:00</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Relatório diário de performance gerado e enviado por e-mail.
                    </p>
                    <Badge variant="outline" className="bg-green-50">Sucesso</Badge>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 pb-3 border-b">
                  <div className="bg-dinastia-100 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-4 w-4 text-dinastia-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Criação de Novas Audiências</h4>
                      <span className="text-xs text-muted-foreground">Ontem, 18:15</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Falha ao criar novas audiências. API da Meta retornou erro 403.
                    </p>
                    <Badge variant="outline" className="bg-red-50 text-red-800">Falha</Badge>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Ver Histórico Completo
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Calendário</CardTitle>
              <CardDescription>
                Visualize as tarefas programadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border rounded-md p-3"
              />
              
              <div className="mt-4 space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <CalendarClock className="h-4 w-4" />
                  Tarefas para {date?.toLocaleDateString('pt-BR')}
                </h4>
                
                {date && (
                  <div className="space-y-2">
                    <div className="p-2 border rounded-md bg-muted/50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Otimizar campanhas ativas</span>
                        <Badge variant="outline">08:00</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Executar otimização automática</p>
                    </div>
                    
                    <div className="p-2 border rounded-md bg-muted/50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Gerar relatório</span>
                        <Badge variant="outline">18:00</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Enviar relatório diário por email</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Scheduler;
