
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Briefcase,
  Users,
  FileText,
  MessageCircle,
  Settings,
  BookOpen,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/#about", icon: Info },
  { title: "Services", url: "/#services", icon: Briefcase },
  { title: "Job Opportunities", url: "/#jobs", icon: Users },
  { title: "Blog", url: "/blog", icon: FileText },
  { title: "Partners", url: "/#partners", icon: BookOpen },
  { title: "Contact", url: "/#contact", icon: MessageCircle },
];

interface AppSidebarProps {
  onAdminClick: () => void;
}

export function AppSidebar({ onAdminClick }: AppSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (url: string) => {
    if (url === "/") return currentPath === "/";
    if (url.startsWith("/#")) return currentPath === "/" && window.location.hash === url.substring(1);
    return currentPath === url;
  };

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center space-x-2 px-2 py-4">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 border-2 border-amber-400 rounded-full relative">
              <div className="absolute inset-1 bg-amber-400 rounded-full"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1 h-2 bg-amber-400 rounded-full"></div>
            </div>
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <h1 className="text-lg font-bold text-sidebar-foreground truncate">Deepmind Concepts</h1>
              <p className="text-xs text-sidebar-foreground/70 truncate">Empowering Kenyan Youth</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={collapsed ? item.title : undefined}
                  >
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="p-2 space-y-2">
          <Button
            onClick={onAdminClick}
            variant="outline"
            size="sm"
            className={`${collapsed ? 'w-10 h-10 p-0' : 'w-full justify-start'}`}
          >
            <Settings className={`h-4 w-4 ${collapsed ? '' : 'mr-2'}`} />
            {!collapsed && 'Admin'}
          </Button>
          <Button 
            className={`bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600 text-white ${collapsed ? 'w-10 h-10 p-0' : 'w-full'}`}
          >
            {collapsed ? (
              <BookOpen className="h-4 w-4" />
            ) : (
              'Book Session'
            )}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
