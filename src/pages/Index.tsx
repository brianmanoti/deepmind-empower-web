
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { JobInsights } from "@/components/JobInsights";
import { Partners } from "@/components/Partners";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { AdminPanel } from "@/components/admin/AdminPanel";

const Index = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <Layout onAdminClick={() => setShowAdmin(true)}>
      <div className="min-h-screen">
        {showAdmin && (
          <AdminPanel onClose={() => setShowAdmin(false)} />
        )}
        
        <Hero />
        
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Deepmind Concepts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to empowering Kenyan youth through comprehensive career coaching,
              skill development, and job placement services. Our mission is to bridge the gap
              between education and employment, creating pathways to success for the next generation.
            </p>
          </div>
        </section>
        
        <Services />
        <JobInsights />
        <Partners />
        <Newsletter />
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
