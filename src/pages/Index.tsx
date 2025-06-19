
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { JobInsights } from "@/components/JobInsights";
import { Partners } from "@/components/Partners";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { AdminPanel } from "@/components/admin/AdminPanel";

const Index = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  // Simple admin access check (in production, this would be properly authenticated)
  const handleAdminAccess = () => {
    const password = prompt("Enter admin password:");
    if (password === "admin123") {
      setShowAdmin(true);
    } else {
      alert("Invalid password");
    }
  };

  if (showAdmin) {
    return <AdminPanel onClose={() => setShowAdmin(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminClick={handleAdminAccess} />
      <Hero />
      <Services />
      <JobInsights />
      <Partners />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
