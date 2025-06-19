
import { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: ReactNode;
  onAdminClick: () => void;
}

export function Layout({ children, onAdminClick }: LayoutProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    // Mobile layout with sidebar
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar onAdminClick={onAdminClick} />
          <SidebarInset className="flex-1">
            <Header onAdminClick={onAdminClick} />
            <main className="flex-1">
              {children}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    );
  }

  // Desktop layout with navigation header only
  return (
    <div className="min-h-screen">
      <Header onAdminClick={onAdminClick} />
      <main>
        {children}
      </main>
    </div>
  );
}
