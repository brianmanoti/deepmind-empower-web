
import { Button } from "@/components/ui/button";

export const Partners = () => {
  const partners = [
    { name: "Safaricom PLC", logo: "📱", description: "Kenya's leading telecom" },
    { name: "Equity Bank", logo: "🏦", description: "Pan-African banking" },
    { name: "Kenya Airways", logo: "✈️", description: "National carrier" },
    { name: "KCB Bank", logo: "💳", description: "Regional banking leader" },
    { name: "Nation Media", logo: "📺", description: "Media & communication" },
    { name: "Twiga Foods", logo: "🥬", description: "Food distribution tech" },
    { name: "iHub Nairobi", logo: "💻", description: "Tech innovation hub" },
    { name: "Deloitte Kenya", logo: "📊", description: "Professional services" },
    { name: "KPMG Kenya", logo: "⚖️", description: "Audit & advisory" },
    { name: "Strathmore University", logo: "🎓", description: "Higher education" },
    { name: "University of Nairobi", logo: "📚", description: "Premier university" },
    { name: "Co-operative Bank", logo: "🤝", description: "Cooperative banking" }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-900 text-sm font-medium">
            🤝 Trusted Network
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Partner <span className="text-indigo-900">Organizations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with Kenya's leading organizations to provide exclusive opportunities for our community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-amber-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <div className="text-center">
                <span className="text-gray-900 font-semibold text-sm group-hover:text-indigo-900 transition-colors block">
                  {partner.name}
                </span>
                <span className="text-xs text-gray-500 mt-1 block">
                  {partner.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Our Growing Network
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with 50+ partner organizations across Kenya committed to empowering the next generation of leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600 px-8">
                Become a Partner
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white px-8">
                View Partnership Benefits
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
