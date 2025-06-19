
export const Partners = () => {
  const partners = [
    { name: "Microsoft", logo: "🏢" },
    { name: "Google", logo: "🔍" },
    { name: "Amazon", logo: "📦" },
    { name: "Meta", logo: "👥" },
    { name: "Netflix", logo: "🎬" },
    { name: "Apple", logo: "🍎" },
    { name: "Tesla", logo: "⚡" },
    { name: "Spotify", logo: "🎵" }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted <span className="text-indigo-900">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations to provide exclusive opportunities for our community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-amber-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <span className="text-gray-700 font-medium text-center group-hover:text-indigo-900 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Join 50+ partner organizations in empowering the next generation</p>
          <button className="text-indigo-900 font-medium hover:underline">
            Become a Partner →
          </button>
        </div>
      </div>
    </section>
  );
};
