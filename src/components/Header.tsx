
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Job Insights", href: "#jobs" },
    { name: "Blog", href: "#blog" },
    { name: "Bookings", href: "#bookings" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 relative">
                {/* Neural network pattern */}
                <div className="absolute inset-0">
                  <div className="w-2 h-2 bg-amber-400 rounded-full absolute top-0 left-0"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full absolute top-0 right-0"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full absolute bottom-0 left-1"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full absolute bottom-0 right-1"></div>
                  <div className="w-1 h-1 bg-white rounded-full absolute top-2 left-2"></div>
                  <div className="w-1 h-1 bg-white rounded-full absolute top-2 right-2"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-indigo-900">Deepmind Concepts</h1>
              <p className="text-xs text-gray-600 -mt-1">Clarity. Strategy. Empowerment.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-indigo-900 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Book a Session
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-indigo-900 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white mt-4 w-full">
                Book a Session
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
