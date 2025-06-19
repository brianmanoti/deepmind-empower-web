
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center min-h-[600px] py-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-amber-400/20 rounded-full text-amber-300 text-sm font-medium">
                🇰🇪 Empowering Kenyan Youth Since 2020
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Youth.
                <br />
                <span className="text-amber-400">Shaping Futures.</span>
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl">
                Career coaching, job insights, and purpose-driven growth for Kenya's next generation of leaders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-8 py-4 text-lg">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-indigo-700">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-amber-400">2,500+</div>
                <div className="text-sm text-indigo-200">Youth Empowered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-amber-400">87%</div>
                <div className="text-sm text-indigo-200">Job Placement Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-amber-400">50+</div>
                <div className="text-sm text-indigo-200">Partner Companies</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 mt-12 lg:mt-0 lg:ml-12">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop"
                  alt="Kenyan youth in training session"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Job Secured!</div>
                    <div className="text-xs text-gray-600">Sarah M. - Software Dev</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-amber-900 text-sm font-bold">🎯</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Goal Achieved</div>
                    <div className="text-xs text-gray-600">James K. - Marketing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
