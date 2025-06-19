
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-indigo-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Updated with Career Insights
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Get weekly career tips, job opportunities, and exclusive content delivered straight to your inbox.
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
                Join 10,000+ professionals already subscribed. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
