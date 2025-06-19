
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-indigo-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-amber-400/20 rounded-full text-amber-300 text-sm font-medium">
              📧 Stay Connected
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Updated with Kenyan Career Insights
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Get weekly career tips, exclusive job opportunities, and industry insights tailored for Kenyan professionals delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-indigo-200 focus:border-amber-400 h-12"
                />
                <Button className="bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-8 h-12 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-indigo-200 mt-3">
                Join 10,000+ Kenyan professionals already subscribed. Unsubscribe anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-indigo-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">Weekly</div>
                <div className="text-sm text-indigo-200">Career Tips</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">Exclusive</div>
                <div className="text-sm text-indigo-200">Job Opportunities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">Local</div>
                <div className="text-sm text-indigo-200">Industry Insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
