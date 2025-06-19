
import { Button } from "@/components/ui/button";
import { Settings, BookOpen, Home, Info, Briefcase, Users, FileText, MessageCircle } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/#about", icon: Info },
  { title: "Services", url: "/#services", icon: Briefcase },
  { title: "Jobs", url: "/#jobs", icon: Users },
  { title: "Blog", url: "/blog", icon: FileText },
  { title: "Partners", url: "/#partners", icon: BookOpen },
  { title: "Contact", url: "/#contact", icon: MessageCircle },
];

interface HeaderProps {
  onAdminClick: () => void;
}

export const Header = ({ onAdminClick }: HeaderProps) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (url: string) => {
    if (url === "/") return currentPath === "/";
    if (url.startsWith("/#")) return currentPath === "/" && window.location.hash === url.substring(1);
    return currentPath === url;
  };

  if (isMobile) {
    // Mobile header with sidebar trigger
    return (
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="h-8 w-8" />
            
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

          <div className="flex items-center space-x-3">
            <Button className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600 text-white">
              <span className="hidden sm:inline">Book Session</span>
              <span className="sm:hidden">Book</span>
            </Button>
          </div>
        </div>
      </header>
    );
  }

  // Desktop header with professional navigation
  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-indigo-900 via-purple-600 to-amber-400"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and brand */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                <div className="w-7 h-7 border-2 border-amber-400 rounded-full relative">
                  <div className="absolute inset-1 bg-amber-400 rounded-full"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1 h-2 bg-amber-400 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-900 to-purple-700 bg-clip-text text-transparent">
                Deepmind Concepts
              </h1>
              <p className="text-sm text-gray-600 font-medium">Empowering Kenyan Youth</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={`group relative flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive(item.url)
                    ? 'bg-gradient-to-r from-indigo-100 to-purple-50 text-indigo-700 shadow-md'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-indigo-50 hover:text-indigo-600'
                }`}
              >
                <item.icon className={`w-4 h-4 transition-colors duration-300 ${
                  isActive(item.url) ? 'text-indigo-600' : 'text-gray-500 group-hover:text-indigo-500'
                }`} />
                <span className="font-medium text-sm">{item.title}</span>
                {isActive(item.url) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onAdminClick}
              variant="outline"
              size="sm"
              className="border-2 border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200 hidden md:flex group"
            >
              <Settings className="h-4 w-4 mr-2 text-gray-600 group-hover:text-indigo-600 transition-colors" />
              <span className="font-medium">Admin</span>
            </Button>
            
            <Button className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-700 hover:from-indigo-800 hover:via-purple-700 hover:to-indigo-900 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-12 transition-all duration-700"></div>
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="font-semibold">Book Session</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </header>
  );
};
