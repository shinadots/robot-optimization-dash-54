import { ChartBar, FileSpreadsheet, Calendar, Settings, RefreshCcw, LineChart, LogOut } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
const menuItems = [{
  title: "Dashboard",
  icon: ChartBar,
  path: "/"
}, {
  title: "Gerador de Campanhas",
  icon: FileSpreadsheet,
  path: "/campaign-generator"
}, {
  title: "Performance",
  icon: LineChart,
  path: "/performance"
}, {
  title: "Programador",
  icon: Calendar,
  path: "/scheduler"
}, {
  title: "Configurações",
  icon: Settings,
  path: "/settings"
}];
export function AppSidebar() {
  return <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <RefreshCcw className="h-6 w-6 text-dinastia-600" />
          <span className="font-bold text-lg">BL</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex flex-col space-y-4">
          <SidebarMenuButton asChild>
            <Link to="/login" className="flex items-center gap-3 text-muted-foreground">
              <LogOut className="h-5 w-5" />
              <span>Sair</span>
            </Link>
          </SidebarMenuButton>
          <div className="text-xs text-muted-foreground">
            BL Company © {new Date().getFullYear()}
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>;
}