
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface HeaderProps {
  onAdminClick: () => void;
}

export const Header = ({ onAdminClick }: HeaderProps) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left side - Sidebar trigger and logo */}
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="h-8 w-8" />
          
          {/* Mobile/Desktop Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-amber-400 rounded-full relative">
                <div className="absolute inset-0.5 bg-amber-400 rounded-full"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0.5 w-0.5 h-1.5 bg-amber-400 rounded-full"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-indigo-900">Deepmind Concepts</h1>
            </div>
          </div>
        </div>

        {/* Right side - Action buttons */}
        <div className="flex items-center space-x-3">
          <Button
            onClick={onAdminClick}
            variant="outline"
            size="sm"
            className="border-gray-300 hidden sm:flex"
          >
            <Settings className="h-4 w-4 mr-2" />
            Admin
          </Button>
          <Button className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600 text-white">
            <span className="hidden sm:inline">Book Session</span>
            <span className="sm:hidden">Book</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
