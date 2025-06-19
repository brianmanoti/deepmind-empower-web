
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Settings } from "lucide-react";

interface HeaderProps {
  onAdminClick: () => void;
}

export const Header = ({ onAdminClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-amber-400 rounded-full relative">
                  <div className="absolute inset-1 bg-amber-400 rounded-full"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1 h-2 bg-amber-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-indigo-900">Deepmind Concepts</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Empowering Kenyan Youth</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-900 font-medium transition-colors">
              Home
            </a>
            <a href="/#about" className="text-gray-700 hover:text-indigo-900 font-medium transition-colors">
              About
            </a>
            <a href="/#services" className="text-gray-700 hover:text-indigo-900 font-medium transition-colors">
              Services
            </a>
            <a href="/#jobs" className="text-gray-700 hover:text-indigo-900 font-medium transition-colors">
              Job Opportunities
            </a>
            <a href="/blog" className="text-gray-700 hover:text-indigo-900 font-medium transition-colors">
              Blog
            </a>
            <a href="/#partners" className="text-gray-700 hover:text-indigo-900 font-medium transition-colors">
              Partners
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-indigo-900 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={onAdminClick}
              variant="outline"
              size="sm"
              className="border-gray-300"
            >
              <Settings className="h-4 w-4 mr-2" />
              Admin
            </Button>
            <Button className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600 text-white">
              Book Session
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-900">
                Home
              </a>
              <a href="/#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-900">
                About
              </a>
              <a href="/#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-900">
                Services
              </a>
              <a href="/#jobs" className="block px-3 py-2 text-gray-700 hover:text-indigo-900">
                Job Opportunities
              </a>
              <a href="/blog" className="block px-3 py-2 text-gray-700 hover:text-indigo-900">
                Blog
              </a>
              <a href="/#partners" className="block px-3 py-2 text-gray-700 hover:text-indigo-900">
                Partners
              </a>
              <a href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-900">
                Contact
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button
                  onClick={onAdminClick}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Admin
                </Button>
                <Button className="w-full bg-gradient-to-r from-indigo-900 to-indigo-700">
                  Book Session
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
